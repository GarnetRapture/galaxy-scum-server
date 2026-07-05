# 라우트 맵

## 개요

이 문서는 프론트엔드 애플리케이션의 모든 라우트(페이지)를 정의합니다.

## 라우트 구조

### 기본 라우터 설정

```typescript
// src/app/routes/index.tsx (또는 별도 라우터 파일)

import { createBrowserRouter } from "react-router-dom"
import HomePage from "@pages/home"
import GuidesPage from "@pages/guides"
import ServerInfoPage from "@pages/server-info"
import BeginnerPage from "@pages/beginner"
import EventsPage from "@pages/events"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/guides",
    element: <GuidesPage />,
  },
  {
    path: "/guides/:guideId",
    element: <GuideDetailPage />,
  },
  {
    path: "/server-info",
    element: <ServerInfoPage />,
  },
  {
    path: "/beginner",
    element: <BeginnerPage />,
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])
```

## 상세 라우트 정의

### 1. 홈 페이지

**경로**: `/`  
**파일**: `src/pages/home/index.tsx`  
**목적**: 앱 랜딩, 갤럭시 서버 소개, 신규 유저 온보딩 CTA  

**포함 컴포넌트**:
- `<ServerLandingHero />`: 갤럭시 서버 영웅 섹션
- `<NewbieOnboardingCTA />`: 신규 유저 온보딩 버튼
- `<QuickLinks />`: 빠른 링크 (가이드, 디스코드, 이벤트)
- `<FeaturesShowcase />`: 갤럭시 서버 특징
- `<DiscordCTA />`: 디스코드 초대 배너

**쿼리 파라미터**:
- `?utm_source=...`: 트래킹 (선택사항)

**데이터**:
- `GalaxyServerProfile` (갤럭시 서버 정보)
- `GalaxyServerEvent[]` (현재 이벤트)

---

### 2. 가이드 검색 페이지

**경로**: `/guides`  
**파일**: `src/pages/guides/index.tsx`  
**목적**: 가이드 검색, 필터링, 카테고리 탐색  

**포함 컴포넌트**:
- `<GuideSearchBar />`: 키워드 검색 입력
- `<GuideCategoryFilter />`: 카테고리 필터
- `<GuideList />`: 가이드 결과 목록
- `<GuidePagination />`: 페이지네이션

**쿼리 파라미터**:
- `?query=...`: 키워드 검색
- `?category=...`: 카테고리 필터
- `?minPriority=...`: 우선순위 필터
- `?tags=...`: 태그 필터 (복수 가능)
- `?page=...`: 페이지 번호 (기본값 1)

**예시**:
```
/guides?query=무기&category=weapon&minPriority=2
/guides?category=metabolism&page=2
/guides?tags=초급,생존
```

**데이터**:
- `GuideEntry[]` (필터된 가이드 목록)
- `CATEGORY_LABELS` (카테고리명)
- `PRIORITY_LABELS` (우선순위명)

---

### 3. 가이드 상세 페이지

**경로**: `/guides/:guideId`  
**파일**: `src/pages/guides/[guideId].tsx`  
**목적**: 단일 가이드 상세 조회  

**포함 컴포넌트**:
- `<GuideHeader />`: 제목, 카테고리, 우선순위
- `<GuideBody />`: 가이드 본문 (Markdown)
- `<GuideMetadata />`: 출처, 검증 상태, 업데이트 날짜
- `<RelatedGuides />`: 관련 가이드
- `<GuideBreadcrumb />`: 네비게이션 경로

**라우트 파라미터**:
- `guideId`: 가이드 ID

**데이터**:
- `GuideEntry` (단일 가이드)
- `GuideEntry[]` (관련 가이드)
- `SourceRef[]` (출처 목록)

**에러 처리**:
- 가이드 없음: 404 페이지로 리다이렉트

---

### 4. 서버 정보 페이지

**경로**: `/server-info`  
**파일**: `src/pages/server-info/index.tsx`  
**목적**: 갤럭시 서버 상세 정보 제공  

