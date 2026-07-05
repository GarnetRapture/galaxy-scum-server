# API 계약서

## 개요

이 문서는 프론트엔드 애플리케이션이 데이터를 가져오는 방식을 정의합니다. 초기 단계에서는 **로컬 TypeScript 데이터 파일**을 사용하며, 나중에 **백엔드 API로 전환 가능**하도록 설계됩니다.

## API 아키텍처

### 단일 진입점 원칙

모든 데이터 접근은 **`src/shared/api/`** 를 통해서만 진행됩니다.

```typescript
// ✓ 좋은 예
import { getGuideById } from "@shared/api"

// ✗ 나쁜 예
import guideData from "@domains/scum/guides/data"  // 직접 임포트 금지
```

### 함수형 API 설계

```typescript
// src/shared/api/index.ts

export async function getGuides(filter?: GuideSearchFilter): Promise<GuidePage>
export async function getGuideById(id: string): Promise<GuideEntry>
export async function getGameVersion(): Promise<VersionInfo>
export async function getGalaxyServerProfile(): Promise<GalaxyServerProfile>
export async function getGalaxyServerEvents(): Promise<GalaxyServerEvent[]>
// ... 등등
```

## API 함수 정의

### 1. 가이드 API

#### 1.1 가이드 목록 조회

```typescript
/**
 * 필터와 페이지네이션을 포함한 가이드 목록 조회
 */
export async function getGuides(
  filter?: {
    query?: string                      // 키워드
    category?: ScumContentCategory      // 카테고리
    minPriority?: BeginnerPriority      // 최소 우선순위
    tags?: string[]                     // 태그
    page?: number                       // 페이지 (기본값 1)
    pageSize?: number                   // 페이지 크기 (기본값 20)
  }
): Promise<GuidePage>

// 반환값
{
  total: 150,
  items: [
    {
      id: "guide-001",
      title: "신규 유저 시작하기",
      category: "beginnerGuide",
      summary: "게임을 처음 시작하는 방법...",
      body: "# 신규 유저 시작하기\n...",
      tags: ["초급", "생존", "기초"],
      beginnerPriority: 1,
      sourceIds: ["source-001", "source-002"],
      updatedAt: "2026-07-05T00:00:00Z",
      verificationStatus: "verified",
    },
    // ... 더 많은 가이드들
  ],
  hasMore: true,
}

// 예시 호출
const result = await getGuides({
  query: "무기",
  category: "weapon",
  minPriority: 2,
  page: 1,
})
```

**구현 (초기)**:
```typescript
export async function getGuides(filter?: GuideSearchFilter): Promise<GuidePage> {
  // 로컬 데이터 로드
  const allGuides = Object.values(GUIDE_DATA)

  // 필터 적용
  let filtered = allGuides
  if (filter?.query) {
    filtered = filtered.filter(g =>
      g.title.includes(filter.query) ||
      g.summary.includes(filter.query) ||
      g.tags.some(t => t.includes(filter.query))
    )
  }
  if (filter?.category) {
    filtered = filtered.filter(g => g.category === filter.category)
  }
  if (filter?.minPriority) {
    filtered = filtered.filter(g => g.beginnerPriority <= filter.minPriority)
  }
  // ... 더 많은 필터

  // 페이지네이션
  const page = filter?.page || 1
  const pageSize = filter?.pageSize || 20
  const start = (page - 1) * pageSize
  const items = filtered.slice(start, start + pageSize)

  return {
    total: filtered.length,
    items,
    hasMore: start + pageSize < filtered.length,
  }
}
```

**마이그레이션 (백엔드 API)**:
```typescript
export async function getGuides(filter?: GuideSearchFilter): Promise<GuidePage> {
  const response = await fetch(`${API_BASE_URL}/guides`, {
    params: filter,
  })
  return response.json()
}
```

#### 1.2 단일 가이드 조회

```typescript
/**
 * ID로 단일 가이드 조회
 */
export async function getGuideById(id: string): Promise<GuideEntry>

// 반환값
{
  id: "guide-001",
  title: "신규 유저 시작하기",
  category: "beginnerGuide",
  summary: "게임을 처음 시작하는 방법...",
  body: "# 신규 유저 시작하기\n...",
  tags: ["초급", "생존", "기초"],
  beginnerPriority: 1,
  sourceIds: ["source-001"],
  updatedAt: "2026-07-05T00:00:00Z",
  verificationStatus: "verified",
  relatedGuideIds: ["guide-002", "guide-003"],
}

// 예시 호출
const guide = await getGuideById("guide-001")

// 에러 처리
try {
  const guide = await getGuideById("invalid-id")
} catch (error) {
  // 404 Not Found 에러
}
```

