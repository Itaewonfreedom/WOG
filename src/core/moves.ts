import type { MoveDef } from './types';

const DEG = Math.PI / 180;

type MoveInit = Omit<MoveDef, 'chainFrom' | 'cancelFrom'> & Partial<Pick<MoveDef, 'chainFrom' | 'cancelFrom'>>;

function mk(m: MoveInit): MoveDef {
  const endActive = m.startup + m.active;
  return { chainFrom: endActive, cancelFrom: endActive + 2, ...m };
}

const arc = (range: number, halfDeg: number) => ({ kind: 'arc' as const, range, halfAngle: halfDeg * DEG });
const line = (range: number, width: number) => ({ kind: 'line' as const, range, width });

// ─────────────────────────────────────────────────────────────────────────────
// Ranger (주인공): 숏소드(오른팔) + 초소형 버클러(왼팔)
//
//  베기 연격:  역베기 → 가사베기 → 횡베기 → 회전베기
//  찌르기 연격: 찌르기 → 연속 찌르기 → 관통 찌르기
//  교차 파생:  베기 중 찌르기 = 되돌려 찌르기 / 찌르기 중 베기 = 뽑아베기
//  베기·찌르기를 섞으면 연격이 끊기지 않고 흐른다 (S S T, T S S S, ...).
// ─────────────────────────────────────────────────────────────────────────────
const PLAYER: MoveDef[] = [
  mk({ id: 'r_s1', name: '역베기', kanji: '逆袈裟', type: 'slash', startup: 7, active: 4, recovery: 16, damage: 12, posture: 14, shape: arc(2.3, 70), lunge: 1.8, next: { slash: 'r_s2', thrust: 'r_st' }, trackUntil: 5 }),
  mk({ id: 'r_s2', name: '가사베기', kanji: '袈裟斬', type: 'slash', startup: 8, active: 4, recovery: 17, damage: 13, posture: 15, shape: arc(2.3, 75), lunge: 1.4, next: { slash: 'r_s3', thrust: 'r_t3' }, trackUntil: 5 }),
  mk({ id: 'r_s3', name: '횡베기', kanji: '横一文字', type: 'slash', startup: 9, active: 5, recovery: 18, damage: 14, posture: 16, shape: arc(2.5, 105), lunge: 1.2, next: { slash: 'r_s4', thrust: 'r_t3' }, trackUntil: 6 }),
  mk({ id: 'r_s4', name: '회전베기', kanji: '旋風', type: 'slash', startup: 12, active: 8, recovery: 26, damage: 20, posture: 28, shape: arc(2.7, 180), lunge: 1.0, knockback: 1.2, hitstop: 6, finale: true, trackUntil: 6 }),

  mk({ id: 'r_t1', name: '찌르기', kanji: '突', type: 'thrust', startup: 6, active: 3, recovery: 15, damage: 11, posture: 12, shape: line(2.8, 0.6), lunge: 2.0, next: { thrust: 'r_t2', slash: 'r_ts' }, trackUntil: 4 }),
  mk({ id: 'r_t2', name: '연속 찌르기', kanji: '二段突', type: 'thrust', startup: 6, active: 3, recovery: 16, damage: 12, posture: 13, shape: line(2.8, 0.6), lunge: 1.4, next: { thrust: 'r_t3', slash: 'r_s3' }, trackUntil: 4 }),
  mk({ id: 'r_t3', name: '관통 찌르기', kanji: '諸手突', type: 'thrust', startup: 11, active: 4, recovery: 24, damage: 22, posture: 30, shape: line(3.4, 0.7), lunge: 2.6, knockback: 1.5, hitstop: 6, finale: true, trackUntil: 7 }),

  mk({ id: 'r_st', name: '되돌려 찌르기', kanji: '返突', type: 'thrust', startup: 6, active: 3, recovery: 17, damage: 12, posture: 15, shape: line(2.9, 0.6), lunge: 1.6, next: { slash: 'r_s3', thrust: 'r_t2' }, trackUntil: 4 }),
  mk({ id: 'r_ts', name: '뽑아베기', kanji: '抜払', type: 'slash', startup: 7, active: 4, recovery: 18, damage: 13, posture: 15, shape: arc(2.4, 95), lunge: 1.0, next: { slash: 'r_s2', thrust: 'r_t2' }, trackUntil: 5 }),

  // Charged (hold): break guards.
  mk({ id: 'r_hs', name: '강베기', kanji: '唐竹割', type: 'slash', startup: 8, active: 5, recovery: 24, damage: 26, posture: 42, shape: arc(2.6, 80), lunge: 2.4, heavy: true, knockback: 1.0, hitstop: 7, finale: true }),
  mk({ id: 'r_ht', name: '강찌르기', kanji: '破突', type: 'thrust', startup: 7, active: 4, recovery: 24, damage: 28, posture: 46, shape: line(3.6, 0.7), lunge: 3.0, heavy: true, knockback: 1.6, hitstop: 7, finale: true }),

  // Buckler bash (guard + slash): interrupts wind-ups and knocks shields aside.
  mk({ id: 'r_bash', name: '방패 치기', kanji: '盾打', type: 'blunt', startup: 5, active: 3, recovery: 16, damage: 3, posture: 22, shape: arc(1.8, 60), lunge: 1.4, interrupt: true, shieldBreak: true, next: { slash: 'r_s2', thrust: 'r_t2' }, hitstop: 5 }),

  // Resolve special (slash+thrust): 질풍참 – dash through several enemies, ignores defenses.
  mk({ id: 'r_gale', name: '질풍참', kanji: '疾風斬', type: 'slash', startup: 8, active: 2, recovery: 8, damage: 18, posture: 70, shape: arc(2.4, 60), lunge: 5.0, trueStrike: true, heavy: true, hitstop: 5 }),
];

