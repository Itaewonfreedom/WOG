import type { Archetype, ArchetypeId, DefenseRule } from './types';

const normal: DefenseRule = { result: 'normal', dmgMul: 1, postureMul: 1 };
const eff = (dmgMul: number, postureMul: number): DefenseRule => ({ result: 'effective', dmgMul, postureMul });

// ─────────────────────────────────────────────────────────────────────────────
// 적 상성표 (베기 / 찌르기)
//
//  낭인 검사  : 베기 ○  찌르기 ○   – 기본형. 허초와 파란 돌진 찌르기.
//  방패 무사  : 베기 ✕(정면: 방패에 튕겨남)  찌르기 ◎(방패 틈새)
//  창병       : 베기 ◎(창대를 쳐냄)  찌르기 ✕(정면: 긴 창대에 막힘)
//  갑주 무사  : 베기 △(갑옷에 미끄러짐)  찌르기 ◎(갑옷 틈새)
//  쌍검 시노비: 베기 ◎(넓은 궤적)  찌르기 ✕(몸을 틀어 회피)
//  궁수       : 베기 ○  찌르기 ○   – 활 헤드샷 한 발.
//  대장       : 1막 갑주(찌르기 ◎) → 갑옷이 깨지면 2막 경장(베기 ◎)
// ─────────────────────────────────────────────────────────────────────────────

