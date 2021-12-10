import { HandlerParams, Lines, PLAYING_STATE } from '../types'
import { transformRegTime } from './utils'

const lineTimeReg: RegExp = /\[(\d{2}):(\d{2}).(\d{2,3})]/g

export default class Lyric {
  lines: Lines[]
  lrc: string
  state: any
  curLine: number
  toggleTime: number
  private timer: any
  readonly handler: any

  constructor(lrc: string, handler: (params: HandlerParams) => void) {
    this.lrc = lrc
    this.lines = []
    this.state = PLAYING_STATE.stop
    this.curLine = 0
    this.timer = null
    this.toggleTime = Date.now()
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

  private _playReset(offset: number, targetLine: number): void {
    this.curLine = targetLine
    let delay: number = this._calculateDelay()

    this.timer = setTimeout(() => {
      this._callHandler()
      this.curLine++
      if (this.curLine < this.lines.length) {
        this._playReset(offset, this.curLine)
      } else {
        stop()
        return
      }
    }, delay)
  }

  play(startTime?: number, targetIndex?: number): void {
    if (this.state === PLAYING_STATE.playing) {
      return
    }
    if (!this.lines.length) {
      return
    }
    if (!startTime) {
      startTime = 0
    }

    if (!targetIndex) {
      targetIndex = this.curLine
    }

    startTime += this.toggleTime

    this.state = PLAYING_STATE.playing
    this._fixLinesTime()
    this._playReset(startTime, targetIndex)
  }

  seek(offset: number): void {
    this.stop()
    let targetIndex = 0
    offset += this.toggleTime
    this.lines.forEach((line, index) => {
      if (offset >= this._findLine(index - 1).lineTime && offset <= line.lineTime) {
        targetIndex = index
      }
    })
    offset = this._findLine(targetIndex).lineTime - offset
    this.play(offset, targetIndex)
  }

  stop(): void {
    if (this.state === PLAYING_STATE.stop) {
      return
    }
    clearTimeout(this.timer)
    this.state = PLAYING_STATE.stop
    this._fixLinesTime()
  }

  togglePlay(): void {
    if (this.state === PLAYING_STATE.playing) {
      this.stop()
    } else {
      this.play(this.lines[this.curLine].lineTime)
    }

    this.state = !this.state
  }

  private _callHandler(): void {
    let curLine = this.curLine
    if (curLine < 0) {
      return
    }

    if (curLine >= this.lines.length) {
      stop()
      return
    }

    this.handler({
      curLineNum: curLine,
      txt: this._findCur().txt.trim(),
    })
  }

  private _calculateDelay(): number {
    let delay = this._findCur().lineTime - this.toggleTime
    if (this.curLine >= 1) {
      delay = this._findCur().lineTime - this._findLine(this.curLine - 1).lineTime
    }
    return delay
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

  private _fixLinesTime(): void {
    let deltaTime = Date.now() - this.toggleTime

    this.toggleTime = Date.now()

    this.lines.forEach((line) => {
      return (line.lineTime += deltaTime)
    })
  }
}
