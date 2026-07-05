# 데이터 모델

## 개요

이 문서는 프로젝트 전역에서 사용되는 모든 타입과 데이터 구조를 정의합니다. 타입은 다음 세 레벨로 분류됩니다:

1. **공용 타입** (`src/shared/types/`): 여러 도메인에서 공유
2. **도메인 타입** (`src/domains/*/types.ts`): 각 도메인 특화
3. **컴포넌트 로컬 타입** (컴포넌트 파일 내): 그 컴포넌트만 사용

## 1. 공용 타입 (`src/shared/types/`)

### 1.1 출처 신뢰도 및 확인 타입

```typescript
// src/shared/types/index.ts

export type SourceReliability =
  | "official"      // 공식 (Gamepires 공식 사이트, Steam Store)
  | "steam"         // Steam 공식 채널
  | "wiki"          // SCUM 공식/준공식 위키
  | "community"     // 플레이어 커뮤니티 정보
  | "server-local"  // 갤럭시 서버 로컬 정보
  | "unverified"    // 확인 전 또는 오래된 정보

export type VerificationStatus = 
  | "verified"      // 공식 출처에서 확인됨
  | "partial"       // 일부만 확인, 세부 사항 필요
  | "needs-review"  // 재확인 필요
  | "deprecated"    // 패치로 더 이상 유효하지 않음
  | "server-local-only" // 갤럭시 서버 전용 정보

export type ContentFreshness =
  | "current"       // 최신 정보
  | "patch-sensitive" // 패치에 따라 변경될 가능성 높음
  | "stale-risk"    // 오래된 정보일 가능성
  | "unknown"       // 신선도 불명

export type ContentKnowledgeKind =
  | "official-game-system"   // SCUM 공식 게임 시스템
  | "server-local-policy"    // 갤럭시 서버 전용 정책
  | "beginner-guide"         // 신규 유저 대상
  | "advanced-guide"         // 중고급 플레이어 대상
  | "patch-dependent"        // 패치에 따라 변경되는 내용
  | "community-derived"      // 커뮤니티 확인 내용
```

### 1.2 콘텐츠 카테고리 타입

```typescript
export type ScumContentCategory =
  | "beginnerGuide"
  | "character"
  | "skill"
  | "metabolism"
  | "health"
  | "injury"
  | "looting"
  | "crafting"
  | "weapon"
  | "combat"
  | "hunting"
  | "fishing"
  | "cooking"
  | "farming"
  | "baseBuilding"
  | "vehicle"
  | "trader"
  | "fame"
  | "location"
  | "bunker"
  | "radiation"
  | "contamination"
  | "enemy"
  | "quest"
  | "cargoDrop"
  | "serverSetting"
  | "galaxyServer"

// 사람이 읽기 쉬운 카테고리명
export const CATEGORY_LABELS: Record<ScumContentCategory, string> = {
  beginnerGuide: "신규 유저 시작",
  character: "캐릭터 생성",
  skill: "능력치/스킬",
  metabolism: "대사/영양/수분/피로",
  health: "건강/부상/질병",
  injury: "부상/질병/치료",
  looting: "루팅",
  crafting: "제작",
  weapon: "무기/탄약",
  combat: "전투",
  hunting: "사냥",
  fishing: "낚시",
  cooking: "요리",
  farming: "농사",
  baseBuilding: "기지 건설",
  vehicle: "차량",
  trader: "거래소/상인",
  fame: "명성/평판",
  location: "맵/지역",
  bunker: "벙커/군사지역",
  radiation: "방사능/오염",
  contamination: "오염",
  enemy: "적",
  quest: "퀘스트",
  cargoDrop: "카고 드랍",
  serverSetting: "서버 설정",
  galaxyServer: "갤럭시 서버",
}
```

### 1.3 출처 참조 타입

```typescript
export type SourceRef = {
  id: string                    // 고유 식별자 (예: "source-scum-steam-store")
  title: string                 // 출처명 (예: "SCUM Steam Store")
  url?: string                  // 링크 URL (선택사항)
  reliability: SourceReliability // 신뢰도 등급 (Tier 1-6)
  checkedAt: string            // 마지막 확인 날짜 (ISO 8601)
  notes?: string               // 추가 설명 (선택사항)
}

// 확인 가능한 콘텐츠용 메타데이터
export type VerifiableContentMeta = {
  sourceIds: string[]           // 참고한 출처 ID 목록
  verificationStatus: VerificationStatus
  knowledgeScope: ContentKnowledgeKind
  freshness: ContentFreshness
  checkedAt: string            // 마지막 확인 (ISO 8601)
  reviewBefore?: string        // 재확인 권장 날짜 (ISO 8601)
  reviewReason?: string        // 재확인 필요 이유
}
```