export const ARCHETYPES: Record<ArchetypeId, Archetype> = {
  ronin: {
    id: 'ronin',
    name: '낭인 검사',
    kanji: '浪人',
    hp: 60,
    posture: 60,
    radius: 0.42,
    speed: 3.6,
    turnRate: 0.14,
    defense: { slash: normal, thrust: normal, blunt: normal },
    arrow: { bodyMul: 1, headMul: 1 },
    weakness: null,
    moves: [
      { move: 'ro_cut1', weight: 5, minRange: 0, maxRange: 2.8 },
      { move: 'ro_lunge', weight: 2, minRange: 2.2, maxRange: 4.6 },
      { move: 'ro_feint', weight: 1, minRange: 0, maxRange: 3.2 },
    ],
    ai: { preferredRange: 2.4, aggression: 0.55, guardChance: 0.35, courage: 0.5, cooldown: [60, 130], comboChance: 0.55, feintChance: 0.15 },
    tip: '낭인 검사 — 베기·찌르기 모두 통한다. 파란 섬광 공격은 막을 수 없으니 튕기기로 받아내라.',
  },
  shield: {
    id: 'shield',
    name: '방패 무사',
    kanji: '盾持',
    hp: 70,
    posture: 80,
    radius: 0.5,
    speed: 3.0,
    turnRate: 0.1,
    defense: {
      slash: { result: 'bounce', dmgMul: 0, postureMul: 0.25, frontalOnly: true },
      thrust: eff(1.25, 2.0),
      blunt: { result: 'effective', dmgMul: 1, postureMul: 1.4 },
    },
    arrow: { bodyMul: 1, headMul: 1, shieldFront: true },
    weakness: 'thrust',
    moves: [
      { move: 'sh_stab', weight: 5, minRange: 0, maxRange: 2.8 },
      { move: 'sh_charge', weight: 2, minRange: 1.5, maxRange: 4.8 },
    ],
    ai: { preferredRange: 2.3, aggression: 0.45, guardChance: 0, courage: 0.7, cooldown: [70, 140], comboChance: 0, feintChance: 0 },
    tip: '방패 무사 — 정면 베기는 방패에 튕겨난다. 찌르기로 방패 틈을 꿰뚫거나, 방패 치기·관통 화살로 방패를 걷어내라.',
  },
  spear: {
    id: 'spear',
    name: '창병',
    kanji: '槍足軽',
    hp: 60,
    posture: 60,
    radius: 0.42,
    speed: 3.3,
    turnRate: 0.11,
    defense: {
      slash: eff(1.2, 2.0),
      thrust: { result: 'haft', dmgMul: 0.25, postureMul: 0.3, frontalOnly: true },
      blunt: normal,
    },
    arrow: { bodyMul: 1, headMul: 1 },
    weakness: 'slash',
    moves: [
      { move: 'sp_thrust', weight: 5, minRange: 1.8, maxRange: 4.5 },
      { move: 'sp_sweep', weight: 2, minRange: 0, maxRange: 4.0 },
    ],
    ai: { preferredRange: 3.6, aggression: 0.5, guardChance: 0, courage: 0.4, cooldown: [60, 120], comboChance: 0.45, feintChance: 0 },
    tip: '창병 — 찌르기는 긴 창대에 막힌다. 베기로 창대를 쳐내며 파고들어라. 빨간 섬광 휩쓸기는 회피나 흘리기로.',
  },
  armored: {
    id: 'armored',
    name: '갑주 무사',
    kanji: '鎧武者',
    hp: 130,
    posture: 110,
    radius: 0.55,
    speed: 2.6,
    turnRate: 0.08,
    defense: {
      slash: { result: 'glance', dmgMul: 0.25, postureMul: 0.45 },
      thrust: eff(1.6, 1.6),
      blunt: { result: 'glance', dmgMul: 0.3, postureMul: 0.6 },
    },
    arrow: { bodyMul: 0.3, headMul: 1.2, glanceBody: true },
    weakness: 'thrust',
    moves: [
      { move: 'ar_cleave', weight: 4, minRange: 0, maxRange: 3.2 },
      { move: 'ar_sweep', weight: 2, minRange: 0, maxRange: 3.3 },
      { move: 'ar_crush', weight: 2, minRange: 1.0, maxRange: 4.2 },
    ],
    ai: { preferredRange: 2.6, aggression: 0.6, guardChance: 0, courage: 0.9, cooldown: [80, 150], comboChance: 0, feintChance: 0 },
    heavyBody: true,
    tip: '갑주 무사 — 베기는 갑옷에 미끄러진다. 찌르기로 갑옷 틈을 노려라. 관통 화살은 갑옷을 뚫는다.',
  },
  duelist: {
    id: 'duelist',
    name: '쌍검 시노비',
    kanji: '双刃',
    hp: 45,
    posture: 45,
    radius: 0.38,
    speed: 4.6,
    turnRate: 0.2,
    defense: {
      slash: eff(1.4, 1.5),
      thrust: { result: 'evade', dmgMul: 0, postureMul: 0 },
      blunt: normal,
    },
    arrow: { bodyMul: 1, headMul: 1 },
    weakness: 'slash',
    moves: [
      { move: 'du_f1', weight: 5, minRange: 0, maxRange: 2.6 },
      { move: 'du_leap', weight: 2, minRange: 2.6, maxRange: 5.5 },
      { move: 'du_kunai', weight: 1, minRange: 4.0, maxRange: 12 },
    ],
    ai: { preferredRange: 3.2, aggression: 0.7, guardChance: 0, courage: 0.35, cooldown: [40, 100], comboChance: 0.8, feintChance: 0 },
    tip: '쌍검 시노비 — 찌르기는 몸을 틀어 피한다. 넓게 휘두르는 베기로 잡아라. 연속 공격은 튕기기로 끊어낼 수 있다.',
  },
  archer: {
    id: 'archer',
    name: '궁수',
    kanji: '弓兵',
    hp: 35,
    posture: 30,
    radius: 0.4,
    speed: 3.4,
    turnRate: 0.12,
    defense: { slash: normal, thrust: normal, blunt: normal },
    arrow: { bodyMul: 1, headMul: 1 },
    weakness: null,
    moves: [
      { move: 'ac_shot', weight: 5, minRange: 5, maxRange: 30 },
      { move: 'ac_knife', weight: 3, minRange: 0, maxRange: 2.2 },
    ],
    ai: { preferredRange: 13, aggression: 0.5, guardChance: 0, courage: 0.2, cooldown: [90, 160], comboChance: 0, feintChance: 0, ranged: true },
    tip: '궁수 — 날아오는 화살도 튕기기로 쳐낼 수 있다. 활 헤드샷(만작)이면 한 발에 쓰러진다.',
  },
  boss: {
    id: 'boss',
    name: '철갑 대장 카게토라',
    kanji: '影虎',
    hp: 420,
    posture: 150,
    radius: 0.55,
    speed: 3.8,
    turnRate: 0.16,
    // Phase 1 (armored). Phase 2 swaps in BOSS_PHASE2_DEFENSE (see world.ts).
    defense: {
      slash: { result: 'glance', dmgMul: 0.35, postureMul: 0.5 },
      thrust: eff(1.4, 1.5),
      blunt: { result: 'glance', dmgMul: 0.3, postureMul: 0.6 },
    },
    arrow: { bodyMul: 0.4, headMul: 1.2, glanceBody: true },
    weakness: 'thrust',
    moves: [
      { move: 'bo_c1', weight: 5, minRange: 0, maxRange: 2.9 },
      { move: 'bo_lunge', weight: 2, minRange: 2.4, maxRange: 5.0 },
      { move: 'bo_red', weight: 2, minRange: 0, maxRange: 3.6 },
      { move: 'bo_feint', weight: 1, minRange: 0, maxRange: 3.4 },
    ],
    ai: { preferredRange: 2.6, aggression: 0.8, guardChance: 0.4, courage: 1, cooldown: [30, 80], comboChance: 0.75, feintChance: 0.2 },
    isBoss: true,
    heavyBody: true,
    tip: '대장 카게토라 — 갑옷을 두른 1막에는 찌르기, 갑옷이 부서진 2막에는 베기가 통한다.',
  },
  dummy: {
    id: 'dummy',
    name: '수련용 허수아비',
    kanji: '藁人形',
    hp: 9999,
    posture: 80,
    radius: 0.4,
    speed: 0,
    turnRate: 0,
    defense: { slash: normal, thrust: normal, blunt: normal },
    arrow: { bodyMul: 1, headMul: 1 },
    weakness: null,
    moves: [],
    ai: { preferredRange: 2, aggression: 0, guardChance: 0, courage: 1, cooldown: [9999, 9999], comboChance: 0, feintChance: 0 },
    tip: '허수아비 — 마음껏 연격을 연습하라.',
  },
};

/** Boss phase 2: armor shattered – fast and exposed to slashes, thrusts get evaded. */
export const BOSS_PHASE2_DEFENSE: Archetype['defense'] = {
  slash: eff(1.4, 1.5),
  thrust: { result: 'normal', dmgMul: 0.7, postureMul: 0.7 },
  blunt: normal,
};
