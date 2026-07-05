# 도메인 맵 및 구조

## 개요

이 프로젝트는 SCUM 한국 PVE 서버 갤럭시 서버의 웹 프론트엔드입니다. 도메인은 두 가지 주요 영역으로 분리됩니다:

1. **SCUM 게임 도메인** (`src/domains/scum/`): 게임 자체의 콘텐츠, 메커니즘, 가이드
2. **갤럭시 서버 도메인** (`src/domains/galaxy-server/`): 서버 고유의 정책, 기능, 커뮤니티

## 디렉토리 구조

```
src/
├── app/
│   ├── providers/           # 전역 프로바이더 (React Context, Query Client 등)
│   └── routes/             # 라우터 설정
│
├── shared/
│   ├── api/                # API 레이어 (단일 진입점)
│   ├── config/             # 환경 설정, 상수
│   ├── lib/                # 공용 유틸리티, 헬퍼 함수
│   └── types/              # 공용 타입 (공유되는 타입만)
│
├── domains/
│   ├── scum/               # SCUM 게임 도메인
│   │   ├── version/            # 게임 버전 정보
│   │   ├── guides/             # 가이드 (메인 콘텐츠)
│   │   ├── items/              # 아이템, 루팅
│   │   ├── weapons/            # 무기, 탄약
│   │   ├── vehicles/           # 차량
│   │   ├── locations/          # 맵, 지역
│   │   ├── survival/           # 생존 시스템 (신진대사, 부상 등)
│   │   ├── metabolism/         # 신진대사 상세
│   │   ├── injuries/           # 부상, 질병
│   │   ├── hunting/            # 사냥
│   │   ├── fishing/            # 낚시
│   │   ├── cooking/            # 요리
│   │   ├── farming/            # 농사
│   │   ├── base-building/      # 기지 건설
│   │   ├── traders/            # 상인, 거래
│   │   ├── enemies/            # 적 (좀비, 메크, 동물)
│   │   └── server-settings/    # 서버 설정
│   │
│   └── galaxy-server/         # 갤럭시 서버 도메인 (한국 PVE 서버)
│       ├── profile/               # 서버 프로필, 소개
│       ├── rules/                 # PVE 규칙, 정책
│       ├── welcome-pack/          # 웰컴팩
│       ├── vehicle-rental/        # 무료 차량 렌트 제도
│       ├── newbie-care/           # 뉴비 케어 프로그램
│       ├── discord/               # 디스코드 커뮤니티
│       └── events/                # 주말 이벤트
│
├── features/
│   ├── guide-search/          # 가이드 검색 UI
│   ├── guide-category-list/   # 가이드 카테고리 필터
│   ├── server-landing/        # 갤럭시 서버 랜딩
│   ├── newbie-onboarding/     # 신규 유저 온보딩 플로우
│   ├── discord-cta/           # 디스코드 CTA 컴포넌트
│   └── faq/                   # FAQ
│
├── pages/
│   ├── home/                  # 홈 페이지
│   ├── guides/                # 가이드 검색 페이지
│   ├── server-info/           # 서버 정보 페이지
│   ├── beginner/              # 신규 유저 온보딩 페이지
│   └── events/                # 이벤트 안내 페이지
│
└── (UI 컴포넌트는 shadcn/ui에서 제공되므로 src/@/components/ui 사용)
```

## 도메인 내부 구조 (예: `scum/guides/`)

```
scum/guides/
├── types.ts                    # 가이드 관련 타입
├── data/
│   ├── beginner-guide.data.ts # 신규 유저 시작 가이드
│   ├── metabolism.data.ts     # 신진대사 가이드
│   ├── weapons.data.ts        # 무기 가이드
│   └── ...
├── components/
│   ├── GuideCard.tsx          # 가이드 카드 컴포넌트
│   ├── GuideDetail.tsx        # 가이드 상세 컴포넌트
│   └── ...
├── hooks/
│   └── useGuideSearch.ts      # 가이드 검색 훅
└── index.ts                   # 공개 API
```

## 각 도메인의 책임

