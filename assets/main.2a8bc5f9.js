var y=Object.defineProperty;var g=(t,u,e)=>u in t?y(t,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[u]=e;var l=(t,u,e)=>(g(t,typeof u!="symbol"?u+"":u,e),e);import{d as _,r as p,c,a as o,w as L,v,F as C,b as T,o as h,n as k,t as D,e as b}from"./vendor.37e640dd.js";const x=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}};x();var r;(function(t){t[t.stop=0]="stop",t[t.playing=1]="playing"})(r||(r={}));function w(t){return t=t.map((u,e)=>e>=1&&e<=3?parseInt(u):u),t[1]*60*1e3+t[2]*1e3+t[3]}const A=/\[(\d{2}):(\d{2}).(\d{2,3})]/g;class R{constructor(u,e){l(this,"lines");l(this,"lrc");l(this,"state");l(this,"curLine");l(this,"startTime");l(this,"stopTime");l(this,"offset");l(this,"timer");l(this,"handler");this.lrc=u,this.lines=[],this.state=r.stop,this.curLine=0,this.timer=null,this.startTime=0,this.stopTime=0,this.offset=0,this.handler=e,this._init()}_init(){this._initLines()}_initLines(){this.lrc.split(`
`).forEach(u=>{let e=A.exec(u);!e||this.lines.push({lineTime:w(e),txt:u.replace(A,"")})}),this.lines.sort((u,e)=>u.lineTime-e.lineTime)}_playReset(){let{delay:u,targetIndex:e}=this._calculateDelay();this.curLine=e,clearTimeout(this.timer),this.timer=setTimeout(()=>{this._callHandler(this.curLine++),this.curLine<this.lines.length&&this.state===r.playing&&this._playReset()},u)}play(){this.state=r.playing,this.startTime=Date.now(),this.curLine<this.lines.length&&(clearTimeout(this.timer),this._playReset())}seek(u){this.offset=u,this.play()}stop(){this.state=r.stop,this.stopTime=Date.now(),this.offset=this.offset+this.stopTime-this.startTime,clearTimeout(this.timer)}togglePlay(){this.state===r.playing?this.stop():this.play()}restore(){this.lrc="",this.lines=[],this.state=r.stop,this.curLine=0,this.timer=null,this.startTime=0,this.stopTime=0,this.offset=0,this.handler=null}_calculateDelay(){let u=this._findLine(this.curLine).lineTime-this.offset,e=this.curLine,n=!1;return u<0?this.lines.forEach((i,s)=>{if(u=this._findLine(s).lineTime-this.offset,u>=0&&!n){e=s,n=!0;return}}):this.lines.forEach((i,s)=>{this.offset>=this._findLine(s-1).lineTime&&this.offset<i.lineTime&&(e=s,u=this._findLine(e).lineTime-this.offset)}),{delay:u,targetIndex:e}}_callHandler(u){var n;if(u<0)return;let e=u;this.handler({curLineNum:e,txt:((n=this._findCur())==null?void 0:n.txt.trim())||""})}_findCur(){return this.lines[this.curLine]}_findLine(u){const e=this.lines;return u<0?e[0]:u>=e.length?e[e.length-1]:e[u]}}var d;(function(t){t[t.stop=0]="stop",t[t.playing=1]="playing"})(d||(d={}));const O={class:"seek"},H={class:"seconds"},M=_({setup(t){const u=p(new R(`
[00:01.570]\u96BE\u4EE5\u5FD8\u8BB0\u521D\u6B21\u89C1\u4F60
[00:02.860]\u4E00\u53CC\u8FF7\u4EBA\u7684\u773C\u775B
[00:04.460]\u5728\u6211\u8111\u6D77\u91CC
[00:05.960]\u4F60\u7684\u8EAB\u5F71 \u6325\u6563\u4E0D\u53BB
[00:06.160]\u63E1\u4F60\u7684\u53CC\u624B\u611F\u89C9\u4F60\u7684\u6E29\u67D4
[00:12.570]\u96BE\u4EE5\u5FD8\u8BB0\u521D\u6B21\u89C1\u4F60
[00:16.860]\u4E00\u53CC\u8FF7\u4EBA\u7684\u773C\u775B
[00:21.460]\u5728\u6211\u8111\u6D77\u91CC
[00:23.960]\u4F60\u7684\u8EAB\u5F71 \u6325\u6563\u4E0D\u53BB
[00:30.160]\u63E1\u4F60\u7684\u53CC\u624B\u611F\u89C9\u4F60\u7684\u6E29\u67D4
[00:34.940]\u771F\u7684\u6709\u70B9\u900F\u4E0D\u8FC7\u6C14
[00:39.680]\u4F60\u7684\u5929\u771F \u6211\u60F3\u73CD\u60DC
[00:43.880]\u770B\u5230\u4F60\u53D7\u59D4\u5C48 \u6211\u4F1A\u4F24\u5FC3
[00:48.180]\u5594
[00:50.340]\u53EA\u6015\u6211\u81EA\u5DF1\u4F1A\u7231\u4E0A\u4F60
[00:55.070]\u4E0D\u6562\u8BA9\u81EA\u5DF1\u9760\u7684\u592A\u8FD1
[00:59.550]\u6015\u6211\u6CA1\u4EC0\u4E48\u80FD\u591F\u7ED9\u4F60
[01:04.030]\u7231\u4F60\u4E5F\u9700\u8981\u5F88\u5927\u7684\u52C7\u6C14
[01:08.190]\u53EA\u6015\u6211\u81EA\u5DF1\u4F1A\u7231\u4E0A\u4F60
[01:12.910]\u4E5F\u8BB8\u6709\u5929\u4F1A\u60C5\u4E0D\u81EA\u7981
[01:17.380]\u60F3\u5FF5\u53EA\u8BA9\u81EA\u5DF1\u82E6\u4E86\u81EA\u5DF1
[01:21.840]\u7231\u4E0A\u4F60\u662F\u6211\u60C5\u975E\u5F97\u5DF2
[01:28.810]\u96BE\u4EE5\u5FD8\u8BB0\u521D\u6B21\u89C1\u4F60
[01:33.170]\u4E00\u53CC\u8FF7\u4EBA\u7684\u773C\u775B
[01:37.700]\u5728\u6211\u8111\u6D77\u91CC \u4F60\u7684\u8EAB\u5F71 \u6325\u6563\u4E0D\u53BB
[01:46.360]\u63E1\u4F60\u7684\u53CC\u624B\u611F\u89C9\u4F60\u7684\u6E29\u67D4
[01:51.120]\u771F\u7684\u6709\u70B9\u900F\u4E0D\u8FC7\u6C14
[01:55.910]\u4F60\u7684\u5929\u771F \u6211\u60F3\u73CD\u60DC
[02:00.150]\u770B\u5230\u4F60\u53D7\u59D4\u5C48 \u6211\u4F1A\u4F24\u5FC3
[02:04.490]\u5594
[02:06.540]\u53EA\u6015\u6211\u81EA\u5DF1\u4F1A\u7231\u4E0A\u4F60
[02:11.240]\u4E0D\u6562\u8BA9\u81EA\u5DF1\u9760\u7684\u592A\u8FD1
[02:15.750]\u6015\u6211\u6CA1\u4EC0\u4E48\u80FD\u591F\u7ED9\u4F60
[02:20.200]\u7231\u4F60\u4E5F\u9700\u8981\u5F88\u5927\u7684\u52C7\u6C14
[02:24.570]\u53EA\u6015\u6211\u81EA\u5DF1\u4F1A\u7231\u4E0A\u4F60
[02:29.230]\u4E5F\u8BB8\u6709\u5929\u4F1A\u60C5\u4E0D\u81EA\u7981
[02:33.680]\u60F3\u5FF5\u53EA\u8BA9\u81EA\u5DF1\u82E6\u4E86\u81EA\u5DF1
[02:38.140]\u7231\u4E0A\u4F60\u662F\u6211\u60C5\u975E\u5F97\u5DF2
[03:04.060]\u4EC0\u4E48\u539F\u56E0 \u8036
[03:07.730]\u6211\u7ADF\u7136\u53C8\u4F1A\u9047\u89C1\u4F60
[03:13.020]\u6211\u771F\u7684\u771F\u7684\u4E0D\u613F\u610F
[03:16.630]\u5C31\u8FD9\u6837\u9677\u5165\u7231\u7684\u9677\u9631
[03:20.700]\u5594
[03:22.910]\u53EA\u6015\u6211\u81EA\u5DF1\u4F1A\u7231\u4E0A\u4F60
[03:27.570]\u4E0D\u6562\u8BA9\u81EA\u5DF1\u9760\u7684\u592A\u8FD1
[03:32.040]\u6015\u6211\u6CA1\u4EC0\u4E48\u80FD\u591F\u7ED9\u4F60
[03:36.560]\u7231\u4F60\u4E5F\u9700\u8981\u5F88\u5927\u7684\u52C7\u6C14
[03:40.740]\u53EA\u6015\u6211\u81EA\u5DF1\u4F1A\u7231\u4E0A\u4F60
[03:45.460]\u4E5F\u8BB8\u6709\u5929\u4F1A\u60C5\u4E0D\u81EA\u7981
[03:49.990]\u60F3\u5FF5\u53EA\u8BA9\u81EA\u5DF1\u82E6\u4E86\u81EA\u5DF1
[03:54.510]\u7231\u4E0A\u4F60\u662F\u6211\u60C5\u975E\u5F97\u5DF2
[03:58.970]\u7231\u4E0A\u4F60\u662F\u6211\u60C5\u975E\u5F97\u5DF2
`,n)),e=p("0");function n(f){const{curLineNum:E,txt:F}=f;console.log(E,F)}function i(){u.value.play()}function s(){u.value.stop()}function a(){u.value.togglePlay()}function m(){u.value.seek(parseInt(e.value)*1e3)}return(f,E)=>(h(),c(C,null,[o("button",{onClick:a},"toggle-play"),o("button",{onClick:i},"play"),o("button",{onClick:s},"stop"),o("div",O,[L(o("input",{type:"text",placeholder:"Please input the seconds","onUpdate:modelValue":E[0]||(E[0]=F=>e.value=F)},null,512),[[v,e.value]]),o("button",{onClick:m},"seek")]),(h(!0),c(C,null,T(u.value.lines,(F,B)=>(h(),c("div",{class:k(["lyric",{active:u.value.curLine-1===B}])},[o("p",H,D((F.lineTime-u.value.toggleTime)/1e3)+"s -- "+D(F.txt),1)],2))),256))],64))}});b(M).mount("#app");
