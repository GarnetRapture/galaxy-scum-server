# 구현 계획

## 개요

이 문서는 프로젝트의 전체 구현 순서를 정의합니다. 각 단계는 선행 단계가 완료된 후에 진행되며, 한 번에 하나의 단계만 진행합니다.

## Phase 0: 문서 보강 ✓ 완료

**상태**: 모든 research 및 architecture 문서 보강 완료 (2026-07-05)

### 완료 항목

- ✓ `scum-source-register.md`: SOURCE_REFS 추가, Tier 분류 정정 (Steam → Tier 2), 재확인 필요 항목 테이블화
- ✓ `scum-current-version.md`: 공식 출처 명시 (Steam News, Steam Store), INTO THE WILD 테이블화
- ✓ `scum-content-taxonomy.md`: 30개 → 40개 카테고리로 확장, ContentKnowledgeKind 메타 추가
- ✓ `scum-beginner-guide.md`: 확인상태 블록 추가, [needs-review]/[partial] 태그 명시, 오탈자 수정
- ✓ `scum-server-galaxy-profile.md`: Tier 5 (Server Local) 명시, sourceId 연결, 로컬 정책 분리
- ✓ `data-model.md`: VerifiableContentMeta, ContentKnowledgeKind, ContentFreshness 타입 추가

### 문서 확인상태 요약

| 문서 | 확인상태 | 우선순위 |
|------|---------|---------|
| scum-current-version.md | partial | 높음 (INTO THE WILD 세부 needs-review) |
| scum-content-taxonomy.md | partial | 높음 (INTO THE WILD 항목 needs-review) |
| scum-beginner-guide.md | partial | 높음 (수치/세부사항 needs-review) |
| scum-server-galaxy-profile.md | partial | 중간 (웰컴팩/파밍지 세부 needs-review) |

## 전체 구현 단계 (Phase 1-10)

```
Phase 1: 타입 및 데이터 구조 (1주)
  ├─ 1.1 공용 타입
  ├─ 1.2 SCUM 도메인 타입
  └─ 1.3 갤럭시 서버 도메인 타입

Phase 2: 정적 데이터 파일 (2주)
  ├─ 2.1 SCUM 가이드 데이터
  ├─ 2.2 갤럭시 서버 정보 데이터
  └─ 2.3 기타 게임 시스템 데이터

Phase 3: API 레이어 (3-4일)
  ├─ 3.1 공용 API 함수 정의
  └─ 3.2 로컬 데이터 클라이언트 구현

Phase 4: 라우터 및 기본 레이아웃 (3-4일)
  ├─ 4.1 라우터 설정
  ├─ 4.2 기본 레이아웃 컴포넌트
  └─ 4.3 네비게이션 컴포넌트

Phase 5: 핵심 페이지 구현 (2주)
  ├─ 5.1 홈 페이지
  ├─ 5.2 가이드 검색 페이지
  └─ 5.3 서버 정보 페이지

Phase 6: 추가 페이지 구현 (1주)
  ├─ 6.1 신규 유저 온보딩 페이지
  ├─ 6.2 이벤트 페이지
  └─ 6.3 에러 페이지

Phase 7: 기능 컴포넌트 (2주)
  ├─ 7.1 검색 기능
  ├─ 7.2 필터링 기능
  ├─ 7.3 CTA 컴포넌트
  └─ 7.4 FAQ 기능

Phase 8: 스타일링 및 반응형 (1주)
  ├─ 8.1 shadcn/ui 테마 설정
  ├─ 8.2 Tailwind CSS 커스터마이징
  └─ 8.3 반응형 디자인

Phase 9: SEO 및 메타데이터 (3-4일)
  ├─ 9.1 페이지별 메타 설정
  ├─ 9.2 구조화된 데이터
  └─ 9.3 sitemap 생성

Phase 10: 테스트 및 배포 (1주)
  ├─ 10.1 단위 테스트
  ├─ 10.2 통합 테스트
  ├─ 10.3 E2E 테스트
  └─ 10.4 배포

총 예상 시간: 5-6주
```

## Phase 1: 타입 및 데이터 구조 (1주)

### 1.1 공용 타입 (`src/shared/types/`)

**파일**:
- `index.ts`: 모든 공용 타입 정의
- `constants.ts`: 타입별 라벨, 상수

