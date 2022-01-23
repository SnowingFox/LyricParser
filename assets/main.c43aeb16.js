var A=Object.defineProperty;var g=(i,u,e)=>u in i?A(i,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[u]=e;var l=(i,u,e)=>(g(i,typeof u!="symbol"?u+"":u,e),e);import{d as _,r as p,c as h,a as r,w as v,v as L,F as d,b as T,o as f,n as k,t as C,e as x}from"./vendor.37e640dd.js";const b=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}};b();var o;(function(i){i[i.stop=0]="stop",i[i.playing=1]="playing"})(o||(o={}));function w(i){const u=[];return i.forEach((e,n)=>{n>=1&&n<=3&&u.push(parseInt(e))}),(u[0]*60+u[1])*1e3+u[2]}const m=/\[(\d{2}):(\d{2}).(\d{2,3})]/g;class R{constructor(u,e){l(this,"lines");l(this,"lrc");l(this,"state");l(this,"curLine");l(this,"startTime");l(this,"stopTime");l(this,"offset");l(this,"timer");l(this,"handler");this.lrc=u,this.lines=[],this.state=o.stop,this.curLine=0,this.timer=null,this.startTime=0,this.stopTime=0,this.offset=0,this.handler=e,this._init()}_init(){this._initLines()}_initLines(){this.lrc.split(`
`).forEach(u=>{let e=m.exec(u);if(!e)return;let n=u.replace(m,"");n!==""&&this.lines.push({lineTime:w(e),txt:n})}),this.lines.sort((u,e)=>u.lineTime-e.lineTime)}_playReset(){let{delay:u,targetIndex:e}=this._calculateDelay();this.curLine=e,clearTimeout(this.timer),this.timer=setTimeout(()=>{this._callHandler(this.curLine++),this.curLine<this.lines.length&&this.state===o.playing&&this._playReset()},u)}play(){this.state=o.playing,this.startTime=Date.now(),this.curLine<this.lines.length&&(clearTimeout(this.timer),this._playReset())}stop(){this.state=o.stop,this.stopTime=Date.now(),this.offset=this.offset+this.stopTime-this.startTime,clearTimeout(this.timer)}togglePlay(){this.state===o.playing?this.stop():this.play()}seek(u){this.offset=u,this.play()}_calculateDelay(){let u=this._findLine(this.curLine).lineTime-this.offset,e=this.curLine,n=!1;return u<0?this.lines.forEach((t,s)=>{if(u=this._findLine(s).lineTime-this.offset,u>=0&&!n){e=s,n=!0;return}}):this.lines.forEach((t,s)=>{this.offset>=this._findLine(s-1).lineTime&&this.offset<t.lineTime&&(e=s,u=this._findLine(e).lineTime-this.offset)}),{delay:u,targetIndex:e}}_callHandler(u){var n,t;if(u<0)return;let e=u;if(((n=this._findCur())==null?void 0:n.txt)!=="")try{this.handler({curLineNum:e,txt:((t=this._findCur())==null?void 0:t.txt.trim())||""})}catch{return}}_findCur(){return this.lines[this.curLine]}_findLine(u){const e=this.lines;return u<0?e[0]:u>=e.length?e[e.length-1]:e[u]}}var E;(function(i){i[i.stop=0]="stop",i[i.playing=1]="playing"})(E||(E={}));const O={class:"seek"},H={class:"seconds"},M=_({setup(i){const u=p(new R(`
[00:00.000] \u4F5C\u8BCD : \u91CE\u7530\u6D0B\u6B21\u90CE
[00:01.000] \u4F5C\u66F2 : \u91CE\u7530\u6D0B\u6B21\u90CE
[00:19.600]
[00:20.000]\u3084\u3063\u3068\u773C\u3092\u899A\u307E\u3057\u305F\u304B\u3044 \u305D\u308C\u306A\u306E\u306B\u306A\u305C\u773C\u3082\u5408\u308F\u305B\u3084\u3057\u306A\u3044\u3093\u3060\u3044\uFF1F
[00:30.090]\u300C\u9045\u3044\u3088\u300D\u3068\u6012\u308B\u541B \u3053\u308C\u3067\u3082\u3084\u308C\u308B\u3060\u3051\u98DB\u3070\u3057\u3066\u304D\u305F\u3093\u3060\u3088
[00:38.720]
[00:39.670]\u5FC3\u304C\u8EAB\u4F53\u3092\u8FFD\u3044\u8D8A\u3057\u3066\u304D\u305F\u3093\u3060\u3088
[00:44.340]
[00:45.340]\u541B\u306E\u9AEA\u3084\u77B3\u3060\u3051\u3067\u80F8\u304C\u75DB\u3044\u3088
[00:50.560]\u540C\u3058\u6642\u3092\u5438\u3044\u3053\u3093\u3067\u96E2\u3057\u305F\u304F\u306A\u3044\u3088
[00:55.200]\u9065\u304B\u6614\u304B\u3089\u77E5\u308B \u305D\u306E\u58F0\u306B
[01:00.260]\u751F\u307E\u308C\u3066\u306F\u3058\u3081\u3066 \u4F55\u3092\u8A00\u3048\u3070\u3044\u3044\uFF1F
[01:07.240]
[01:07.640]\u541B\u306E\u524D\u524D\u524D\u4E16\u304B\u3089\u50D5\u306F \u541B\u3092\u63A2\u3057\u306F\u3058\u3081\u305F\u3088
[01:12.280]\u305D\u306E\u3076\u304D\u3063\u3061\u3087\u306A\u7B11\u3044\u65B9\u3092\u3081\u304C\u3051\u3066 \u3084\u3063\u3066\u304D\u305F\u3093\u3060\u3088
[01:17.260]
[01:17.630]\u541B\u304C\u5168\u7136\u5168\u90E8\u306A\u304F\u306A\u3063\u3066 \u30C1\u30EA\u30C2\u30EA\u306B\u306A\u3063\u305F\u3063\u3066
[01:22.430]\u3082\u3046\u8FF7\u308F\u306A\u3044 \u307E\u305F\uFF11\u304B\u3089\u63A2\u3057\u306F\u3058\u3081\u308B\u3055
[01:27.240]\u3080\u3057\u308D\uFF10\u304B\u3089 \u307E\u305F\u5B87\u5B99\u3092\u306F\u3058\u3081\u3066\u307F\u3088\u3046\u304B
[01:32.670]
[01:43.440]\u3069\u3063\u304B\u3089\u8A71\u3059\u304B\u306A \u541B\u304C\u7720\u3063\u3066\u3044\u305F\u9593\u306E\u30B9\u30C8\u30FC\u30EA\u30FC
[01:53.480]\u4F55\u5104 \u4F55\u5149\u5E74\u5206\u306E\u7269\u8A9E\u3092\u8A9E\u308A\u306B\u304D\u305F\u3093\u3060\u3088 \u3051\u3069\u3044\u3056\u305D\u306E\u59FF\u3053\u306E\u773C\u306B\u6620\u3059\u3068
[02:07.720]
[02:08.720]\u541B\u3082\u77E5\u3089\u306C\u541B\u3068\u30B8\u30E3\u30EC\u3066 \u622F\u308C\u305F\u3044\u3088
[02:13.530]\u541B\u306E\u6D88\u3048\u306C\u75DB\u307F\u307E\u3067\u611B\u3057\u3066\u307F\u305F\u3044\u3088
[02:18.480]\u9280\u6CB3\u4F55\u500B\u5206\u304B\u306E \u679C\u3066\u306B\u51FA\u9022\u3048\u305F
[02:23.530]\u305D\u306E\u624B\u3092\u58CA\u3055\u305A\u306B \u3069\u3046\u63E1\u3063\u305F\u306A\u3089\u3044\u3044\uFF1F
[02:30.500]
[02:31.000]\u541B\u306E\u524D\u524D\u524D\u4E16\u304B\u3089\u50D5\u306F \u541B\u3092\u63A2\u3057\u306F\u3058\u3081\u305F\u3088
[02:35.680]\u305D\u306E\u9A12\u304C\u3057\u3044\u58F0\u3068\u6D99\u3092\u3081\u304C\u3051 \u3084\u3063\u3066\u304D\u305F\u3093\u3060\u3088
[02:40.550]
[02:40.990]\u305D\u3093\u306A\u9769\u547D\u524D\u591C\u306E\u50D5\u3089\u3092\u8AB0\u304C\u6B62\u3081\u308B\u3068\u3044\u3046\u3093\u3060\u308D\u3046
[02:45.720]\u3082\u3046\u8FF7\u308F\u306A\u3044 \u541B\u306E\u30CF\u30FC\u30C8\u306B\u65D7\u3092\u7ACB\u3066\u308B\u3088
[02:50.740]\u541B\u306F\u50D5\u304B\u3089\u8AE6\u3081\u65B9\u3092 \u596A\u3044\u53D6\u3063\u305F\u306E
[02:55.880]
[03:53.030]\u524D\u524D\u524D\u4E16\u304B\u3089\u50D5\u306F \u541B\u3092\u63A2\u3057\u306F\u3058\u3081\u305F\u3088
[03:57.290]\u305D\u306E\u3076\u304D\u3063\u3061\u3087\u306A\u7B11\u3044\u65B9\u3092\u3081\u304C\u3051\u3066 \u3084\u3063\u3066\u304D\u305F\u3093\u3060\u3088
[04:01.990]
[04:02.620]\u541B\u304C\u5168\u7136\u5168\u90E8\u306A\u304F\u306A\u3063\u3066 \u30C1\u30EA\u30C2\u30EA\u306B\u306A\u3063\u305F\u3063\u3066
[04:07.240]\u3082\u3046\u8FF7\u308F\u306A\u3044 \u307E\u305F\uFF11\u304B\u3089\u63A2\u3057\u306F\u3058\u3081\u308B\u3055
[04:12.370]\u4F55\u5149\u5E74\u3067\u3082 \u3053\u306E\u6B4C\u3092\u53E3\u305A\u3055\u307F\u306A\u304C\u3089
[04:18.090]
`,n)),e=p("0");function n(B){const{curLineNum:F,txt:a}=B;console.log(F,a)}function t(){u.value.play()}function s(){u.value.stop()}function c(){u.value.togglePlay()}function D(){console.log(u.value),u.value.seek(parseInt(e.value)*1e3)}return(B,F)=>(f(),h(d,null,[r("button",{onClick:c},"toggle-play"),r("button",{onClick:t},"play"),r("button",{onClick:s},"stop"),r("div",O,[v(r("input",{type:"text",placeholder:"Please input the seconds","onUpdate:modelValue":F[0]||(F[0]=a=>e.value=a)},null,512),[[L,e.value]]),r("button",{onClick:D},"seek")]),(f(!0),h(d,null,T(u.value.lines,(a,y)=>(f(),h("div",{class:k(["lyric",{active:u.value.curLine-1===y}])},[r("p",H,C(a.lineTime/1e3)+"s -- "+C(a.txt),1)],2))),256))],64))}});x(M).mount("#app");
