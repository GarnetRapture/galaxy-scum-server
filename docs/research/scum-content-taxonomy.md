# SCUM 콘텐츠 분류 체계

이 문서는 SCUM 게임의 모든 주요 콘텐츠를 카테고리로 분류합니다. 각 카테고리는 별도의 가이드 엔트리를 가지며, 신규 유저부터 경험자까지 모두를 대상으로 합니다.

## 콘텐츠 성격 분류 (Knowledge Scope)

```typescript
type ContentKnowledgeKind =
  | "official-game-system"      // SCUM 공식 게임 시스템
  | "server-local-policy"       // 갤럭시 서버 전용 정책
  | "beginner-guide"            // 신규 유저 대상 가이드
  | "advanced-guide"            // 중고급 플레이어 가이드
  | "patch-dependent"           // 패치에 따라 변경되는 내용
  | "community-derived"         // 커뮤니티 검증 내용
```

## 카테고리 분류

**총 40개 카테고리**:
- Tier 1: 신규 유저 기초 (1-5)
- Tier 2: 자원 관리 (6-8)
- Tier 3: 생산성 (9-13)
- Tier 4: 기지 및 이동 (14-17)
- Tier 5: 지역 및 위험 (18-21)
- Tier 6: 메타게임 (22-25)
- Tier 7: 갤럭시 서버 전용 (26-30)
- Tier 8: 추가 카테고리 (31-40)

### Tier 1: 신규 유저 기초 (1-5)

#### 1. 신규 유저 시작 (Beginner Start)
**카테고리 ID**: `beginnerGuide`  
**성격**: official-game-system + beginner-guide  
**도메인**: `domains/scum/guides/`  
**신뢰도**: Tier 2 (Steam Store 게임 설명)  
**검증상태**: verified  
**sourceIds**: `source-scum-steam-store`  

**대상**: 게임 처음 접하는 플레이어  
**우선순위**: 최상 (1)  
**주요 내용**:
- 게임 시작 방법
- 초기 스폰 위치 이해
- 기본 조작법
- 첫 번째 생존 30분

#### 2. 캐릭터 생성 (Character Creation)
**대상**: 신규 플레이어  
**우선순위**: 최상 (1)  
**주요 내용**:
- 외형 커스터마이징
- 성별, 나이, 외모 선택
- 캐릭터 프리셋
- 초기 능력치 배치

#### 3. 능력치/스킬 (Skills & Abilities)
**대상**: 초급~중급  
**우선순위**: 높음 (2)  
**주요 내용**:
- 모든 스킬 목록 (Crafting, Cooking, Weapons 등)
- 스킬 레벨업 메커니즘
- 경험치 획득 방법
- 스킬별 최적 성장 경로

#### 4. 신진대사/영양/수분/피로 (Metabolism System)
**대상**: 초급~중급  
**우선순위**: 최상 (1)  
**주요 내용**:
- 신진대사 수치 이해
- 배고픔 관리
- 목마름 관리
- 피로도 관리
- 각 상태의 게임플레이 영향

#### 5. 부상/질병/치료 (Injuries & Health)
**대상**: 초급~중급  
**우선순위**: 높음 (2)  
**주요 내용**:
- 부상 종류 및 증상
- 질병 감염 경로
- 치료 아이템 및 방법
- 의료 스킬 활용
- 감염 치료 시간

### Tier 2: 자원 관리 (6-8)

#### 6. 루팅 (Looting)
**대상**: 초급  
**우선순위**: 높음 (2)  
**주요 내용**:
- 루팅 가능 위치 (건물, 차량, 무덤 등)
- 루팅 우선순위
- 흔한 루팅 아이템
- 희귀 루팅 아이템
- 효율적 루팅 경로

#### 7. 제작 (Crafting)
**대상**: 초급~중급  
**우선순위**: 높음 (2)  
**주요 내용**:
- 제작 가능한 모든 아이템 목록
- 제작 재료 및 조건
- 제작대/작업용구 필요성
- 제작 스킬 레벨에 따른 차이
- 고급 제작 기법