**작업**:
- [ ] `SourceReliability` 타입 정의 (official, steam, wiki, community, server-local, unverified)
- [ ] `VerificationStatus` 타입 정의 (verified, partial, needs-review, deprecated, server-local-only)
- [ ] `ContentKnowledgeKind` 타입 정의 (official-game-system, server-local-policy, beginner-guide 등)
- [ ] `ContentFreshness` 타입 정의 (current, patch-sensitive, stale-risk, unknown)
- [ ] `ScumContentCategory` 타입 정의 (40개 카테고리)
- [ ] `BeginnerPriority` 타입 정의 (1-5)
- [ ] `SourceRef` 타입 정의 (id, title, url, reliability, checkedAt, notes)
- [ ] `VerifiableContentMeta` 타입 정의 (sourceIds, verificationStatus, knowledgeScope, freshness, checkedAt, reviewBefore, reviewReason)
- [ ] 카테고리 라벨 정의 (CATEGORY_LABELS)
- [ ] 우선순위 라벨 정의 (PRIORITY_LABELS)

**소요 시간**: 1일

### 1.2 SCUM 도메인 타입

**파일**:
- `src/domains/scum/*/types.ts` (각 서브 도메인)

**작업**:
- [ ] `scum/guides/types.ts`: GuideEntry, GuideSearchFilter
- [ ] `scum/version/types.ts`: GameVersion, VersionInfo
- [ ] `scum/weapons/types.ts`: Weapon, WeaponType
- [ ] `scum/vehicles/types.ts`: Vehicle, VehicleType
- [ ] `scum/items/types.ts`: Item, ItemType
- [ ] `scum/locations/types.ts`: Location, LocationType
- [ ] `scum/enemies/types.ts`: Enemy, EnemyType
- [ ] `scum/survival/types.ts`: VitalStat, Condition

**소요 시간**: 2-3일

### 1.3 갤럭시 서버 도메인 타입

**파일**:
- `src/domains/galaxy-server/*/types.ts` (각 서브 도메인)

**작업**:
- [ ] `galaxy-server/profile/types.ts`: GalaxyServerProfile
- [ ] `galaxy-server/rules/types.ts`: ServerRule, RuleCategory
- [ ] `galaxy-server/welcome-pack/types.ts`: WelcomePack, WelcomePackItem
- [ ] `galaxy-server/vehicle-rental/types.ts`: VehicleRentalPolicy
- [ ] `galaxy-server/newbie-care/types.ts`: NewbieCareProgram
- [ ] `galaxy-server/events/types.ts`: GalaxyServerEvent, EventType
- [ ] `galaxy-server/discord/types.ts`: DiscordCommunity, DiscordChannel

**소요 시간**: 2-3일

---

## Phase 2: 정적 데이터 파일 (2주)

### 2.1 SCUM 가이드 데이터

**파일**: `src/domains/scum/guides/data/`

**작업**:
- [ ] `beginner-guide.data.ts`: 신규 유저 시작 가이드
- [ ] `metabolism.data.ts`: 신진대사 시스템 가이드
- [ ] `weapons.data.ts`: 무기 가이드
- [ ] `combat.data.ts`: 전투 가이드
- [ ] `hunting.data.ts`: 사냥 가이드
- [ ] `fishing.data.ts`: 낚시 가이드
- [ ] `cooking.data.ts`: 요리 가이드
- [ ] `farming.data.ts`: 농사 가이드
- [ ] `base-building.data.ts`: 기지 건설 가이드
- [ ] `traders.data.ts`: 거래 가이드
- [ ] `location.data.ts`: 지역 가이드
- [ ] `bunker.data.ts`: 벙커 가이드
- [ ] `radiation.data.ts`: 방사능 가이드
- [ ] `enemy.data.ts`: 적 가이드
- [ ] `items.data.ts`: 아이템 데이터
- [ ] `version.data.ts`: 버전 정보

**작성 기준**:
- 사용자가 제공한 정보 기반
- 마크다운 형식으로 작성
- 출처 ID 포함

**소요 시간**: 1주 (가이드 작성 업무)

### 2.2 갤럭시 서버 정보 데이터

**파일**: `src/domains/galaxy-server/*/data.ts`

