/**
 * Procedural sound effects for the chanbara demo.
 *
 * Everything is synthesized with the Web Audio API (no asset files):
 *   voice -> [pan] -> master gain -> slow-mo low-pass -> compressor -> speakers
 *                 \-> hall send -> convolver (procedural IR) -> master
 *
 * The module is defensive: if Web Audio is missing or anything throws, every
 * public method silently becomes a no-op.
 */

export type SfxName =
  | 'swingLight' | 'swingHeavy' | 'swingThrust' | 'swingEnemy'
  | 'hitFlesh' | 'hitHeavy' | 'hitEffective'
  | 'block' | 'deflect' | 'bounce' | 'glance' | 'haft' | 'bash'
  | 'flow' | 'issen' | 'finisher' | 'finisherImpact'
  | 'guardBreak' | 'postureBreak' | 'perfectDodge' | 'dodge'
  | 'bowDraw' | 'bowRelease' | 'bowPerfect' | 'arrowHit' | 'arrowHeadshot' | 'arrowBlock' | 'arrowWhiz'
  | 'glintBlue' | 'glintRed'
  | 'kill' | 'resolve' | 'heal' | 'fear' | 'shieldOpen' | 'armorShatter'
  | 'standoffTension' | 'standoffStrike'
  | 'waveStart' | 'waveClear' | 'victory' | 'defeat'
  | 'footstep' | 'uiSelect' | 'fireIgnite';

export interface PlayOpts { volume?: number; pitch?: number; pan?: number }

const NOISE_SECONDS = 2;
const RATE_LIMIT_MS = 25;
const MAX_VOICES = 64;
const SILENT = 0.0001;

const clamp = (v: number, lo: number, hi: number): number =>
  Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : lo;
const rand = (lo: number, hi: number): number => lo + Math.random() * (hi - lo);
const nowMs = (): number => (typeof performance !== 'undefined' ? performance.now() : Date.now());

function safeDisconnect(n: AudioNode): void {
  try { n.disconnect(); } catch { /* already disconnected */ }
}

function chain(...nodes: AudioNode[]): void {
  for (let i = 0; i < nodes.length - 1; i++) nodes[i].connect(nodes[i + 1]);
}

// Small node factories keep the graph code terse.
function gainNode(ctx: BaseAudioContext, value: number): GainNode {
  const g = ctx.createGain();
  g.gain.value = value;
  return g;
}
function filterNode(ctx: BaseAudioContext, type: BiquadFilterType, f: number, q = 0.7): BiquadFilterNode {
  const b = ctx.createBiquadFilter();
  b.type = type; b.frequency.value = f; b.Q.value = q;
  return b;
}
function oscNode(ctx: BaseAudioContext, f: number, type: OscillatorType = 'sine'): OscillatorNode {
  const o = ctx.createOscillator();
  o.type = type; o.frequency.value = f;
  return o;
}
function noiseNode(ctx: BaseAudioContext, buf: AudioBuffer): AudioBufferSourceNode {
  const s = ctx.createBufferSource();
  s.buffer = buf; s.loop = true;
  return s;
}

function panNode(ctx: BaseAudioContext, pan: number): StereoPannerNode | null {
  if (typeof ctx.createStereoPanner !== 'function') return null;
  const p = ctx.createStereoPanner();
  p.pan.value = clamp(pan, -1, 1);
  return p;
}

// ---------------------------------------------------------------------------
// Voice: one play() call. Builds short-lived layers into its own bus and tears
// everything down once every source has ended.
// ---------------------------------------------------------------------------

interface Env {
  at?: number; // start offset (s)
  a?: number;  // linear attack (s)
  h?: number;  // hold at peak (s)
  d: number;   // exponential decay (s)
  g: number;   // peak gain (roughly peak amplitude)
}

interface ToneOpts extends Env {
  f: number;
  f2?: number;            // glide target
  st?: number;            // glide time (default: whole note)
  type?: OscillatorType;
  filt?: [BiquadFilterType, number, number?]; // static filter: type, freq, Q
  vib?: [number, number]; // vibrato: rate Hz, depth cents
}

interface NoiseOpts extends Env {
  f: number;              // filter frequency
  f2?: number;            // sweep target (reached at st)
  f3?: number;            // second sweep target (reached at the end)
  st?: number;
  q?: number;
  type?: BiquadFilterType; // default bandpass
}

class Voice {
  private pending = 0;
  private done = false;

  constructor(
    private readonly ctx: BaseAudioContext,
    private readonly noiseBuf: AudioBuffer,
    private readonly out: AudioNode,
    private readonly busNodes: AudioNode[],
    private readonly t: number,
    private readonly p: number,
    private readonly onDone: () => void,
  ) {}

  /** Pitch-scale and clamp a frequency into the valid range. */
  private hz(f: number): number {
    return clamp(f * this.p, 20, this.ctx.sampleRate / 2 - 100);
  }

