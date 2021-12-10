var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var PLAYING_STATE;
(function(PLAYING_STATE2) {
  PLAYING_STATE2[PLAYING_STATE2["stop"] = 0] = "stop";
  PLAYING_STATE2[PLAYING_STATE2["playing"] = 1] = "playing";
})(PLAYING_STATE || (PLAYING_STATE = {}));
function transformRegTime(time) {
  time = time.map((item, index) => {
    if (index >= 1 && index <= 3) {
      return parseInt(item);
    }
    return item;
  });
  return Date.now() + time[1] * 60 * 1e3 + time[2] * 1e3 + time[3];
}
const lineTimeReg = /\[(\d{2}):(\d{2}).(\d{2,3})]/g;
class Lyric {
  constructor(lrc, handler) {
    __publicField(this, "lines");
    __publicField(this, "lrc");
    __publicField(this, "state");
    __publicField(this, "curLine");
    __publicField(this, "toggleTime");
    __publicField(this, "timer");
    __publicField(this, "handler");
    this.lrc = lrc;
    this.lines = [];
    this.state = PLAYING_STATE.stop;
    this.curLine = 0;
    this.timer = null;
    this.toggleTime = Date.now();
    this.handler = handler;
    this._init();
  }
  _init() {
    this._initLines();
  }
  _initLines() {
    this.lrc.split("\n").forEach((lrc) => {
      let time = lineTimeReg.exec(lrc);
      if (!time) {
        return;
      }
      this.lines.push({
        lineTime: transformRegTime(time),
        txt: lrc.replace(lineTimeReg, "")
      });
    });
    this.lines.sort((a, b) => {
      return a.lineTime - b.lineTime;
    });
  }
  _playReset(offset, targetLine) {
    this.curLine = targetLine;
    let delay = this._calculateDelay();
    this.timer = setTimeout(() => {
      this._callHandler();
      this.curLine++;
      if (this.curLine < this.lines.length) {
        this._playReset(offset, this.curLine);
      } else {
        stop();
        return;
      }
    }, delay);
  }
  play(startTime, targetIndex) {
    if (this.state === PLAYING_STATE.playing) {
      return;
    }
    if (!this.lines.length) {
      return;
    }
    if (!startTime) {
      startTime = 0;
    }
    if (!targetIndex) {
      targetIndex = this.curLine;
    }
    startTime += this.toggleTime;
    this.state = PLAYING_STATE.playing;
    this._fixLinesTime();
    this._playReset(startTime, targetIndex);
  }
  seek(offset) {
    this.stop();
    let targetIndex = 0;
    offset += this.toggleTime;
    this.lines.forEach((line, index) => {
      if (offset >= this._findLine(index - 1).lineTime && offset <= line.lineTime) {
        targetIndex = index;
      }
    });
    offset = this._findLine(targetIndex).lineTime - offset;
    this.play(offset, targetIndex);
  }
  stop() {
    if (this.state === PLAYING_STATE.stop) {
      return;
    }
    clearTimeout(this.timer);
    this.state = PLAYING_STATE.stop;
    this._fixLinesTime();
  }
  togglePlay() {
    if (this.state === PLAYING_STATE.playing) {
      this.stop();
    } else {
      this.play(this.lines[this.curLine].lineTime);
    }
    this.state = !this.state;
  }
  _callHandler() {
    let curLine = this.curLine;
    if (curLine < 0) {
      return;
    }
    if (curLine >= this.lines.length) {
      stop();
      return;
    }
    this.handler({
      curLineNum: curLine,
      txt: this._findCur().txt.trim()
    });
  }
  _calculateDelay() {
    let delay = this._findCur().lineTime - this.toggleTime;
    if (this.curLine >= 1) {
      delay = this._findCur().lineTime - this._findLine(this.curLine - 1).lineTime;
    }
    return delay;
  }
  _findCur() {
    return this.lines[this.curLine];
  }
  _findLine(i) {
    const lines = this.lines;
    if (i < 0) {
      return lines[0];
    }
    if (i >= lines.length) {
      return lines[lines.length - 1];
    }
    return lines[i];
  }
  _fixLinesTime() {
    let deltaTime = Date.now() - this.toggleTime;
    this.toggleTime = Date.now();
    this.lines.forEach((line) => {
      return line.lineTime += deltaTime;
    });
  }
}
export { Lyric as default };