#### 8. 무기/탄약 (Weapons & Ammunition)
**대상**: 초급~고급  
**우선순위**: 높음 (2)  
**주요 내용**:
- 무기 종류 (총기, 근접무기, 활 등)
- 탄약 타입
- 무기 상태 및 고장
- 무기 분해 및 조합
- 근접 vs 장거리 선택 기준

### Tier 3: 생산성 (9-13)

#### 9. 전투 (Combat)
**대상**: 초급~고급  
**우선순위**: 높음 (2)  
**주요 내용**:
- 전투 메커니즘
- 조준 및 사격 기술
- 근접전 기술
- 엄폐 활용
- 적 AI 이해
- PvE 전술

#### 10. 사냥 (Hunting)
**카테고리 ID**: `hunting`  
**성격**: patch-dependent + advanced-guide  
**도메인**: `domains/scum/hunting/`  
**신뢰도**: Tier 2 (Steam) + Tier 3-4 (Wiki/Community)  
**검증상태**: partial (INTO THE WILD 랜드 동물 needs-review)  
**sourceIds**: `source-scum-steam-store`, `source-scum-into-wild-wildlife` (needs-review), `source-scum-hunting-loot-table` (partial)  

**대상**: 초급~고급  
**우선순위**: 보통 (3)  
**주요 내용**:
- 사냥 가능한 동물 목록 (기존 + INTO THE WILD 랜드 동물)
- 동물 행동 패턴
- 사냥 장비 (함정, 활 등)
- 은폐 및 추적 기술
- 동물 부위별 루팅 (고기, 뼈 등)

#### 11. 낚시 (Fishing)
**카테고리 ID**: `fishing`  
**성격**: official-game-system + patch-dependent  
**도메인**: `domains/scum/fishing/`  
**신뢰도**: Tier 2 (Steam) + Tier 3-4 (Wiki)  
**검증상태**: partial (INTO THE WILD 트로피 물고기 장식 partial)  
**sourceIds**: `source-scum-steam-store`, `source-scum-into-wild-trophy-fish` (partial)  

**대상**: 초급~고급  
**우선순위**: 보통 (3)  
**주요 내용**:
- 낚시 가능 위치
- 낚시 장비 및 미끼
- 계절/시간에 따른 어종 변화
- 낚시 스킬 활용
- 물고기 종류 및 보상
- INTO THE WILD 트로피 물고기 벽 장식

#### 12. 요리 (Cooking)
**카테고리 ID**: `cooking`  
**성격**: patch-dependent + beginner-guide  
**도메인**: `domains/scum/cooking/`  
**신뢰도**: Tier 2 (Steam) + Tier 3-4 (Wiki)  
**검증상태**: partial (INTO THE WILD 즉흥 요리 needs-review)  
**sourceIds**: `source-scum-steam-store`, `source-scum-into-wild-cooking` (needs-review)  

**대상**: 초급~중급  
**우선순위**: 보통 (3)  
**주요 내용**:
- 요리 가능한 음식 목록
- 요리 재료 (고기, 채소 등)
- 요리 도구 및 불 필요성
- 요리 스킬 레벨에 따른 영양 증가
- [needs-review] INTO THE WILD 즉흥 요리 레시피 (세부 레시피 필요)

#### 13. 농사 (Farming)
**대상**: 중급~고급  
**우선순위**: 보통 (3)  
**주요 내용**:
- 경작지 설립 및 관리
- 작물 종류
- 물주기 및 수확 주기
- 계절에 따른 변화
- 비료 및 토양 관리

### Tier 4: 기지 및 이동 (14-17)

#### 14. 기지 건설 (Base Building)
**대상**: 중급~고급  
**우선순위**: 보통 (3)  
**주요 내용**:
- 건설 가능 구조물
- 건설 재료 및 비용
- 기지 배치 최적화
- 안전 및 위치 선택
- 자동 방어 시스템 (센트리 등)
- 저장소 관리