  private env(o: Env): { g: GainNode; t0: number; end: number } {
    const t0 = this.t + (o.at ?? 0);
    const a = Math.max(0.001, o.a ?? 0.002);
    const h = o.h ?? 0;
    const end = t0 + a + h + Math.max(0.005, o.d);
    const peak = Math.max(SILENT * 2, o.g);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(SILENT, t0);
    g.gain.linearRampToValueAtTime(peak, t0 + a);
    if (h > 0) g.gain.setValueAtTime(peak, t0 + a + h);
    g.gain.exponentialRampToValueAtTime(SILENT, end);
    return { g, t0, end };
  }

  /** Schedule the stop and disconnect the source's chain once it has ended. */
  private track(src: AudioScheduledSourceNode, nodes: AudioNode[], end: number): void {
    src.stop(end + 0.02);
    this.pending++;
    src.onended = () => {
      safeDisconnect(src);
      nodes.forEach(safeDisconnect);
      if (--this.pending <= 0) this.settle();
    };
  }

  /** Release the bus once nothing is left playing. */
  settle(): void {
    if (this.pending > 0 || this.done) return;
    this.done = true;
    this.busNodes.forEach(safeDisconnect);
    this.onDone();
  }

  tone(o: ToneOpts): void {
    const ctx = this.ctx;
    const { g, t0, end } = this.env(o);
    const osc = oscNode(ctx, this.hz(o.f), o.type);
    osc.frequency.setValueAtTime(this.hz(o.f), t0);
    if (o.f2 !== undefined) {
      osc.frequency.exponentialRampToValueAtTime(this.hz(o.f2), t0 + (o.st ?? end - t0));
    }
    const bq = o.filt ? filterNode(ctx, o.filt[0], this.hz(o.filt[1]), o.filt[2]) : null;
    if (bq) chain(osc, bq, g, this.out);
    else chain(osc, g, this.out);
    if (o.vib) {
      const lfo = oscNode(ctx, o.vib[0]);
      const depth = gainNode(ctx, o.vib[1]);
      lfo.connect(depth);
      depth.connect(osc.detune);
      lfo.start(t0);
      this.track(lfo, [depth], end);
    }
    osc.start(t0);
    this.track(osc, bq ? [bq, g] : [g], end);
  }

  noise(o: NoiseOpts): void {
    const ctx = this.ctx;
    const { g, t0, end } = this.env(o);
    const type = o.type ?? 'bandpass';
    const q = o.q ?? (type === 'bandpass' ? 1 : 0.7);
    const bq = filterNode(ctx, type, this.hz(o.f), q);
    bq.frequency.setValueAtTime(this.hz(o.f), t0);
    if (o.f2 !== undefined) {
      const st = o.st ?? (o.f3 !== undefined ? (end - t0) / 2 : end - t0);
      bq.frequency.exponentialRampToValueAtTime(this.hz(o.f2), t0 + st);
      if (o.f3 !== undefined) bq.frequency.exponentialRampToValueAtTime(this.hz(o.f3), end);
    }
    // Normalise loudness by pass-band width so `g` means roughly the same for a
    // narrow resonant band as for a wide one.
    const nyq = ctx.sampleRate / 2;
    const fc = this.hz(o.f2 !== undefined ? Math.sqrt(o.f * o.f2) : o.f);
    const bw = type === 'bandpass' ? fc / q : type === 'highpass' ? nyq - fc : fc;
    const norm = gainNode(ctx, clamp(0.5 * Math.sqrt(nyq / Math.max(bw, 1)), 0.5, 6));
    const src = noiseNode(ctx, this.noiseBuf);
    chain(src, bq, norm, g, this.out);
    src.start(t0, Math.random() * (NOISE_SECONDS - 0.2));
    this.track(src, [bq, norm, g], end);
  }
}

// ---------------------------------------------------------------------------
// Sound recipes
// ---------------------------------------------------------------------------

/** Inharmonic struck-metal partials; higher partials are quieter and die faster. */
function metal(v: Voice, base: number, ratios: number[], decay: number, g: number, at = 0): void {
  ratios.forEach((r, i) => {
    v.tone({ f: base * r * rand(0.998, 1.002), at, a: 0.001, d: decay / (1 + i * 0.5), g: g / (1 + i * 0.6) });
  });
}