### 1.4 우선순위 타입

```typescript
export type BeginnerPriority = 1 | 2 | 3 | 4 | 5

// 우선순위 설명
export const PRIORITY_LABELS: Record<BeginnerPriority, string> = {
  1: "최상 (필수)",
  2: "높음",
  3: "보통",
  4: "낮음",
  5: "심화",
}
```

## 2. SCUM 도메인 타입

### 2.1 가이드 타입 (`src/domains/scum/guides/types.ts`)

```typescript
import { ScumContentCategory, SourceRef, VerificationStatus, BeginnerPriority, VerifiableContentMeta } from "@shared/types"

export type GuideEntry = {
  // 기본 정보
  id: string                        // 고유 식별자 (예: "guide-001")
  slug: string                      // URL 친화적 슬러그 (예: "beginner-start")
  title: string                     // 가이드 제목
  category: ScumContentCategory     // 카테고리
  
  // 콘텐츠
  summary: string                   // 요약 (1-2줄)
  body: string                      // 상세 내용 (Markdown)
  tags: string[]                    // 검색 태그
  
  // 메타정보
  beginnerPriority: BeginnerPriority // 신규 유저 우선순위 (1-5)
  meta: VerifiableContentMeta        // 확인 메타데이터 (sourceIds, status, freshness 등)
  
  // 관계
  relatedGuideIds?: string[]        // 관련 가이드 ID 목록 (최대 5개)
}

// 가이드 검색 필터
export type GuideSearchFilter = {
  query?: string                    // 키워드
  category?: ScumContentCategory    // 카테고리 필터
  minPriority?: BeginnerPriority    // 최소 우선순위
  tags?: string[]                   // 태그 필터
}

// 가이드 페이지 응답
export type GuidePage = {
  total: number
  items: GuideEntry[]
  hasMore: boolean
}
```

### 2.2 버전 타입 (`src/domains/scum/version/types.ts`)

```typescript
import { VerifiableContentMeta } from "@shared/types"

export type GameVersion = {
  id: string                        // 버전 고유 ID (예: "version-1311")
  versionNumber: string             // 버전번호 (예: "1.3.1.0.125621")
  updateName: string                // 업데이트명 (예: "INTO THE WILD")
  releaseDate: string               // 출시 날짜 (ISO 8601)
  officialReleaseDate?: string      // 공식 정식 출시일 (ISO 8601, 선택)
  features: string[]                // 주요 기능 목록
  bugFixes: string[]                // 버그 수정 목록
  qolImprovements: string[]         // QoL 개선 사항
  meta: VerifiableContentMeta       // 확인 메타데이터
}

export type VersionInfo = {
  current: GameVersion
  previous?: GameVersion[]
}
```

### 2.3 무기 타입 (`src/domains/scum/weapons/types.ts`)

```typescript
import { SourceRef } from "@shared/types"

export type WeaponType = "melee" | "ranged" | "bow" | "throwable"

export type Weapon = {
  id: string
  name: string                      // 무기명 (예: "Assault Rifle")
  type: WeaponType                  // 무기 종류
  damage: number                    // 대미지
  rarity: "common" | "uncommon" | "rare" | "legendary"
  location?: string[]               // 루팅 가능 위치
  craftable: boolean                // 제작 가능 여부
  craftMaterials?: string[]         // 제작 재료
  sourceIds: string[]
}
```

### 2.4 차량 타입 (`src/domains/scum/vehicles/types.ts`)

```typescript
export type VehicleType = "car" | "motorcycle" | "truck" | "boat"

export type Vehicle = {
  id: string
  name: string
  type: VehicleType
  capacity: number                  // 짐칸 용량
  fuelType: "gasoline" | "diesel"
  condition?: "pristine" | "damaged" | "broken"
  location?: string[]               // 찾을 수 있는 위치
  sourceIds: string[]
}
```

### 2.5 아이템 타입 (`src/domains/scum/items/types.ts`)

```typescript
export type ItemType =
  | "food"
  | "water"
  | "medicine"
  | "tool"
  | "material"
  | "weapon"
  | "ammunition"
  | "clothing"
  | "misc"

export type Item = {
  id: string
  name: string
  type: ItemType
  rarity: "common" | "uncommon" | "rare" | "legendary"
  location?: string[]               // 루팅 가능 위치
  craftable: boolean
  nutrition?: number                // 영양가 (음식 아이템)
  hydration?: number                // 수분 (음료)
  sourceIds: string[]
}
```