**작업**:
- [ ] `profile/data.ts`: 갤럭시 서버 프로필
- [ ] `rules/data.ts`: PVE 규칙
- [ ] `welcome-pack/data.ts`: 웰컴팩 정보
- [ ] `vehicle-rental/data.ts`: 차량 렌트 정책
- [ ] `newbie-care/data.ts`: 뉴비 케어 프로그램
- [ ] `events/data.ts`: 현재 이벤트
- [ ] `discord/data.ts`: 디스코드 커뮤니티 정보

**작성 기준**:
- 사용자가 제공한 갤럭시 서버 정보 기반
- 모두 Tier 5 (Server Local) 신뢰도

**소요 시간**: 2-3일

### 2.3 기타 게임 시스템 데이터

**파일**: `src/domains/scum/*/data.ts`

**작업**:
- [ ] `version/data.ts`: 게임 버전 정보
- [ ] `weapons/data.ts`: 무기 목록
- [ ] `vehicles/data.ts`: 차량 목록
- [ ] `items/data.ts`: 아이템 목록
- [ ] `locations/data.ts`: 지역 정보
- [ ] `enemies/data.ts`: 적 정보
- [ ] `survival/data.ts`: 생존 시스템 정보

**작성 기준**:
- Tier 3-4 정보 (Wiki, Community) 기반
- 구체적 수치 데이터 포함

**소요 시간**: 3-4일

---

## Phase 3: API 레이어 (3-4일)

### 3.1 공용 API 함수 정의

**파일**: `src/shared/api/index.ts`

**작업**:
- [ ] 가이드 API 함수 정의
  - `getGuides()`
  - `getGuideById()`
  - `getRelatedGuides()`
- [ ] 게임 정보 API 함수 정의
  - `getGameVersion()`
  - `getWeapons()`
  - `getVehicles()`
  - `getItems()`
  - `getLocations()`
  - `getEnemies()`
- [ ] 갤럭시 서버 API 함수 정의
  - `getGalaxyServerProfile()`
  - `getGalaxyServerRules()`
  - `getWelcomePack()`
  - `getVehicleRentalPolicy()`
  - `getNewbieCareProgram()`
  - `getGalaxyServerEvents()`
  - `getDiscordCommunity()`

**소요 시간**: 1-2일

### 3.2 로컬 데이터 클라이언트 구현

**파일**: `src/shared/api/client.ts`

**작업**:
- [ ] API 함수 구현 (로컬 데이터 기반)
- [ ] 검색 및 필터링 로직
- [ ] 페이지네이션 로직
- [ ] 에러 처리
- [ ] 캐싱 구현 (선택사항)

**소요 시간**: 2일

---

## Phase 4: 라우터 및 기본 레이아웃 (3-4일)

### 4.1 라우터 설정

**파일**: `src/app/routes/index.tsx`

**작업**:
- [ ] React Router 설정
- [ ] 라우트 정의 (/ , /guides, /guides/:id, /server-info, /beginner, /events)
- [ ] 에러 페이지 정의

**소요 시간**: 1일

### 4.2 기본 레이아웃 컴포넌트

**파일**: `src/app/layout/AppLayout.tsx`

**작업**:
- [ ] 헤더 레이아웃
- [ ] 푸터 레이아웃
- [ ] 메인 콘텐츠 영역
- [ ] 사이드바 (필요시)
- [ ] 반응형 그리드

**소요 시간**: 1-2일

### 4.3 네비게이션 컴포넌트

**파일**: `src/shared/components/Navigation.tsx`

**작업**:
- [ ] 헤더 네비게이션
- [ ] 푸터 네비게이션
- [ ] 모바일 메뉴
- [ ] 디스코드 버튼

**소요 시간**: 1일

---

## Phase 5: 핵심 페이지 구현 (2주)

### 5.1 홈 페이지

**경로**: `/`  
**파일**: `src/pages/home/index.tsx`

**작업**:
- [ ] 페이지 구조 정의
- [ ] `<ServerLandingHero />` 컴포넌트
- [ ] `<NewbieOnboardingCTA />` 컴포넌트
- [ ] `<QuickLinks />` 컴포넌트
- [ ] `<FeaturesShowcase />` 컴포넌트
- [ ] `<DiscordCTA />` 컴포넌트
- [ ] 반응형 디자인
- [ ] 메타데이터 설정

**소요 시간**: 3-4일

### 5.2 가이드 검색 페이지

**경로**: `/guides`  
**파일**: `src/pages/guides/index.tsx`