**구현 (초기)**:
```typescript
export async function getGuideById(id: string): Promise<GuideEntry> {
  const guide = GUIDE_DATA[id]
  if (!guide) {
    throw new ApiError(404, `Guide ${id} not found`)
  }
  return guide
}
```

#### 1.3 관련 가이드 조회

```typescript
/**
 * 특정 가이드와 관련된 다른 가이드 조회
 */
export async function getRelatedGuides(
  guideId: string,
  limit?: number
): Promise<GuideEntry[]>

// 예시
const related = await getRelatedGuides("guide-001", 5)
```

---

### 2. 게임 버전 API

#### 2.1 현재 버전 정보 조회

```typescript
/**
 * 게임의 현재 버전 정보 조회
 */
export async function getGameVersion(): Promise<VersionInfo>

// 반환값
{
  current: {
    id: "version-001",
    versionNumber: "1.3.1.0.125621",
    updateName: "INTO THE WILD - June Update",
    releaseDate: "2026-06-30",
    officialReleaseDate: "2025-06-17",
    features: [
      "Free-roaming land animals",
      "SCUM 1.0 Anniversary quest",
      "Trophy fish wall mounts",
      // ...
    ],
    bugFixes: [
      "Fixed bug X",
      "Fixed bug Y",
      // ...
    ],
    qolImprovements: [
      "Improved UI responsiveness",
      // ...
    ],
    sourceIds: ["source-001"],
    checkedAt: "2026-07-05T00:00:00Z",
  },
  previous: [
    // 이전 버전들
  ],
}

// 예시 호출
const versionInfo = await getGameVersion()
```

---

### 3. 갤럭시 서버 API

#### 3.1 서버 프로필 조회

```typescript
/**
 * 갤럭시 서버 프로필 조회
 */
export async function getGalaxyServerProfile(): Promise<GalaxyServerProfile>

// 반환값
{
  name: "갤럭시 서버",
  searchKeywords: ["갤럭시", "KOR_", "kor_galaxy"],
  roomTitle: "KOR_PVE 갤럭시 since2021 경험치이벤트[디코상점-웰컴팩-직장인뉴비환영]",
  playStyle: "PVE",
  sinceYear: 2021,
  discordInviteUrl: "https://discord.gg/VeNFX3CAwZ",
  adminDiscordName: "Galaxy Notice",
  features: [
    "뉴비용 아이템 파밍",
    "고인물용 엔드컨텐츠",
    "버려진 벙커",
    "원전",
    "드라이버 파밍지",
    "퀘스트 테스트 중",
    "주말 이벤트",
  ],
  welcomePackEnabled: true,
  vehicleRentalEnabled: true,
  newbieGuideEnabled: true,
  weekendEventsEnabled: true,
  experienceEventActive: true,
}

// 예시 호출
const serverInfo = await getGalaxyServerProfile()
```

#### 3.2 서버 규칙 조회

```typescript
/**
 * 갤럭시 서버의 PVE 규칙 조회
 */
export async function getGalaxyServerRules(): Promise<ServerRule[]>

// 반환값
[
  {
    id: "rule-001",
    title: "PvP 금지",
    category: "pvp",
    description: "다른 플레이어를 공격할 수 없습니다.",
    penalty: "경고 → 임시 밴 → 영구 밴",
    isCritical: true,
  },
  {
    id: "rule-002",
    title: "기지 파괴 금지",
    category: "baseRaid",
    description: "다른 플레이어의 기지를 파괴하거나 약탈할 수 없습니다.",
    penalty: "임시 밴 → 영구 밴",
    isCritical: true,
  },
  // ... 더 많은 규칙들
]

// 예시 호출
const rules = await getGalaxyServerRules()
```

#### 3.3 웰컴팩 정보 조회

