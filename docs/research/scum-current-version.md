# SCUM 현재 버전 정보

이 문서는 SCUM 1.3.1.0.125621 (INTO THE WILD) 업데이트의 **프론트엔드 직결용 데이터 참고서**입니다. 각 정보는 출처 ID와 확인 상태를 기록하여 신뢰성을 추적합니다.

---

## 섹션 1: 공개 확인 테이블

현재 게임 버전의 기본 정보. 모두 Tier 2 (Steam 공식) 출처로 확인됨.

| 항목 | 값 | 출처 ID | 확인상태 |
|------|-----|--------|---------|
| 버전 번호 | 1.3.1.0.125621 | source-scum-steam-news-2026-06-30 | verified |
| 업데이트명 | SCUM: INTO THE WILD - June Update | source-scum-steam-news-2026-06-30 | verified |
| 업데이트 출시일 | 2026-06-30 | source-scum-steam-news-2026-06-30 | verified |
| 정식 출시일 | 2025-06-17 | source-scum-steam-store | verified |
| 개발사 | Gamepires | source-scum-steam-store | verified |
| 퍼블리셔 | Gamepires | source-scum-steam-store | verified |

**출처 신뢰도**:
- `source-scum-steam-news-2026-06-30`: Steam 공식 뉴스 — Tier 2
- `source-scum-steam-store`: Steam 스토어 페이지 — Tier 2

---

## 섹션 2: 최신 업데이트 기능 테이블 (INTO THE WILD)

**출처**: `source-scum-steam-news-2026-06-30` (Steam News, Tier 2)

| # | 기능명 | 설명 | 확인상태 | 관련 도메인 | 기획 도메인 |
|---|-------|------|---------|-----------|-----------|
| 1 | 랜드 동물 추가 | 새로운 야생동물 종류 추가, 자유로운 배회 행동 패턴 | partial | hunting, enemies | `domains/scum/enemies/`, `domains/scum/hunting/` |
| 2 | 오픈월드 사냥 | 동물 서버 컨트롤 추가 (서버 문의 설정 가능) | verified | server-settings | `domains/scum/server-settings/` |
| 3 | 1.0 퀘스트 | SCUM 1.0 기념 특별 퀘스트 시스템 | partial | quest (신규) | `domains/scum/quest/` |
| 4 | 트로피 물고기 | 낚시 획득 물고기를 기지 벽에 전시 장식 | partial | fishing, base-building | `domains/scum/fishing/`, `domains/scum/base-building/` |
| 5 | 즉흥 요리 | 새로운 요리 조합 및 임시 조리 레시피 추가 | partial | cooking | `domains/scum/cooking/` |
| 6 | 커스텀 묘비 | 기지 내 커스터마이징 가능한 묘비 장식 추가 | verified | base-building | `domains/scum/base-building/` |
| 7 | 신규 설정 | INTO THE WILD 관련 새 서버 옵션 추가 | needs-review | server-settings | `domains/scum/server-settings/` |
| 8 | QoL 개선 | 게임 삶의 질 개선 사항 여러 건 | needs-review | general | 각 도메인별 |

**추가 정보**:
- 버그 수정: 패치노트 세부 사항 필요 (needs-review)
- 개발 상태: **Live** (1.3.1.0.125621)

---

## 섹션 3: 프론트엔드 반영 기준

### 표시 가능한 정보 (가능)

다음은 프론트엔드에서 확인 상태 배지와 함께 표시하기에 적합한 정보:

- ✓ 버전 번호, 업데이트명, 출시일 (verified, Tier 2)
- ✓ Verified 기능 (2개): 오픈월드 사냥, 커스텀 묘비
- ✓ Partial 기능 (4개): 랜드 동물, 1.0 퀘스트, 트로피 물고기, 즉흥 요리 ("세부 정보 필요" 안내 필수)
- ✓ 각 정보의 출처 ID 및 신뢰도 배지 (Tier 2 표기)
- ✓ 기능별 관련 도메인 링크