### 1. SCUM 도메인 (`src/domains/scum/`)

**책임**: SCUM 게임의 모든 객관적 정보 제공

#### 1.1 `version/`
- 현재 게임 버전
- 최신 업데이트 정보
- 패치노트

#### 1.2 `guides/`
- 가이드 콘텐츠 (신규 유저부터 고급까지)
- 카테고리: beginner, metabolism, weapons, combat, hunting, fishing, cooking, farming, base-building, traders, location, bunker, radiation, enemy, quest, cargo-drop, server-settings

#### 1.3 `items/`
- 아이템 목록
- 루팅 위치
- 아이템 용도

#### 1.4 `weapons/`
- 무기 종류 및 특성
- 탄약 타입
- 무기 유지보수

#### 1.5 `vehicles/`
- 차량 종류
- 차량 조작법
- 연료 및 유지보수

#### 1.6 `locations/`
- 맵 구조 및 지역명
- 각 지역 특성
- 안전도 및 리소스 분포

#### 1.7 `survival/`
- 신진대사, 영양, 수분, 피로 시스템
- 부상 및 질병
- 치료 방법

#### 1.8 `hunting/`
- 사냥 가능한 동물
- 사냥 장비 및 기법
- 동물 부위별 루팅

#### 1.9 `fishing/`
- 낚시 가능 위치
- 어종 및 계절 변화
- 낚시 장비

#### 1.10 `cooking/`
- 요리 가능한 음식
- 요리 재료 및 도구
- 영양 효과

#### 1.11 `farming/`
- 경작 가능한 작물
- 성장 주기
- 비료 및 관리

#### 1.12 `base-building/`
- 건설 가능한 구조물
- 건설 재료 및 비용
- 방어 시스템

#### 1.13 `traders/`
- 상인 위치
- 거래 가능 아이템
- 명성 시스템

#### 1.14 `enemies/`
- 좀비 종류 및 행동
- 메크 특성
- 동물 행동

#### 1.15 `server-settings/`
- PvE/PvP 모드 차이
- 커스텀 설정 옵션

### 2. 갤럭시 서버 도메인 (`src/domains/galaxy-server/`)

**책임**: 갤럭시 서버 고유의 정보, 정책, 커뮤니티 안내

#### 2.1 `profile/`
- 서버 소개 (방제, 검색 키워드, 플레이스타일)
- 관리자 정보
- 운영 철학 (가족 같은 분위기, 고인물+뉴비 공존)

#### 2.2 `rules/`
- PVE 기본 규칙 (PvP 금지, 기지 파괴 금지 등)
- 신규 유저 보호 정책
- 벌칙 체계

#### 2.3 `welcome-pack/`
- 웰컴팩 정의 및 목적
- 구성 아이템
- 수령 절차

#### 2.4 `vehicle-rental/`
- 무료 차량 렌트 정책
- 신청 절차 (디스코드)
- 반납 규칙

#### 2.5 `newbie-care/`
- 뉴비 케어 프로그램 설명
- 적응 가이드
- 관리자 연락 방법

#### 2.6 `discord/`
- 디스코드 초대 링크
- 주요 채널 설명
- 커뮤니티 활용법

#### 2.7 `events/`
- 주말 이벤트 일정
- 이벤트 종류 및 보상
- 경험치 이벤트

## 기능 레이어 (`src/features/`)

기능은 **UI/UX 중심**이며, 여러 도메인의 정보를 조합하여 표현합니다.

### 1. `guide-search/`
- 가이드 검색 기능
- 키워드 검색 (SCUM 도메인 가이드)
- 상태: UI 컴포넌트 + 검색 로직

### 2. `guide-category-list/`
- 가이드 카테고리 필터 UI
- 30개 카테고리별 목록
- 우선순위 표시

### 3. `server-landing/`
- 갤럭시 서버 소개 페이지
- 웰컴팩, 차량 렌트, 뉴비 케어 안내
- 상태: 갤럭시 서버 도메인 + UI

### 4. `newbie-onboarding/`
- 신규 유저 온보딩 플로우
- 단계별 가이드 표시
- 체크리스트