**작업**:
- [ ] 페이지 구조 정의
- [ ] `<GuideSearchBar />` 컴포넌트 (검색 입력)
- [ ] `<GuideCategoryFilter />` 컴포넌트 (필터)
- [ ] `<GuideList />` 컴포넌트 (결과 목록)
- [ ] `<GuidePagination />` 컴포넌트
- [ ] 검색 로직 구현
- [ ] 필터링 로직 구현
- [ ] 메타데이터 설정

**소요 시간**: 4-5일

### 5.3 서버 정보 페이지

**경로**: `/server-info`  
**파일**: `src/pages/server-info/index.tsx`

**작업**:
- [ ] 페이지 구조 정의
- [ ] `<ServerProfile />` 섹션
- [ ] `<ServerRules />` 섹션
- [ ] `<WelcomePackInfo />` 섹션
- [ ] `<VehicleRentalInfo />` 섹션
- [ ] `<NewbieCareInfo />` 섹션
- [ ] `<FarmingAreasShowcase />` 섹션
- [ ] `<DiscordCommunity />` 섹션
- [ ] `<EventsPreview />` 섹션
- [ ] 메타데이터 설정

**소요 시간**: 4-5일

---

## Phase 6: 추가 페이지 구현 (1주)

### 6.1 신규 유저 온보딩 페이지

**경로**: `/beginner`  
**파일**: `src/pages/beginner/index.tsx`

**작업**:
- [ ] 페이지 구조 정의
- [ ] `<OnboardingProgress />` 컴포넌트
- [ ] `<OnboardingStep />` 컴포넌트 (6개 단계)
- [ ] `<OnboardingChecklist />` 컴포넌트
- [ ] `<GalaxySpecificTips />` 섹션
- [ ] 진행도 추적 (localStorage)
- [ ] 메타데이터 설정

**소요 시간**: 3-4일

### 6.2 이벤트 페이지

**경로**: `/events`  
**파일**: `src/pages/events/index.tsx`

**작업**:
- [ ] 페이지 구조 정의
- [ ] `<EventFilter />` 컴포넌트
- [ ] `<EventList />` 컴포넌트
- [ ] `<EventDetail />` 컴포넌트
- [ ] 필터링 로직
- [ ] 메타데이터 설정

**소요 시간**: 2-3일

### 6.3 에러 페이지

**파일**:
- `src/pages/error/NotFound.tsx`
- `src/pages/error/ServerError.tsx`

**작업**:
- [ ] 404 페이지
- [ ] 500 에러 페이지
- [ ] 홈으로 돌아가기 링크

**소요 시간**: 1일

---

## Phase 7: 기능 컴포넌트 (2주)

### 7.1 검색 기능

**파일**: `src/features/guide-search/useGuideSearch.ts`

**작업**:
- [ ] 검색 훅 구현
- [ ] 키워드 매칭 로직
- [ ] 정렬 옵션
- [ ] 캐싱

**소요 시간**: 2-3일

### 7.2 필터링 기능

**파일**: `src/features/guide-category-list/`

**작업**:
- [ ] 카테고리 필터 UI
- [ ] 우선순위 필터
- [ ] 태그 필터
- [ ] 다중 필터 조합

**소요 시간**: 2-3일

### 7.3 CTA 컴포넌트

**파일**: `src/features/discord-cta/`

**작업**:
- [ ] 디스코드 초대 배너
- [ ] 디스코드 버튼 여러 변형
- [ ] 최적화된 CTA 배치

**소요 시간**: 1-2일

### 7.4 FAQ 기능

**파일**: `src/features/faq/`

**작업**:
- [ ] FAQ 페이지 또는 섹션
- [ ] 아코디언 UI
- [ ] 카테고리별 FAQ
- [ ] 검색 기능

**소요 시간**: 2-3일

---

## Phase 8: 스타일링 및 반응형 (1주)

### 8.1 shadcn/ui 테마 설정

**파일**: `src/app/globals.css`

**작업**:
- [ ] shadcn/ui 컴포넌트 설치
- [ ] 기본 테마 설정
- [ ] 라이트/다크 모드 (선택사항)

**소요 시간**: 1-2일

### 8.2 Tailwind CSS 커스터마이징

**파일**: `tailwind.config.ts`

