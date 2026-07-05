/**
 * 라우트 타입 정의 및 설정
 */

export type RouteKey =
  | "home"
  | "guides"
  | "wiki"
  | "guideDetail"
  | "serverInfo"
  | "beginner"
  | "events"
  | "notFound"
  | "serverError"

export type RouteConfig = {
  path: string
  label: string
  title: string
  description: string
  inNav: boolean
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
  wiki: {
    path: "/wiki",
    label: "SCUM 위키",
    title: "SCUM 위키 허브",
    description: "SCUM 공식 위키 기반 내부 요약 허브",
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
  notFound: {
    path: "*",
    label: "찾을 수 없음",
    title: "페이지를 찾을 수 없습니다",
    description: "요청한 페이지가 없습니다",
    inNav: false,
  },
  serverError: {
    path: "/error",
    label: "오류",
    title: "서버 오류",
    description: "서버에 오류가 발생했습니다",
    inNav: false,
  },
}

export const MAIN_NAV_ROUTES = Object.values(ROUTES).filter(
  (route) => route.inNav && !route.path.includes(":") && route.path !== "*" && route.path !== "/error"
)
