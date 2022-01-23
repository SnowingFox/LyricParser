<template>
  <button @click="togglePlay">toggle-play</button>
  <button @click="play">play</button>
  <button @click="stop">stop</button>
  <div class="seek">
    <input type="text" placeholder="Please input the seconds" v-model="seekTime" />
    <button @click="seek">seek</button>
  </div>
  <div
    v-for="(line, index) in lyric.lines"
    class="lyric"
    :class="{ active: lyric.curLine - 1 === index }"
  >
    <p class="seconds">{{ line.lineTime / 1000 }}s -- {{ line.txt }}</p>
  </div>
</template>

<script setup lang="ts">
import Lyric, { HandlerParams } from '../script/index'

import { ref } from 'vue'

const lyric = ref<any>(
  new Lyric(
    `
[00:00.000] 作词 : 野田洋次郎
[00:01.000] 作曲 : 野田洋次郎
[00:19.600]
[00:20.000]やっと眼を覚ましたかい それなのになぜ眼も合わせやしないんだい？
[00:30.090]「遅いよ」と怒る君 これでもやれるだけ飛ばしてきたんだよ
[00:38.720]
[00:39.670]心が身体を追い越してきたんだよ
[00:44.340]
[00:45.340]君の髪や瞳だけで胸が痛いよ
[00:50.560]同じ時を吸いこんで離したくないよ
[00:55.200]遥か昔から知る その声に
[01:00.260]生まれてはじめて 何を言えばいい？
[01:07.240]
[01:07.640]君の前前前世から僕は 君を探しはじめたよ
[01:12.280]そのぶきっちょな笑い方をめがけて やってきたんだよ
[01:17.260]
[01:17.630]君が全然全部なくなって チリヂリになったって
[01:22.430]もう迷わない また１から探しはじめるさ
[01:27.240]むしろ０から また宇宙をはじめてみようか
[01:32.670]
[01:43.440]どっから話すかな 君が眠っていた間のストーリー
[01:53.480]何億 何光年分の物語を語りにきたんだよ けどいざその姿この眼に映すと
[02:07.720]
[02:08.720]君も知らぬ君とジャレて 戯れたいよ
[02:13.530]君の消えぬ痛みまで愛してみたいよ
[02:18.480]銀河何個分かの 果てに出逢えた
[02:23.530]その手を壊さずに どう握ったならいい？
[02:30.500]
[02:31.000]君の前前前世から僕は 君を探しはじめたよ
[02:35.680]その騒がしい声と涙をめがけ やってきたんだよ
[02:40.550]
[02:40.990]そんな革命前夜の僕らを誰が止めるというんだろう
[02:45.720]もう迷わない 君のハートに旗を立てるよ
[02:50.740]君は僕から諦め方を 奪い取ったの
[02:55.880]
[03:53.030]前前前世から僕は 君を探しはじめたよ
[03:57.290]そのぶきっちょな笑い方をめがけて やってきたんだよ
[04:01.990]
[04:02.620]君が全然全部なくなって チリヂリになったって
[04:07.240]もう迷わない また１から探しはじめるさ
[04:12.370]何光年でも この歌を口ずさみながら
[04:18.090]
`, //function ({ curLineNum, txt }) {}
    handleLyric
  )
)

const seekTime = ref<string>('0')

function handleLyric(payload: HandlerParams): void {
  const { curLineNum, txt } = payload
  console.log(curLineNum, txt)
}

function play(): void {
  lyric.value.play()
}
function stop(): void {
  lyric.value.stop()
}
function togglePlay(): void {
  lyric.value.togglePlay()
}
function seek(): void {
  console.log(lyric.value)
  lyric.value.seek(parseInt(seekTime.value) * 1000)
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {
  color: red;
}
.lyric {
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