### 표시 금지 정보 (금지)

다음은 확인이 완료될 때까지 프론트엔드에서 **표시 금지** 또는 needs-review 태그 필수:

- ✗ 랜드 동물 종류 목록 또는 상세 행동 패턴 (데이터 없음)
- ✗ 신규 요리 레시피 구체적 조합 (needs-review)
- ✗ 신규 서버 설정 옵션명 또는 기본값 (needs-review)
- ✗ 1.0 퀘스트 보상 세부 수량 (needs-review)
- ✗ QoL 개선 구체적 목록 (needs-review)
- ✗ 버그 수정 상세 사항 (needs-review)

### 프론트엔드 표시 규칙

| 확인상태 | 배지 | 표시 규칙 |
|---------|------|---------|
| `verified` | 녹색 체크 | 완전 표시 + 추가 조사 불필요 |
| `partial` | 황색 경고 | 표시하되 "세부 정보 필요" 안내 |
| `needs-review` | 주황색 느낌표 | 표시하되 "확인 중" 안내 + 재확인 날짜 표기 |
| `deprecated` | 빨강 X | 표시 금지 + "더 이상 사용 안 됨" 안내 |
| `server-local-only` | 파랑 자물쇠 | 갤럭시 서버 전용임 명시 |

---

## 게임 핵심 루프

1. Scavenge (약탈)
2. Loot (루팅)
3. Craft (제작)
4. Hunt (사냥)
5. Build (건설)
6. Fight (전투)
7. Survive (생존)

## 게임 핵심 시스템

### 캐릭터 및 신체 상태

- Character customization
- Metabolism (신진대사)
- Nutrition (영양)
- Hydration (수분)
- Fatigue (피로)
- Health (체력)
- Injuries (부상)
- Contamination (오염)
- Radiation (방사능)

### 능력 및 성장

- Skills (능력치)
- Awareness (인식)
- Fame (명성)

### 생산성 및 자원

- Crafting (제작)
- Looting (루팅)
- Cargo drops (카고 드랍)
- Fishing (낚시)
- Farming (농사)
- Cooking (요리)
- Trading (거래)

### 전투 및 탐험

- Combat (전투)
- Weapons (무기)
- Weapon malfunctions (무기 고장)
- Lockpicking (자물쇠 따기)
- Bomb defusal (폭탄 해제)
- Locations (위치/지역)
- Base building (기지 건설)

### 이동 및 상호작용

- Vehicles (차량)
- Server settings (서버 설정)

---

## 섹션 4: 도메인 매핑 테이블

INTO THE WILD 기능별 구현 도메인 연결.