#### 15. 차량 (Vehicles)
**대상**: 초급~고급  
**우선순위**: 보통 (3)  
**주요 내용**:
- 차량 종류 (자동차, 오토바이, 보트 등)
- 차량 찾기 및 수리
- 차량 연료 및 유지보수
- 차량 탑승 및 조작
- 차량 저장소

#### 16. 거래소/상인 (Trading & Traders)
**대상**: 중급~고급  
**우선순위**: 보통 (3)  
**주요 내용**:
- 상인 위치 및 NPC
- 거래 가능 아이템
- 가격 책정
- 평판 시스템 (명성)
- 거래 이득 최대화

#### 17. 명성/평판 (Fame & Reputation)
**대상**: 중급~고급  
**우선순위**: 낮음 (4)  
**주요 내용**:
- 명성 획득 방법
- 명성 레벨 및 효과
- 명성이 미치는 게임플레이 영향
- 명성 감소 원인

### Tier 5: 지역 및 위험 (18-21)

#### 18. 맵/지역 (Map & Locations)
**대상**: 초급~중급  
**우선순위**: 보통 (3)  
**주요 내용**:
- 맵 전체 구조
- 주요 지역 이름 및 위치
- 각 지역 특성 (리소스, 적 밀도 등)
- 빠른 이동 포인트
- 안전 지역 vs 위험 지역

#### 19. 벙커/군사지역 (Bunkers & Military Zones)
**대상**: 중급~고급  
**우선순위**: 보통 (3)  
**주요 내용**:
- 벙커 위치 및 종류
- 벙커 내부 구조
- 보상 및 위험도
- 벙커 입장 조건 (열쇠, 폭탄 해제)
- 갤럭시 서버 "버려진 벙커", "원전" 특화 정보

#### 20. 방사능/오염 (Radiation & Contamination)
**대상**: 중급~고급  
**우선순위**: 보통 (3)  
**주요 내용**:
- 방사능 지역 위치
- 방사능 측정 및 보호 장비
- 오염된 물/식료품
- 방사능 피해 및 치료
- 제거제 (아이포다크신 등) 활용

#### 21. 적: 퍼펫/메크/야생동물 (Enemies)
**카테고리 ID**: `enemy`  
**성격**: patch-dependent + beginner-guide  
**도메인**: `domains/scum/enemies/`  
**신뢰도**: Tier 2 (Steam) + Tier 3-4 (Wiki)  
**검증상태**: partial (INTO THE WILD 랜드 동물 needs-review)  
**sourceIds**: `source-scum-steam-store`, `source-scum-into-wild-wildlife` (needs-review)  

**대상**: 초급~고급  
**우선순위**: 높음 (2)  
**주요 내용**:
- 퍼펫(좀비) 종류 및 행동
- 메크(기계인간) 종류 및 강력한 이유
- [needs-review] 랜드 동물 (INTO THE WILD 추가) — 동물 종류 확인 필요
- 각 적의 약점 및 전술
- 적 회피 vs 전투 선택 기준

### Tier 6: 메타게임 (22-25)

#### 22. 퀘스트 (Quests)
**카테고리 ID**: `quest`  
**성격**: patch-dependent + beginner-guide  
**도메인**: `domains/scum/quest/` (신규)  
**신뢰도**: Tier 2 (Steam) + Tier 3-4 (Wiki)  
**검증상태**: partial (INTO THE WILD 1.0 기념 퀘스트 partial)  
**sourceIds**: `source-scum-steam-store`, `source-scum-into-wild-quest` (partial)  

**대상**: 초급~고급  
**우선순위**: 보통 (3)  
**주요 내용**:
- 퀘스트 종류
- 퀘스트 진행 방법
- 퀘스트 보상
- [partial] INTO THE WILD 1.0 기념 퀘스트 (조건/보상 확인 필요)
- [partial] 갤럭시 서버: 퀘스트 테스트 중 정보