const SOUNDS: Record<SfxName, (v: Voice) => void> = {
  // --- Swings: band-passed noise whooshes that sweep up then settle -------
  swingLight: (v) => v.noise({ f: 600, f2: 2600, f3: 1400, st: 0.06, q: 1.4, a: 0.025, d: 0.13, g: 0.6 }),
  swingHeavy: (v) => {
    v.noise({ f: 280, f2: 1500, f3: 600, st: 0.12, q: 1.1, a: 0.07, d: 0.26, g: 0.6 });
    v.noise({ type: 'lowpass', f: 450, a: 0.08, d: 0.22, g: 0.25 });
  },
  swingThrust: (v) => {
    v.noise({ f: 1800, f2: 3800, q: 2.2, a: 0.008, d: 0.075, g: 0.75 });
    v.noise({ type: 'highpass', f: 5000, a: 0.004, d: 0.03, g: 0.35 });
  },
  swingEnemy: (v) => v.noise({ f: 420, f2: 1900, f3: 900, st: 0.08, q: 1.2, a: 0.04, d: 0.18, g: 0.5 }),

  // --- Flesh: low thump + crunch -----------------------------------------
  hitFlesh: (v) => {
    v.tone({ f: 120, f2: 45, st: 0.12, d: 0.16, g: 0.85 });
    v.noise({ type: 'lowpass', f: 2200, f2: 400, d: 0.08, g: 0.5 });
    v.noise({ f: 1000, q: 1.2, d: 0.045, g: 0.3 });
  },
  hitHeavy: (v) => {
    v.tone({ f: 95, f2: 34, st: 0.22, d: 0.3, g: 1 });
    v.tone({ type: 'triangle', f: 62, f2: 30, d: 0.24, g: 0.35 });
    v.noise({ type: 'lowpass', f: 1500, f2: 220, d: 0.18, g: 0.6 });
    v.noise({ f: 2600, q: 1.5, d: 0.04, g: 0.3 });
  },
  hitEffective: (v) => {
    SOUNDS.hitFlesh(v);
    v.noise({ type: 'highpass', f: 3200, d: 0.03, g: 0.55 });
    v.noise({ f: 5200, f2: 1800, q: 3, d: 0.09, g: 0.3 });
    v.tone({ type: 'square', f: 1600, f2: 500, d: 0.045, g: 0.07 });
  },

  // --- Metal & wood contacts ---------------------------------------------
  block: (v) => {
    metal(v, 520, [1, 2.41, 3.93], 0.13, 0.3);
    v.noise({ f: 1800, q: 1.4, d: 0.05, g: 0.5 });
    v.tone({ f: 190, f2: 120, d: 0.08, g: 0.35 });
  },
  deflect: (v) => {
    // The signature "hajiki": sharp transient + long ringing inharmonic partials.
    const b = rand(1000, 1300);
    v.noise({ type: 'highpass', f: 2800, d: 0.035, g: 1 });
    v.noise({ f: 6500, q: 2, d: 0.07, g: 0.35 });
    metal(v, b, [1, 2.76, 5.4, 8.93], 1.1, 0.42);
    v.tone({ f: b * 1.006, d: 0.9, g: 0.15 }); // slow beating against the fundamental
  },
  bounce: (v) => {
    v.tone({ f: 230, f2: 140, d: 0.1, g: 0.6 });
    v.noise({ f: 750, q: 2, d: 0.06, g: 0.45 });
    metal(v, 720, [1, 2.32, 4.1], 0.28, 0.13, 0.004);
  },
  glance: (v) => {
    v.noise({ f: 3000, f2: 4400, q: 9, a: 0.01, d: 0.15, g: 0.5 });
    v.noise({ f: 5600, f2: 4800, q: 12, a: 0.015, d: 0.13, g: 0.3 });
    v.noise({ type: 'highpass', f: 6000, d: 0.02, g: 0.2 });
  },
  haft: (v) => {
    v.tone({ f: 400, f2: 260, d: 0.06, g: 0.5 });
    v.tone({ type: 'triangle', f: 950, d: 0.03, g: 0.18 });
    v.noise({ f: 1300, q: 3, d: 0.04, g: 0.4 });
  },
  bash: (v) => {
    v.tone({ f: 140, f2: 52, st: 0.14, d: 0.2, g: 0.95 });
    v.noise({ type: 'lowpass', f: 1000, f2: 200, d: 0.13, g: 0.55 });
    v.noise({ f: 520, q: 1.6, d: 0.08, g: 0.4 });
    metal(v, 410, [1, 2.7], 0.16, 0.08);
  },

  // --- Techniques -----------------------------------------------------------
  flow: (v) => {
    v.noise({ f: 1100, f2: 5200, q: 4, a: 0.06, d: 0.26, g: 0.45 });
    metal(v, 1760, [1, 2.76, 5.4], 0.55, 0.12, 0.08);
  },
  issen: (v) => {
    v.noise({ type: 'highpass', f: 5000, d: 0.05, g: 0.5 });
    v.noise({ f: 1800, f2: 9500, q: 12, a: 0.005, d: 0.38, g: 0.7 }); // "shing"
    metal(v, 2350, [1, 2.76, 5.4], 1.4, 0.13, 0.01);
    v.tone({ f: 72, f2: 28, st: 0.5, a: 0.004, d: 0.95, g: 1 });       // boom
    v.tone({ f: 44, a: 0.02, d: 1.3, g: 0.4 });                        // sub
    v.noise({ f: 3000, f2: 1400, q: 0.7, at: 0.05, a: 0.3, d: 1.8, g: 0.12 }); // airy tail
  },
  finisher: (v) => {
    v.tone({ type: 'sawtooth', f: 55, filt: ['lowpass', 320], a: 0.75, d: 0.45, g: 0.22 });
    v.tone({ type: 'sawtooth', f: 55.6, filt: ['lowpass', 320], a: 0.75, d: 0.45, g: 0.22 });
    v.tone({ f: 110, f2: 138, a: 0.7, d: 0.4, g: 0.1 });
    v.noise({ type: 'lowpass', f: 250, f2: 700, a: 0.75, d: 0.4, g: 0.2 });
  },
  finisherImpact: (v) => {
    v.noise({ f: 1500, f2: 6000, q: 3, d: 0.12, g: 0.55 });
    SOUNDS.hitHeavy(v);
    v.tone({ f: 60, f2: 24, st: 0.6, d: 1, g: 0.9 });
    v.noise({ type: 'lowpass', f: 320, d: 0.55, g: 0.3 });
  },
  guardBreak: (v) => {
    metal(v, 380, [1, 2.2, 3.71, 5.93], 0.38, 0.36);
    v.noise({ f: 1500, q: 1, d: 0.1, g: 0.7 });
    v.noise({ type: 'lowpass', f: 700, f2: 150, d: 0.22, g: 0.5 });
    v.tone({ f: 110, f2: 48, d: 0.26, g: 0.9 });
  },
  postureBreak: (v) => {
    v.tone({ f: 92, f2: 34, st: 0.4, d: 0.75, g: 1 });
    v.noise({ type: 'lowpass', f: 260, d: 0.4, g: 0.3 });
    metal(v, 660, [1, 2.76, 5.4], 1, 0.16, 0.02);
  },
  perfectDodge: (v) => {
    v.noise({ f: 500, f2: 3200, f3: 1500, st: 0.12, q: 1.5, a: 0.05, d: 0.3, g: 0.4 });
    v.tone({ f: 2093, at: 0.05, d: 0.6, g: 0.13 });
    v.tone({ f: 3136, at: 0.1, d: 0.45, g: 0.08 });
  },
  dodge: (v) => {
    v.noise({ f: 900, f2: 2200, f3: 1200, st: 0.07, q: 0.9, a: 0.03, d: 0.15, g: 0.3 });
    v.noise({ type: 'lowpass', f: 700, d: 0.1, g: 0.12 });
  },

  // --- Bow ----------------------------------------------------------------
  bowDraw: (v) => {
    v.tone({ type: 'sawtooth', f: 34, f2: 56, filt: ['bandpass', 900, 4], a: 0.05, d: 0.3, g: 0.7 });
    v.noise({ f: 600, f2: 900, q: 6, a: 0.05, d: 0.3, g: 0.12 });
  },
  bowRelease: (v) => {
    v.tone({ type: 'triangle', f: 165, f2: 112, st: 0.08, d: 0.35, g: 0.6 });
    v.tone({ f: 330, f2: 225, st: 0.06, d: 0.2, g: 0.2 });
    v.noise({ f: 2000, q: 1, d: 0.05, g: 0.35 });
    v.noise({ type: 'highpass', f: 1500, at: 0.01, d: 0.1, g: 0.2 });
  },
  bowPerfect: (v) => {
    SOUNDS.bowRelease(v);
    v.tone({ f: 2637, at: 0.02, d: 0.7, g: 0.14 });
    v.tone({ f: 3951, at: 0.04, d: 0.45, g: 0.07 });
  },
  arrowWhiz: (v) => {
    v.tone({ f: 2700, f2: 1300, a: 0.06, d: 0.34, g: 0.08 });
    v.noise({ f: 3200, f2: 1500, q: 6, a: 0.06, d: 0.34, g: 0.3 });
  },
  arrowHit: (v) => {
    v.tone({ f: 210, f2: 90, d: 0.09, g: 0.7 });
    v.noise({ f: 850, q: 2, d: 0.05, g: 0.45 });
    v.tone({ type: 'triangle', f: 430, f2: 300, d: 0.14, g: 0.08, vib: [38, 30] }); // shaft wobble
  },
  arrowHeadshot: (v) => {
    v.noise({ type: 'highpass', f: 2600, d: 0.025, g: 0.75 });
    v.noise({ f: 1500, q: 1, d: 0.05, g: 0.35 });
    SOUNDS.arrowHit(v);
  },
  arrowBlock: (v) => {
    metal(v, 2200, [1, 2.76, 5.4], 0.18, 0.16);
    v.noise({ type: 'highpass', f: 4000, d: 0.02, g: 0.4 });
  },

  // --- Telegraph glints ----------------------------------------------------
  glintBlue: (v) => {
    v.tone({ f: 2500, d: 0.35, g: 0.42 });
    v.tone({ f: 5000, d: 0.15, g: 0.1 });
  },
  glintRed: (v) => {
    v.tone({ type: 'sawtooth', f: 220, filt: ['lowpass', 1400], a: 0.01, h: 0.12, d: 0.17, g: 0.2 });
    v.tone({ type: 'sawtooth', f: 227, filt: ['lowpass', 1400], a: 0.01, h: 0.12, d: 0.17, g: 0.2 });
    v.tone({ type: 'square', f: 110, filt: ['lowpass', 600], d: 0.3, g: 0.1 });
  },

  // --- State & feedback ------------------------------------------------------
  kill: (v) => {
    v.tone({ f: 90, f2: 45, d: 0.25, g: 0.5 });
    v.noise({ type: 'lowpass', f: 300, d: 0.15, g: 0.2 });
  },
  resolve: (v) => {
    [880, 1320, 1760, 2640].forEach((f, i) => v.tone({ f, f2: f * 1.05, at: i * 0.06, a: 0.02, d: 0.6, g: 0.08 }));
    v.noise({ f: 3000, f2: 6500, q: 2, a: 0.2, d: 0.4, g: 0.05 });
  },
  heal: (v) => {
    v.tone({ f: 330, a: 0.25, d: 0.6, g: 0.15, vib: [4, 6] });
    v.tone({ f: 495, a: 0.3, d: 0.6, g: 0.1 });
    v.tone({ type: 'triangle', f: 660, a: 0.35, d: 0.5, g: 0.05 });
  },
  fear: (v) => {
    v.noise({ type: 'lowpass', f: 150, a: 0.3, h: 0.4, d: 0.8, g: 0.14 });
    v.tone({ f: 45, a: 0.3, h: 0.3, d: 0.9, g: 0.16, vib: [6, 40] });
    v.tone({ type: 'sawtooth', f: 58, f2: 50, filt: ['lowpass', 200], a: 0.4, d: 0.8, g: 0.1 });
  },
  shieldOpen: (v) => {
    v.noise({ f: 1800, q: 1, d: 0.03, g: 0.7 });
    v.noise({ f: 700, q: 3, d: 0.1, g: 0.35 });
    v.tone({ f: 260, f2: 140, d: 0.1, g: 0.4 });
    v.noise({ f: 2400, q: 1.2, at: 0.04, d: 0.025, g: 0.45 }); // second splinter
  },
  armorShatter: (v) => {
    for (let i = 0; i < 6; i++) metal(v, rand(700, 3500), [1, 2.76], rand(0.2, 0.6), 0.1, rand(0, 0.08));
    v.noise({ type: 'highpass', f: 2000, d: 0.4, g: 0.55 });
    v.noise({ f: 800, d: 0.2, g: 0.55 });
    v.tone({ f: 120, f2: 50, d: 0.2, g: 0.5 });
  },
  standoffTension: (v) => {
    v.tone({ type: 'sawtooth', f: 55, filt: ['lowpass', 260], a: 1.4, h: 0.3, d: 0.6, g: 0.18 });
    v.tone({ type: 'sawtooth', f: 55.4, filt: ['lowpass', 260], a: 1.4, h: 0.3, d: 0.6, g: 0.18 });
    v.tone({ f: 110, a: 1.4, h: 0.2, d: 0.6, g: 0.08, vib: [0.8, 10] });
    v.noise({ f: 200, q: 2, a: 1.5, h: 0.2, d: 0.6, g: 0.12 });
    v.tone({ f: 1760, a: 1.6, d: 0.5, g: 0.02, vib: [5, 8] }); // thin high tension
  },
  standoffStrike: (v) => {
    v.noise({ f: 2500, f2: 8500, q: 6, d: 0.15, g: 0.7 });
    v.noise({ type: 'highpass', f: 4000, d: 0.04, g: 0.5 });
    v.tone({ f: 66, f2: 25, st: 0.5, d: 1, g: 1 });
    v.noise({ type: 'lowpass', f: 400, d: 0.6, g: 0.3 });
  },
  waveStart: (v) => {
    // Taiko: membrane pitch drop + stick slap + skin.
    v.tone({ f: 120, f2: 50, st: 0.25, d: 0.6, g: 1 });
    v.tone({ f: 185, f2: 75, st: 0.12, d: 0.25, g: 0.3 });
    v.noise({ type: 'lowpass', f: 1300, f2: 300, d: 0.08, g: 0.55 });
    v.noise({ f: 250, q: 1, d: 0.3, g: 0.2 });
  },
  waveClear: (v) => {
    // Shakuhachi-ish: breathy D5 that bends up into pitch, with vibrato.
    v.tone({ f: 565, f2: 587.33, st: 0.18, a: 0.15, h: 0.45, d: 0.6, g: 0.15, vib: [5, 12] });
    v.tone({ f: 1130, f2: 1174.66, st: 0.18, a: 0.15, h: 0.45, d: 0.5, g: 0.025 });
    v.noise({ f: 1200, q: 3, a: 0.1, h: 0.4, d: 0.5, g: 0.08 });
  },
  victory: (v) => {
    // Koto-like plucks, D minor pentatonic: A4 C5 D5 over a low D.
    [440, 523.25, 587.33].forEach((f, i) => {
      const last = i === 2;
      v.tone({ type: 'triangle', f, at: i * 0.2, d: last ? 1.3 : 0.55, g: 0.3, vib: last ? [5.5, 10] : undefined });
      v.tone({ f: f * 2, at: i * 0.2, d: last ? 0.8 : 0.3, g: 0.08 });
      v.noise({ f: f * 4, q: 4, at: i * 0.2, d: 0.02, g: 0.12 });
    });
    v.tone({ type: 'triangle', f: 146.83, at: 0.4, d: 1.2, g: 0.15 });
  },
  defeat: (v) => {
    v.tone({ type: 'triangle', f: 220, f2: 110, a: 0.05, d: 1.4, g: 0.25 });
    v.tone({ f: 110, f2: 55, a: 0.05, d: 1.5, g: 0.3 });
    v.tone({ type: 'sawtooth', f: 222, f2: 111, filt: ['lowpass', 500], a: 0.05, d: 1.3, g: 0.06 });
  },
  footstep: (v) => {
    v.noise({ f: 1400, q: 0.8, a: 0.01, d: 0.06, g: 0.14 });
    v.noise({ type: 'lowpass', f: 500, d: 0.05, g: 0.08 });
  },
  uiSelect: (v) => {
    v.tone({ f: 1800, d: 0.03, g: 0.15 });
    v.noise({ type: 'highpass', f: 5000, d: 0.01, g: 0.1 });
  },
  fireIgnite: (v) => {
    v.noise({ type: 'lowpass', f: 300, f2: 2200, a: 0.15, d: 0.5, g: 0.35 });
    for (let i = 0; i < 8; i++) {
      v.noise({ type: 'highpass', f: rand(2500, 5000), at: rand(0, 0.6), d: rand(0.01, 0.022), g: rand(0.2, 0.4) });
    }
  },
};

