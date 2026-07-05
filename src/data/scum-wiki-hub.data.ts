import {
  BookOpen,
  Car,
  Crosshair,
  Database,
  ShieldAlert,
  UserRoundCog,
  Wrench,
} from "lucide-react"

export const scumWikiSource = {
  name: "Scum Wiki",
  url: "https://scum.wiki.gg/",
  logo: "/assets/scum/scum-wiki-logo.png",
  checkedAt: "2026-07-05",
  api: "https://scum.wiki.gg/api.php",
} as const

export const scumWikiHubSections = [
  {
    id: "character-creation",
    title: "캐릭터 생성",
    sourceTitle: "Character Creation",
    sourceUrl: "https://scum.wiki.gg/wiki/Character_Creation",
    icon: UserRoundCog,
    summary:
      "캐릭터 생성은 외형뿐 아니라 나이, 체형, 능력치, 무기 운용, 제작 가능 범위에 영향을 주는 시작 설정입니다.",
    bullets: [
      "힘, 체력, 민첩, 지능 네 축을 기준으로 플레이 방향이 갈립니다.",
      "갤럭시 신규 유저는 3/3/3/3 균형 시작이 안정적입니다.",
      "장기 플레이는 락픽, 치료, 이동, 총기 운용을 함께 고려합니다.",
    ],
  },
  {
    id: "skills",
    title: "스킬",
    sourceTitle: "Skills",
    sourceUrl: "https://scum.wiki.gg/wiki/Skills",
    icon: BookOpen,
    summary:
      "스킬은 캐릭터 생성 단계에서 선택하고, 이후 관련 행동을 수행하면서 성장합니다. 진행도는 현재 손실되지 않는 구조로 설명됩니다.",
    bullets: [
      "Strength: Archery, Brawling, Handgun, Melee Weapons, Rifles",
      "Constitution: Endurance, Running",
      "Dexterity: Demolition, Driving, Flying, Stealth, Thievery, Throwing",
      "Intelligence: Awareness, Camouflage, Engineering, Farming, Medical, Survival",
    ],
  },
  {
    id: "weapons",
    title: "무기",
    sourceTitle: "All Weapons",
    sourceUrl: "https://scum.wiki.gg/wiki/All_Weapons",
    icon: Crosshair,
    summary:
      "무기는 생존, 방어, 사냥에 쓰이며 제작하거나 필드에서 획득할 수 있습니다. 무기 유형별 운용과 탄약 관리가 중요합니다.",
    bullets: [
      "권총, 산탄총, 소총, 활, 근접 무기, 함정 계열을 구분합니다.",
      "무기, 탄창, 탄약 상태가 나쁘면 오작동 확률이 커집니다.",
      "갤럭시 서버 금지 행동은 서버 규칙 페이지 기준으로 함께 확인합니다.",
    ],
  },
  {
    id: "weapon-malfunction",
    title: "무기 오작동",
    sourceTitle: "Weapon Malfunction",
    sourceUrl: "https://scum.wiki.gg/wiki/Weapon_Malfunction",
    icon: ShieldAlert,
    summary:
      "무기, 탄창, 탄약 상태가 나쁠수록 발사 또는 장전 중 오작동이 발생할 수 있으므로 청소와 유지 관리가 필요합니다.",
    bullets: [
      "전투 전 무기 내구도와 탄창 상태를 확인합니다.",
      "고급 파밍지 진입 전 청소 키트를 준비합니다.",
      "오작동 대비 보조 무기나 근접 무기를 별도로 준비합니다.",
    ],
  },
  {
    id: "vehicles",
    title: "차량",
    sourceTitle: "Vehicles",
    sourceUrl: "https://scum.wiki.gg/wiki/Vehicles",
    icon: Car,
    summary:
      "차량은 이동, 보호, 대량 수송에 유리한 핵심 자산입니다. 0.8 이후 구형 차량은 모듈식 시스템 전환 영향을 받았습니다.",
    bullets: [
      "차량은 파밍 범위와 거래소 이동 효율을 크게 올립니다.",
      "연료, 배터리, 타이어, 수리 상태를 계속 관리합니다.",
      "갤럭시에서는 10일마다 시동과 이동 기록을 남깁니다.",
    ],
  },
  {
    id: "item-ids",
    title: "아이템 ID",
    sourceTitle: "Item IDs",
    sourceUrl: "https://scum.wiki.gg/wiki/Item_IDs",
    icon: Database,
    summary:
      "아이템 ID는 싱글플레이 또는 개인 서버 권한 환경에서 사용하는 스폰 명령 참고 자료입니다.",
    bullets: [
      "일반 플레이어용 파밍 가이드가 아니라 명령어 참고 자료입니다.",
      "무기, 낚시, 장비, 음식, 의료, 부품, 설계도, 도구 ID가 분리됩니다.",
      "갤럭시 서버 플레이에서는 서버 규칙과 공지 기준을 우선합니다.",
    ],
  },
  {
    id: "missions",
    title: "전체 미션",
    sourceTitle: "SCUM Missions info_번역추가.pdf",
    sourceUrl: "/guides/guide-015",
    icon: Wrench,
    summary:
      "로컬 PDF에서 추출한 General Store, Armory, Mechanic, Medic 상인별 미션 190개 원문 항목을 내부 가이드로 제공합니다.",
    bullets: [
      "Global Cycle, Trader refresh, Phone refresh는 별도 타이머입니다.",
      "Tier 1과 Tier 2 진행 수에 따라 다음 단계가 열립니다.",
      "상호작용 미션은 지도 강조 지점 또는 파란색 강조 아이템과 상호작용합니다.",
    ],
  },
] as const
