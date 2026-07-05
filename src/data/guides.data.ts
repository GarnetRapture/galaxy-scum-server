/**
 * 게임 가이드 데이터
 */

import type { GuideEntry } from "@/domains/scum/guides/types"

export const guidesData: GuideEntry[] = [
  {
    id: "guide-001",
    slug: "beginner-start",
    title: "게임 시작 완벽 가이드",
    category: "beginnerGuide",
    summary: "캐릭터 생성부터 첫 생존까지 완전한 안내",
    body: "# 게임 시작 완벽 가이드\n\n## 1단계: 캐릭터 생성\n캐릭터를 생성할 때 고려할 사항들...\n\n## 2단계: 초기 생존\n게임 시작 후 첫 30분이 가장 중요합니다...",
    tags: ["신규", "필수", "초급"],
    beginnerPriority: 1,
    meta: {
      sourceIds: ["source-scum-steam-guide", "source-scum-wiki"],
      verificationStatus: "verified",
      knowledgeScope: "beginner-guide",
      freshness: "current",
      checkedAt: "2026-07-05",
    },
  },
  {
    id: "guide-002",
    slug: "character-creation",
    title: "캐릭터 생성 및 커스터마이징",
    category: "character",
    summary: "최적의 캐릭터 생성 전략과 스탯 배분",
    body: "캐릭터 생성 가이드 본문...",
    tags: ["캐릭터", "초급"],
    beginnerPriority: 1,
    meta: {
      sourceIds: ["source-scum-steam-store"],
      verificationStatus: "verified",
      knowledgeScope: "official-game-system",
      freshness: "current",
      checkedAt: "2026-07-05",
    },
  },
  {
    id: "guide-003",
    slug: "skill-system",
    title: "능력치 및 스킬 시스템 완벽 이해",
    category: "skill",
    summary: "모든 능력치의 역할과 스킬 포인트 배분 전략",
    body: "스킬 시스템 가이드 본문...",
    tags: ["스킬", "중급"],
    beginnerPriority: 2,
    meta: {
      sourceIds: ["source-scum-wiki", "source-community-guides"],
      verificationStatus: "verified",
      knowledgeScope: "official-game-system",
      freshness: "current",
      checkedAt: "2026-07-01",
    },
  },
  {
    id: "guide-004",
    slug: "metabolism-nutrition",
    title: "신진대사와 영양 시스템",
    category: "metabolism",
    summary: "배고픔, 갈증, 피로 관리법",
    body: "신진대사 가이드 본문...",
    tags: ["생존", "초급", "필수"],
    beginnerPriority: 1,
    meta: {
      sourceIds: ["source-scum-steam-guide"],
      verificationStatus: "verified",
      knowledgeScope: "official-game-system",
      freshness: "current",
      checkedAt: "2026-07-05",
    },
  },
  {
    id: "guide-005",
    slug: "health-disease",
    title: "건강 관리 및 질병 치료",
    category: "health",
    summary: "질병 예방과 치료법, 의료 아이템 사용",
    body: "건강 관리 가이드 본문...",
    tags: ["생존", "초급"],
    beginnerPriority: 1,
    meta: {
      sourceIds: ["source-scum-steam-guide"],
      verificationStatus: "verified",
      knowledgeScope: "official-game-system",
      freshness: "current",
      checkedAt: "2026-07-05",
    },
  },
  {
    id: "guide-006",
    slug: "looting-strategy",
    title: "루팅 전략 및 자원 수집",
    category: "looting",
    summary: "효율적인 루팅 경로와 우선순위",
    body: "루팅 전략 가이드 본문...",
    tags: ["자원", "초급"],
    beginnerPriority: 2,
    meta: {
      sourceIds: ["source-community-guides"],
      verificationStatus: "partial",
      knowledgeScope: "community-derived",
      freshness: "current",
      checkedAt: "2026-06-28",
      reviewBefore: "2026-08-05",
      reviewReason: "패치 1.3.2에서 드롭율 변경 예상",
    },
  },
  {
    id: "guide-007",
    slug: "crafting-system",
    title: "제작 시스템 완벽 가이드",
    category: "crafting",
    summary: "모든 제작 레시피와 효율적인 제작 전략",
    body: "제작 시스템 가이드 본문...",
    tags: ["제작", "중급"],
    beginnerPriority: 2,
    meta: {
      sourceIds: ["source-scum-wiki"],
      verificationStatus: "verified",
      knowledgeScope: "official-game-system",
      freshness: "current",
      checkedAt: "2026-07-03",
    },
  },
  {
    id: "guide-008",
    slug: "weapon-combat",
    title: "무기 및 전투 가이드",
    category: "weapon",
    summary: "무기 종류, 대미지, 전투 팁",
    body: "무기 및 전투 가이드 본문...",
    tags: ["전투", "무기", "중급"],
    beginnerPriority: 2,
    meta: {
      sourceIds: ["source-scum-steam-guide", "source-community-guides"],
      verificationStatus: "verified",
      knowledgeScope: "official-game-system",
      freshness: "current",
      checkedAt: "2026-07-02",
    },
  },
  {
    id: "guide-009",
    slug: "hunting-fishing",
    title: "사냥과 낚시 입문",
    category: "hunting",
    summary: "사냥 기술과 낚시 장소 가이드",
    body: "사냥과 낚시 가이드 본문...",
    tags: ["식량", "초급"],
    beginnerPriority: 2,
    meta: {
      sourceIds: ["source-community-guides"],
      verificationStatus: "partial",
      knowledgeScope: "community-derived",
      freshness: "current",
      checkedAt: "2026-06-30",
    },
  },
  {
    id: "guide-010",
    slug: "base-building",
    title: "기지 건설 완벽 가이드",
    category: "baseBuilding",
    summary: "기지 위치 선정, 자동 방어, 레이아웃",
    body: "기지 건설 가이드 본문...",
    tags: ["기지", "중급"],
    beginnerPriority: 3,
    meta: {
      sourceIds: ["source-community-guides"],
      verificationStatus: "partial",
      knowledgeScope: "community-derived",
      freshness: "patch-sensitive",
      checkedAt: "2026-06-25",
      reviewBefore: "2026-08-25",
      reviewReason: "건설 시스템 패치 이후 재검증 필요",
    },
  },
  {
    id: "guide-011",
    slug: "vehicle-driving",
    title: "차량 시스템 및 운전 팁",
    category: "vehicle",
    summary: "차량 종류, 연료, 수리, 운전 기술",
    body: "차량 시스템 가이드 본문...",
    tags: ["차량", "이동"],
    beginnerPriority: 3,
    meta: {
      sourceIds: ["source-scum-wiki"],
      verificationStatus: "verified",
      knowledgeScope: "official-game-system",
      freshness: "current",
      checkedAt: "2026-07-01",
    },
  },
  {
    id: "guide-012",
    slug: "galaxy-welcome-pack",
    title: "갤럭시 서버 웰컴팩 안내",
    category: "galaxyServer",
    summary: "신규 유저를 위한 웰컴팩 사용 가이드",
    body: "웰컴팩 가이드 본문...",
    tags: ["갤럭시", "신규", "필수"],
    beginnerPriority: 1,
    meta: {
      sourceIds: ["source-galaxy-server-local-2026-07-05"],
      verificationStatus: "verified",
      knowledgeScope: "server-local-policy",
      freshness: "current",
      checkedAt: "2026-07-05",
    },
  },
  {
    id: "guide-013",
    slug: "galaxy-newbie-care",
    title: "갤럭시 서버 뉴비 케어 프로그램",
    category: "galaxyServer",
    summary: "관리자 블락과의 뉴비 케어 신청 및 진행",
    body: "뉴비 케어 프로그램 가이드 본문...",
    tags: ["갤럭시", "신규"],
    beginnerPriority: 1,
    meta: {
      sourceIds: ["source-galaxy-server-local-2026-07-05"],
      verificationStatus: "verified",
      knowledgeScope: "server-local-policy",
      freshness: "current",
      checkedAt: "2026-07-05",
    },
  },
  {
    id: "guide-014",
    slug: "faq-common-questions",
    title: "자주 묻는 질문 (FAQ)",
    category: "faq",
    summary: "게임 관련 자주 묻는 질문과 답변",
    body: "FAQ 본문...",
    tags: ["질문", "도움"],
    beginnerPriority: 3,
    meta: {
      sourceIds: ["source-community-guides"],
      verificationStatus: "partial",
      knowledgeScope: "community-derived",
      freshness: "current",
      checkedAt: "2026-07-04",
    },
  },
]

export function getGuidesData(filters?: {
  query?: string
  category?: string
  minPriority?: number
  tags?: string[]
}): GuideEntry[] {
  let result = guidesData

  if (filters?.query) {
    const query = filters.query.toLowerCase()
    result = result.filter(
      (g) =>
        g.title.toLowerCase().includes(query) ||
        g.summary.toLowerCase().includes(query) ||
        g.tags.some((t) => t.toLowerCase().includes(query))
    )
  }

  if (filters?.category) {
    result = result.filter((g) => g.category === filters.category)
  }

  if (filters?.minPriority) {
    result = result.filter((g) => g.beginnerPriority <= filters.minPriority!)
  }

  if (filters?.tags && filters.tags.length > 0) {
    result = result.filter((g) =>
      filters.tags!.some((tag) => g.tags.includes(tag))
    )
  }

  return result
}

export function getGuideById(id: string): GuideEntry | undefined {
  return guidesData.find((g) => g.id === id)
}

export function getGuideBySlug(slug: string): GuideEntry | undefined {
  return guidesData.find((g) => g.slug === slug)
}