// ─────────────────────────────────────────────────────────────────────────────
// Enemies. `next.slash` is used as "follow-up" of an enemy string.
// ─────────────────────────────────────────────────────────────────────────────
const ENEMY: MoveDef[] = [
  // 낭인 검사 (katana)
  mk({ id: 'ro_cut1', name: '내려베기', type: 'slash', startup: 26, active: 4, recovery: 24, damage: 12, posture: 18, shape: arc(2.5, 60), lunge: 1.4, trackUntil: 16, next: { slash: 'ro_cut2' } }),
  mk({ id: 'ro_cut2', name: '되베기', type: 'slash', startup: 18, active: 4, recovery: 26, damage: 12, posture: 18, shape: arc(2.5, 70), lunge: 1.0, trackUntil: 8 }),
  mk({ id: 'ro_lunge', name: '돌진 찌르기', type: 'thrust', startup: 38, active: 5, recovery: 32, damage: 20, posture: 25, shape: line(3.8, 0.7), lunge: 3.4, unblockable: 'blue', trackUntil: 28 }),
  mk({ id: 'ro_feint', name: '허초', type: 'slash', startup: 20, active: 0, recovery: 10, damage: 0, posture: 0, shape: arc(0, 0), lunge: 0.4, feint: true }),

  // 방패 무사
  mk({ id: 'sh_stab', name: '방패 뒤 찌르기', type: 'thrust', startup: 24, active: 4, recovery: 22, damage: 11, posture: 16, shape: line(2.7, 0.6), lunge: 1.0, trackUntil: 14 }),
  mk({ id: 'sh_charge', name: '방패 돌격', type: 'blunt', startup: 36, active: 7, recovery: 30, damage: 16, posture: 38, shape: line(2.3, 1.3), lunge: 3.6, unblockable: 'blue', trackUntil: 26, hyperArmor: true }),

  // 창병 (yari)
  mk({ id: 'sp_thrust', name: '창 찌르기', type: 'thrust', startup: 26, active: 4, recovery: 22, damage: 14, posture: 18, shape: line(4.3, 0.55), lunge: 0.8, trackUntil: 16, next: { slash: 'sp_thrust2' } }),
  mk({ id: 'sp_thrust2', name: '창 연속 찌르기', type: 'thrust', startup: 18, active: 4, recovery: 26, damage: 12, posture: 16, shape: line(4.3, 0.55), lunge: 0.6, trackUntil: 8 }),
  mk({ id: 'sp_sweep', name: '창 휩쓸기', type: 'slash', startup: 42, active: 6, recovery: 34, damage: 22, posture: 30, shape: arc(4.1, 110), lunge: 0.4, unblockable: 'red', trackUntil: 32 }),

  // 갑주 무사 (nodachi)
  mk({ id: 'ar_cleave', name: '대도 내려치기', type: 'slash', startup: 32, active: 5, recovery: 34, damage: 24, posture: 40, shape: arc(3.0, 50), lunge: 1.4, hyperArmor: true, trackUntil: 22 }),
  mk({ id: 'ar_sweep', name: '대도 휘두르기', type: 'slash', startup: 38, active: 7, recovery: 36, damage: 26, posture: 40, shape: arc(3.1, 120), lunge: 0.8, unblockable: 'blue', hyperArmor: true, trackUntil: 28 }),
  mk({ id: 'ar_crush', name: '투구 깨기', type: 'slash', startup: 48, active: 6, recovery: 42, damage: 34, posture: 60, shape: arc(2.9, 45), lunge: 2.4, unblockable: 'red', hyperArmor: true, trackUntil: 38 }),

  // 쌍검 시노비
  mk({ id: 'du_f1', name: '쌍검 연참', type: 'slash', startup: 18, active: 3, recovery: 12, damage: 8, posture: 10, shape: arc(2.1, 70), lunge: 1.4, trackUntil: 8, next: { slash: 'du_f2' } }),
  mk({ id: 'du_f2', name: '쌍검 연참', type: 'slash', startup: 13, active: 3, recovery: 12, damage: 8, posture: 10, shape: arc(2.1, 70), lunge: 0.8, trackUntil: 4, next: { slash: 'du_f3' } }),
  mk({ id: 'du_f3', name: '쌍검 연참', type: 'slash', startup: 14, active: 4, recovery: 24, damage: 10, posture: 12, shape: arc(2.2, 90), lunge: 0.8, trackUntil: 4 }),
  mk({ id: 'du_leap', name: '도약 베기', type: 'slash', startup: 32, active: 5, recovery: 28, damage: 18, posture: 26, shape: arc(2.3, 70), lunge: 4.2, unblockable: 'blue', trackUntil: 22 }),
  mk({ id: 'du_kunai', name: '쿠나이 투척', type: 'thrust', startup: 22, active: 1, recovery: 22, damage: 7, posture: 8, shape: line(0, 0), lunge: 0, projectile: 'kunai', trackUntil: 12 }),

  // 궁수
  mk({ id: 'ac_shot', name: '활 사격', type: 'thrust', startup: 50, active: 1, recovery: 26, damage: 14, posture: 14, shape: line(0, 0), lunge: 0, projectile: 'arrow', trackUntil: 40 }),
  mk({ id: 'ac_knife', name: '단도 베기', type: 'slash', startup: 20, active: 3, recovery: 20, damage: 7, posture: 10, shape: arc(1.9, 70), lunge: 1.0, trackUntil: 10 }),

  // 대장 (boss)
  mk({ id: 'bo_c1', name: '연참', type: 'slash', startup: 20, active: 4, recovery: 16, damage: 14, posture: 20, shape: arc(2.7, 70), lunge: 1.6, trackUntil: 10, next: { slash: 'bo_c2' } }),
  mk({ id: 'bo_c2', name: '연참', type: 'slash', startup: 15, active: 4, recovery: 16, damage: 14, posture: 20, shape: arc(2.7, 80), lunge: 1.2, trackUntil: 5, next: { slash: 'bo_c3' } }),
  mk({ id: 'bo_c3', name: '연참 마무리', type: 'thrust', startup: 22, active: 4, recovery: 28, damage: 18, posture: 26, shape: line(3.4, 0.7), lunge: 2.0, trackUntil: 12, unblockable: 'blue' }),
  mk({ id: 'bo_lunge', name: '섬광 찌르기', type: 'thrust', startup: 32, active: 5, recovery: 30, damage: 22, posture: 30, shape: line(4.2, 0.7), lunge: 3.8, unblockable: 'blue', trackUntil: 22 }),
  mk({ id: 'bo_red', name: '귀신베기', type: 'slash', startup: 44, active: 6, recovery: 38, damage: 34, posture: 50, shape: arc(3.1, 85), lunge: 2.8, unblockable: 'red', hyperArmor: true, trackUntil: 34 }),
  mk({ id: 'bo_feint', name: '허초', type: 'slash', startup: 20, active: 0, recovery: 8, damage: 0, posture: 0, shape: arc(0, 0), lunge: 0.6, feint: true }),

  // 수련용 허수아비 (no attacks)
];

export const MOVES: Record<string, MoveDef> = Object.fromEntries([...PLAYER, ...ENEMY].map((m) => [m.id, m]));

export const PLAYER_OPENERS = { slash: 'r_s1', thrust: 'r_t1' } as const;
export const PLAYER_HEAVY = { slash: 'r_hs', thrust: 'r_ht' } as const;

export function getMove(id: string): MoveDef {
  const m = MOVES[id];
  if (!m) throw new Error(`Unknown move ${id}`);
  return m;
}

export const moveTotal = (m: MoveDef): number => m.startup + m.active + m.recovery;