**작업**:
- [ ] 색상 팔레트 정의
- [ ] 폰트 설정
- [ ] 간격 및 크기 설정
- [ ] 반응형 브레이크포인트

**소요 시간**: 1-2일

### 8.3 반응형 디자인

**작업**:
- [ ] 모바일 (< 640px)
- [ ] 태블릿 (640px - 1024px)
- [ ] 데스크톱 (> 1024px)
- [ ] 테스트

**소요 시간**: 2-3일

---

## Phase 9: SEO 및 메타데이터 (3-4일)

### 9.1 페이지별 메타 설정

**파일**: `src/lib/seo.ts`

**작업**:
- [ ] 각 페이지별 메타 정보 정의
- [ ] react-helmet 또는 라우터 메타 설정
- [ ] Open Graph 설정

**소요 시간**: 1-2일

### 9.2 구조화된 데이터

**작업**:
- [ ] Schema.org 마크업
- [ ] 조직 정보
- [ ] 페이지 정보

**소요 시간**: 1일

### 9.3 Sitemap 생성

**파일**: `public/sitemap.xml`

**작업**:
- [ ] 정적 sitemap 생성
- [ ] robots.txt 설정

**소요 시간**: 1일

---

## Phase 10: 테스트 및 배포 (1주)

### 10.1 단위 테스트

**파일**: `src/**/*.test.ts(x)`

**작업**:
- [ ] 유틸리티 함수 테스트
- [ ] API 함수 테스트 (목킹)
- [ ] 커스텀 훅 테스트

**소요 시간**: 2-3일

### 10.2 통합 테스트

**작업**:
- [ ] 페이지 렌더링 테스트
- [ ] 라우팅 테스트
- [ ] 데이터 흐름 테스트

**소요 시간**: 1-2일

### 10.3 E2E 테스트

**작업**:
- [ ] Cypress 또는 Playwright 설정
- [ ] 주요 경로 테스트
- [ ] 검색 기능 테스트

**소요 시간**: 1-2일

### 10.4 배포

**작업**:
- [ ] 빌드 최적화
- [ ] 배포 환경 설정
- [ ] 성능 측정

**소요 시간**: 1일

---

## 의존성 및 리스크

### 의존성
- Phase 1은 이후 모든 단계의 기반
- Phase 2는 Phase 1 완료 후 진행 가능
- Phase 3은 Phase 2 완료 후 진행 가능
- Phase 4는 Phase 1 완료 후 진행 가능 (Phase 2, 3과 병렬 가능)

### 병렬 처리 가능 단계
- **Phase 2와 Phase 4**: 동시 진행 가능 (의존성 없음)
- 실제 일정: Phase 2 + Phase 4 동시 진행 → 1주 단축 가능

### 리스크 및 대응
1. **데이터 정보 부족**
   - 위험도: 높음
   - 대응: 출처 조사 필요한 항목은 `[unverified]` 표시

2. **디자인 미정**
   - 위험도: 중간
   - 대응: shadcn/ui 기본 스타일로 시작, 필요시 커스터마이징

3. **성능 이슈**
   - 위험도: 낮음-중간
   - 대응: 페이지네이션, 캐싱, 코드 스플리팅 계획

---

## 우선순위 기준

### High Priority (필수)
- Phase 1, 2, 3, 4: 기반 구조
- Phase 5.1, 5.2: 핵심 페이지
- Phase 9: SEO

### Medium Priority (권장)
- Phase 5.3: 서버 정보
- Phase 6.1: 온보딩
- Phase 7: 기능 컴포넌트

### Low Priority (선택)
- Phase 6.2: 이벤트 페이지
- Phase 7.4: FAQ
- Phase 8: 심화 스타일링

---

## 정기 점검 사항

매 Phase 완료 후:
- [ ] 타입 체크 (`tsc --noEmit`)
- [ ] 린트 확인 (`eslint src/`)
- [ ] 기본 기능 테스트
- [ ] 문서 업데이트

---

## 다음 단계

1. Phase 1 시작: 타입 파일 생성
2. 완료 후 checkpoint 확인
3. Phase 2 진행: 데이터 파일 작성

---

## 관련 문서

- `domain-map.md`: 도메인 구조
- `data-model.md`: 데이터 타입
- `route-map.md`: 라우팅 구조
- `api-contract.md`: API 호출 명세
- `../research/`: 조사 문서들