### 2.6 지역 타입 (`src/domains/scum/locations/types.ts`)

```typescript
export type LocationType = "city" | "village" | "military" | "nature" | "bunker"

export type Location = {
  id: string
  name: string
  type: LocationType
  description: string
  coordinates?: { x: number; y: number }  // 맵 좌표
  difficulty: "low" | "medium" | "high"
  resources: string[]               // 주요 자원
  dangers: string[]                 // 위험 요소
  sourceIds: string[]
}
```

### 2.7 적 타입 (`src/domains/scum/enemies/types.ts`)

```typescript
export type EnemyType = "zombie" | "mech" | "wildlife"

export type Enemy = {
  id: string
  name: string
  type: EnemyType
  description: string
  difficulty: "low" | "medium" | "high" | "extreme"
  behavior: string[]               // 행동 패턴
  weakness?: string                // 약점
  loot: string[]                    // 루팅 가능 아이템
  sourceIds: string[]
}
```

### 2.8 생존 시스템 타입 (`src/domains/scum/survival/types.ts`)

```typescript
export type VitalStat = "hunger" | "thirst" | "fatigue" | "health"

export type Condition = {
  id: string
  name: string                      // 부상/질병명
  type: "injury" | "disease"
  cause: string                     // 발생 원인
  symptoms: string[]                // 증상
  treatment: string                 // 치료법
  duration?: string                 // 지속 시간
  sourceIds: string[]
}
```

## 3. 갤럭시 서버 도메인 타입

### 3.1 서버 프로필 타입 (`src/domains/galaxy-server/profile/types.ts`)

```typescript
export type GalaxyServerProfile = {
  // 기본 정보
  name: "갤럭시 서버"
  searchKeywords: string[]
  roomTitle: string
  playStyle: "PVE"                 // PVE 전용
  
  // 운영 정보
  sinceYear: 2021
  discordInviteUrl: string
  adminDiscordName: string
  
  // 특징
  features: string[]
  
  // 시스템 활성화 상태
  welcomePackEnabled: boolean
  vehicleRentalEnabled: boolean
  newbieGuideEnabled: boolean
  weekendEventsEnabled: boolean
  experienceEventActive: boolean
}
```

### 3.2 규칙 타입 (`src/domains/galaxy-server/rules/types.ts`)

```typescript
export type RuleCategory = "pvp" | "baseRaid" | "griefing" | "harassment" | "bugExploit"

export type ServerRule = {
  id: string
  title: string
  category: RuleCategory
  description: string
  penalty?: string                  // 위반 시 처벌
  isCritical: boolean               // 중요 규칙 여부
}

export type PenaltyLevel = "warning" | "tempBan" | "permaBan"

export type Penalty = {
  level: PenaltyLevel
  duration?: string                 // 임시 밴 기간
  reason: string
}
```

### 3.3 웰컴팩 타입 (`src/domains/galaxy-server/welcome-pack/types.ts`)

```typescript
export type WelcomePackItem = {
  id: string
  name: string
  quantity: number
  description?: string
}

export type WelcomePack = {
  id: string
  name: string
  items: WelcomePackItem[]
  description: string
  claimInstructions: string
  validUntil?: string               // 유효 기간
  sourceIds: string[]
}
```

### 3.4 차량 렌트 타입 (`src/domains/galaxy-server/vehicle-rental/types.ts`)

```typescript
export type VehicleRentalPolicy = {
  id: string
  title: string
  description: string
  eligibility: {
    newbiersOnly: boolean           // 신규 유저 전용
    maxRentals: number | null       // 최대 렌트 수 (null = 무제한)
  }
  requestProcess: string            // 신청 절차
  rentalRules: string[]             // 렌트 규칙
  returnPolicy: string              // 반납 정책
  sourceIds: string[]
}
```

### 3.5 뉴비 케어 타입 (`src/domains/galaxy-server/newbie-care/types.ts`)

```typescript
export type NewbieCareProgram = {
  id: string
  title: string
  description: string
  stages: {
    stage: number
    title: string
    description: string
    duration?: string
  }[]
  contactMethod: string             // 서버 문의 연락 방법
  adminDiscordName: string
  features: string[]                // 프로그램 특징
  sourceIds: string[]
}
```