#### 23. 카고 드랍 (Cargo Drops)
**대상**: 중급~고급  
**우선순위**: 보통 (3)  
**주요 내용**:
- 카고 드랍 발생 조건
- 카고 드랍 위치 예측
- 카고 드랍 보상
- 리스크 평가 (위험도 vs 이득)
- 멀티플레이 경쟁 전략

#### 24. 자물쇠/폭탄해제 (Lockpicking & Bomb Defusal)
**대상**: 중급~고급  
**우선순위**: 보통 (3)  
**주요 내용**:
- 자물쇠 따기 메커니즘
- 자물쇠 난이도 등급
- 폭탄 해제 절차
- 안전 상자 및 잠긴 문
- 성공/실패 결과

#### 25. 서버 설정 (Server Settings)
**카테고리 ID**: `serverSetting`  
**성격**: patch-dependent + server-local-policy  
**도메인**: `domains/scum/server-settings/`, `domains/galaxy-server/profile/`  
**신뢰도**: Tier 2 (Steam) + Tier 5 (Server Local)  
**검증상태**: needs-review (INTO THE WILD 커스텀 옵션 needs-review)  
**sourceIds**: `source-scum-steam-store`, `source-scum-steam-news-server-settings` (needs-review), `source-galaxy-server-local-2026-07-05`  

**대상**: 플레이어, 서버 관리자  
**우선순위**: 낮음 (4)  
**주요 내용**:
- PvE/PvP 모드 차이
- 주요 커스텀 설정 옵션
- [needs-review] INTO THE WILD 새로운 커스텀 설정 (옵션 목록 필요)
- 서버 규칙 및 정책
- 갤럭시 서버 고유 설정

### Tier 7: 갤럭시 서버 전용 (26-30)

#### 26. PVE 서버 규칙 (PVE Server Rules)
**대상**: 모든 갤럭시 서버 플레이어  
**우선순위**: 최상 (1)  
**주요 내용**:
- 갤럭시 서버 기본 규칙
- PvE 환경에서의 규칙
- 적대 행위 금지 사항
- 기지 공격 정책
- 벌칙 및 밴 정책

#### 27. 갤럭시 서버 전용 안내 (Galaxy Server Guide)
**대상**: 모든 갤럭시 서버 플레이어  
**우선순위**: 최상 (1)  
**주요 내용**:
- 서버 소개 (KOR_PVE 갤럭시 since 2021)
- 방제 및 검색 키워드
- 운영 방향 (가족 같은 분위기, 고인물과 뉴비 공존)
- 관리자 정보 및 연락처
- 서버 특화 콘텐츠 (뉴비용 파밍지, 엔드컨텐츠, 원전 등)

#### 28. 웰컴팩 (Welcome Pack)
**대상**: 신규 유저  
**우선순위**: 최상 (1)  
**주요 내용**:
- 웰컴팩 정의 및 목적
- 웰컴팩 수령 절차
- 웰컴팩 구성 아이템
- 웰컴팩 활용 가이드
- 웰컴팩 이후 초기 단계

#### 29. 차량 렌트 (Vehicle Rental)
**대상**: 신규 유저, 초급 플레이어  
**우선순위**: 높음 (2)  
**주요 내용**:
- 갤럭시 서버 무료 차량 렌트 정책
- 렌트 신청 절차 (디스코드)
- 차량 반납 규칙 (새 차량 구매 시)
- 자연 스폰 차량 차단 정책
- 차량 사용 시간 제한

#### 30. 뉴비 지원 (Newbie Care)
**카테고리 ID**: `galaxyNewbieCare`  
**성격**: server-local-policy + beginner-guide  
**도메인**: `domains/galaxy-server/newbie-care/`  
**신뢰도**: Tier 5 (Server Local)  
**검증상태**: partial (세부 안내 내용 확인 필요)  
**sourceIds**: `source-galaxy-server-local-2026-07-05`  

**대상**: 신규 유저  
**우선순위**: 최상 (1)  
**주요 내용**:
- 갤럭시 서버 뉴비 케어 프로그램
- 적응 단계별 가이드
- 관리자(블락) 직접 안내 (약 15분)
- 신규 유저 관심사항
- 활용 가능한 채널 및 디스코드

