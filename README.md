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

## 🎁 Example
- 💡 Example: https://www.snowingfox.io/lyricparser
- 🌎 Online Project: https://www.snowingfox.io/music
## 🦄 Usage

```ts
import Lyric, { HandlerParams } from 'lyric-resolver'
import { getLyric } from '../api/lyric.js'

export async function useLyric(): any {
    const lrc = await getLyric()
    const lyric = new Lyric(lrc, handleLyric)

    /*
    * @params curLineNum [number] Current line of lyric
    * @params txt [string] Current line's txt
    * 
    * @return void
    * */
    function handleLyric(payload: HandlerParams): void {
        const { curLineNum, txt } = payload
    }

    function play(): void {
        // Start playing
        lyric.play()
    }
    function stop(): void {
        // Stop playing
        lyric.stop()
    }
    function togglePlay(): void {
        // Auto set play state
        lyric.togglePlay()
    }
    function seek(time): void {
        // Reset start time
        lyric.seek(time)
    }
}
```
