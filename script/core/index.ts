import { HandlerParams, Lines, PLAYING_STATE } from '../types/index'
import { transformRegTime } from './utils'

const lineTimeReg: RegExp = /\[(\d{2}):(\d{2}).(\d{2,3})]/g

export default class Lyric {
  lines: Lines[]
  lrc: string
  state: any
  curLine: number
  startTime: number
  stopTime: number
  offset: number
  timer: any
  handler: any

  constructor(lrc: string, handler: (params: HandlerParams) => void) {
    this.lrc = lrc
    this.lines = []
    this.state = PLAYING_STATE.stop
    this.curLine = 0
    this.timer = null
    this.startTime = 0
    this.stopTime = 0
    this.offset = 0
    this.handler = handler
    this._init()
  }

  private _init(): void {
    this._initLines()
  }

  private _initLines(): void {
    this.lrc.split('\n').forEach((lrc) => {
      let time = lineTimeReg.exec(lrc)

      if (!time) {
        return
      }

      this.lines.push({
        lineTime: transformRegTime(time),
        txt: lrc.replace(lineTimeReg, ''),
      })
    })

    this.lines.sort((a, b) => {
      return a.lineTime - b.lineTime
    })
  }

  private _playReset(): void {
    let { delay, targetIndex } = this._calculateDelay()
    //Avoiding the whitespace lyric line, so it's not targetIndex - 1
    this.curLine = targetIndex
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this._callHandler(this.curLine++)
      if (this.curLine < this.lines.length && this.state === PLAYING_STATE.playing) {
        this._playReset()
      }
    }, delay)
  }

  play(): void {
    this.state = PLAYING_STATE.playing
    this.startTime = Date.now()
    if (this.curLine < this.lines.length) {
      clearTimeout(this.timer)
      this._playReset()
    }
  }

  seek(offset: number): void {
    this.offset = offset
    this.play()
  }

  stop(): void {
    this.state = PLAYING_STATE.stop
    this.stopTime = Date.now()
    this.offset = this.offset + this.stopTime - this.startTime
    clearTimeout(this.timer)
  }

  togglePlay(): void {
    if (this.state === PLAYING_STATE.playing) {
      this.stop()
    } else {
      this.play()
    }
  }

  restore(): void {
    this.lrc = ''
    this.lines = [] as Lines[]
    this.state = PLAYING_STATE.stop
    this.curLine = 0
    this.timer = null
    this.startTime = 0
    this.stopTime = 0
    this.offset = 0
    this.handler = null
  }

  private _calculateDelay(): any {
    let delay: number = this._findLine(this.curLine).lineTime - this.offset
    let targetIndex: number = this.curLine

    let isFind: boolean = false
    if (delay < 0) {
      this.lines.forEach((line, index) => {
        delay = this._findLine(index).lineTime - this.offset
        if (delay >= 0 && !isFind) {
          targetIndex = index
          isFind = true
          return
        }
      })
    } else {
      this.lines.forEach((line, index) => {
        if (this.offset >= this._findLine(index - 1).lineTime && this.offset < line.lineTime) {
          targetIndex = index
          delay = this._findLine(targetIndex).lineTime - this.offset
        }
      })
    }
    return {
      delay,
      targetIndex,
    }
  }

  private _callHandler(index: number): void {
    if (index < 0) {
      return
    }

    let curLine = index

    this.handler({
      curLineNum: curLine,
      txt: this._findCur()?.txt.trim() || '',
    })
  }

  private _findCur(): Lines {
    return this.lines[this.curLine]
  }

  private _findLine(i: number): Lines {
    const lines = this.lines
    if (i < 0) {
      return lines[0]
    }
    if (i >= lines.length) {
      return lines[lines.length - 1]
    }
    return lines[i]
  }
}