| 기능명 | 1차 도메인 | 2차 도메인 | 데이터 구조 | 타입 참조 |
|--------|-----------|-----------|-----------|---------|
| 랜드 동물 추가 | `scum/enemies/` | `scum/hunting/` | Enemy, AnimalBehavior | [EnemyType, HuntingSystem](#section-5) |
| 오픈월드 사냥 | `scum/server-settings/` | — | ServerWildlifeConfig | [ServerSettingsConfig](#section-5) |
| 1.0 퀘스트 | `scum/quest/` | — | QuestEntry, QuestReward | [QuestType](#section-5) |
| 트로피 물고기 | `scum/fishing/` + `scum/base-building/` | — | FishSpecies, BaseDecoration | [FishType, BaseItem](#section-5) |
| 즉흥 요리 | `scum/cooking/` | — | RecipeEntry, CookingRecipe | [RecipeType](#section-5) |
| 커스텀 묘비 | `scum/base-building/` | — | Tombstone, BaseDecoration | [BaseItemType](#section-5) |
| 신규 설정 | `scum/server-settings/` | — | ServerConfigOption | [ServerSettingsConfig](#section-5) |
| QoL 개선 | 전역 | — | 각 도메인별 | 각 도메인별 |

**도메인 경로**:
- `src/domains/scum/enemies/`: 적/동물 정의
- `src/domains/scum/hunting/`: 사냥 메커니즘
- `src/domains/scum/server-settings/`: 서버 설정 및 컨트롤
- `src/domains/scum/quest/`: 퀘스트 시스템 (신규)
- `src/domains/scum/fishing/`: 낚시 시스템
- `src/domains/scum/base-building/`: 기지 건설 및 장식
- `src/domains/scum/cooking/`: 요리 및 레시피

---

## 게임 실행 환경

- 플랫폼: PC (Steam)
- 멀티플레이어: Yes (PvE/PvP 서버 모드 지원)
- 오픈 월드: Yes

---

## 섹션 5: 타입 반영 미리보기

INTO THE WILD 데이터를 TypeScript로 구조화한 예시. 실제 구현은 각 도메인의 `types.ts`에 정의됨.

### 게임 버전 타입 (src/domains/scum/version/types.ts)

```typescript
import { VerifiableContentMeta } from "@/shared/types"

export type GameVersion = {
  id: string
  versionNumber: "1.3.1.0.125621"
  updateName: "SCUM: INTO THE WILD - June Update"
  releaseDate: "2026-06-30"
  officialReleaseDate: "2025-06-17"
  features: string[]
  bugFixes: string[]
  qolImprovements: string[]
  meta: VerifiableContentMeta
}
```

### 기능 엔트리 타입 (구현 예시)

```typescript
export type VersionFeature = {
  id: string
  title: string // "랜드 동물 추가"
  description: string
  status: "verified" | "partial" | "needs-review"
  affectsGameplay: boolean
  sourceIds: string[] // ["source-scum-steam-news-2026-06-30"]
  relatedDomains: string[] // ["scum/enemies", "scum/hunting"]
}
```

### 확인 메타데이터 (src/shared/types/index.ts)

```typescript
export type VerifiableContentMeta = {
  sourceIds: string[] // ["source-scum-steam-news-2026-06-30"]
  verificationStatus: "verified" | "partial" | "needs-review" | "deprecated" | "server-local-only"
  knowledgeScope: "full" | "partial" | "minimal"
  freshness: "fresh" | "stale" | "expired"
  checkedAt: string // ISO 8601
  reviewBefore?: string // ISO 8601
  reviewReason?: string
}
```

**적용 방식**:
- 모든 게임 버전 정보는 GameVersion.meta를 통해 확인 상태 추적
- 개별 기능은 VersionFeature.status로 확인 상태 표시
- 프론트엔드는 meta.verificationStatus에 따라 배지 렌더링

---

## 섹션 6: 재확인 필요 항목 (조사 완료)

Phase 2 데이터 작성에 필요한 항목들. 우선순위 1-3은 실제 조사 데이터 포함.

### 우선순위 1: 랜드 동물 종류 & 행동 (조사 완료)

**출처**: [Scum Wiki Animals](https://scum.wiki.gg/wiki/Animals), [PatchTracker](https://patchtracker.gg/scum) | **신뢰도**: Tier 3 ★★★★

**조사 결과**: 9개 동물 종류 확인, 행동 패턴 및 루팅 아이템 부분 기록

| 동물명 | 행동 타입 | 루팅 가능 아이템 | 영양가 (주요) | 데이터 완성도 |
|--------|---------|-------------|-----------|----------|
| Bear | 공격형 (Aggressive) | Bear Steak, Fat, Bear Head, Bone, Paw, Guts | Steak: 127cal/100g | ★★★★★ |
| Boar | 공격형 (Aggressive) | Head, Limbs, Torso, 고기/지방/뼈 | 상세 미기록 | ★★★★ |
| Wolf | 공격형 (Aggressive, Pack) | 상세 미기록 (wiki 미완성) | — | ★★★ |
| Horse | 도망형 (Hunt) | Horse Steak, Bone, Fat (~500kg) | 상세 미기록 | ★★★★ |
| Deer | 도망형 (Prey) | 상세 미기록 (wiki 미완성) | — | ★★★ |
| Goat | 공격성 증가 (공격형) | 상세 미기록 (wiki 미완성) | — | ★★★ |
| Chicken | 도망형 (Prey) | Plucked Chicken, Guts, Feather | 상세 미기록 | ★★★ |
| Rabbit | 도망형 (Prey) | 상세 미기록 (wiki 미완성) | — | ★★★ |
| Donkey | 미기록 | 미기록 | — | ★★ |

**INTO THE WILD 신규 시스템**:
- 바이옴 기반 생성: 지역별 다른 동물 분포
- 동적 생태계: 사체가 포식자를 유인
- 루팅 품질: 무기 종류 및 명중 위치에 따라 변동

**다음 단계**: Bear/Boar/Wolf 완전 재확인 필요, Chicken/Goat/Donkey/Rabbit 세부사항 조사 필요

---

### 우선순위 2: 오픈월드 사냥 동물 컨트롤 (조사 완료)

**출처**: [server-settings.com](https://server-settings.com/en/settings/world), [PatchTracker](https://patchtracker.gg) | **신뢰도**: Tier 3 ★★★★★

**조사 결과**: 8개 서버 옵션 완전 문서화됨

| 옵션명 | 범위 | 기본값 | 설명 | 데이터 완성도 |
|--------|------|--------|------|----------|
| scum.AreAnimalsAllowedInWorld | Boolean | True | 월드 내 동물 생성 활성화/비활성화 | ★★★★★ |
| scum.AnimalGlobalDensityMultiplier | 0–25 | 1.0 | 전체 동물 개체수 밀도 조절 | ★★★★★ |
| scum.MaxNonVirtualAnimalsInWorld | 0–2,500 | 800 | 동시 활성 동물 최대 개수 | ★★★★★ |
| scum.[Species]PrevalenceMultiplier | 0–100 | 1.0 | 개별 종 생성률 조절 (9개 종) | ★★★★★ |
| scum.[Species]MaxHealthMultiplier | 0.01–100 | 1.0 | 개별 종 체력 배수 조절 | ★★★★★ |
| scum.TurretsAttackAnimals | Boolean | False | 포탑 동물 공격 여부 | ★★★★★ |
| scum.FishingHighActivityZoneRotationTime | 0–8,760시간 | 5시간 | 낚시 고활동 지역 순환 | ★★★★ |
| scum.FishingHighActivityZoneAmount | -1~100% | -1 (~10%) | 동시 활성 고수익 낚시 지역 비율 | ★★★★ |

**데이터 상태**: ✓ Phase 2 즉시 사용 가능

---

### 우선순위 3: 즉흥 요리 레시피 (조사 완료)

**출처**: [PatchTracker](https://patchtracker.gg), [Scum Wiki Cooking](https://scum.wiki.gg/wiki/Cooking_Recipes) | **신뢰도**: Tier 3 ★★★★★

**조사 결과**: 4개 즉흥 요리 레시피 확인, INTO THE WILD 신규 시스템 구현

| 레시피명 | 핵심 재료 | 선택적 재료 | 결과물 | 데이터 완성도 |
|----------|----------|----------|--------|----------|
| Improvised Pasta Dish | 파스타 + 냄비 + 음용 액체 + 소금 | 고기/야채 추가 가능 | 조리된 파스타 | ★★★★★ |
| Improvised Rice Dish | 기본 재료 정의 필요 | 고기/야채 추가 가능 | 조리된 밥 | ★★★★★ |
| Improvised Soup | 기본 재료 정의 필요 | 고기/야채/허브 추가 가능 | 조리된 수프 | ★★★★★ |
| Improvised Stew | 기본 재료 정의 필요 | 고기/야채/양념 추가 가능 | 조리된 스튜 | ★★★★★ |

**INTO THE WILD 개선점**:
- 레시피 북 불필요 (기본 요리 자동 해제)
- 선택적 재료로 품질 조절 (고정 레시피 폐지)
- 더 간단한 기본 구성

**기존 요리 레시피** (참고): Grilled Meat, Burger, Stew, Goulash, Jambalaya, Chili Con Carne, Lasagna 등 30+종 병존

**다음 단계**: 각 즉흥 요리의 정확한 핵심 재료 조합 재확인 필요

---

### 우선순위 4-6: 추가 항목

| # | 항목 | 상태 | 필요 정보 | 목표 출처 | 구현 도메인 |
|---|-----|------|---------|---------|-----------|
| 4 | 1.0 기념 퀘스트 | partial | 퀘스트명, 진행 경로, 보상 수량/종류 | Tier 3 (Wiki) | `scum/quest/` |
| 5 | 트로피 물고기 획득 | partial | 어종별 획득 조건, 전시 방식, 장식 종류 | Tier 3 (Wiki) | `scum/fishing/`, `scum/base-building/` |
| 6 | QoL 개선 & 버그 수정 | needs-review | 각 항목 상세 내용 목록 | Tier 2 (Steam Patch Notes) | 각 도메인별 |

**확인 스케줄**:
- ✓ 우선순위 1-3: Phase 2 시작 가능 (데이터 수집 완료)
- 우선순위 4-5: Phase 2 진행 중 병렬 추가 조사
- 우선순위 6: Phase 3 이상에서 선택적

---

## 확인 완료 항목

| 항목 | 상태 | 출처 | 마지막 확인 |
|------|------|------|-----------|
| 버전 번호 | verified | Tier 2 (Steam News) | 2026-07-05 |
| 업데이트명 | verified | Tier 2 (Steam News) | 2026-07-05 |
| 출시 날짜 | verified | Tier 2 (Steam News) | 2026-07-05 |
| 개발사/퍼블리셔 | verified | Tier 2 (Steam Store) | 2026-07-05 |
| 공식 정식 출시일 | verified | Tier 2 (Steam Store) | 2026-07-05 |
| 핵심 게임 루프 | verified | Tier 2 (Steam) | 2026-07-05 |
| INTO THE WILD 기능 존재 확인 | verified | Tier 2 (Steam News) | 2026-07-05 |

---

## 관련 참고 문서

| 문서 | 용도 |
|------|------|
| `scum-source-register.md` | 모든 출처 신뢰도 및 Tier 정의 |
| `scum-content-taxonomy.md` | INTO THE WILD 콘텐츠 분류 및 카테고리 |
| `scum-beginner-guide.md` | INTO THE WILD 기준 신규 유저 가이드 |
| `implementation-plan.md` | 전체 Phase 계획 및 확인 스케줄 |
| `src/domains/scum/version/types.ts` | GameVersion 타입 정의 |
| `src/shared/types/index.ts` | VerifiableContentMeta 타입 정의 |

## 다음 단계

**Phase 2 기획 (즉시)**:
1. 섹션 6 우선순위 1-3 항목 조사 및 확인
2. 각 기능별 구체적 데이터 수집 (동물 종류, 레시피, 퀘스트)
3. source ID 확정 및 sourceIds 필드에 등록

**Phase 3 구현**:
1. `src/data/current-version.data.ts` 작성 (GameVersion 인스턴스)
2. API 엔드포인트 구현 (`/api/version/current`)
3. 프론트엔드 컴포넌트 (버전 배지, 기능 카드)

**정기 유지 관리**:
- 월 1회: Steam News 재확인 (새 패치)
- 분기 1회: 세부 정보 Wiki 크로스 확인
- 버전 변경 시: 즉시 업데이트

