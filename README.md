# LyricParser

## Description
A JavaScript plugin for parser Lyric


## 📦 Install

```bash
npm install lyric-resolver
```

## 🔋 Features

- ⚡ **Easy to use**: Just `play()` `togglePlay()` `stop()` `seek()`
- 🦾 **Type Strong**: Written in [Typescript](https://www.typescriptlang.org/), with [TS Docs](https://github.com/microsoft/tsdoc)

## 🎄 Example
- 🌎 [**Online Project**](https://music-sepia.vercel.app/)
- ✨ [****Online Project On Github****](https://github.com/SnowingFox/music)

## 🦄 Usage


```ts
import Lyric, { HandlerParams } from 'lyric-resolver'

import { getLyric } from '../api/lyric.js'

export async function useLyric(): any {
    const lrc = await getLyric()
    const currentLyric = new Lyric(lrc, handleLyric)

    /*
    * @params curLineNum [number] Current line of lyric
    * @params txt [string] Current line's txt
    * 
    * @return void
    * */
    function handleLyric(payload: HandlerParams): void {
        const { curLineNum, txt } = payload
        // You can also get curLineNum like this
        // 你也可以向下面这样操作得到curLineNum
        const curLine: number = currentLyric.curLine
    }

    function play(): void {
        // Start playing
      currentLyric.play()
    }
    function stop(): void {
        // Stop playing
      currentLyric.stop()
    }
    function togglePlay(): void {
        // Auto set play state
      currentLyric.togglePlay()
    }
    function seek(time): void {
        // Reset start time
      currentLyric.seek(time)
    }
}
```
