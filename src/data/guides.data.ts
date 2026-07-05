import type { GuideEntry } from "@/domains/scum/guides/types"

const guideImages = {
  start: { src: "/assets/scum/guides/scum-hero-capsule.jpg", alt: { ko: "SCUM 공식 히어로 캡슐 이미지", en: "Official SCUM hero capsule image" } },
  island: { src: "/assets/scum/guides/scum-island-background.jpg", alt: { ko: "SCUM 섬 배경 이미지", en: "SCUM island background image" } },
  library: { src: "/assets/scum/guides/scum-library-hero-guide.jpg", alt: { ko: "SCUM 공식 라이브러리 히어로 이미지", en: "Official SCUM library hero image" } },
  header: { src: "/assets/scum/guides/scum-header-guide.jpg", alt: { ko: "SCUM 공식 헤더 이미지", en: "Official SCUM header image" } },
  capsule: { src: "/assets/scum/guides/scum-main-capsule.jpg", alt: { ko: "SCUM 공식 메인 캡슐 이미지", en: "Official SCUM main capsule image" } },
} as const

const checkedMeta = {
  sourceIds: ["source-steamdb-scum-assets-2026-06-30", "source-splashdamage-scum-june-2026"],
  verificationStatus: "verified",
  freshness: "current",
  checkedAt: "2026-07-05",
} satisfies Pick<GuideEntry["meta"], "sourceIds" | "verificationStatus" | "freshness" | "checkedAt">