**포함 컴포넌트**:
- `<ServerProfile />`: 서버 기본 정보
- `<ServerRules />`: PVE 규칙
- `<WelcomePackInfo />`: 웰컴팩 안내
- `<VehicleRentalInfo />`: 무료 차량 렌트 정책
- `<NewbieCareInfo />`: 뉴비 케어 프로그램
- `<FarmingAreasShowcase />`: 파밍 지역 소개
  - 뉴비용 파밍지
  - 엔드컨텐츠 파밍지
  - 버려진 벙커
  - 원전
  - 드라이버 파밍지
- `<DiscordCommunity />`: 디스코드 커뮤니티
- `<EventsPreview />`: 현재 이벤트

**데이터**:
- `GalaxyServerProfile` (서버 정보)
- `ServerRule[]` (규칙 목록)
- `WelcomePack` (웰컴팩 정보)
- `VehicleRentalPolicy` (차량 렌트 정책)
- `NewbieCareProgram` (뉴비 케어)
- `GalaxyServerEvent[]` (이벤트)

---

### 5. 신규 유저 온보딩 페이지

**경로**: `/beginner`  
**파일**: `src/pages/beginner/index.tsx`  
**목적**: 신규 유저를 위한 단계별 가이드  

**포함 컴포넌트**:
- `<OnboardingProgress />`: 진행도 표시
- `<OnboardingStep />`: 각 단계별 가이드
  - 0단계: 게임 시작
  - 1단계: 첫 30분 생존
  - 2단계: 초기 정착
  - 3단계: 기초 기술
  - 4단계: 생존의 깊이
  - 5단계: 중급 활동
  - 6단계: 고급 콘텐츠
- `<OnboardingChecklist />`: 체크리스트
- `<GalaxySpecificTips />`: 갤럭시 서버 팁
- `<DiscordInvite />`: 디스코드 초대

**쿼리 파라미터**:
- `?step=...`: 시작 단계 (기본값 0)

**예시**:
```
/beginner          # 0단계부터 시작
/beginner?step=3   # 3단계부터 시작
```

**데이터**:
- `GuideEntry` (신규 유저 시작 가이드)
- `OnboardingStep[]` (단계별 가이드)
- `GalaxyServerProfile` (갤럭시 서버 정보)

**로컬 상태**:
- 완료한 체크리스트 항목 (localStorage)

---

### 6. 이벤트 페이지

**경로**: `/events`  
**파일**: `src/pages/events/index.tsx`  
**목적**: 현재 및 예정 이벤트 안내  

**포함 컴포넌트**:
- `<EventFilter />`: 이벤트 타입 필터
  - 주말 이벤트
  - 특별 이벤트
  - 경험치 이벤트
- `<EventList />`: 이벤트 목록
  - 라이브 이벤트 (상단)
  - 예정 이벤트 (중단)
  - 종료 이벤트 (하단)
- `<EventDetail />`: 이벤트 상세 (클릭 시)

**쿼리 파라미터**:
- `?type=...`: 이벤트 타입 필터
- `?status=...`: 상태 필터 (live, upcoming, ended)

**예시**:
```
/events                    # 모든 이벤트
/events?type=weekend       # 주말 이벤트만
/events?status=live        # 진행 중인 이벤트만
```

**데이터**:
- `GalaxyServerEvent[]` (이벤트 목록)

---

## 페이지 그룹 (선택사항)

일부 라우트는 그룹으로 묶을 수 있습니다:

### 정보성 페이지 그룹
```
/                    # 홈 (랜딩)
/guides              # 가이드 검색
/guides/:guideId     # 가이드 상세
/server-info         # 서버 정보
/events              # 이벤트
```

### 신규 유저 페이지 그룹
```
/beginner            # 온보딩
```

## 에러 페이지

### 404 Not Found
**파일**: `src/pages/error/NotFound.tsx`  
**표시되는 경로**:
- `/guides/:guideId` (가이드 없을 때)
- `/*` (존재하지 않는 경로)

**포함**:
- 홈으로 돌아가기 버튼
- 검색 추천