### 3.6 이벤트 타입 (`src/domains/galaxy-server/events/types.ts`)

```typescript
export type EventType = "weekend" | "special" | "seasonal" | "experienceBoost"

export type GalaxyServerEvent = {
  id: string
  title: string
  type: EventType
  description: string
  startDate: string                 // ISO 8601
  endDate?: string
  rewards: string[]
  participationInstructions?: string
  statusBadge?: "live" | "upcoming" | "ended"
  sourceIds: string[]
}
```

### 3.7 디스코드 타입 (`src/domains/galaxy-server/discord/types.ts`)

```typescript
export type DiscordChannel = {
  id: string
  name: string
  purpose: string
  category?: string
}

export type DiscordCommunity = {
  id: string
  name: string
  inviteUrl: string
  memberCount?: number
  description: string
  channels: DiscordChannel[]
  adminName: string
  sourceIds: string[]
}
```

## 4. API 응답 타입 (`src/shared/types/api.ts`)

```typescript
export type ApiResponse<T> = {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
  }
  timestamp: string                 // ISO 8601
}

export type PaginatedResponse<T> = {
  items: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}
```

## 4. 게임 데이터 엔티티 (모든 도메인)

모든 게임 데이터는 확인 메타데이터를 포함한다:

```typescript
// 모든 도메인 타입에 meta 필드 추가 권장
export type GameDataEntity<TKind extends string = string> = {
  id: string                        // 고유 식별자
  kind: TKind                       // 엔티티 종류 (분류용)
  name: string                      // 이름
  description: string               // 설명
  tags: string[]                    // 태그/분류
  meta: VerifiableContentMeta       // ✓ 확인 메타데이터 필수
}
```

**메타데이터 의무사항**:
- ✓ sourceIds: 반드시 하나 이상
- ✓ verificationStatus: verified/partial/needs-review
- ✓ freshness: current/patch-sensitive/stale-risk/unknown
- ✓ checkedAt: 마지막 확인 날짜

## 5. 타입 배치 계획

### Phase 1: 공용 타입
```
src/shared/types/
├── index.ts                  (SourceReliability, ScumContentCategory 등)
├── api.ts                    (API 응답 타입)
└── constants.ts              (타입별 라벨, 상수)
```

### Phase 2: SCUM 도메인 타입
```
src/domains/scum/
├── version/types.ts
├── guides/types.ts
├── weapons/types.ts
├── vehicles/types.ts
├── items/types.ts
├── locations/types.ts
├── enemies/types.ts
├── survival/types.ts
├── hunting/types.ts
├── fishing/types.ts
├── cooking/types.ts
├── farming/types.ts
└── base-building/types.ts
```

### Phase 3: 갤럭시 서버 도메인 타입
```
src/domains/galaxy-server/
├── profile/types.ts
├── rules/types.ts
├── welcome-pack/types.ts
├── vehicle-rental/types.ts
├── newbie-care/types.ts
├── events/types.ts
└── discord/types.ts
```

## 6. 타입 사용 규칙

### 6.1 명명 규칙
- 단수형 엔티티: `Weapon`, `Vehicle`, `Enemy`
- 배열/컬렉션: `Weapons[]`, `GuideEntry[]`
- 옵션 필드: `field?: type` (필수 아님)
- 유니온 타입: `"live" | "upcoming" | "ended"`

### 6.2 필드 사용
- **id**: 모든 엔티티는 고유 ID 필수
- **sourceIds**: 모든 정보는 출처 추적
- **checkedAt/updatedAt**: 모든 정보는 확인 날짜 기록
- **description**: 모든 복잡한 항목은 설명 필수

### 6.3 임포트 패턴
```typescript
// ✓ 좋은 예
import { ScumContentCategory, SourceRef } from "@shared/types"
import { GuideEntry } from "./types"

// ✗ 나쁜 예
import GuideEntry from "./types" // 기본 임포트 금지
type ScumContentCategory = any   // any 금지
```

## 다음 단계

1. 타입 파일 생성 (Phase 1 → 2 → 3)
2. 정적 데이터 파일 작성 (각 도메인의 `data/` 폴더)
3. 타입 확인 (TypeScript strict mode 활성화)
4. API 레이어 구현 (공용 타입 사용)

## 관련 문서

- `domain-map.md`: 도메인 디렉토리 구조
- `route-map.md`: 라우팅 및 페이지 구조
- `api-contract.md`: API 호출 명세
- `implementation-plan.md`: 구현 우선순위

