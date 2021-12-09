export interface ILyric {
  /*
   * The string lyric will be transform into a Lines[]
   *
   * @default
   */
  lines: Lines[]
  lrc: string

  constructor(lrc: string, handler: (params: { lineNum: number; txt: string }) => void): void
  _init(): void
  _initLines(): void
  _playReset(): void
  play(): void
  stop(): void
  togglePlay(): void
  seek(curTime: number): void
}

export interface Lines {
  lineTime: number
  txt: string
}
