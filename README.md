# 갤럭시 SCUM PVE 서버 웹앱

한국 SCUM PVE 갤럭시 서버를 위한 React 기반 다국어 웹앱입니다. 신규 유저 온보딩, 추천 스탯, 서버 규칙, Discord 연결, 접속 IP, 최신 SCUM 패치 요약을 한곳에서 제공합니다.

## 기준 정보

- 서버명: Galaxy PVE Server
- 서버 접속 IP: `121.137.41.200:7002`
- Discord: `https://discord.gg/VeNFX3CAwZ`
- 플레이 모드: PVE
- 서버 운영 시작: 2021
- 최신 SCUM 기준: `SCUM: INTO THE WILD - June Update | 1.3.1.0.125621`
- 최신 패치일: `2026-06-30`
- 문서 갱신일: `2026-07-05`

## 주요 기능

- 한국어와 영어를 지원하는 다국어 UI
- Galaxy 영문 표기를 유지한 서버 검색/브랜딩
- 신규 유저용 추천 스탯: STR 3, CON 3, DEX 3, INT 3
- 장기 플레이어용 대안 스탯 정보
- 갤럭시 PVE 서버 전체 규칙 렌더링
- Discord 새창 연결
- 서버 접속 IP 명시
- Steam 공식 에셋 기반 SCUM 이미지 렌더링
- lucide-react 기반 표준 아이콘 시스템
- 2026년 6월 30일 기준 Into The Wild 업데이트 요약

## 기술 스택

- React 19
- TypeScript 6
- Vite 8
- React Router 7
- TanStack Query 5
- Tailwind CSS 4
- lucide-react
- Zustand
- Zod

## 설치

```bash
npm install
```

## 개발

```bash
npm run dev
```

## 프로덕션 빌드

```bash
npm run build
```

빌드는 TypeScript 프로젝트 빌드와 Vite 프로덕션 번들 생성을 함께 수행합니다.

## 미리보기

```bash
npm run preview
```

## 확인 명령

```bash
npm run build
npm run lint
```

## 주요 경로

- `/`: 홈, 최신 패치 요약, 추천 스탯, 핵심 규칙
- `/beginner`: 신규 유저 온보딩
- `/server-info`: 서버 정보, 전체 규칙, Discord, 접속 IP
- `/guides`: SCUM 가이드 검색
- `/events`: 서버 이벤트

## 데이터 구조

- `src/data/galaxy-wiki-content.data.ts`: 갤럭시 서버 규칙, 추천 스탯, 최신 패치 요약, 이미지 에셋 메타
- `src/shared/types/constants.ts`: Discord URL, 서버 접속 IP, 서버 공통 상수
- `src/shared/constants/icons.ts`: 카테고리별 lucide 아이콘 매핑
- `src/domains/galaxy-server/profile/galaxy-server-profile.data.ts`: 서버 프로필 데이터

## 콘텐츠 기준

SCUM 공식/준공식 정보는 2026년 6월 30일 `1.3.1.0.125621` 업데이트 기준입니다. 해당 업데이트는 자유 배회 랜드 동물 복귀, 1.0 기념 퀘스트, 트로피 물고기 벽 장식, 즉흥 요리, 커스텀 묘비, 신규 서버 설정을 포함합니다.

갤럭시 서버 로컬 규칙은 서버 운영 공지 기준으로 관리하며, Discord와 서버 접속 IP는 중앙 상수에서 관리합니다.

## 아이콘 정책

화면 UI는 이모지를 사용하지 않습니다. 모든 상태, 카테고리, CTA, 서버 정보 표시는 `lucide-react` 아이콘으로 정의합니다.

## 라이선스와 고지

이 웹앱은 갤럭시 서버 정보 제공용 팬 가이드입니다. SCUM은 Gamepires의 저작권 게임입니다. 게임 시스템과 패치 정보는 업데이트에 따라 변경될 수 있으므로 정기 업데이트 확인이 필요합니다.
