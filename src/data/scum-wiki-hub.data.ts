import {
  BookOpen,
  Car,
  Crosshair,
  Database,
  ShieldAlert,
  UserRoundCog,
  Wrench,
} from "lucide-react"
import type { LocalizedText } from "@/domains/galaxy-server/content/types"
import { resolveAssetUrl } from "@/shared/utils/asset-url"

export const scumWikiSource = {
  name: "Scum Wiki",
  url: "https://scum.wiki.gg/",
  logo: resolveAssetUrl("/assets/scum/scum-wiki-logo.png"),
  checkedAt: "2026-07-05",
  api: "https://scum.wiki.gg/api.php",
} as const

export type ScumWikiHubSection = {
  id: string
  title: LocalizedText
  sourceTitle: string
  sourceUrl: string
  icon: typeof UserRoundCog
  summary: LocalizedText
  bullets: LocalizedText[]
}

export const scumWikiHubSections: ScumWikiHubSection[] = [
  {
    id: "character-creation",
    title: { ko: "캐릭터 생성", en: "Character Creation" },
    sourceTitle: "Character Creation",
    sourceUrl: "https://scum.wiki.gg/wiki/Character_Creation",
    icon: UserRoundCog,
    summary: {
      ko: "캐릭터 생성은 외형뿐 아니라 나이, 체형, 능력치, 무기 운용, 제작 가능 범위에 영향을 주는 시작 설정입니다.",
      en: "Character creation sets more than appearance — age, body type, attributes, weapon handling, and craftable range all follow from it.",
    },
    bullets: [
      { ko: "힘, 체력, 민첩, 지능 네 축을 기준으로 플레이 방향이 갈립니다.", en: "Playstyle branches around four attributes: Strength, Constitution, Dexterity, and Intelligence." },
      { ko: "갤럭시 신규 유저는 3/3/3/3 균형 시작이 안정적입니다.", en: "New Galaxy players do well starting with a balanced 3/3/3/3." },
      { ko: "장기 플레이는 락픽, 치료, 이동, 총기 운용을 함께 고려합니다.", en: "Long-term play weighs lockpicking, medical care, movement, and firearm handling together." },
    ],
  },
  {
    id: "skills",
    title: { ko: "스킬", en: "Skills" },
    sourceTitle: "Skills",
    sourceUrl: "https://scum.wiki.gg/wiki/Skills",
    icon: BookOpen,
    summary: {
      ko: "스킬은 캐릭터 생성 단계에서 선택하고, 이후 관련 행동을 수행하면서 성장합니다. 진행도는 현재 손실되지 않는 구조로 설명됩니다.",
      en: "Skills are chosen at character creation and grow through related actions afterward. Progress currently doesn't decay.",
    },
    bullets: [
      { ko: "Strength: Archery, Brawling, Handgun, Melee Weapons, Rifles", en: "Strength: Archery, Brawling, Handgun, Melee Weapons, Rifles" },
      { ko: "Constitution: Endurance, Running", en: "Constitution: Endurance, Running" },
      { ko: "Dexterity: Demolition, Driving, Flying, Stealth, Thievery, Throwing", en: "Dexterity: Demolition, Driving, Flying, Stealth, Thievery, Throwing" },
      { ko: "Intelligence: Awareness, Camouflage, Engineering, Farming, Medical, Survival", en: "Intelligence: Awareness, Camouflage, Engineering, Farming, Medical, Survival" },
    ],
  },
  {
    id: "weapons",
    title: { ko: "무기", en: "Weapons" },
    sourceTitle: "All Weapons",
    sourceUrl: "https://scum.wiki.gg/wiki/All_Weapons",
    icon: Crosshair,
    summary: {
      ko: "무기는 생존, 방어, 사냥에 쓰이며 제작하거나 필드에서 획득할 수 있습니다. 무기 유형별 운용과 탄약 관리가 중요합니다.",
      en: "Weapons cover survival, defense, and hunting, and can be crafted or found in the field. Handling by weapon type and ammo management both matter.",
    },
    bullets: [
      { ko: "권총, 산탄총, 소총, 활, 근접 무기, 함정 계열을 구분합니다.", en: "Split by pistols, shotguns, rifles, bows, melee weapons, and traps." },
      { ko: "무기, 탄창, 탄약 상태가 나쁘면 오작동 확률이 커집니다.", en: "Poor weapon, magazine, or ammo condition raises the malfunction chance." },
      { ko: "갤럭시 서버 금지 행동은 서버 규칙 페이지 기준으로 함께 확인합니다.", en: "Check the server rules page for Galaxy's banned weapon actions." },
    ],
  },
  {
    id: "weapon-malfunction",
    title: { ko: "무기 오작동", en: "Weapon Malfunction" },
    sourceTitle: "Weapon Malfunction",
    sourceUrl: "https://scum.wiki.gg/wiki/Weapon_Malfunction",
    icon: ShieldAlert,
    summary: {
      ko: "무기, 탄창, 탄약 상태가 나쁠수록 발사 또는 장전 중 오작동이 발생할 수 있으므로 청소와 유지 관리가 필요합니다.",
      en: "Worse weapon, magazine, or ammo condition raises the chance of a firing or reload malfunction, so cleaning and upkeep matter.",
    },
    bullets: [
      { ko: "전투 전 무기 내구도와 탄창 상태를 확인합니다.", en: "Check weapon durability and magazine condition before a fight." },
      { ko: "고급 파밍지 진입 전 청소 키트를 준비합니다.", en: "Bring a cleaning kit before entering high-tier loot zones." },
      { ko: "오작동 대비 보조 무기나 근접 무기를 별도로 준비합니다.", en: "Carry a backup or melee weapon in case of malfunction." },
    ],
  },
  {
    id: "vehicles",
    title: { ko: "차량", en: "Vehicles" },
    sourceTitle: "Vehicles",
    sourceUrl: "https://scum.wiki.gg/wiki/Vehicles",
    icon: Car,
    summary: {
      ko: "차량은 이동, 보호, 대량 수송에 유리한 핵심 자산입니다. 0.8 이후 구형 차량은 모듈식 시스템 전환 영향을 받았습니다.",
      en: "Vehicles are a core asset for travel, protection, and hauling cargo. Since 0.8, older vehicles have been affected by the shift to the modular system.",
    },
    bullets: [
      { ko: "차량은 파밍 범위와 거래소 이동 효율을 크게 올립니다.", en: "Vehicles greatly extend your looting range and trader travel efficiency." },
      { ko: "연료, 배터리, 타이어, 수리 상태를 계속 관리합니다.", en: "Keep managing fuel, battery, tires, and repair condition." },
      { ko: "갤럭시에서는 10일마다 시동과 이동 기록을 남깁니다.", en: "On Galaxy, start and move your vehicle at least once every 10 days." },
    ],
  },
  {
    id: "item-ids",
    title: { ko: "아이템 ID", en: "Item IDs" },
    sourceTitle: "Item IDs",
    sourceUrl: "https://scum.wiki.gg/wiki/Item_IDs",
    icon: Database,
    summary: {
      ko: "아이템 ID는 싱글플레이 또는 개인 서버 권한 환경에서 사용하는 스폰 명령 참고 자료입니다.",
      en: "Item IDs are a spawn-command reference for singleplayer or admin-permitted private servers.",
    },
    bullets: [
      { ko: "일반 플레이어용 파밍 가이드가 아니라 명령어 참고 자료입니다.", en: "This is a command reference, not a looting guide for regular players." },
      { ko: "무기, 낚시, 장비, 음식, 의료, 부품, 설계도, 도구 ID가 분리됩니다.", en: "IDs are split by weapons, fishing, gear, food, medical, parts, blueprints, and tools." },
      { ko: "갤럭시 서버 플레이에서는 서버 규칙과 공지 기준을 우선합니다.", en: "On Galaxy Server, follow the server rules and notices first." },
    ],
  },
  {
    id: "missions",
    title: { ko: "전체 미션", en: "All Missions" },
    sourceTitle: "SCUM Missions info_번역추가.pdf",
    sourceUrl: "/guides/guide-015",
    icon: Wrench,
    summary: {
      ko: "General Store, Armory, Mechanic, Medic 네 상인의 미션 190개를 상인별로 정리했습니다. 원문은 로컬 PDF 기준입니다.",
      en: "All 190 missions from the General Store, Armory, Mechanic, and Medic traders, sorted by trader. The source is a local PDF.",
    },
    bullets: [
      { ko: "Global Cycle, Trader refresh, Phone refresh는 별도 타이머입니다.", en: "Global Cycle, trader refresh, and phone refresh run on separate timers." },
      { ko: "Tier 1과 Tier 2 진행 수에 따라 다음 단계가 열립니다.", en: "Clearing enough Tier 1 and Tier 2 missions unlocks the next tier." },
      { ko: "상호작용 미션은 지도 강조 지점 또는 파란색 강조 아이템과 상호작용합니다.", en: "Interact missions target a highlighted map point or a blue-glowing item." },
    ],
  },
]