/** Reverb send per sound (0..1) — the cinematic hall for the big moments. */
const HALL: Partial<Record<SfxName, number>> = {
  deflect: 0.35, issen: 0.6, finisher: 0.35, finisherImpact: 0.45, postureBreak: 0.35,
  guardBreak: 0.2, standoffTension: 0.45, standoffStrike: 0.55, waveStart: 0.45, waveClear: 0.4,
  victory: 0.35, defeat: 0.4, perfectDodge: 0.25, flow: 0.2, glintBlue: 0.2, glintRed: 0.15,
  bowPerfect: 0.2, resolve: 0.3, heal: 0.25, fear: 0.25, armorShatter: 0.3, kill: 0.1,
};

/** Musical / signalling sounds that should not get random pitch variation. */
const STEADY: ReadonlySet<SfxName> = new Set<SfxName>([
  'victory', 'defeat', 'waveClear', 'uiSelect', 'glintBlue', 'glintRed', 'heal', 'resolve',
]);

// ---------------------------------------------------------------------------
// Buffers
// ---------------------------------------------------------------------------

function makeNoise(ctx: BaseAudioContext): AudioBuffer {
  const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * NOISE_SECONDS), ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return buf;
}

/** Hall impulse response: decaying stereo noise that also darkens over time. */
function makeImpulse(ctx: BaseAudioContext, seconds: number, decay: number): AudioBuffer {
  const len = Math.floor(ctx.sampleRate * seconds);
  const pre = Math.floor(ctx.sampleRate * 0.012);
  const buf = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let c = 0; c < 2; c++) {
    const d = buf.getChannelData(c);
    let lp = 0;
    for (let i = pre; i < len; i++) {
      const x = i / len;
      lp += (Math.random() * 2 - 1 - lp) * (0.85 - 0.7 * x); // one-pole LP closing over time
      d[i] = lp * Math.pow(1 - x, decay);
    }
  }
  return buf;
}

