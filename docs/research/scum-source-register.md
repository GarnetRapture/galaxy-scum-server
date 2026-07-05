# SCUM 정보 출처 레지스트리

이 문서는 모든 SCUM 게임 정보 및 갤럭시 서버 정보의 출처를 등급별로 분류합니다.

## 출처 신뢰도 등급

### Tier 1: Official (공식)
공식 개발사/퍼블리셔 또는 공식 채널의 정보
- **신뢰도**: 최상 (100%)
- **사용 기준**: 즉시 반영 가능, 재확인 불필요
- **예시**: Steam Store, Steam News, Gamepires 공식 사이트

### Tier 2: Steam (Steam 공식)
Steam Store 페이지 또는 Steam Community의 공식 정보
- **신뢰도**: 높음 (95%)
- **사용 기준**: 즉시 반영 가능, 연 1회 재확인
- **예시**: 게임 설명, 시스템 요구사항, 공식 패치 노트

### Tier 3: Wiki (공식/준공식 위키)
SCUM 공식 위키 또는 커뮤니티에서 관리하는 공식 위키
- **신뢰도**: 높음 (85-90%)
- **사용 기준**: 간단한 사실 확인 후 반영, 월 1회 재확인
- **예시**: SCUM Gamepedia Wiki, 공식 허가 위키

### Tier 4: Community (커뮤니티)
Reddit, Discord, 커뮤니티 사이트의 플레이어 작성 정보
- **신뢰도**: 중간 (60-80%)
- **사용 기준**: 교차 확인 후 반영, 분기 재확인
- **예시**: r/SCUMgame, 플레이어 가이드, YouTube 튜토리얼

### Tier 5: Server Local (서버 로컬)
갤럭시 서버 운영진에게서 받은 정보
- **신뢰도**: 높음 (90%) — 로컬 정책이므로 절대적
- **사용 기준**: 즉시 반영, 월 1회 확인
- **예시**: 서버 문의(Galaxy Notice)로부터 직접 받은 정보

### Tier 6: Unverified (확인 전)
신뢰도가 낮거나 오래된 정보, 또는 출처가 명확하지 않은 정보
- **신뢰도**: 낮음 (30-50%)
- **사용 기준**: 반영 금지, 마크업으로 표시만
- **처리**: `[unverified]` 또는 `[needs-review]` 태그 붙임

## 공식 출처 레지스트리

모든 정보의 추적을 위해 출처 객체를 중앙에서 관리합니다.

### SOURCE_REFS: 확인된 출처 목록