### 500 Server Error
**파일**: `src/pages/error/ServerError.tsx`  
**표시되는 경로**:
- 데이터 로딩 실패
- API 에러

---

## 네비게이션 구조

### 주 네비게이션
```
홈 (/)
  ├─ 가이드 (/guides)
  ├─ 서버 정보 (/server-info)
  ├─ 신규 유저 (/beginner)
  └─ 이벤트 (/events)
```

### 헤더 구성
```
[로고/홈] [가이드] [서버정보] [신규유저] [이벤트] [디스코드 버튼]
```

### 푸터 구성
```
디스코드 초대
저작권 및 출처 정보
관리자 정보
```

---

## 링크 예시

### 내부 링크
```typescript
// react-router-dom 사용
<Link to="/guides">가이드 보기</Link>
<Link to={`/guides/${guideId}`}>상세 보기</Link>
<Link to="/guides?category=metabolism">신진대사 가이드</Link>
```

### 외부 링크
```typescript
// 디스코드
<a href="https://discord.gg/VeNFX3CAwZ" target="_blank">
  디스코드 참여
</a>
```

---

## SEO 및 메타데이터

각 페이지는 적절한 메타데이터를 설정해야 합니다:

```typescript
// src/lib/seo.ts (또는 react-helmet 사용)

export const SEO_PAGES = {
  home: {
    title: "갤럭시 서버 - SCUM 한국 PVE",
    description: "SCUM 한국 PVE 서버 갤럭시의 공식 안내 사이트. 신규 유저 온보딩, 게임 가이드, 서버 규칙, 이벤트 정보 제공.",
    keywords: ["SCUM", "갤럭시서버", "게임가이드", "온보딩"],
  },
  guides: {
    title: "게임 가이드 - 갤럭시 서버",
    description: "SCUM 게임의 모든 가이드. 신규 유저부터 고급 플레이어까지 필요한 정보 제공.",
    keywords: ["SCUM 가이드", "게임 정보", "튜토리얼"],
  },
  // ... 다른 페이지들
}
```

---

## 라우팅 타입스크립트 정의

```typescript
// src/shared/types/routes.ts

export type RouteKey =
  | "home"
  | "guides"
  | "guideDetail"
  | "serverInfo"
  | "beginner"
  | "events"

export type RouteConfig = {
  path: string
  label: string
  icon?: string
  title: string
  description: string
  inNav: boolean         // 네비게이션에 표시 여부
}

export const ROUTES: Record<RouteKey, RouteConfig> = {
  home: {
    path: "/",
    label: "홈",
    title: "갤럭시 서버",
    description: "갤럭시 서버 소개 및 신규 유저 안내",
    inNav: true,
  },
  guides: {
    path: "/guides",
    label: "가이드",
    title: "게임 가이드",
    description: "SCUM 게임 가이드 검색",
    inNav: true,
  },
  guideDetail: {
    path: "/guides/:guideId",
    label: "가이드 상세",
    title: "가이드",
    description: "가이드 상세 조회",
    inNav: false,
  },
  serverInfo: {
    path: "/server-info",
    label: "서버 정보",
    title: "갤럭시 서버 정보",
    description: "갤럭시 서버 규칙, 특징, 정보",
    inNav: true,
  },
  beginner: {
    path: "/beginner",
    label: "신규 유저",
    title: "신규 유저 온보딩",
    description: "게임 시작부터 초급 단계까지 단계별 가이드",
    inNav: true,
  },
  events: {
    path: "/events",
    label: "이벤트",
    title: "현재 이벤트",
    description: "갤럭시 서버 이벤트 안내",
    inNav: true,
  },
}
```

---

## 다음 단계

1. 라우터 기본 설정 (React Router v6)
2. 각 페이지 컴포넌트 기본 구조 생성
3. 네비게이션 컴포넌트 구현
4. SEO 메타데이터 설정
5. 라우트별 데이터 로딩 로직

---

## 관련 문서

- `domain-map.md`: 도메인 구조
- `data-model.md`: 데이터 타입
- `api-contract.md`: API 호출 명세
- `implementation-plan.md`: 구현 우선순위
