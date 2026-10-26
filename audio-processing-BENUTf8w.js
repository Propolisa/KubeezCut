class p {
  constructor() {
    this._vector = new Float32Array(), this._position = 0, this._frameCount = 0;
  }
  get vector() {
    return this._vector;
  }
  get position() {
    return this._position;
  }
  get startIndex() {
    return this._position * 2;
  }
  get frameCount() {
    return this._frameCount;
  }
  get endIndex() {
    return (this._position + this._frameCount) * 2;
  }
  clear() {
    this.receive(this._frameCount), this.rewind();
  }
  put(t) {
    this._frameCount += t;
  }
  putSamples(t, e, s = 0) {
    e = e || 0;
    const i = e * 2;
    s >= 0 || (s = (t.length - i) / 2);
    const r = s * 2;
    this.ensureCapacity(s + this._frameCount);
    const o = this.endIndex;
    this.vector.set(t.subarray(i, i + r), o), this._frameCount += s;
  }
  putBuffer(t, e, s = 0) {
    e = e || 0, s >= 0 || (s = t.frameCount - e), this.putSamples(t.vector, t.position + e, s);
  }
  receive(t) {
    (!(t >= 0) || t > this._frameCount) && (t = this.frameCount), this._frameCount -= t, this._position += t;
  }
  receiveSamples(t, e = 0) {
    const s = e * 2, i = this.startIndex;
    t.set(this._vector.subarray(i, i + s)), this.receive(e);
  }
  extract(t, e = 0, s = 0) {
    const i = this.startIndex + e * 2, r = s * 2;
    t.set(this._vector.subarray(i, i + r));
  }
  ensureCapacity(t = 0) {
    const e = parseInt(t * 2);
    if (this._vector.length < e) {
      const s = new Float32Array(e);
      s.set(this._vector.subarray(this.startIndex, this.endIndex)), this._vector = s, this._position = 0;
    } else
      this.rewind();
  }
  ensureAdditionalCapacity(t = 0) {
    this.ensureCapacity(this._frameCount + t);
  }
  rewind() {
    this._position > 0 && (this._vector.set(this._vector.subarray(this.startIndex, this.endIndex)), this._position = 0);
  }
}
class E {
  constructor(t) {
    t ? (this._inputBuffer = new p(), this._outputBuffer = new p()) : this._inputBuffer = this._outputBuffer = null;
  }
  get inputBuffer() {
    return this._inputBuffer;
  }
  set inputBuffer(t) {
    this._inputBuffer = t;
  }
  get outputBuffer() {
    return this._outputBuffer;
  }
  set outputBuffer(t) {
    this._outputBuffer = t;
  }
  clear() {
    this._inputBuffer.clear(), this._outputBuffer.clear();
  }
}
class _ extends E {
  constructor(t) {
    super(t), this.reset(), this._rate = 1;
  }
  set rate(t) {
    this._rate = t;
  }
  reset() {
    this.slopeCount = 0, this.prevSampleL = 0, this.prevSampleR = 0;
  }
  clone() {
    const t = new _();
    return t.rate = this._rate, t;
  }
  process() {
    const t = this._inputBuffer.frameCount;
    this._outputBuffer.ensureAdditionalCapacity(t / this._rate + 1);
    const e = this.transpose(t);
    this._inputBuffer.receive(), this._outputBuffer.put(e);
  }
  transpose(t = 0) {
    if (t === 0)
      return 0;
    const e = this._inputBuffer.vector, s = this._inputBuffer.startIndex, i = this._outputBuffer.vector, r = this._outputBuffer.endIndex;
    let o = 0, h = 0;
    for (; this.slopeCount < 1; )
      i[r + 2 * h] = (1 - this.slopeCount) * this.prevSampleL + this.slopeCount * e[s], i[r + 2 * h + 1] = (1 - this.slopeCount) * this.prevSampleR + this.slopeCount * e[s + 1], h = h + 1, this.slopeCount += this._rate;
    if (this.slopeCount -= 1, t !== 1)
      t: for (; ; ) {
        for (; this.slopeCount > 1; )
          if (this.slopeCount -= 1, o = o + 1, o >= t - 1)
            break t;
        const a = s + 2 * o;
        i[r + 2 * h] = (1 - this.slopeCount) * e[a] + this.slopeCount * e[a + 2], i[r + 2 * h + 1] = (1 - this.slopeCount) * e[a + 1] + this.slopeCount * e[a + 3], h = h + 1, this.slopeCount += this._rate;
      }
    return this.prevSampleL = e[s + 2 * t - 2], this.prevSampleR = e[s + 2 * t - 1], h;
  }
}
class A {
  constructor(t) {
    this._pipe = t;
  }
  get pipe() {
    return this._pipe;
  }
  get inputBuffer() {
    return this._pipe.inputBuffer;
  }
  get outputBuffer() {
    return this._pipe.outputBuffer;
  }
  fillInputBuffer() {
    throw new Error("fillInputBuffer() not overridden");
  }
  fillOutputBuffer(t = 0) {
    for (; this.outputBuffer.frameCount < t; ) {
      const e = 16384 - this.inputBuffer.frameCount;
      if (this.fillInputBuffer(e), this.inputBuffer.frameCount < 8192 * 2)
        break;
      this._pipe.process();
    }
  }
  clear() {
    this._pipe.clear();
  }
}
const d = function() {
};
class M extends A {
  constructor(t, e, s = d) {
    super(e), this.callback = s, this.sourceSound = t, this.historyBufferSize = 22050, this._sourcePosition = 0, this.outputBufferPosition = 0, this._position = 0;
  }
  get position() {
    return this._position;
  }
  set position(t) {
    if (t > this._position)
      throw new RangeError("New position may not be greater than current position");
    const e = this.outputBufferPosition - (this._position - t);
    if (e < 0)
      throw new RangeError("New position falls outside of history buffer");
    this.outputBufferPosition = e, this._position = t;
  }
  get sourcePosition() {
    return this._sourcePosition;
  }
  set sourcePosition(t) {
    this.clear(), this._sourcePosition = t;
  }
  onEnd() {
    this.callback();
  }
  fillInputBuffer(t = 0) {
    const e = new Float32Array(t * 2), s = this.sourceSound.extract(e, t, this._sourcePosition);
    this._sourcePosition += s, this.inputBuffer.putSamples(e, 0, s);
  }
  extract(t, e = 0) {
    this.fillOutputBuffer(this.outputBufferPosition + e);
    const s = Math.min(e, this.outputBuffer.frameCount - this.outputBufferPosition);
    this.outputBuffer.extract(t, this.outputBufferPosition, s);
    const i = this.outputBufferPosition + s;
    return this.outputBufferPosition = Math.min(this.historyBufferSize, i), this.outputBuffer.receive(Math.max(i - this.historyBufferSize, 0)), this._position += s, s;
  }
  handleSampleData(t) {
    this.extract(t.data, 4096);
  }
  clear() {
    super.clear(), this.outputBufferPosition = 0;
  }
}
const T = 0, x = T, R = 0, I = R, b = 8, g = [[124, 186, 248, 310, 372, 434, 496, 558, 620, 682, 744, 806, 868, 930, 992, 1054, 1116, 1178, 1240, 1302, 1364, 1426, 1488, 0], [-100, -75, -50, -25, 25, 50, 75, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [-20, -15, -10, -5, 5, 10, 15, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [-4, -3, -2, -1, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], l = 0.25, L = 4, m = 125, k = 50, w = (k - m) / (L - l), U = m - w * l, B = 25, O = 15, y = (O - B) / (L - l), q = B - y * l;
class v extends E {
  constructor(t) {
    super(t), this._quickSeek = !0, this.midBufferDirty = !1, this.midBuffer = null, this.overlapLength = 0, this.autoSeqSetting = !0, this.autoSeekSetting = !0, this._tempo = 1, this.setParameters(44100, x, I, b);
  }
  clear() {
    super.clear(), this.clearMidBuffer();
  }
  clearMidBuffer() {
    this.midBufferDirty && (this.midBufferDirty = !1, this.midBuffer = null);
  }
  setParameters(t, e, s, i) {
    t > 0 && (this.sampleRate = t), i > 0 && (this.overlapMs = i), e > 0 ? (this.sequenceMs = e, this.autoSeqSetting = !1) : this.autoSeqSetting = !0, s > 0 ? (this.seekWindowMs = s, this.autoSeekSetting = !1) : this.autoSeekSetting = !0, this.calculateSequenceParameters(), this.calculateOverlapLength(this.overlapMs), this.tempo = this._tempo;
  }
  set tempo(t) {
    let e;
    this._tempo = t, this.calculateSequenceParameters(), this.nominalSkip = this._tempo * (this.seekWindowLength - this.overlapLength), this.skipFract = 0, e = Math.floor(this.nominalSkip + 0.5), this.sampleReq = Math.max(e + this.overlapLength, this.seekWindowLength) + this.seekLength;
  }
  get tempo() {
    return this._tempo;
  }
  get inputChunkSize() {
    return this.sampleReq;
  }
  get outputChunkSize() {
    return this.overlapLength + Math.max(0, this.seekWindowLength - 2 * this.overlapLength);
  }
  calculateOverlapLength(t = 0) {
    let e;
    e = this.sampleRate * t / 1e3, e = e < 16 ? 16 : e, e -= e % 8, this.overlapLength = e, this.refMidBuffer = new Float32Array(this.overlapLength * 2), this.midBuffer = new Float32Array(this.overlapLength * 2);
  }
  checkLimits(t, e, s) {
    return t < e ? e : t > s ? s : t;
  }
  calculateSequenceParameters() {
    let t, e;
    this.autoSeqSetting && (t = U + w * this._tempo, t = this.checkLimits(t, k, m), this.sequenceMs = Math.floor(t + 0.5)), this.autoSeekSetting && (e = q + y * this._tempo, e = this.checkLimits(e, O, B), this.seekWindowMs = Math.floor(e + 0.5)), this.seekWindowLength = Math.floor(this.sampleRate * this.sequenceMs / 1e3), this.seekLength = Math.floor(this.sampleRate * this.seekWindowMs / 1e3);
  }
  set quickSeek(t) {
    this._quickSeek = t;
  }
  clone() {
    const t = new v();
    return t.tempo = this._tempo, t.setParameters(this.sampleRate, this.sequenceMs, this.seekWindowMs, this.overlapMs), t;
  }
  seekBestOverlapPosition() {
    return this._quickSeek ? this.seekBestOverlapPositionStereoQuick() : this.seekBestOverlapPositionStereo();
  }
  seekBestOverlapPositionStereo() {
    let t, e, s, i = 0;
    for (this.preCalculateCorrelationReferenceStereo(), t = 0, e = Number.MIN_VALUE; i < this.seekLength; i = i + 1)
      s = this.calculateCrossCorrelationStereo(2 * i, this.refMidBuffer), s > e && (e = s, t = i);
    return t;
  }
  seekBestOverlapPositionStereoQuick() {
    let t, e, s, i = 0, r, o;
    for (this.preCalculateCorrelationReferenceStereo(), e = Number.MIN_VALUE, t = 0, r = 0, o = 0; i < 4; i = i + 1) {
      let h = 0;
      for (; g[i][h] && (o = r + g[i][h], !(o >= this.seekLength)); )
        s = this.calculateCrossCorrelationStereo(2 * o, this.refMidBuffer), s > e && (e = s, t = o), h = h + 1;
      r = t;
    }
    return t;
  }
  preCalculateCorrelationReferenceStereo() {
    let t = 0, e, s;
    for (; t < this.overlapLength; t = t + 1)
      s = t * (this.overlapLength - t), e = t * 2, this.refMidBuffer[e] = this.midBuffer[e] * s, this.refMidBuffer[e + 1] = this.midBuffer[e + 1] * s;
  }
  calculateCrossCorrelationStereo(t, e) {
    const s = this._inputBuffer.vector;
    t += this._inputBuffer.startIndex;
    let i = 0, r = 2;
    const o = 2 * this.overlapLength;
    let h;
    for (; r < o; r = r + 2)
      h = r + t, i += s[h] * e[r] + s[h + 1] * e[r + 1];
    return i;
  }
  overlap(t) {
    this.overlapStereo(2 * t);
  }
  overlapStereo(t) {
    const e = this._inputBuffer.vector;
    t += this._inputBuffer.startIndex;
    const s = this._outputBuffer.vector, i = this._outputBuffer.endIndex;
    let r = 0, o, h;
    const a = 1 / this.overlapLength;
    let f, u, c;
    for (; r < this.overlapLength; r = r + 1)
      h = (this.overlapLength - r) * a, f = r * a, o = 2 * r, u = o + t, c = o + i, s[c + 0] = e[u + 0] * f + this.midBuffer[o + 0] * h, s[c + 1] = e[u + 1] * f + this.midBuffer[o + 1] * h;
  }
  process() {
    let t, e, s;
    if (this.midBuffer === null) {
      if (this._inputBuffer.frameCount < this.overlapLength)
        return;
      this.midBuffer = new Float32Array(this.overlapLength * 2), this._inputBuffer.receiveSamples(this.midBuffer, this.overlapLength);
    }
    for (; this._inputBuffer.frameCount >= this.sampleReq; ) {
      t = this.seekBestOverlapPosition(), this._outputBuffer.ensureAdditionalCapacity(this.overlapLength), this.overlap(Math.floor(t)), this._outputBuffer.put(this.overlapLength), e = this.seekWindowLength - 2 * this.overlapLength, e > 0 && this._outputBuffer.putBuffer(this._inputBuffer, t + this.overlapLength, e);
      const i = this._inputBuffer.startIndex + 2 * (t + this.seekWindowLength - this.overlapLength);
      this.midBuffer.set(this._inputBuffer.vector.subarray(i, i + 2 * this.overlapLength)), this.skipFract += this.nominalSkip, s = Math.floor(this.skipFract), this.skipFract -= s, this._inputBuffer.receive(s);
    }
  }
}
const C = function(n, t) {
  return (n > t ? n - t : t - n) > 1e-10;
};
class S {
  constructor() {
    this.transposer = new _(!1), this.stretch = new v(!1), this._inputBuffer = new p(), this._intermediateBuffer = new p(), this._outputBuffer = new p(), this._rate = 0, this._tempo = 0, this.virtualPitch = 1, this.virtualRate = 1, this.virtualTempo = 1, this.calculateEffectiveRateAndTempo();
  }
  clear() {
    this.transposer.clear(), this.stretch.clear();
  }
  clone() {
    const t = new S();
    return t.rate = this.rate, t.tempo = this.tempo, t;
  }
  get rate() {
    return this._rate;
  }
  set rate(t) {
    this.virtualRate = t, this.calculateEffectiveRateAndTempo();
  }
  set rateChange(t) {
    this._rate = 1 + 0.01 * t;
  }
  get tempo() {
    return this._tempo;
  }
  set tempo(t) {
    this.virtualTempo = t, this.calculateEffectiveRateAndTempo();
  }
  set tempoChange(t) {
    this.tempo = 1 + 0.01 * t;
  }
  set pitch(t) {
    this.virtualPitch = t, this.calculateEffectiveRateAndTempo();
  }
  set pitchOctaves(t) {
    this.pitch = Math.exp(0.69314718056 * t), this.calculateEffectiveRateAndTempo();
  }
  set pitchSemitones(t) {
    this.pitchOctaves = t / 12;
  }
  get inputBuffer() {
    return this._inputBuffer;
  }
  get outputBuffer() {
    return this._outputBuffer;
  }
  calculateEffectiveRateAndTempo() {
    const t = this._tempo, e = this._rate;
    this._tempo = this.virtualTempo / this.virtualPitch, this._rate = this.virtualRate * this.virtualPitch, C(this._tempo, t) && (this.stretch.tempo = this._tempo), C(this._rate, e) && (this.transposer.rate = this._rate), this._rate > 1 ? this._outputBuffer != this.transposer.outputBuffer && (this.stretch.inputBuffer = this._inputBuffer, this.stretch.outputBuffer = this._intermediateBuffer, this.transposer.inputBuffer = this._intermediateBuffer, this.transposer.outputBuffer = this._outputBuffer) : this._outputBuffer != this.stretch.outputBuffer && (this.transposer.inputBuffer = this._inputBuffer, this.transposer.outputBuffer = this._intermediateBuffer, this.stretch.inputBuffer = this._intermediateBuffer, this.stretch.outputBuffer = this._outputBuffer);
  }
  process() {
    this._rate > 1 ? (this.stretch.process(), this.transposer.process()) : (this.transposer.process(), this.stretch.process());
  }
}
class W {
  constructor(t) {
    this.buffer = t, this._position = 0;
  }
  get dualChannel() {
    return this.buffer.numberOfChannels > 1;
  }
  get position() {
    return this._position;
  }
  set position(t) {
    this._position = t;
  }
  extract(t, e = 0, s = 0) {
    this.position = s;
    let i = this.buffer.getChannelData(0), r = this.dualChannel ? this.buffer.getChannelData(1) : this.buffer.getChannelData(0), o = 0;
    for (; o < e; o++)
      t[o * 2] = i[o + s], t[o * 2 + 1] = r[o + s];
    return Math.min(e, i.length - s);
  }
}
const D = function(n, t, e = d, s = 4096) {
  const i = n.createScriptProcessor(s, 2, 2), r = new Float32Array(s * 2);
  return i.onaudioprocess = (o) => {
    let h = o.outputBuffer.getChannelData(0), a = o.outputBuffer.getChannelData(1), f = t.extract(r, s);
    e(t.sourcePosition), f === 0 && t.onEnd();
    let u = 0;
    for (; u < f; u++)
      h[u] = r[u * 2], a[u] = r[u * 2 + 1];
  }, i;
}, N = function(n, t, e) {
  return e = e || "0", n = n + "", n.length >= t ? n : new Array(t - n.length + 1).join(e) + n;
}, P = function(n) {
  const t = Math.floor(n / 60), e = n - t * 60;
  return `${t}:${N(parseInt(e), 2)}`;
}, F = function(n) {
  const t = this.timePlayed, e = this.sampleRate;
  if (this.sourcePosition = n, this.timePlayed = n / e, t !== this.timePlayed) {
    const s = new CustomEvent("play", {
      detail: {
        timePlayed: this.timePlayed,
        formattedTimePlayed: this.formattedTimePlayed,
        percentagePlayed: this.percentagePlayed
      }
    });
    this._node.dispatchEvent(s);
  }
};
class Q {
  constructor(t, e, s, i = d) {
    this._soundtouch = new S();
    const r = new W(e);
    this.timePlayed = 0, this.sourcePosition = 0, this._filter = new M(r, this._soundtouch, i), this._node = D(t, this._filter, (o) => F.call(this, o), s), this.tempo = 1, this.rate = 1, this.duration = e.duration, this.sampleRate = t.sampleRate, this.listeners = [];
  }
  get formattedDuration() {
    return P(this.duration);
  }
  get formattedTimePlayed() {
    return P(this.timePlayed);
  }
  get percentagePlayed() {
    return 100 * this._filter.sourcePosition / (this.duration * this.sampleRate);
  }
  set percentagePlayed(t) {
    this._filter.sourcePosition = parseInt(t * this.duration * this.sampleRate), this.sourcePosition = this._filter.sourcePosition, this.timePlayed = this.sourcePosition / this.sampleRate;
  }
  get node() {
    return this._node;
  }
  set pitch(t) {
    this._soundtouch.pitch = t;
  }
  set pitchSemitones(t) {
    this._soundtouch.pitchSemitones = t;
  }
  set rate(t) {
    this._soundtouch.rate = t;
  }
  set tempo(t) {
    this._soundtouch.tempo = t;
  }
  connect(t) {
    this._node.connect(t);
  }
  disconnect() {
    this._node.disconnect();
  }
  on(t, e) {
    this.listeners.push({
      name: t,
      cb: e
    }), this._node.addEventListener(t, (s) => e(s.detail));
  }
  off(t = null) {
    let e = this.listeners;
    t && (e = e.filter((s) => s.name === t)), e.forEach((s) => {
      this._node.removeEventListener(s.name, (i) => s.cb(i.detail));
    });
  }
}
export {
  E as AbstractFifoSamplePipe,
  Q as PitchShifter,
  _ as RateTransposer,
  M as SimpleFilter,
  S as SoundTouch,
  v as Stretch,
  W as WebAudioBufferSource,
  D as getWebAudioNode
};