### Tier 8: 추가 카테고리 (31-40)

#### 31. 패치노트/버전 히스토리 (Patch Notes)
**카테고리 ID**: `patchNotes`  
**성격**: patch-dependent  
**도메인**: `domains/scum/version/`  
**신뢰도**: Tier 2 (Steam News)  
**검증상태**: verified  
**sourceIds**: `source-scum-steam-news-2026-06-30`, `source-scum-steam-news-latest`  

**대상**: 모든 플레이어  
**우선순위**: 낮음 (4)  
**주요 내용**:
- 모든 버전별 주요 변경사항
- 버그 수정 히스토리
- 밸런스 조정 기록

#### 32. 디스코드 상점 (Discord Shop)
**카테고리 ID**: `galaxyDiscordShop`  
**성격**: server-local-policy  
**도메인**: `domains/galaxy-server/discord/`  
**신뢰도**: Tier 5 (Server Local)  
**검증상태**: partial  
**sourceIds**: `source-galaxy-server-local-2026-07-05`  

**대상**: 갤럭시 서버 플레이어  
**우선순위**: 보통 (3)  
**주요 내용**:
- 디스코드 상점 아이템
- 상점 가격 및 배송
- 아이템별 효과

#### 33. 관리자 문의/신고 (Admin Contact)
**카테고리 ID**: `galaxyAdminContact`  
**성격**: server-local-policy  
**도메인**: `domains/galaxy-server/discord/`  
**신뢰도**: Tier 5 (Server Local)  
**검증상태**: verified  
**sourceIds**: `source-galaxy-server-local-2026-07-05`  

**대상**: 갤럭시 서버 플레이어  
**우선순위**: 높음 (2)  
**주요 내용**:
- 관리자 연락 방법 (블락)
- 신고 절차
- 응답 시간

#### 34. 금지 행위/처벌 (Bans & Penalties)
**카테고리 ID**: `galaxyRulesEnforcement`  
**성격**: server-local-policy  
**도메인**: `domains/galaxy-server/rules/`  
**신뢰도**: Tier 5 (Server Local)  
**검증상태**: partial  
**sourceIds**: `source-galaxy-server-local-2026-07-05`  

**대상**: 모든 갤럭시 서버 플레이어  
**우선순위**: 높음 (2)  
**주요 내용**:
- 금지 행위 목록
- 처벌 레벨 (경고, 임시밴, 영구밴)
- 항소 절차

#### 35. 추천 시작 루트 (Recommended Starting Route)
**카테고리 ID**: `beginnerRoute`  
**성격**: beginner-guide  
**도메인**: `domains/scum/guides/`  
**신뢰도**: Tier 3-4 (Community)  
**검증상태**: needs-review  
**sourceIds**: `source-scum-into-wild-wildlife`  

**대상**: 신규 유저  
**우선순위**: 최상 (1)  
**주요 내용**:
- [needs-review] 추천 초기 진행 경로
- [needs-review] 우선 방문 지역
- [needs-review] 우선 루팅 대상

#### 36. 장비 세팅 프리셋 (Gear Presets)
**카테고리 ID**: `gearPreset`  
**성격**: advanced-guide  
**도메인**: `domains/scum/weapons/`  
**신뢰도**: Tier 4 (Community)  
**검증상태**: needs-review  
**sourceIds**: (Community source 필요)  

**대상**: 중급~고급 플레이어  
**우선순위**: 보통 (3)  
**주요 내용**:
- [needs-review] 초급 스타터 장비 세팅
- [needs-review] 중급 균형 세팅
- [needs-review] 고급 스페셜 세팅

#### 37. 초보 체크리스트 (Beginner Checklist)
**카테고리 ID**: `beginnerChecklist`  
**성격**: beginner-guide + server-local-policy  
**도메인**: `domains/scum/guides/`, `domains/galaxy-server/newbie-care/`  
**신뢰도**: Tier 2-5 (Mixed)  
**검증상태**: partial  
**sourceIds**: `source-scum-steam-store`, `source-galaxy-server-local-2026-07-05`  

