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

## 🌎 Example
https://www.snowingfox.io/lyricparser

## 🦄 Usage

```js
import Lyric from 'lyric-resolver'
import { getLyric } from '../api/lyric.js'

export async function useLyric() {
    const lrc = await getLyric()
    const lyric = new Lyric(lrc, handleLyric)

    /*
    * @params curLineNum [number] Current line of lyric
    * @params txt [string] Current line's txt
    * 
    * @return void
    * */
    function handleLyric({ curLineNum, txt }) {
        console.log(curLineNum, txt)
    }

    function play() {
        // Start playing
        lyric.play()
    }
    function stop() {
        // Stop playing
        lyric.stop()
    }
    function togglePlay() {
        // Auto set play state
        lyric.togglePlay()
    }
    function seek(time) {
        // Reset start time
        lyric.seek(time)
    }
}
```