### 5. `discord-cta/`
- 디스코드 초대 버튼/배너
- 디스코드 공식 임베드 (가능시)

### 6. `faq/`
- FAQ 페이지
- 초급, 중급, 갤럭시 서버 특화 FAQ

## 페이지 레이어 (`src/pages/`)

페이지는 여러 기능을 조합한 **경로별 진입점**입니다.

### 1. `home/`
- 앱 랜딩 페이지
- 갤럭시 서버 소개 + 신규 유저 온보딩 CTA
- 빠른 링크: 가이드, 디스코드, 이벤트

### 2. `guides/`
- 가이드 검색 페이지
- 카테고리 필터
- 검색 기능
- 가이드 상세 뷰

### 3. `server-info/`
- 갤럭시 서버 상세 정보
- 규칙, 특징, 파밍 지역
- 웰컴팩, 차량 렌트, 뉴비 케어 상세

### 4. `beginner/`
- 신규 유저 온보딩
- 단계별 가이드 (0단계~5단계)
- 체크리스트

### 5. `events/`
- 현재 이벤트 목록
- 주말 이벤트 일정
- 경험치 이벤트 정보

## 공유 레이어 (`src/shared/`)

### 1. `api/`
- API 호출의 단일 진입점
- 처음에는 로컬 데이터 호출
- 나중에 백엔드 API로 확장 가능

### 2. `config/`
- 환경 변수
- 상수 (디스코드 링크 등)
- 설정값

### 3. `lib/`
- 공용 유틸리티 함수
- 헬퍼 함수 (날짜 포맷, 텍스트 처리 등)

### 4. `types/`
- 공용 타입 (모든 도메인이 공유)
- 예: `SourceReliability`, `ScumContentCategory`, `SourceRef`, etc.

## 타입 흐름

### 공용 타입 (`src/shared/types/`)
```ts
export type SourceReliability = "official" | "steam" | "wiki" | "community" | "server-local" | "unverified"
export type ScumContentCategory = "beginnerGuide" | "character" | ...
export type SourceRef = { id, title, url, reliability, checkedAt, notes }
```

### 도메인별 타입 (`src/domains/scum/guides/types.ts`)
```ts
import { ScumContentCategory, SourceRef } from "@shared/types"

export type GuideEntry = {
  id: string
  title: string
  category: ScumContentCategory
  summary: string
  body: string
  tags: string[]
  beginnerPriority: 1 | 2 | 3 | 4 | 5
  sourceIds: string[]
  updatedAt: string
  verificationStatus: "verified" | "partial" | "needs-review"
}
```

### 갤럭시 서버 타입 (`src/domains/galaxy-server/profile/types.ts`)
```ts
export type GalaxyServerProfile = {
  name: "갤럭시 서버"
  searchKeywords: string[]
  roomTitle: string
  playStyle: "PVE"
  discordInviteUrl: string
  adminDiscordName: string
  sinceYear: 2021
  features: string[]
  welcomePackEnabled: boolean
  vehicleRentalEnabled: boolean
  newbieGuideEnabled: boolean
  weekendEventsEnabled: boolean
}
```

## 데이터 흐름

```
User Action (페이지 방문)
       ↓
Page Component (pages/*)
       ↓
Feature Component (features/*)
       ↓
Domain Data (domains/*/data/) ← 로컬 TS 파일
       ↓
Shared API (shared/api/) ← 단일 진입점
       ↓
UI Components (shadcn/ui)
```

## 다음 단계

1. 타입 파일 생성 (`src/shared/types/`, 각 도메인 `types.ts`)
2. 정적 데이터 파일 생성 (`domains/*/data/`)
3. 기본 API 레이어 구성 (`shared/api/`)
4. 라우터 설정 (`app/routes/`)
5. 페이지 및 기능 컴포넌트 구현

## 관련 문서

- `data-model.md`: 타입 및 데이터 구조 상세
- `route-map.md`: 라우팅 구조
- `api-contract.md`: API 호출 계약
- `implementation-plan.md`: 구현 순서