**대상**: 신규 유저  
**우선순위**: 최상 (1)  
**주요 내용**:
- 첫 주 완료 목표
- 갤럭시 서버 필수 항목
- 체크리스트 항목별 상세 안내

#### 38. 위험도 지도 (Danger Level Map)
**카테고리 ID**: `dangerMap`  
**성격**: beginner-guide + patch-dependent  
**도메인**: `domains/scum/locations/`  
**신뢰도**: Tier 3-4 (Wiki/Community)  
**검증상태**: needs-review  
**sourceIds**: (Wiki/Community source 필요)  

**대상**: 초급~중급 플레이어  
**우선순위**: 보통 (3)  
**주요 내용**:
- [needs-review] 지역별 위험도 등급
- [needs-review] 적 밀도 지도
- [needs-review] 초보자 안전 지역

#### 39. 이벤트 (Events)
**카테고리 ID**: `galaxyEvent`  
**성격**: server-local-policy  
**도메인**: `domains/galaxy-server/events/`  
**신뢰도**: Tier 5 (Server Local)  
**검증상태**: partial  
**sourceIds**: `source-galaxy-server-local-2026-07-05`  

**대상**: 모든 갤럭시 서버 플레이어  
**우선순위**: 보통 (3)  
**주요 내용**:
- [partial] 갤럭시 서버 주말 이벤트
- [partial] 이벤트 일정 및 참여 방법
- [partial] 이벤트 보상
- [partial] 경험치 이벤트 정보

#### 40. FAQ (자주 묻는 질문)
**카테고리 ID**: `faq`  
**성격**: beginner-guide + server-local-policy  
**도메인**: `features/faq/`, `domains/galaxy-server/`  
**신뢰도**: Tier 2-5 (Mixed)  
**검증상태**: partial  
**sourceIds**: (Multiple)  

**대상**: 모든 플레이어  
**우선순위**: 높음 (2)  
**주요 내용**:
- 초급자 FAQ
- 중급자 FAQ
- 갤럭시 서버 특화 FAQ

## 분류 활용 방안

1. **초급 플레이어 경로**: 1, 2, 3, 4, 5, 6, 8, 18, 21 → 28, 29, 30 (갤럭시 서버 가이드 포함)
2. **생존 중심 경로**: 4, 5, 6, 12, 13 → 14, 20
3. **전투 중심 경로**: 8, 9, 10, 19, 21
4. **건설/정착 경로**: 14, 15, 16
5. **갤럭시 서버 신규 유저**: 26, 27, 28, 29, 30 우선 학습

## 관련 문서

| 문서 | 용도 |
|------|------|
| `scum-source-register.md` | 각 카테고리 sourceIds 기준점 |
| `scum-current-version.md` | INTO THE WILD 관련 카테고리 검증상태 |
| `scum-beginner-guide.md` | 각 카테고리별 상세 가이드 초안 |
| `scum-server-galaxy-profile.md` | 갤럭시 서버 카테고리(26-30, 39-40) 통합 |
| `data-model.md` | ContentKnowledgeKind 타입 정의 |

## 구현 우선순위

### Phase 2 (필수) — Verified/Tier 2
1-8, 18-19, 25 (기본 게임 정보)
26-30 (갤럭시 서버 필수)

### Phase 2 (권장) — Partial
9-17, 20-22 (중급 콘텐츠)

### Phase 3 (선택) — Needs-Review
31-38 (심화 및 커뮤니티 콘텐츠)
35-39 검증 후 추가

## 다음 단계

1. **Phase 1 마감**: 높은 우선순위 sourceIds 재검증
2. **Phase 2 시작**: verified 카테고리부터 가이드 데이터 작성
3. **Phase 3**: partial 항목들 조사 및 보완
4. **프론트엔드**: 카테고리별 필터링, 검색, 우선순위 배지 표시
