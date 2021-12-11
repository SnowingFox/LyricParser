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
export type LyricConstructor = (lrc: string, handler: (params: HandlerParams) => void) => any