export const guidesData: GuideEntry[] = [
  {
    id: "guide-001",
    slug: "beginner-start",
    title: { ko: "게임 시작 완전 가이드", en: "Complete Getting Started Guide" },
    category: "beginnerGuide",
    summary: {
      ko: "설치, 서버 검색, 캐릭터 생성, 첫 30분 생존 루프를 한 번에 확인합니다.",
      en: "Everything you need for install, server search, character creation, and the first 30-minute survival loop.",
    },
    image: guideImages.start,
    body: {
      ko: `# 게임 시작 완전 가이드

## 1. 설치와 접속
Steam에서 SCUM을 설치한 뒤 멀티플레이 서버 목록에서 KOR_PVE 또는 Galaxy를 검색합니다. 갤럭시 서버는 한국 PVE 서버이며 직접 접속이 필요하면 121.137.41.200:7002 주소를 사용합니다.

## 2. 캐릭터 생성
처음 시작은 힘 3, 체력 3, 민첩 3, 지능 3 구성이 안정적입니다. 민첩 계열에서는 락픽과 드라이버 활용을 위해 Thievery를 우선하고, 체력 계열은 Running과 Endurance를 균형 있게 가져갑니다.

## 3. 첫 30분 행동 순서
스폰 직후에는 전투보다 물, 음식, 붕대, 안전한 건물을 먼저 확보합니다. 옷을 찢어 붕대를 만들고, 근처 건물에서 가방과 기본 도구를 찾습니다. 밤이 오기 전에는 좀비 이동이 적은 건물 안쪽에 임시 보관 지점을 정합니다.

## 4. 갤럭시 서버 입장 후 확인
웰컴팩, 복귀 지원, 차량 지원은 디스코드 공지와 문의 흐름을 기준으로 확인합니다. 다른 유저의 차량, 아이템, 시체는 건드리지 않는 것이 기본 규칙입니다.`,
      en: `# Complete Getting Started Guide

## 1. Install and Connect
Install SCUM through Steam, then search "KOR_PVE" or "Galaxy" in the multiplayer server list. Galaxy Server is a Korean PvE server; use 121.137.41.200:7002 for a direct connection if needed.

## 2. Character Creation
A balanced STR 3 / CON 3 / DEX 3 / INT 3 start is stable for a first run. Prioritize Thievery on the Dexterity side for lockpicking and screwdriver use, and balance Running and Endurance on the Constitution side.

## 3. First 30 Minutes
Right after spawning, secure water, food, bandages, and a safe building before engaging in combat. Tear cloth for bandages, and look for a backpack and basic tools in nearby buildings. Before night falls, pick a temporary storage spot inside a building with low zombie traffic.

## 4. After Joining Galaxy Server
Check the Discord notices and support flow for welcome pack, returning-player support, and vehicle support. As a basic rule, never touch another player's vehicle, items, or corpse.`,
    },
    tags: [
      { ko: "신규", en: "New" },
      { ko: "필수", en: "Essential" },
      { ko: "초급", en: "Beginner" },
      { ko: "접속", en: "Connecting" },
    ],
    beginnerPriority: 1,
    relatedGuideIds: ["guide-002", "guide-004", "guide-012"],
    meta: { ...checkedMeta, knowledgeScope: "beginner-guide" },
  },
  {
    id: "guide-002",
    slug: "character-creation",
    title: { ko: "캐릭터 생성과 추천 스탯", en: "Character Creation and Recommended Stats" },
    category: "character",
    summary: {
      ko: "갤럭시 PVE 기준 힘3, 체력3, 민첩3, 지능3 시작값과 장기 성장 선택지를 정리합니다.",
      en: "Covers the STR3/CON3/DEX3/INT3 Galaxy PvE starting build and long-term growth options.",
    },
    image: guideImages.library,
    body: {
      ko: `# 캐릭터 생성과 추천 스탯

## 신규 유저 기본값
처음 플레이하는 유저는 힘 3, 체력 3, 민첩 3, 지능 3으로 시작하면 생존, 이동, 락픽, 치료가 한쪽으로 무너지지 않습니다.

## 힘
총기 사용이 잦은 PVE 환경에서는 Rifles 또는 Handguns를 선택합니다. 활이나 근접 위주 플레이를 원하면 Archery 또는 Melee Weapons를 올려도 됩니다.

## 체력
Running Medium, Endurance Medium은 초반 이동과 파밍 루프를 안정적으로 만듭니다. 장시간 운동 작업을 할 수 있다면 Running Advanced와 Endurance No Skill 선택도 가능합니다.

## 민첩
Thievery Advanced가 가장 중요합니다. PVE에서 드라이버와 락픽 효율은 재산 확보와 고급 파밍 속도에 직접 연결됩니다. Driving은 차량 이용 중 자연스럽게 오릅니다.

## 지능
Medical Advanced 또는 Engineering Medium과 Medical Medium 분배가 안정적입니다. 장기 경험자는 힘 5, 체력 3, 민첩 3, 지능 1 구성을 선택할 수 있습니다.`,
      en: `# Character Creation and Recommended Stats

## Default Build for New Players
Starting at STR 3, CON 3, DEX 3, and INT 3 keeps survival, movement, lockpicking, and medical care from collapsing in any one direction.

## Strength
For a firearm-heavy PvE environment, pick Rifles or Handguns. If you prefer bow or melee play, raising Archery or Melee Weapons works too.

## Constitution
Running Medium and Endurance Medium give a stable early movement and looting loop. If you can grind exercise for a long time, Running Advanced with Endurance No Skill is also viable.

## Dexterity
Thievery Advanced matters most. In PvE, screwdriver and lockpick efficiency directly drives how fast you build wealth and hit high-tier loot. Driving rises naturally through vehicle use.

## Intelligence
Medical Advanced, or splitting Engineering Medium and Medical Medium, is stable. Long-term veterans may choose STR 5, CON 3, DEX 3, INT 1 instead.`,
    },
    tags: [
      { ko: "캐릭터", en: "Character" },
      { ko: "스탯", en: "Stats" },
      { ko: "스킬", en: "Skills" },
    ],
    beginnerPriority: 1,
    relatedGuideIds: ["guide-003", "guide-005"],
    meta: { ...checkedMeta, knowledgeScope: "official-game-system" },
  },
  {
    id: "guide-003",
    slug: "skill-system",
    title: { ko: "능력치와 스킬 성장", en: "Attributes and Skill Growth" },
    category: "skill",
    summary: {
      ko: "Strength, Constitution, Dexterity, Intelligence와 스킬 작업 흐름을 설명합니다.",
      en: "Explains Strength, Constitution, Dexterity, Intelligence, and how skills grow through play.",
    },
    image: guideImages.capsule,
    body: {
      ko: `# 능력치와 스킬 성장

SCUM의 능력치는 Strength, Constitution, Dexterity, Intelligence 네 축으로 나뉩니다. 각 능력치 아래의 스킬은 관련 행동을 반복하면서 경험치를 얻습니다.

## 전투와 도구
Rifles, Handguns, Archery, Melee Weapons는 전투 방식에 맞춰 성장합니다. 초반에는 소음이 큰 총기보다 근접 무기, 활, 회피 동선을 먼저 익히는 편이 안정적입니다.

## 이동과 생존
Running과 Endurance는 이동량이 많을수록 중요합니다. 차량을 얻기 전까지는 스태미나 관리가 파밍 범위를 결정합니다.

## 락픽과 파밍
Thievery는 드라이버와 락픽을 사용하는 모든 파밍 루프의 핵심입니다. 스킬이 낮으면 소모품 손실이 커지므로 초반부터 우선순위를 높게 둡니다.`,
      en: `# Attributes and Skill Growth

SCUM's attributes split into four axes: Strength, Constitution, Dexterity, and Intelligence. The skills under each attribute gain experience by repeating related actions.

## Combat and Tools
Rifles, Handguns, Archery, and Melee Weapons grow with your combat style. Early on, it's more stable to learn melee weapons, bows, and evasion routes before loud firearms.

## Movement and Survival
Running and Endurance matter more the more you travel. Before you get a vehicle, stamina management determines your effective looting range.

## Lockpicking and Looting
Thievery is the core of every looting loop that uses screwdrivers and lockpicks. Low skill causes heavier consumable loss, so prioritize it early.`,
    },
    tags: [
      { ko: "스킬", en: "Skills" },
      { ko: "성장", en: "Growth" },
      { ko: "작업", en: "Training" },
    ],
    beginnerPriority: 2,
    relatedGuideIds: ["guide-006", "guide-008"],
    meta: { ...checkedMeta, knowledgeScope: "official-game-system" },
  },
  {
    id: "guide-004",
    slug: "metabolism-nutrition",
    title: { ko: "대사, 영양, 수분 관리", en: "Metabolism, Nutrition, and Hydration" },
    category: "metabolism",
    summary: {
      ko: "갈증, 배고픔, 피로, 체온, 상처 회복을 초반 생존 기준으로 정리합니다.",
      en: "Covers thirst, hunger, fatigue, body temperature, and wound recovery for early survival.",
    },
    image: guideImages.island,
    body: {
      ko: `# 대사, 영양, 수분 관리

## 수분
갈증은 초반 사망 원인 중 하나입니다. 물통이나 병을 찾고, 안전한 수원을 확보합니다. 오염 위험이 있는 물은 바로 마시지 말고 조리와 정수 흐름을 우선합니다.

## 음식
농가, 마을, 주방, 창고를 확인합니다. 과식과 편식은 대사 상태를 흔들 수 있으므로 단백질, 탄수화물, 지방을 나눠 확보합니다.

## 피로와 체온
장거리 달리기와 추운 환경은 피로와 체온 문제를 만듭니다. 이동 전 옷 상태를 확인하고, 비가 오거나 밤이 되면 실내 이동과 불 피우기를 우선합니다.`,
      en: `# Metabolism, Nutrition, and Hydration

## Hydration
Thirst is one of the leading causes of early death. Find a canteen or bottle and secure a safe water source. Don't drink potentially contaminated water directly — boil or purify it first.

## Food
Check farmhouses, villages, kitchens, and storage. Overeating or eating only one type of food can destabilize your metabolic state, so balance protein, carbs, and fat.

## Fatigue and Temperature
Long-distance running and cold environments cause fatigue and temperature problems. Check your clothing before moving, and prioritize moving indoors and building a fire when it rains or gets dark.`,
    },
    tags: [
      { ko: "생존", en: "Survival" },
      { ko: "수분", en: "Hydration" },
      { ko: "음식", en: "Food" },
    ],
    beginnerPriority: 1,
    relatedGuideIds: ["guide-005", "guide-007"],
    meta: { ...checkedMeta, knowledgeScope: "official-game-system" },
  },
  {
    id: "guide-005",
    slug: "health-disease",
    title: { ko: "건강, 부상, 치료", en: "Health, Injury, and Treatment" },
    category: "health",
    summary: {
      ko: "출혈, 감염, 골절, 통증 관리와 Medical 스킬 활용 기준입니다.",
      en: "Managing bleeding, infection, fractures, and pain, and how to use the Medical skill.",
    },
    image: guideImages.header,
    body: {
      ko: `# 건강, 부상, 치료

## 출혈
옷을 찢어 만든 헝겊은 초반 생존의 기본 붕대입니다. 출혈은 즉시 멈추고, 전투를 이어가기보다 안전한 장소에서 회복합니다.

## 감염과 질병
더러운 붕대, 오염된 물, 오래된 음식은 상태 이상으로 이어질 수 있습니다. Medical 스킬이 높을수록 치료 판단과 회복 안정성이 좋아집니다.

## 전투 후 루틴
상처, 탄약, 무기 내구도, 수분, 음식 상태를 한 번에 점검합니다. 고급 파밍지로 들어가기 전에는 치료 아이템을 별도 슬롯에 정리합니다.`,
      en: `# Health, Injury, and Treatment

## Bleeding
Cloth torn from clothing is your basic early-game bandage. Stop bleeding immediately, and recover in a safe spot rather than continuing to fight.

## Infection and Illness
Dirty bandages, contaminated water, and old food can lead to status ailments. A higher Medical skill improves both treatment judgment and recovery stability.

## Post-Combat Routine
Check wounds, ammo, weapon durability, hydration, and food all at once. Before entering a high-tier loot zone, organize medical items into a dedicated slot.`,
    },
    tags: [
      { ko: "치료", en: "Treatment" },
      { ko: "부상", en: "Injury" },
      { ko: "의료", en: "Medical" },
    ],
    beginnerPriority: 1,
    relatedGuideIds: ["guide-004", "guide-008"],
    meta: { ...checkedMeta, knowledgeScope: "official-game-system" },
  },
  {
    id: "guide-006",
    slug: "looting-strategy",
    title: { ko: "루팅 전략과 40드라이버 파밍", en: "Looting Strategy and 40-Screwdriver Farming" },
    category: "looting",
    summary: {
      ko: "초반 루팅 순서, 드라이버 관리, 갤럭시 40드라이버 존 이용 기준입니다.",
      en: "Early looting priority, screwdriver management, and how to use Galaxy's 40-screwdriver zones.",
    },
    image: guideImages.capsule,
    body: {
      ko: `# 루팅 전략과 40드라이버 파밍

## 초반 우선순위
가방, 칼, 도끼, 물통, 붕대, 음식, 드라이버를 우선합니다. 무게를 초과하면 이동과 스태미나가 무너지므로 팔 수 있는 물건과 즉시 쓸 물건을 나눕니다.

## 락픽 루틴
드라이버와 락픽은 고급 파밍의 핵심 소모품입니다. Thievery가 낮으면 소모가 커지므로 쉬운 잠금부터 연습합니다.

## 갤럭시 40드라이버 존
주황색 원으로 표시된 Z3 4번 패드와 D1 4번 패드의 빨간 캐비넷은 40드라이버 파밍 기준입니다. 한 번 파밍할 때 한곳만 이용하고 다음 턴에는 다른 스쿼드에 양보합니다.`,
      en: `# Looting Strategy and 40-Screwdriver Farming

## Early Priority
Prioritize a backpack, knife, axe, canteen, bandages, food, and screwdrivers. Going over weight breaks your movement and stamina, so split items into "sell later" and "use now."

## Lockpicking Routine
Screwdrivers and lockpicks are the core consumables for high-tier looting. Low Thievery burns through them faster, so practice on easy locks first.

## Galaxy's 40-Screwdriver Zones
The orange-circled red cabinets at Z3 pad 4 and D1 pad 4 are the standard 40-screwdriver farming spots. Use only one per farming run, and yield it to other squads on the next rotation.`,
    },
    tags: [
      { ko: "루팅", en: "Looting" },
      { ko: "드라이버", en: "Screwdrivers" },
      { ko: "락픽", en: "Lockpicking" },
    ],
    beginnerPriority: 2,
    relatedGuideIds: ["guide-003", "guide-012"],
    meta: { ...checkedMeta, verificationStatus: "partial", knowledgeScope: "server-local-policy", reviewBefore: "2026-08-05", reviewReason: "서버 파밍 설정 업데이트 확인" },
  },
  {
    id: "guide-007",
    slug: "crafting-system",
    title: { ko: "제작과 기본 생존 도구", en: "Crafting and Basic Survival Tools" },
    category: "crafting",
    summary: {
      ko: "돌칼, 도끼, 캠프파이어, 임시 조리, 보관 도구의 기본 흐름입니다.",
      en: "The basics of stone knives, axes, campfires, improvised cooking, and storage.",
    },
    image: guideImages.start,
    body: {
      ko: `# 제작과 기본 생존 도구

## 첫 제작
돌칼, 나무 창, 돌도끼는 초반 생존의 기본입니다. 도구가 있으면 나무, 천, 고기, 상자를 더 안정적으로 다룰 수 있습니다.

## 불과 조리
캠프파이어는 체온, 조리, 물 처리에 연결됩니다. 2026년 Into the Wild 업데이트 기준 Pasta, Rice, Soup, Stew 계열 임시 요리가 기본 제공됩니다.

## 보관
기지 전에는 가볍게 들고 이동하고, 기지 이후에는 상자를 분산 배치합니다. 베이스 외 건축물은 갤럭시 규칙상 금지 대상입니다.`,
      en: `# Crafting and Basic Survival Tools

## First Crafts
A stone knife, wooden spear, and stone axe are the basics of early survival. With tools in hand, you can handle wood, cloth, meat, and crates far more reliably.

## Fire and Cooking
The campfire ties into body temperature, cooking, and water treatment. As of the 2026 Into the Wild update, improvised Pasta, Rice, Soup, and Stew recipes are available by default.

## Storage
Travel light before you have a base, then spread storage boxes out once you do. Structures outside your base are banned under Galaxy's rules.`,
    },
    tags: [
      { ko: "제작", en: "Crafting" },
      { ko: "도구", en: "Tools" },
      { ko: "요리", en: "Cooking" },
    ],
    beginnerPriority: 2,
    relatedGuideIds: ["guide-004", "guide-010"],
    meta: { ...checkedMeta, knowledgeScope: "official-game-system" },
  },
  {
    id: "guide-008",
    slug: "weapon-combat",
    title: { ko: "무기와 PVE 전투", en: "Weapons and PvE Combat" },
    category: "weapon",
    summary: {
      ko: "근접, 활, 권총, 소총 사용 기준과 벙커 금지 행동을 정리합니다.",
      en: "Covers melee, bow, pistol, and rifle use, plus banned actions inside bunkers.",
    },
    image: guideImages.header,
    body: {
      ko: `# 무기와 PVE 전투

## 초반 전투
초반에는 소음이 큰 총기보다 회피, 근접, 활을 먼저 익힙니다. 좀비 무리는 한 번에 상대하지 않고 문, 울타리, 지형을 활용합니다.

## 총기 운용
소총과 권총은 탄약, 탄창, 내구도, 소음 관리가 필요합니다. 총을 쏜 뒤에는 주변 적과 다른 플레이어 동선을 고려해 이동합니다.

## 갤럭시 금지 기준
버려진 벙커에서 참마도 사용 금지, M82로 센트리 사냥 금지, 벙커 안쪽 브레너 사격 금지 규칙을 지킵니다. 드랍쉽 유도나 피 뽑기 용도로 대문 앞에서 쏘는 흐름은 서버 공지를 따릅니다.`,
      en: `# Weapons and PvE Combat

## Early Combat
Early on, learn evasion, melee, and bows before loud firearms. Don't take on a zombie horde all at once — use doors, fences, and terrain.

## Firearm Handling
Rifles and pistols require managing ammo, magazines, durability, and noise. After firing, move with nearby enemies and other players' routes in mind.

## Galaxy's Banned Actions
Follow the rules: no katana use in abandoned bunkers, no M82 sentry farming, and no shooting Brenner inside bunkers. Follow the server notice for firing near the gate to pull dropships or draw blood.`,
    },
    tags: [
      { ko: "전투", en: "Combat" },
      { ko: "무기", en: "Weapons" },
      { ko: "벙커", en: "Bunkers" },
    ],
    beginnerPriority: 2,
    relatedGuideIds: ["guide-009", "guide-012"],
    meta: { ...checkedMeta, knowledgeScope: "server-local-policy" },
  },
  {
    id: "guide-009",
    slug: "hunting-fishing-quest",
    title: { ko: "사냥, 낚시, 1.0 기념 퀘스트", en: "Hunting, Fishing, and the 1.0 Anniversary Quest" },
    category: "hunting",
    summary: {
      ko: "Into the Wild 기준 자유 배회 동물, 트로피 물고기, Hunter 한정 퀘스트를 정리합니다.",
      en: "Covers free-roaming wildlife, trophy fish, and the limited Hunter quest under Into the Wild.",
    },
    image: guideImages.library,
    body: {
      ko: `# 사냥, 낚시, 1.0 기념 퀘스트

## 자유 배회 동물
2026-06-30 Into the Wild 업데이트에서 랜드 동물이 오픈월드에 복귀했습니다. 동물은 생물군계, 시간, 거리, 시야, LoD 상태에 따라 등장하며 별도 사냥 미니게임이 아니라 실제 필드에서 추적합니다.

## 사냥 흐름
능선, 숲 가장자리, 눈길, 발소리를 확인합니다. 사체는 다른 위험을 부를 수 있어 회수 후 빠르게 이동합니다.

## 낚시와 트로피
Carp, Tuna, Catfish, Pike, Dentex 트로피 물고기를 장식으로 제작할 수 있습니다. 낚시 스팟 활성 비율은 서버 설정에 영향을 받을 수 있습니다.

## 1.0 기념 Hunter 퀘스트
2026년 7월 31일까지 진행되는 한정 사냥 퀘스트는 Hunter 상인에게서 시작합니다. 기간 한정 퀘스트이므로 서버 공지와 게임 내 상인 위치를 함께 확인합니다.`,
      en: `# Hunting, Fishing, and the 1.0 Anniversary Quest

## Free-Roaming Wildlife
The 2026-06-30 Into the Wild update brought land animals back to the open world. They appear based on biome, time, distance, visibility, and LoD state, and you track them in the actual field rather than through a separate hunting minigame.

## Hunting Flow
Check ridgelines, treelines, snow trails, and footstep sounds. Carcasses can attract other dangers, so recover them and move on quickly.

## Fishing and Trophies
Carp, Tuna, Catfish, Pike, and Dentex can be crafted into trophy decorations. The active fishing spot ratio can be affected by server settings.

## 1.0 Anniversary Hunter Quest
The limited hunting quest running through July 31, 2026 starts at the Hunter trader. Since it's time-limited, check both the server notice and the in-game trader location.`,
    },
    tags: [
      { ko: "사냥", en: "Hunting" },
      { ko: "낚시", en: "Fishing" },
      { ko: "퀘스트", en: "Quest" },
      { ko: "Into the Wild", en: "Into the Wild" },
    ],
    beginnerPriority: 2,
    relatedGuideIds: ["guide-003", "guide-014"],
    meta: { ...checkedMeta, verificationStatus: "partial", knowledgeScope: "patch-dependent", reviewBefore: "2026-08-01", reviewReason: "기간 한정 퀘스트 종료 이후 업데이트 확인" },
  },
  {
    id: "guide-010",
    slug: "base-building",
    title: { ko: "베이스 건설과 위치 선정", en: "Base Building and Site Selection" },
    category: "baseBuilding",
    summary: {
      ko: "도로, 파밍지, 깃발, 스쿼드 인원 기준을 갤럭시 규칙에 맞춰 설명합니다.",
      en: "Explains roads, loot zones, flags, and squad size limits under Galaxy's rules.",
    },
    image: guideImages.island,
    body: {
      ko: `# 베이스 건설과 위치 선정

## 위치 선정
도로와 파밍지에서 충분히 떨어진 곳만 후보로 둡니다. 위치가 애매하면 디스코드 문의 흐름으로 먼저 확인합니다.

## 깃발과 스쿼드
스쿼드당 깃발 1개, 최대 7명 기준입니다. 깃발 2개는 기존 깃발 범위 옆 확장 방식만 허용됩니다.

## 금지 기준
베이스 외 건축물, 파밍지 점거, 타인의 베이스 침입, 타 스쿼드 깃발 터치는 금지입니다. 차량이나 아이템 보관은 베이스 안에서만 안정적으로 관리합니다.`,
      en: `# Base Building and Site Selection

## Site Selection
Only consider sites far enough from roads and loot zones. If a location is ambiguous, check with Discord support first.

## Flags and Squads
One flag per squad, up to seven members. A second flag is only allowed as an extension next to the existing flag range.

## Banned Actions
Structures outside your base, occupying loot zones, invading another player's base, and touching another squad's flag are all banned. Keep vehicles and item storage reliably managed inside your base only.`,
    },
    tags: [
      { ko: "기지", en: "Base" },
      { ko: "깃발", en: "Flag" },
      { ko: "규칙", en: "Rules" },
    ],
    beginnerPriority: 3,
    relatedGuideIds: ["guide-012", "guide-011"],
    meta: { ...checkedMeta, verificationStatus: "partial", knowledgeScope: "server-local-policy", reviewBefore: "2026-08-25", reviewReason: "건설 시스템 패치 이후 업데이트 확인" },
  },
  {
    id: "guide-011",
    slug: "vehicle-driving",
    title: { ko: "차량 이용과 삭제 방지", en: "Vehicle Use and Avoiding Deletion" },
    category: "vehicle",
    summary: {
      ko: "차량 확보, 연료, 수리, 10일 이동 기록, 상점 주차 금지 기준입니다.",
      en: "Covers acquiring a vehicle, fuel, repair, the 10-day movement rule, and trader parking bans.",
    },
    image: guideImages.header,
    body: {
      ko: `# 차량 이용과 삭제 방지

## 차량 확보
차량은 이동, 파밍, 거래소 이동 효율을 크게 올립니다. 갤럭시 서버의 차량 지원은 디스코드 공지와 문의 흐름에 맞춰 확인합니다.

## 유지 관리
연료, 배터리, 타이어, 수리 키트 상태를 확인합니다. 차량은 10일에 한 번 시동을 걸고 앞이나 뒤로 조금이라도 이동해 삭제 조건을 피합니다.

## 주차 규칙
상점원 안에 차량을 주차한 뒤 자리비움이나 접속 종료를 하면 삭제 대상이 될 수 있습니다. 다른 유저 차량 탑승과 아이템 회수는 금지입니다.`,
      en: `# Vehicle Use and Avoiding Deletion

## Getting a Vehicle
A vehicle greatly improves travel, looting, and trader-run efficiency. Check the Discord notices and support flow for Galaxy's vehicle support.

## Maintenance
Check fuel, battery, tires, and repair kit condition. Start your vehicle and move it forward or backward at least once every 10 days to avoid deletion.

## Parking Rules
Parking inside a trader area and then going AFK or logging out can flag the vehicle for deletion. Using another player's vehicle or taking their items is forbidden.`,
    },
    tags: [
      { ko: "차량", en: "Vehicle" },
      { ko: "이동", en: "Travel" },
      { ko: "주차", en: "Parking" },
    ],
    beginnerPriority: 3,
    relatedGuideIds: ["guide-006", "guide-012"],
    meta: { ...checkedMeta, knowledgeScope: "server-local-policy" },
  },
  {
    id: "guide-012",
    slug: "galaxy-rules",
    title: { ko: "갤럭시 서버 규칙", en: "Galaxy Server Rules" },
    category: "galaxyServer",
    summary: {
      ko: "PVE 재산 보호, 파밍 순환, 금지 행동, 공지 확인 기준을 카드형 규칙으로 정리합니다.",
      en: "PvE property protection, loot rotation, banned actions, and notice-checking rules as a card set.",
    },
    image: guideImages.capsule,
    body: {
      ko: `# 갤럭시 서버 규칙

## 채팅과 커뮤니티
글로벌 채팅 욕설, 비하, 성드립, 패드립, 정치 발언은 금지입니다. PVE 유저에게 PVP 권유도 금지입니다.

## 재산 보호
타인의 베이스 침입, 깃발 터치, 차량 탑승, 아이템 회수, 시체 서치는 금지입니다.

## 파밍과 건축
파밍지 점거 금지, 파밍지 인근 베이스 건설 주의, 베이스 외 건축물 금지, 원전 빠루 사용 금지, 라디오 방치 금지, 지뢰 설치 금지 공지를 지킵니다.

## 고급 지역
원전 옥상 비행기 주차 금지, 버려진 벙커 참마도 사용 금지, M82 센트리 사냥 금지, 벙커 안쪽 브레너 사격 금지 기준을 확인합니다.`,
      en: `# Galaxy Server Rules

## Chat and Community
Abuse, insults, sexual remarks, family insults, and political arguments are banned in global chat. Recruiting PvE players into PvP is also banned.

## Property Protection
Invading another player's base, touching flags, using their vehicle, taking their items, and searching their corpse are all banned.

## Looting and Construction
Follow the notices: no occupying loot zones, be careful building near loot zones, no structures outside your base, no crowbar use at the nuclear plant, no unattended radios, and no mine placement.

## High-Tier Zones
Check the rules: no aircraft parking on the nuclear plant roof, no katana use in abandoned bunkers, no M82 sentry farming, and no shooting Brenner inside bunkers.`,
    },
    tags: [
      { ko: "갤럭시", en: "Galaxy" },
      { ko: "규칙", en: "Rules" },
      { ko: "PVE", en: "PVE" },
    ],
    beginnerPriority: 1,
    relatedGuideIds: ["guide-010", "guide-011"],
    meta: { ...checkedMeta, knowledgeScope: "server-local-policy" },
  },
  {
    id: "guide-013",
    slug: "galaxy-newbie-care",
    title: { ko: "갤럭시 신규 유저 지원", en: "Galaxy Newcomer Support" },
    category: "galaxyServer",
    summary: {
      ko: "웰컴팩, 복귀 지원, 차량 지원, 초반 질문을 디스코드 문의 흐름으로 정리합니다.",
      en: "Welcome pack, returning-player support, vehicle support, and early questions handled through Discord.",
    },
    image: guideImages.start,
    body: {
      ko: `# 갤럭시 신규 유저 지원

## 웰컴팩
신규 유저와 복귀 유저는 웰컴팩 및 차량 지원 가능 여부를 디스코드에서 확인합니다.

## 질문 흐름
게임 시작, 웰컴팩, 차량, 베이스 위치, 파밍지 이용 기준은 디스코드 공지와 문의 채널을 기준으로 확인합니다.

## 초반 체크리스트
서버 접속, 캐릭터 생성, 추천 스탯, 물과 음식 확보, 안전한 거점, 웰컴팩 확인, 차량 규칙 확인 순서로 진행합니다.`,
      en: `# Galaxy Newcomer Support

## Welcome Pack
New and returning players can check Discord for welcome pack and vehicle support availability.

## Question Flow
Check the Discord notices and support channel for game start, welcome pack, vehicles, base location, and loot zone usage.

## Early Checklist
Follow this order: connect to the server, create your character, apply recommended stats, secure water and food, find a safe spot, check the welcome pack, and review vehicle rules.`,
    },
    tags: [
      { ko: "갤럭시", en: "Galaxy" },
      { ko: "신규", en: "New Player" },
      { ko: "웰컴팩", en: "Welcome Pack" },
    ],
    beginnerPriority: 1,
    relatedGuideIds: ["guide-001", "guide-012"],
    meta: { ...checkedMeta, knowledgeScope: "server-local-policy" },
  },
  {
    id: "guide-014",
    slug: "server-settings-2026",
    title: { ko: "2026 서버 설정 변화", en: "2026 Server Setting Changes" },
    category: "serverSetting",
    summary: {
      ko: "동물, 낚시 스팟, 방사능, 깃발, 묘비 관련 최신 서버 설정 변화를 설명합니다.",
      en: "Explains the latest server setting changes for wildlife, fishing spots, radiation, flags, and tombstones.",
    },
    image: guideImages.library,
    body: {
      ko: `# 2026 서버 설정 변화

## 동물 설정
Into the Wild 업데이트는 동물 활성화, 전체 밀도, 비가상 동물 최대 수, 종별 표현 배율 같은 커스텀 서버 제어를 추가했습니다.

## 낚시와 방사능
High-Activity Fishing Spots 설정으로 활성 낚시 스팟 비율을 조정할 수 있습니다. 방사능 관련 설정은 원전 플레이와 보호 장비 운용에 영향을 줍니다.

## 깃발과 묘비
Maximum Flags Per Prisoner와 Tombstones Per Squad 설정이 추가되었습니다. 갤럭시에서는 기존 서버 규칙의 깃발 기준과 함께 확인해야 합니다.`,
      en: `# 2026 Server Setting Changes

## Wildlife Settings
The Into the Wild update added custom server controls such as wildlife enablement, overall density, the max non-virtual animal count, and per-species representation multipliers.

## Fishing and Radiation
The High-Activity Fishing Spots setting adjusts the active fishing spot ratio. Radiation-related settings affect nuclear plant play and protective gear use.

## Flags and Tombstones
Maximum Flags Per Prisoner and Tombstones Per Squad settings were added. On Galaxy, cross-check these against the existing server flag rules.`,
    },
    tags: [
      { ko: "서버 설정", en: "Server Settings" },
      { ko: "패치", en: "Patch" },
      { ko: "2026", en: "2026" },
    ],
    beginnerPriority: 3,
    relatedGuideIds: ["guide-009", "guide-012"],
    meta: { ...checkedMeta, verificationStatus: "partial", knowledgeScope: "patch-dependent", reviewBefore: "2026-08-05", reviewReason: "차기 패치 설정 변경 여부 확인" },
  },
  {
    id: "guide-015",
    slug: "scum-missions-all",
    title: { ko: "SCUM 전체 미션 목록", en: "Full SCUM Mission List" },
    category: "quest",
    summary: {
      ko: "General Store, Armory, Mechanic, Medic 네 상인의 전체 미션을 상인별로 정리합니다.",
      en: "All missions from the General Store, Armory, Mechanic, and Medic traders, sorted by trader.",
    },
    image: guideImages.library,
    body: {
      ko: `# SCUM 전체 미션 목록

상인 책자에 등장하는 미션 원문을 상인별로 정리했습니다. 실제 텍스트는 게임 내 미션 책자를 기준으로 합니다.

## 미션 갱신 기준
Global Cycle, Trader refresh, Phone refresh는 각각 별도 타이머입니다. 상인 책자의 미션은 갱신 주기에 따라 보충되고, 전화 갱신은 상인별 추가 미션을 무작위로 제공할 수 있습니다.

## 티어 해금
Tier 1 미션 3개로 다음 상인을 열고, Tier 1 미션 6개로 Tier 2를 열며, Tier 2 미션 12개로 Tier 3를 엽니다.

## 상호작용 미션
상호작용 미션은 지도에 강조 표시되는 지점 또는 파란 청사진처럼 빛나는 아이템과 상호작용하는 방식입니다. 대부분의 상호작용 미션은 멀티플레이에서 정상 동작하는 것으로 확인됩니다.

아래 상세 목록은 상인별 전체 미션 원문 목록으로 표시됩니다.`,
      en: `# Full SCUM Mission List

The mission text from each trader's book, sorted by trader. The wording follows the in-game mission book.

## Refresh Timers
Global Cycle, trader refresh, and phone refresh run on separate timers. The trader's book restocks missions on its refresh cycle, and the phone refresh can add extra missions per trader at random.

## Tier Unlocks
3 Tier 1 missions unlock the next trader, 6 Tier 1 missions unlock Tier 2, and 12 Tier 2 missions unlock Tier 3.

## Interact Missions
Interact missions target a point highlighted on the map, or an item that glows blue like a blueprint. Most interact missions are confirmed to work correctly in multiplayer.

The detailed list below shows the full mission text for each trader.`,
    },
    tags: [
      { ko: "퀘스트", en: "Quest" },
      { ko: "미션", en: "Mission" },
      { ko: "상인", en: "Trader" },
    ],
    beginnerPriority: 2,
    relatedGuideIds: ["guide-009", "guide-014"],
    meta: {
      sourceIds: ["source-scum-missions-pdf-local"],
      verificationStatus: "verified",
      knowledgeScope: "official-game-system",
      freshness: "current",
      checkedAt: "2026-07-05",
    },
  },
]

function matchesLocalizedQuery(text: { ko: string; en: string }, query: string): boolean {
  return text.ko.toLowerCase().includes(query) || text.en.toLowerCase().includes(query)
}

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
      (guide) =>
        matchesLocalizedQuery(guide.title, query) ||
        matchesLocalizedQuery(guide.summary, query) ||
        matchesLocalizedQuery(guide.body, query) ||
        guide.tags.some((tag) => matchesLocalizedQuery(tag, query))
    )
  }

  if (filters?.category) {
    result = result.filter((guide) => guide.category === filters.category)
  }

  if (filters?.minPriority) {
    result = result.filter((guide) => guide.beginnerPriority <= filters.minPriority!)
  }

  if (filters?.tags && filters.tags.length > 0) {
    result = result.filter((guide) =>
      filters.tags!.some((tag) => guide.tags.some((guideTag) => guideTag.ko === tag || guideTag.en === tag))
    )
  }

  return result
}

export function getGuideById(id: string): GuideEntry | undefined {
  return guidesData.find((guide) => guide.id === id)
}

export function getGuideBySlug(slug: string): GuideEntry | undefined {
  return guidesData.find((guide) => guide.slug === slug)
}