/** Fade a looping sub-graph out, then stop and disconnect all of it. */
function fadeAndStop(ctx: BaseAudioContext, out: GainNode, srcs: AudioScheduledSourceNode[], nodes: AudioNode[], fade: number): void {
  const t = ctx.currentTime;
  out.gain.cancelScheduledValues(t);
  out.gain.setValueAtTime(out.gain.value, t);
  out.gain.linearRampToValueAtTime(0, t + fade);
  srcs[0].onended = () => [...srcs, ...nodes, out].forEach(safeDisconnect);
  srcs.forEach((s) => s.stop(t + fade + 0.05));
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

interface Loop {
  out: GainNode;
  srcs: AudioScheduledSourceNode[];
  nodes: AudioNode[];
}
interface Ambience extends Loop { wind: AudioBufferSourceNode; timer: number }
interface DrawLoop extends Loop { noiseF: BiquadFilterNode; saw: OscillatorNode; sawF: BiquadFilterNode; lfo: OscillatorNode }

export class Sfx {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private slowLp: BiquadFilterNode | null = null;
  private hallIn: AudioNode | null = null;
  private noiseBuf: AudioBuffer | null = null;
  private volume = 0.8;
  private muted = false;
  private timeScale = 1;
  private active = 0;
  private disabled = false;
  private readonly last = new Map<SfxName, number>();
  private amb: Ambience | null = null;
  private ambWanted = false;
  private draw: DrawLoop | null = null;

  constructor() { /* the AudioContext is created lazily in unlock() */ }

  /** Create/resume the AudioContext. Called from a user gesture (click/keydown). Safe to call many times. */
  unlock(): void {
    if (this.disabled) return;
    try {
      if (this.ctx && this.ctx.state === 'closed') this.teardown();
      if (!this.ctx) {
        const w = (typeof window !== 'undefined' ? window : undefined) as
          | { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext }
          | undefined;
        const Ctor = w?.AudioContext ?? w?.webkitAudioContext;
        if (!Ctor) { this.disabled = true; return; }
        this.ctx = new Ctor();
        this.build(this.ctx);
      }
      if (this.ctx.state !== 'running') {
        this.ctx.resume().then(() => { if (this.ambWanted) this.buildAmbience(); }, () => { /* ignore */ });
      }
      if (this.ambWanted) this.buildAmbience();
    } catch {
      this.teardown();
      this.disabled = true;
    }
  }

  get ready(): boolean {
    return !!this.ctx && !!this.master && this.ctx.state === 'running';
  }

  setMasterVolume(v: number): void {
    this.volume = clamp(v, 0, 1);
    this.applyMaster();
  }

  setMuted(m: boolean): void {
    this.muted = !!m;
    this.applyMaster();
  }

  play(name: SfxName, opts: PlayOpts = {}): void {
    const { ctx, master, noiseBuf } = this;
    if (!ctx || !master || !noiseBuf || ctx.state !== 'running') return;
    const recipe = SOUNDS[name];
    if (!recipe) return;
    let voice: Voice | null = null;
    try {
      const now = nowMs();
      if (now - (this.last.get(name) ?? -Infinity) < RATE_LIMIT_MS) return;
      if (this.active >= MAX_VOICES) return;
      const vol = clamp(opts.volume ?? 1, 0, 4);
      if (vol <= 0) return;
      this.last.set(name, now);

      let pitch = clamp(opts.pitch ?? 1, 0.25, 4);
      if (!STEADY.has(name)) pitch *= rand(0.97, 1.03); // natural variation

      const bus = gainNode(ctx, vol);
      const pan = opts.pan ? panNode(ctx, opts.pan) : null;
      const busNodes: AudioNode[] = pan ? [bus, pan] : [bus];
      const tail = busNodes[busNodes.length - 1];
      tail.connect(master);
      if (pan) bus.connect(pan);
      const send = HALL[name];
      if (send && this.hallIn) {
        const s = gainNode(ctx, send);
        chain(tail, s, this.hallIn);
        busNodes.push(s);
      }

      this.active++;
      voice = new Voice(ctx, noiseBuf, bus, busNodes, ctx.currentTime + 0.005, pitch, () => { this.active--; });
      recipe(voice);
      voice.settle();
    } catch {
      voice?.settle();
    }
  }

  /** Looping wind (filtered noise with slow LFO gusts) + sparse dusk crickets; idempotent. */
  startAmbience(): void {
    this.ambWanted = true;
    this.buildAmbience();
  }

  stopAmbience(): void {
    this.ambWanted = false;
    const amb = this.amb;
    this.amb = null;
    if (!amb || !this.ctx) return;
    try {
      window.clearTimeout(amb.timer);
      fadeAndStop(this.ctx, amb.out, amb.srcs, amb.nodes, 0.4);
    } catch { /* ignore */ }
  }

  /** Continuous bow-string creak while drawing; t in 0..1 is draw amount, null stops it. */
  setDrawTension(t: number | null): void {
    const ctx = this.ctx;
    if (!ctx) return;
    try {
      if (t === null || !Number.isFinite(t)) {
        const d = this.draw;
        this.draw = null;
        if (d) fadeAndStop(ctx, d.out, d.srcs, d.nodes, 0.08);
        return;
      }
      if (ctx.state !== 'running') return;
      const d = this.draw ?? (this.draw = this.buildDraw(ctx));
      if (!d) return;
      // A tighter string creaks higher, faster and louder.
      const x = clamp(t, 0, 1);
      const now = ctx.currentTime;
      const ramp = (p: AudioParam, v: number): void => { p.setTargetAtTime(v, now, 0.05); };
      ramp(d.out.gain, 0.1 + 0.55 * x);
      ramp(d.noiseF.frequency, 380 + x * 900);
      ramp(d.saw.frequency, 20 + x * 38);
      ramp(d.sawF.frequency, 700 + x * 1500);
      ramp(d.lfo.frequency, 4 + x * 10);
    } catch { /* ignore */ }
  }

  /** Slow-motion feel: when scale < 1 apply a master low-pass + slight pitch-down of ambience; 1 = normal. Smoothly ramp. */
  setTimeScale(scale: number): void {
    this.timeScale = clamp(scale, 0.05, 1);
    const ctx = this.ctx;
    if (!ctx || !this.slowLp) return;
    try {
      const now = ctx.currentTime;
      const s = this.timeScale;
      const cutoff = s >= 0.999 ? 20000 : Math.max(900, 18000 * s * s);
      this.slowLp.frequency.setTargetAtTime(Math.min(cutoff, ctx.sampleRate / 2 - 100), now, 0.08);
      this.amb?.wind.playbackRate.setTargetAtTime(this.ambRate(), now, 0.15);
    } catch { /* ignore */ }
  }

  // --- internals ------------------------------------------------------------

  private build(ctx: AudioContext): void {
    this.noiseBuf = makeNoise(ctx);
    const master = gainNode(ctx, this.muted ? 0 : this.volume);
    const slowLp = filterNode(ctx, 'lowpass', Math.min(20000, ctx.sampleRate / 2 - 100), 0.5);
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.knee.value = 12; comp.ratio.value = 5;
    comp.attack.value = 0.003; comp.release.value = 0.2;
    chain(master, slowLp, comp, ctx.destination);
    // Hall: convolver with a procedural impulse response, fed by per-voice sends.
    const hall = ctx.createConvolver();
    hall.buffer = makeImpulse(ctx, 2.4, 2.8);
    chain(hall, gainNode(ctx, 0.7), master);
    this.master = master;
    this.slowLp = slowLp;
    this.hallIn = hall;
    this.setTimeScale(this.timeScale);
  }

  private teardown(): void {
    try { window.clearTimeout(this.amb?.timer); } catch { /* ignore */ }
    try { void this.ctx?.close().catch(() => undefined); } catch { /* ignore */ }
    this.ctx = this.master = this.slowLp = this.hallIn = this.noiseBuf = this.amb = this.draw = null;
    this.active = 0;
  }

  private applyMaster(): void {
    if (!this.ctx || !this.master) return;
    try {
      this.master.gain.setTargetAtTime(this.muted ? 0 : this.volume, this.ctx.currentTime, 0.02);
    } catch { /* ignore */ }
  }

  private ambRate(): number {
    return 0.72 + 0.28 * this.timeScale;
  }

  private buildAmbience(): void {
    const { ctx, master, noiseBuf } = this;
    if (!ctx || !master || !noiseBuf || this.amb || ctx.state === 'closed') return;
    try {
      const t = ctx.currentTime;
      const out = gainNode(ctx, 0);
      out.gain.setValueAtTime(0, t);
      out.gain.linearRampToValueAtTime(1, t + 2);
      out.connect(master);
      // Wind body (low-passed noise) + a faint whistling band.
      const wind = noiseNode(ctx, noiseBuf);
      wind.playbackRate.value = this.ambRate();
      const lp = filterNode(ctx, 'lowpass', 520, 0.6);
      const body = gainNode(ctx, 0.055);
      const bp = filterNode(ctx, 'bandpass', 850, 4);
      const whistle = gainNode(ctx, 0.025);
      chain(wind, lp, body, out);
      chain(wind, bp, whistle, out);
      // Slow LFOs: gusts swell the level, drift wanders the filters.
      const gust = oscNode(ctx, 0.07);
      const drift = oscNode(ctx, 0.113);
      const mods: [OscillatorNode, number, AudioParam][] = [
        [gust, 0.038, body.gain], [gust, 0.018, whistle.gain], [drift, 220, lp.frequency], [drift, 300, bp.frequency],
      ];
      const depths = mods.map(([lfo, amount, param]) => {
        const g = gainNode(ctx, amount);
        lfo.connect(g);
        g.connect(param);
        return g;
      });
      wind.start(t, Math.random());
      gust.start(t);
      drift.start(t);
      this.amb = { out, wind, srcs: [wind, gust, drift], nodes: [lp, body, bp, whistle, ...depths], timer: 0 };
      this.scheduleCricket();
    } catch { /* ignore */ }
  }

  private scheduleCricket(): void {
    const amb = this.amb;
    if (!amb) return;
    amb.timer = window.setTimeout(() => {
      if (this.amb !== amb) return;
      this.chirp(amb);
      this.scheduleCricket();
    }, rand(400, 2200));
  }

  /** A single cricket chirp: 2-4 rapid sine pulses around 4-5kHz. */
  private chirp(amb: Ambience): void {
    const ctx = this.ctx;
    if (!ctx || ctx.state !== 'running') return;
    try {
      const t = ctx.currentTime + 0.02;
      const pulses = 2 + Math.floor(Math.random() * 3);
      const peak = rand(0.006, 0.014);
      const osc = oscNode(ctx, rand(4300, 5000) * this.ambRate());
      const g = gainNode(ctx, 0);
      for (let k = 0; k < pulses; k++) {
        const s = t + k * 0.045;
        g.gain.setValueAtTime(0, s);
        g.gain.linearRampToValueAtTime(peak, s + 0.008);
        g.gain.linearRampToValueAtTime(0, s + 0.03);
      }
      const pan = panNode(ctx, rand(-0.8, 0.8));
      const nodes: AudioNode[] = pan ? [g, pan] : [g];
      chain(osc, ...nodes, amb.out);
      osc.onended = () => [osc, ...nodes].forEach(safeDisconnect);
      osc.start(t);
      osc.stop(t + pulses * 0.045 + 0.02);
    } catch { /* ignore */ }
  }

  private buildDraw(ctx: AudioContext): DrawLoop | null {
    if (!this.master || !this.noiseBuf) return null;
    const out = gainNode(ctx, 0);
    const mod = gainNode(ctx, 1); // flutter target
    // Stick-slip creak: slow sawtooth pulse train through a resonant band, plus fibrous noise.
    const saw = oscNode(ctx, 20, 'sawtooth');
    const sawF = filterNode(ctx, 'bandpass', 700, 5);
    const sawG = gainNode(ctx, 0.4);
    const src = noiseNode(ctx, this.noiseBuf);
    const noiseF = filterNode(ctx, 'bandpass', 380, 7);
    const noiseG = gainNode(ctx, 0.3);
    const lfo = oscNode(ctx, 4);
    const lfoAmt = gainNode(ctx, 0.6);
    chain(saw, sawF, sawG, mod);
    chain(src, noiseF, noiseG, mod);
    chain(mod, out, this.master);
    lfo.connect(lfoAmt);
    lfoAmt.connect(mod.gain);
    const t = ctx.currentTime;
    saw.start(t);
    src.start(t, Math.random());
    lfo.start(t);
    return { out, noiseF, saw, sawF, lfo, srcs: [saw, src, lfo], nodes: [mod, sawF, sawG, noiseF, noiseG, lfoAmt] };
  }
}