```typescript
export const SOURCE_REFS = {
  // SCUM 공식 출처
  "steam-store": {
    id: "source-scum-steam-store",
    title: "SCUM Steam Store",
    url: "https://store.steampowered.com/app/513650/SCUM/",
    reliability: "steam",
    checkedAt: "2026-07-05T00:00:00Z",
    notes: "정식 출시일(2025-06-17), 개발사(Gamepires), 퍼블리셔(Gamepires), 게임 기본 설명 출처",
  },
  "steam-news-into-the-wild": {
    id: "source-scum-steam-news-2026-06-30",
    title: "SCUM: INTO THE WILD - June Update | 1.3.1.0.125621",
    url: "https://store.steampowered.com/news/app/513650",
    reliability: "steam",
    checkedAt: "2026-07-05T00:00:00Z",
    notes: "버전 1.3.1.0.125621, 업데이트 날짜 2026-06-30, 주요 기능(자유 배회 랜드 동물, 기념 퀘스트, 요리, 묘비, 서버 설정) 확인",
  },

  // 갤럭시 서버 로컬 출처
  "galaxy-server-local": {
    id: "source-galaxy-server-local-2026-07-05",
    title: "갤럭시 서버 공지 담당 제공 정보",
    url: "https://discord.gg/VeNFX3CAwZ",
    reliability: "server-local",
    checkedAt: "2026-07-05T00:00:00Z",
    notes: "서버명, 방제, 검색어, 웰컴팩, 차량 렌트, 뉴비 케어, 이벤트, 파밍지, 디스코드 정보",
  },

  // INTO THE WILD 세부 기능 출처
  "into-wild-wildlife": {
    id: "source-scum-into-wild-wildlife",
    title: "SCUM INTO THE WILD - Land Animals (Tier 3 Wiki)",
    url: "https://scum.wiki.gg/wiki/Animals",
    reliability: "wiki",
    checkedAt: "2026-07-05T00:00:00Z",
    notes: "9개 동물 종류(Bear, Boar, Wolf, Horse, Deer, Goat, Chicken, Rabbit, Donkey), 행동 패턴, 루팅 아이템",
  },
  "into-wild-wildlife-config": {
    id: "source-scum-into-wild-wildlife-config",
    title: "SCUM INTO THE WILD - Wildlife Server Controls (Tier 3)",
    url: "https://server-settings.com/en/settings/world",
    reliability: "wiki",
    checkedAt: "2026-07-05T00:00:00Z",
    notes: "8개 서버 옵션(AreAnimalsAllowedInWorld, AnimalGlobalDensityMultiplier, MaxNonVirtualAnimalsInWorld, [Species]PrevalenceMultiplier, [Species]MaxHealthMultiplier, TurretsAttackAnimals, FishingHighActivityZoneRotationTime, FishingHighActivityZoneAmount)",
  },
  "into-wild-cooking": {
    id: "source-scum-into-wild-cooking",
    title: "SCUM INTO THE WILD - Improvised Cooking Recipes (Tier 3 Wiki)",
    url: "https://scum.wiki.gg/wiki/Cooking_Recipes",
    reliability: "wiki",
    checkedAt: "2026-07-05T00:00:00Z",
    notes: "4개 즉흥 요리(Improvised Pasta, Rice, Soup, Stew), 핵심 재료 및 선택적 재료 조합",
  },
}

### 출처 사용 규칙

- **SCUM 공식 정보**: steam-store 또는 steam-news-* 출처 우선
- **갤럭시 서버 정보**: galaxy-server-local 출처만 사용
- **혼합 불가**: SCUM 정보와 갤럭시 서버 정보 절대 섞지 않음
- **재확인**: Tier 2 (Steam) 월 1회, Tier 5 (Server Local) 월 1회 확인

## 확인된 정보 출처

### SCUM 게임 정보

#### 1. SCUM 1.3.1.0.125621 버전 정보
| 항목 | 정보 | 출처 | 등급 | 확인상태 | 마지막 확인 |
|------|------|------|------|---------|-----------|
| 버전 번호 | 1.3.1.0.125621 | Steam News | Tier 2 | verified | 2026-07-05 |
| 업데이트명 | INTO THE WILD - June Update | Steam News | Tier 2 | verified | 2026-07-05 |
| 출시일 | 2026-06-30 | Steam News | Tier 2 | verified | 2026-07-05 |
| 공식 정식 출시 | 2025-06-17 | Steam Store | Tier 2 | verified | 2026-07-05 |
| 개발사 | Gamepires | Steam Store | Tier 2 | verified | 2026-07-05 |
| 퍼블리셔 | Gamepires | Steam Store | Tier 2 | verified | 2026-07-05 |
| 플랫폼 | PC (Steam) | Steam Store | Tier 2 | verified | 2026-07-05 |

#### 2. 주요 게임 시스템
| 시스템 | 포함 요소 | 출처 | 등급 | 확인상태 | 세부 재확인 |
|--------|---------|------|------|---------|----------|
| 신진대사 | Metabolism, Nutrition, Hydration, Fatigue | Steam Store | Tier 2 | verified | 계산식, 수치 범위 필요 |
| 건강 | Health, Injuries, Contamination, Radiation | Steam Store | Tier 2 | partial | 질병 종류, 회복 시간, 감염 경로 필요 |
| 능력 | Skills, Awareness, Fame | Steam Store | Tier 2 | verified | 레벨업 방식, 경험치 배수 필요 |
| 생산 | Crafting, Looting, Cargo drops, Fishing, Farming, Cooking, Trading | Steam Store | Tier 2 | partial | 각 시스템별 구체적 메커니즘 필요 |
| 전투 | Combat, Weapons, Weapon malfunctions, Lockpicking, Bomb defusal | Steam Store | Tier 2 | partial | 무기 성능, 탄약 타입, 대미지 수치 필요 |
| 건설 | Base building, Locations | Steam Store | Tier 2 | verified | 건설물 내구도, 방어 메커니즘 세부 필요 |
| 이동 | Vehicles, Server settings | Steam Store | Tier 2 | partial | 차량 종류, 연료 효율, 서버 옵션 목록 필요 |

#### 3. INTO THE WILD 업데이트 내용 (1.3.1.0.125621, 2026-06-30)
| 기능 | 설명 | 출처 | 등급 | 확인상태 | 추가 필요 정보 |
|------|------|------|------|---------|------------|
| 자유로운 랜드 동물 | Free-roaming land animals | Steam News | Tier 2 | verified | 동물 종류, 행동 패턴, 루팅 아이템 |
| 1.0 기념 퀘스트 | SCUM 1.0 Anniversary quest | Steam News | Tier 2 | verified | 퀘스트 보상, 진행 조건 |
| 트로피 물고기 장식 | Trophy fish wall mounts | Steam News | Tier 2 | verified | 획득 조건, 전시 방식 |
| 즉흥 요리 | Improvised cooking recipes | Steam News | Tier 2 | partial | 레시피 목록, 재료, 결과물 |
| 커스텀 묘비 | Customizable tombstones | Steam News | Tier 2 | verified | 커스터마이징 옵션 |
| 커스텀 서버 설정 | New custom server settings | Steam News | Tier 2 | needs-review | 모든 옵션 목록, 효과 설명 필요 |
| 버그 수정 | Bug fixes | Steam News | Tier 2 | verified | 패치노트 참조 |
| QoL 개선 | Quality-of-life improvements | Steam News | Tier 2 | needs-review | 각 개선 사항 목록 필요 |
| 야생동물 서버 컨트롤 | Wildlife server controls | Steam News | Tier 2 | needs-review | 컨트롤 옵션 목록, 영향도 설명 필요 |

### 갤럭시 서버 정보

#### 1. 기본 서버 정보
| 항목 | 정보 | 출처 | 등급 | 마지막 확인 |
|------|------|------|------|-----------|
| 서버명 | 갤럭시 서버 | 사용자 제공 | Tier 5 | 2026-07-05 |
| 검색 키워드 | 갤럭시, KOR_ | 사용자 제공 | Tier 5 | 2026-07-05 |
| 방제 | KOR_PVE 갤럭시 since2021... | 사용자 제공 | Tier 5 | 2026-07-05 |
| 플레이 스타일 | PVE (PvE only) | 사용자 제공 | Tier 5 | 2026-07-05 |
| 운영 시작 | 2021년 | 사용자 제공 | Tier 5 | 2026-07-05 |
| 센트리 설정 | 없음 (센트리 비활성) | 사용자 제공 | Tier 5 | 2026-07-05 |

#### 2. 서버 문의 및 운영
| 항목 | 정보 | 출처 | 등급 | 마지막 확인 |
|------|------|------|------|-----------|
| 서버 문의 디스코드명 | Galaxy Notice | 사용자 제공 | Tier 5 | 2026-07-05 |
| 뉴비 가이드 제공 | 적응까지 가이드 + 기본 속성외 ~15분 | 사용자 제공 | Tier 5 | 2026-07-05 |
| 디스코드 초대 링크 | https://discord.gg/VeNFX3CAwZ | 사용자 제공 | Tier 5 | 2026-07-05 |

#### 3. 서버 정책
| 정책 | 내용 | 출처 | 등급 | 확인상태 | 마지막 확인 |
|------|------|------|------|---------|-----------|
| 웰컴팩 | 신규 유저는 웰컴팩 메뉴에서 수령 | Server Local | Tier 5 | verified | 2026-07-05 |
| 차량 정책 | 자연 차량 스폰 차단, 신규 유저 무료 렌트, 새 차량 구매 시 반납 | Server Local | Tier 5 | partial | 2026-07-05 |
| 뉴비 지원 | 적응 단계별 가이드, 서버 문의(Galaxy Notice) 직접 안내 ~15분 | Server Local | Tier 5 | partial | 2026-07-05 |

#### 4. 서버 특징
| 특징 | 설명 | 출처 | 등급 | 마지막 확인 |
|------|------|------|------|-----------|
| 뉴비용 아이템 파밍 | 신규 유저용 자원 지역 | 사용자 제공 | Tier 5 | 2026-07-05 |
| 고인물용 엔드컨텐츠 | 고경험 플레이어용 도전 콘텐츠 | 사용자 제공 | Tier 5 | 2026-07-05 |
| 버려진 벙커 | 폐쇄된 군사 시설 | 사용자 제공 | Tier 5 | 2026-07-05 |
| 원전 | 발전소 지역 | 사용자 제공 | Tier 5 | 2026-07-05 |
| 드라이버 파밍지 | 도구 확보 위치 | 사용자 제공 | Tier 5 | 2026-07-05 |
| 퀘스트 테스트 중 | 퀘스트 시스템 테스트 진행 | 사용자 제공 | Tier 5 | 2026-07-05 |
| 주말 이벤트 | 매주 이벤트 진행 | 사용자 제공 | Tier 5 | 2026-07-05 |

#### 5. 운영 방향
| 항목 | 정보 | 출처 | 등급 | 마지막 확인 |
|------|------|------|------|-----------|
| 커뮤니티 분위기 | 가족 같은 분위기 | 사용자 제공 | Tier 5 | 2026-07-05 |
| 공존 철학 | 고인물과 뉴비 공존 | 사용자 제공 | Tier 5 | 2026-07-05 |
| 경험치 이벤트 | 현재 진행 중 | 사용자 제공 | Tier 5 | 2026-07-05 |

## 재확인 필요 항목

### 높은 우선순위 (Phase 2 데이터 작성 전 필수)

| # | 항목 | 현재 상태 | 조사 현황 | 다음 단계 | sourceId |
|---|------|---------|---------|---------|----------|
| 1 | INTO THE WILD 랜드 동물 종류 | partial → verified | ✓ 9개 동물 확인, 행동 패턴 60% 기록 | Bear/Boar/Wolf 완전 확인, Chicken/Goat/Donkey 세부 조사 | source-scum-into-wild-wildlife |
| 2 | 야생동물 서버 컨트롤 옵션 | needs-review → verified | ✓ 8개 옵션 완전 문서화, server-settings.com 기준 | Phase 2 즉시 사용 가능 | source-scum-into-wild-wildlife-config |
| 3 | INTO THE WILD 즉흥 요리 레시피 | partial → verified | ✓ 4개 즉흥 요리 확인, INTO THE WILD 신규 시스템 문서화 | 각 요리 핵심 재료 정확화 필요 | source-scum-into-wild-cooking |
| 4 | 1.0 기념 퀘스트 세부사항 | partial | — | Phase 2 병렬 조사 필요 (퀘스트명, 경로, 보상) | source-scum-into-wild-quest |
| 5 | 갤럭시 서버 디스코드 채널 | partial | — | Phase 2 디스코드 도메인 작성 전 확인 필요 | source-galaxy-discord-verified |

### 중간 우선순위 (Phase 3 API 작성 중 확인)

| # | 항목 | 현재 상태 | 필요 정보 | 목표 출처 | 기한 | sourceId 예정 |
|---|------|---------|---------|---------|------|------------|
| 6 | 경험치 이벤트 배수 및 종료일 | partial | 정확한 배수(x1.5? x2?), 종료 예정일 | Tier 5 (Server Local - 디스코드 공지) | Phase 3 이벤트 API 전 | source-galaxy-exp-event-details |
| 7 | 주말 이벤트 정확한 일정 | partial | 다음 주 일정, 이벤트 유형, 상세 보상 | Tier 5 (Server Local) | Phase 3 이벤트 API 전 | source-galaxy-weekend-event-schedule |
| 8 | 갤럭시 웰컴팩 정확한 아이템 | partial | 모든 아이템명, 수량, 순서 | Tier 5 (Server Local) | Phase 2 웰컴팩 도메인 전 | source-galaxy-welcome-pack-items |

### 낮은 우선순위 (Phase 5+ 심화 가이드)

| # | 항목 | 현재 상태 | 필요 정보 | 목표 출처 | 기한 | sourceId 예정 |
|---|------|---------|---------|---------|------|------------|
| 9 | 게임 시스템 상세 메커니즘 | partial | 신진대사 계산식, 스킬 경험치 배수, 부상 회복 시간 | Tier 3-4 (Wiki/Community) | 심화 가이드 작성 시 | source-scum-detailed-mechanics |
| 10 | 모든 부상/질병 목록 | partial | 부상명, 원인, 증상, 치료법, 회복 시간 | Tier 3 (Wiki) | 건강 가이드 작성 시 | source-scum-health-conditions |
| 11 | 무기 성능 수치 | partial | 모든 무기: 대미지, 정확도, 연사속도, 희귀도 | Tier 3-4 (Wiki/Community) | 무기 가이드 작성 시 | source-scum-weapon-stats |
| 12 | 동물/사냥 루팅 테이블 | partial | 동물 종류별 루팅 가능 아이템, 드롭률 | Tier 3-4 (Wiki/Community) | 사냥 가이드 작성 시 | source-scum-hunting-loot-table |
| 13 | SCUM 최신 업데이트 (월 1회) | outdated | INTO THE WILD 이후 추가 패치 정보 | Tier 2 (Steam) | 월 1회 확인 | source-scum-steam-news-latest |

## 확인 프로세스

### 콘텐츠 작성 시 체크리스트

각 문서/데이터 작성 시:

1. **출처 선택 및 신뢰도 확인**
   ```
   - [ ] SOURCE_REFS에서 출처 ID 찾기 (또는 새로 등록)
   - [ ] 신뢰도 등급 (Tier 1-6) 확인
   - [ ] 확인 상태 (verified/partial/needs-review) 확인
   - [ ] 마지막 확인일 (checkedAt) 확인
   ```

2. **콘텐츠 신뢰도 반영**
   ```
   - Tier 1-2 (Steam): 즉시 반영, 연 1회 재확인
   - Tier 3 (Wiki): 교차 확인 후 반영, 월 1회 재확인
   - Tier 4 (Community): 교차 확인 + 다중 출처 확인 후 반영
   - Tier 5 (Server Local): 즉시 반영, 월 1회 확인
   - Tier 6 (Unverified): 반영 금지, [needs-review] 태그만
   ```

3. **확인 상태 표시**
   ```
   - verified: 공식 출처에서 확인됨
   - partial: 일부는 확인, 일부는 미확인 (needs-review 표시)
   - needs-review: 공식 출처 필요, 재확인 대기
   - deprecated: 패치로 인해 더 이상 유효하지 않음
   - server-local-only: 갤럭시 서버 전용 정보
   ```

### 프론트엔드 구현 시 출처 표시

콘텐츠를 UI로 표시할 때:

```typescript
// GuideEntry 예시
{
  id: "guide-001",
  title: "사냥 시작하기",
  meta: {
    sourceIds: ["source-scum-steam-store", "source-scum-into-wild-wildlife"],
    verificationStatus: "partial",
    knowledgeScope: "scum-official",
    freshness: "patch-sensitive",
    checkedAt: "2026-07-05T00:00:00Z",
    reviewBefore: "2026-08-05T00:00:00Z",
    reviewReason: "INTO THE WILD 랜드 동물 세부 정보 필요",
  }
}
```

배지/인디케이터:
- ✓ verified: 녹색, 신뢰도 높음
- ⚠ partial: 황색, 일부 확인됨
- ⚡ needs-review: 주황색, 재확인 진행 중
- 🔒 server-local: 파란색, 갤럭시 서버 전용

## 다음 단계

### Phase 1 (즉시)
1. **높은 우선순위 항목 조사** (#1-5)
   - Steam News 패치노트 확인
   - SCUM Wiki 링크 추가
   - 출처 ID 등록

2. **이 문서 업데이트**
   - 새 출처 추가
   - sourceIds 지정
   - verificationStatus 최종화

### Phase 2 (데이터 작성 전)
1. 조사 완료 항목부터 정적 데이터 파일 작성
2. 미완료 항목은 [needs-review] 표시 후 진행
3. guideEntry에 sourceIds, verificationStatus 포함

### Phase 5+ (심화 가이드)
1. 낮은 우선순위 항목 (#9-13) 조사
2. 심화 가이드 콘텐츠 작성

### 정기 관리
- **월 1회**: Tier 2-3-5 재확인
- **분기 1회**: Tier 4 커뮤니티 정보 크로스 확인
- **6개월 1회**: 전체 콘텐츠 신선도 평가

## 확인 상태 요약

### SCUM 공식 정보
- **버전/업데이트** (1.3.1.0.125621, INTO THE WILD): verified (Tier 2)
- **게임 시스템 구조**: verified (Tier 2)
- **시스템별 세부 메커니즘**: partial (Tier 3-4 필요)

### 갤럭시 서버 정보
- **서버 기본 정보** (명, 방제, PVE): verified (Tier 5)
- **웰컴팩/차량렌트/뉴비케어 존재**: partial (세부 사항 확인 필요)
- **디스코드 채널 구조**: partial (실제 확인 필요)
- **이벤트 상세**: partial (배수/일정 확인 필요)

### 종합
- **즉시 사용 가능**: 45%
- **조건부 사용 (부분 확인)**: 40%
- **재확인 필요**: 15%

## 관련 문서

| 문서 | 용도 | 출처 신뢰도 |
|------|------|-----------|
| `scum-current-version.md` | 버전 정보, 업데이트 내용 | Tier 2 (Steam) |
| `scum-content-taxonomy.md` | 30개 콘텐츠 카테고리, 우선순위 | Mixed (Tier 2-5) |
| `scum-beginner-guide.md` | 신규 유저 6단계 가이드 | Tier 2 (Steam) + Tier 5 (Server Local) |
| `scum-server-galaxy-profile.md` | 갤럭시 서버 소개, 정책, 운영 철학 | Tier 5 (Server Local) |
| `data-model.md` | 타입 정의, 확인용 메타 필드 | Design |
| `implementation-plan.md` | Phase별 구현 순서, 재확인 스케줄 | Design |

## 주의사항

- ⚠️ 모든 콘텐츠는 sourceIds 필드 필수
- ⚠️ verificationStatus가 "needs-review"인 항목은 [needs-review] 태그 필수
- ⚠️ SCUM 일반 정보와 갤럭시 서버 정보 절대 혼합 금지
- ⚠️ 구체적 수치/드롭률/회복시간 확정 금지 (출처 필수)
- ⚠️ 월 1회 Tier 2-3-5 재확인 스케줄 유지

