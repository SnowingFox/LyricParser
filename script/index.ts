import Lyric from './core'

export default Lyric

export interface ILyric {
  /*
   * The string lyric will be transform into a Lines[]
   *
   * @default
   */
  lines: Lines[]
  lrc: string
  curLine: number
  state: PLAYING_STATE.stop
  toggleTime: number

  play(): void
  stop(): void
  togglePlay(): void
  seek(curTime: number): void
}

export interface Lines {
  lineTime: number
  txt: string
}

export interface HandlerParams {
  curLineNum: number
  txt: string
}
export const enum PLAYING_STATE {
  stop = 0,
  playing = 1,
}
export type LyricConstructor = (
  lrc: string,
  handler: (params: HandlerParams) => void
) => any
