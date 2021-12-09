import { ILyric, Lines } from '../types'

const enum PLAYING_STATE {
  Stop = 0,
  Playing = 1,
}

const lineTimeReg: RegExp = /\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g

export default class Lyric implements ILyric {
  lines: Lines[]
  lrc: string

  constructor(lyric: string, fn: { curLineNum: number; txt: string }) {
    this.lrc = lyric
    this._init()
  }

  _init(): void {
    this._initLines()
  }

  _initLines(): void {
    this.lrc.split('\n').forEach((line) => {
      let time = lineTimeReg.exec(line)
      if (!time) {
        return
      }
      line.replace(lineTimeReg, '')
    })
  }

  _playReset(): void {}

  play(): void {}

  seek(curTime: number): void {}

  stop(): void {}

  togglePlay(): void {}
}