```typescript
/**
 * 웰컴팩 정보 조회
 */
export async function getWelcomePack(): Promise<WelcomePack>

// 반환값
{
  id: "welcome-pack-001",
  name: "신규 유저 웰컴팩",
  items: [
    { id: "item-001", name: "나이프", quantity: 1 },
    { id: "item-002", name: "도끼", quantity: 1 },
    { id: "item-003", name: "망치", quantity: 1 },
    { id: "item-004", name: "물", quantity: 2 },
    { id: "item-005", name: "음식", quantity: 5 },
    // ... 더 많은 아이템들
  ],
  description: "신규 유저를 위한 기본 생존 키트",
  claimInstructions: "게임 메뉴 → 웰컴팩 클릭 → 수령",
  validUntil: null, // 무제한
  sourceIds: ["source-001"],
}

// 예시 호출
const welcomePack = await getWelcomePack()
```

#### 3.4 차량 렌트 정책 조회

```typescript
/**
 * 무료 차량 렌트 정책 조회
 */
export async function getVehicleRentalPolicy(): Promise<VehicleRentalPolicy>

// 반환값
{
  id: "rental-policy-001",
  title: "신규 유저 무료 차량 렌트",
  description: "갤럭시 서버의 무료 차량 렌트 프로그램",
  eligibility: {
    newbiersOnly: true,
    maxRentals: null, // 무제한
  },
  requestProcess: "디스코드에서 서버 문의(Galaxy Notice)에게 /차량렌트 요청",
  rentalRules: [
    "자연 차량 스폰은 차단됨",
    "신규 유저만 무료 렌트 가능",
    "새 차량 구매 시 기존 차량 반납",
  ],
  returnPolicy: "새 차량 구매 시 기존 렌트 차량 반납 필수",
  sourceIds: ["source-001"],
}

// 예시 호출
const rentalPolicy = await getVehicleRentalPolicy()
```

#### 3.5 뉴비 케어 프로그램 조회

```typescript
/**
 * 뉴비 케어 프로그램 조회
 */
export async function getNewbieCareProgram(): Promise<NewbieCareProgram>

// 반환값
{
  id: "newbie-care-001",
  title: "갤럭시 서버 뉴비 케어",
  description: "신규 유저의 게임 적응을 돕는 프로그램",
  stages: [
    {
      stage: 1,
      title: "적응 단계",
      description: "게임 기초 이해 및 첫 생존",
      duration: "1-3시간",
    },
    {
      stage: 2,
      title: "기본 속성외 단계",
      description: "기본 스킬 및 생존 능력 향상",
      duration: "약 15분",
    },
  ],
  contactMethod: "디스코드 DM 또는 서버 채팅에서 'Galaxy Notice' 찾기",
  adminDiscordName: "Galaxy Notice",
  features: [
    "적응까지 가이드",
    "기본 속성외 약 15분",
    "지속 지원",
  ],
  sourceIds: ["source-001"],
}

// 예시 호출
const newbieCare = await getNewbieCareProgram()
```

#### 3.6 현재 이벤트 조회

```typescript
/**
 * 갤럭시 서버의 현재 및 예정 이벤트 조회
 */
export async function getGalaxyServerEvents(
  filter?: {
    type?: EventType           // 이벤트 타입
    status?: "live" | "upcoming" | "ended"
  }
): Promise<GalaxyServerEvent[]>

// 반환값
[
  {
    id: "event-001",
    title: "경험치 이벤트 - 스킬 2배 보상",
    type: "experienceBoost",
    description: "모든 스킬 경험치 2배 획득",
    startDate: "2026-06-30T00:00:00Z",
    endDate: null, // 진행 중
    rewards: ["스킬 경험치 2배"],
    statusBadge: "live",
    sourceIds: ["source-001"],
  },
  {
    id: "event-002",
    title: "주말 이벤트 - 사냥 대회",
    type: "weekend",
    description: "최대한 많은 동물을 사냥하는 대회",
    startDate: "2026-07-06T00:00:00Z",
    endDate: "2026-07-07T23:59:59Z",
    rewards: ["추가 경험치", "특별 아이템"],
    participationInstructions: "디스코드 #이벤트 채널 참여 선언",
    statusBadge: "upcoming",
    sourceIds: ["source-002"],
  },
]

// 예시 호출
const allEvents = await getGalaxyServerEvents()
const liveEvents = await getGalaxyServerEvents({ status: "live" })
const weekendEvents = await getGalaxyServerEvents({ type: "weekend" })
```

