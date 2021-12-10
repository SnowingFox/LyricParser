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
    <p class="seconds">
      {{ (line.lineTime - lyric.toggleTime) / 1000 }}s -- {{ line.txt }}
    </p>
  </div>
</template>

<script setup lang="ts">
import Lyric from '../script/'
import { ref } from 'vue'

const lyric = ref<any>(
  new Lyric(
    `
[00:01.570]难以忘记初次见你
[00:02.860]一双迷人的眼睛
[00:04.460]在我脑海里
[00:05.960]你的身影 挥散不去
[00:06.160]握你的双手感觉你的温柔
[00:12.570]难以忘记初次见你
[00:16.860]一双迷人的眼睛
[00:21.460]在我脑海里
[00:23.960]你的身影 挥散不去
[00:30.160]握你的双手感觉你的温柔
[00:34.940]真的有点透不过气
[00:39.680]你的天真 我想珍惜
[00:43.880]看到你受委屈 我会伤心
[00:48.180]喔
[00:50.340]只怕我自己会爱上你
[00:55.070]不敢让自己靠的太近
[00:59.550]怕我没什么能够给你
[01:04.030]爱你也需要很大的勇气
[01:08.190]只怕我自己会爱上你
[01:12.910]也许有天会情不自禁
[01:17.380]想念只让自己苦了自己
[01:21.840]爱上你是我情非得已
[01:28.810]难以忘记初次见你
[01:33.170]一双迷人的眼睛
[01:37.700]在我脑海里 你的身影 挥散不去
[01:46.360]握你的双手感觉你的温柔
[01:51.120]真的有点透不过气
[01:55.910]你的天真 我想珍惜
[02:00.150]看到你受委屈 我会伤心
[02:04.490]喔
[02:06.540]只怕我自己会爱上你
[02:11.240]不敢让自己靠的太近
[02:15.750]怕我没什么能够给你
[02:20.200]爱你也需要很大的勇气
[02:24.570]只怕我自己会爱上你
[02:29.230]也许有天会情不自禁
[02:33.680]想念只让自己苦了自己
[02:38.140]爱上你是我情非得已
[03:04.060]什么原因 耶
[03:07.730]我竟然又会遇见你
[03:13.020]我真的真的不愿意
[03:16.630]就这样陷入爱的陷阱
[03:20.700]喔
[03:22.910]只怕我自己会爱上你
[03:27.570]不敢让自己靠的太近
[03:32.040]怕我没什么能够给你
[03:36.560]爱你也需要很大的勇气
[03:40.740]只怕我自己会爱上你
[03:45.460]也许有天会情不自禁
[03:49.990]想念只让自己苦了自己
[03:54.510]爱上你是我情非得已
[03:58.970]爱上你是我情非得已
`,
    handleLyric
  )
)
const seekTime = ref<string>()

function handleLyric({ curLineNum, txt }): void {
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