---

### 4. 디스코드 API

#### 4.1 디스코드 커뮤니티 정보 조회

```typescript
/**
 * 디스코드 커뮤니티 정보 조회
 */
export async function getDiscordCommunity(): Promise<DiscordCommunity>

// 반환값
{
  id: "discord-001",
  name: "갤럭시 서버 커뮤니티",
  inviteUrl: "https://discord.gg/VeNFX3CAwZ",
  memberCount: 1500, // 예상값
  description: "SCUM 갤럭시 서버 공식 디스코드",
  channels: [
    { id: "ch-001", name: "소개", purpose: "서버 정보 및 규칙", category: "정보" },
    { id: "ch-002", name: "뉴비질문", purpose: "초급 플레이어 질문", category: "커뮤니티" },
    { id: "ch-003", name: "거래", purpose: "아이템 거래", category: "커뮤니티" },
    { id: "ch-004", name: "차량신청", purpose: "차량 렌트 신청", category: "행정" },
    { id: "ch-005", name: "이벤트", purpose: "주말 이벤트 공지", category: "정보" },
    { id: "ch-006", name: "공지", purpose: "중요 업데이트", category: "정보" },
    { id: "ch-007", name: "피드백", purpose: "서버 개선 의견", category: "커뮤니티" },
  ],
  adminName: "Galaxy Notice",
  sourceIds: ["source-001"],
}

// 예시 호출
const discord = await getDiscordCommunity()
```

---

## API 에러 처리

모든 API 함수는 에러를 throw합니다:

```typescript
class ApiError extends Error {
  constructor(
    public code: number,
    public message: string,
    public details?: unknown
  ) {
    super(message)
  }
}

// 예시
try {
  const guide = await getGuideById("invalid-id")
} catch (error) {
  if (error instanceof ApiError) {
    if (error.code === 404) {
      console.log("가이드를 찾을 수 없습니다")
    }
  }
}
```

---

## 캐싱 전략

```typescript
// src/shared/api/cache.ts

const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 5 * 60 * 1000 // 5분

export function getCached<T>(key: string): T | null {
  const entry = cache.get(key)
  if (!entry) return null
  if (Date.now() - entry.timestamp > CACHE_DURATION) {
    cache.delete(key)
    return null
  }
  return entry.data
}

export function setCached<T>(key: string, data: T): void {
  cache.set(key, { data, timestamp: Date.now() })
}

// API 함수에서 사용
export async function getGalaxyServerProfile(): Promise<GalaxyServerProfile> {
  const cached = getCached<GalaxyServerProfile>("galaxy-profile")
  if (cached) return cached

  const data = GALAXY_SERVER_DATA
  setCached("galaxy-profile", data)
  return data
}
```

---

## 로깅 및 디버깅

```typescript
// src/shared/api/logger.ts

export function logApiCall(
  endpoint: string,
  params?: unknown,
  response?: unknown
): void {
  if (process.env.NODE_ENV === "development") {
    console.log(`[API] ${endpoint}`, { params, response })
  }
}
```

---

## TanStack Query 통합 (선택사항)

```typescript
// 컴포넌트에서 사용
import { useQuery } from "@tanstack/react-query"
import { getGuides } from "@shared/api"

export function GuideListComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["guides", { category: "weapon" }],
    queryFn: () => getGuides({ category: "weapon" }),
  })

  if (isLoading) return <div>로딩 중...</div>
  if (error) return <div>에러: {error.message}</div>

  return (
    <div>
      {data?.items.map(guide => (
        <div key={guide.id}>{guide.title}</div>
      ))}
    </div>
  )
}
```

---

## 다음 단계

1. `src/shared/api/index.ts` 생성 (모든 API 함수 정의)
2. `src/shared/api/client.ts` 생성 (로컬 데이터 구현)
3. 각 도메인의 정적 데이터 파일 생성
4. TanStack Query 설정 (선택사항)
5. 에러 핸들링 및 로깅 구현

---

## 관련 문서

- `domain-map.md`: 도메인 구조
- `data-model.md`: 데이터 타입
- `route-map.md`: 라우팅 구조
- `implementation-plan.md`: 구현 우선순위

