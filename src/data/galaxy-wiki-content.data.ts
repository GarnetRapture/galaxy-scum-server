import type {
  BeginnerRouteStep,
  ContentImageAsset,
  GalaxyRule,
  KnowledgeSection,
  LocaleCode,
  LocalizedText,
  StatRecommendation,
  VersionKnowledge,
} from "@/domains/galaxy-server/content/types"

export const contentImages: ContentImageAsset[] = [
  {
    src: "/assets/scum/scum-library-hero.jpg",
    title: { ko: "SCUM 공식 히어로 이미지", en: "Official SCUM hero image" },
    alt: { ko: "SCUM 공식 스토어 히어로 아트", en: "Official SCUM store hero art" },
    sourceId: "source-steamdb-scum-assets-2026-06-30",
  },
  {
    src: "/assets/scum/scum-header.jpg",
    title: { ko: "SCUM 공식 헤더", en: "Official SCUM header" },
    alt: { ko: "SCUM 공식 Steam 헤더 이미지", en: "Official SCUM Steam header image" },
    sourceId: "source-steamdb-scum-assets-2026-06-30",
  },
  {
    src: "/assets/scum/scum-capsule.jpg",
    title: { ko: "SCUM 공식 캡슐 이미지", en: "Official SCUM capsule image" },
    alt: { ko: "SCUM 공식 Steam 캡슐 이미지", en: "Official SCUM Steam capsule image" },
    sourceId: "source-steamdb-scum-assets-2026-06-30",
  },
]

export const statRecommendations: StatRecommendation[] = [
  {
    id: "galaxy-new-player-balanced",
    attribute: "STR",
    title: { ko: "힘", en: "Strength" },
    recommendedValue: "3",
    primaryRecommendation: {
      ko: "처음 시작은 힘 3을 기준으로 두고, 총기 사용이 많은 갤럭시 환경에 맞춰 Rifles 또는 Handguns를 선택한다.",
      en: "Start at STR 3 and invest in Rifles or Handguns for Galaxy's firearm-heavy PvE flow.",
    },
    alternatives: [
      {
        ko: "활과 근접 위주로 시작하면 Archery 또는 Melee Weapons를 올리고, 초반 이후 작업으로 보정한다.",
        en: "Archery or Melee Weapons remains viable for bow or melee starts, then can be raised through play.",
      },
    ],
    skills: [
      { ko: "Rifles", en: "Rifles" },
      { ko: "Handguns", en: "Handguns" },
      { ko: "Archery", en: "Archery" },
      { ko: "Melee Weapons", en: "Melee Weapons" },
    ],
  },
  {
    id: "galaxy-new-player-constitution",
    attribute: "CON",
    title: { ko: "체력", en: "Constitution" },
    recommendedValue: "3",
    primaryRecommendation: {
      ko: "달리기 Medium, 지구력 Medium으로 시작하면 이동·파밍·초기 생존 리듬이 안정적이다.",
      en: "Running Medium and Endurance Medium produce a stable early travel, farming, and survival rhythm.",
    },
    alternatives: [
      {
        ko: "운동 작업을 오래 할 수 있는 플레이어는 Running Advanced, Endurance No Skill로 시작해도 된다.",
        en: "Players willing to train stamina heavily can start Running Advanced and Endurance No Skill.",
      },
    ],
    skills: [
      { ko: "Running", en: "Running" },
      { ko: "Endurance", en: "Endurance" },
    ],
  },
  {
    id: "galaxy-new-player-dexterity",
    attribute: "DEX",
    title: { ko: "민첩", en: "Dexterity" },
    recommendedValue: "3",
    primaryRecommendation: {
      ko: "도둑질 Advanced를 우선한다. PVE에서는 드라이버와 락픽 효율이 재산 관리와 파밍 속도를 결정한다.",
      en: "Prioritize Thievery Advanced. In PvE, screwdrivers and lockpicking efficiency drive wealth and looting speed.",
    },
    alternatives: [
      {
        ko: "Stealth는 플레이 중 작업으로 올리고, Driving은 차량 이용이 많아 자연 상승을 기대한다.",
        en: "Train Stealth through play and let Driving grow naturally through frequent vehicle use.",
      },
    ],
    skills: [
      { ko: "Thievery", en: "Thievery" },
      { ko: "Driving", en: "Driving" },
      { ko: "Stealth", en: "Stealth" },
    ],
  },
  {
    id: "galaxy-new-player-intelligence",
    attribute: "INT",
    title: { ko: "지능", en: "Intelligence" },
    recommendedValue: "3",
    primaryRecommendation: {
      ko: "Medical Advanced로 시작하거나, Engineering Medium과 Medical Medium을 나눠 찍고 Survival은 작업으로 올린다.",
      en: "Start Medical Advanced, or split Engineering Medium and Medical Medium while training Survival through play.",
    },
    alternatives: [
      {
        ko: "SCUM 장기 경험자는 힘 5, 콘 3, 덱스 3, 인트 1 구조를 장기 서버 플레이용으로 선택할 수 있다.",
        en: "Experienced long-term players can choose STR 5, CON 3, DEX 3, INT 1 for a long server run.",
      },
    ],
    skills: [
      { ko: "Medical", en: "Medical" },
      { ko: "Engineering", en: "Engineering" },
      { ko: "Survival", en: "Survival" },
    ],
  },
]

export const galaxyRules: GalaxyRule[] = [
  { id: "rule-chat", title: { ko: "글로벌 채팅 욕설, 비하, 성드립, 패드립, 정치 발언 금지", en: "No abuse, insults, sexual remarks, family insults, or political arguments in global chat." }, severity: "critical" },
  { id: "rule-squad-flag", title: { ko: "스쿼드당 깃발 1개, 최대 7명", en: "One flag per squad and a maximum of seven members." }, detail: { ko: "깃발 2개는 기존 깃발 범위 옆 확장 방식만 가능하다.", en: "A second flag is allowed only as an extension next to the existing flag range." }, severity: "important" },
  { id: "rule-road", title: { ko: "건축물 도로 침범 금지", en: "No base structures may intrude onto roads." }, detail: { ko: "도로 침범은 어드민 확인 후 재건축 요청 대상이다.", en: "Road intrusion can trigger an admin rebuild request." }, severity: "important" },
  { id: "rule-loot-area", title: { ko: "파밍지 점거 금지", en: "Do not occupy or monopolize loot areas." }, severity: "important" },
  { id: "rule-base-distance", title: { ko: "파밍지 인근 베이스 건설은 거리 확인 후 진행", en: "Build away from loot zones unless an admin confirms the distance." }, detail: { ko: "애매한 위치나 작은 파밍지는 어드민에게 먼저 문의한다.", en: "Ask an admin before building near ambiguous or small loot locations." }, severity: "important" },
  { id: "rule-invasion", title: { ko: "타인의 베이스 침략 금지", en: "No illegal intrusion into another player's base." }, severity: "critical" },
  { id: "rule-flag-touch", title: { ko: "스쿼드 깃발 터치 금지", en: "Do not touch another squad's flag." }, severity: "critical" },
  { id: "rule-nuclear-crowbar", title: { ko: "원전 빠루 사용 금지", en: "Crowbar use is forbidden at the nuclear plant." }, severity: "critical" },
  { id: "rule-cargo", title: { ko: "보급은 먼저 도착한 플레이어가 획득", en: "Cargo drops belong to the player or squad that arrives first." }, severity: "standard" },
  { id: "rule-building-only-base", title: { ko: "베이스 이외 건축물 건설 금지", en: "Do not build structures outside your base." }, severity: "important" },
  { id: "rule-admin-demand", title: { ko: "어드민에게 무리한 요구 금지", en: "Do not make excessive requests to admins." }, detail: { ko: "서버 운영 기준은 평등과 공정성이다.", en: "The server is operated around equality and fairness." }, severity: "important" },
  { id: "rule-trader-parking", title: { ko: "상점원 안 차량 주차 후 자리비움 또는 접속 종료 금지", en: "Do not park inside trader areas and go AFK or log out." }, detail: { ko: "일정 시간 경과 시 차량 삭제 대상이다.", en: "Vehicles may be deleted after the configured time." }, severity: "important" },
  { id: "rule-vehicle-refresh", title: { ko: "이동수단은 10일에 한 번 시동 후 앞이나 뒤로 이동", en: "Start and move vehicles at least once every 10 days." }, detail: { ko: "시동 또는 움직임 없이 장기 주차하면 설정 시간 이후 삭제된다.", en: "Vehicles left without ignition or movement can be deleted after the configured time." }, severity: "important" },
  { id: "rule-pvp-recruit", title: { ko: "PVE 유저에게 PVP 권유 금지", en: "Do not recruit PvE players into PvP." }, detail: { ko: "PVP 예정 유저끼리 연결은 어드민에게 요청할 수 있다.", en: "Admins can connect players who already intend to move to PvP." }, severity: "critical" },
  { id: "rule-returning-users", title: { ko: "복귀 유저 웰컴팩 및 차량 지원 가능", en: "Returning players can request welcome pack and vehicle support." }, detail: { ko: "타인 차량 탑승, 아이템 회수, 시체 서치는 금지다.", en: "Using other players' vehicles, taking items, or searching corpses is forbidden." }, severity: "important" },
  { id: "rule-aircraft-nuclear", title: { ko: "원전 옥상 비행기 주차 금지", en: "No aircraft parking on the nuclear plant roof." }, severity: "important" },
  { id: "rule-radio", title: { ko: "라디오를 파밍지에 켜둔 채 방치 금지", en: "Do not leave radios running unattended at loot zones." }, severity: "important" },
  { id: "rule-bunker-weapons", title: { ko: "버려진 벙커 참마도 사용 금지, M82로 센트리 사냥 금지", en: "No katana use in abandoned bunkers and no M82 sentry farming." }, detail: { ko: "드랍쉽 유도나 피 뽑기 용도로 대문 앞에서 쏘는 것은 허용된다. 벙커 안쪽 브레너 사격은 금지다.", en: "Using it near the gate for dropship pulling or bleeding is allowed. Shooting Brenner inside abandoned bunkers is forbidden." }, severity: "critical" },
  { id: "rule-mines", title: { ko: "현재 버그로 지뢰 설치 금지", en: "Mine placement is forbidden due to the current bug notice." }, severity: "critical" },
  { id: "rule-orange-zone", title: { ko: "주황색 원 40드라이버 파밍지는 한 턴에 한곳만 이용", en: "Use only one orange-circle 40-screwdriver farming zone per turn." }, detail: { ko: "Z3 4번 패드, D1 4번 패드 빨간 캐비넷은 다음 턴에 다른 스쿼드에 양보한다.", en: "Yield Z3 pad 4 and D1 pad 4 red cabinets to other squads on the next rotation." }, severity: "important" },
]

export const beginnerRouteSteps: BeginnerRouteStep[] = [
  {
    id: "join",
    title: { ko: "서버 입장과 캐릭터 생성", en: "Join and create your prisoner" },
    timeframe: { ko: "시작 전", en: "Before spawn" },
    objectives: [
      { ko: "서버 검색에서 영문 필수 키워드 KOR_PVE와 Galaxy를 확인한다.", en: "Search with the required English keyword KOR_PVE and confirm Galaxy." },
      { ko: "처음이면 힘 3, 콘 3, 덱스 3, 인트 3으로 시작한다.", en: "For a first run, start STR 3, CON 3, DEX 3, INT 3." },
      { ko: "도둑질 Advanced를 최우선으로 확보한다.", en: "Secure Thievery Advanced as the highest priority." },
    ],
    galaxyNote: { ko: "서버명은 갤럭시지만 검색과 표기는 Galaxy 영문도 함께 사용한다.", en: "The server is Galaxy; keep the English spelling visible for search and identity." },
  },
  {
    id: "first-survival",
    title: { ko: "첫 생존 루프", en: "First survival loop" },
    timeframe: { ko: "첫 30분", en: "First 30 minutes" },
    objectives: [
      { ko: "물, 음식, 붕대, 안전한 건물을 먼저 확보한다.", en: "Secure water, food, bandages, and a safe building first." },
      { ko: "좀비와 불필요한 전투를 피하고, 차량·도로·파밍지 위치를 기록한다.", en: "Avoid unnecessary fights and note vehicles, roads, and loot zones." },
      { ko: "디스코드에서 웰컴팩과 뉴비 케어 가능 여부를 확인한다.", en: "Check Discord for welcome pack and newbie-care availability." },
    ],
    galaxyNote: { ko: "복귀 유저도 웰컴팩과 차량 지원을 문의할 수 있다.", en: "Returning players may also ask for welcome pack and vehicle support." },
  },
  {
    id: "base",
    title: { ko: "베이스 후보지 검증", en: "Base location validation" },
    timeframe: { ko: "1일차", en: "Day 1" },
    objectives: [
      { ko: "도로와 파밍지에서 충분히 떨어진 위치만 후보로 둔다.", en: "Only consider sites away from roads and loot zones." },
      { ko: "애매한 파밍지 근처는 어드민 확인 전 건축하지 않는다.", en: "Do not build near ambiguous loot spots before admin confirmation." },
      { ko: "스쿼드 깃발 1개와 최대 7명 제한을 기준으로 설계한다.", en: "Plan around one squad flag and the seven-member limit." },
    ],
    galaxyNote: { ko: "기지 외 건축물은 금지 규칙 대상이다.", en: "Structures outside the base are forbidden by rule." },
  },
  {
    id: "pve-growth",
    title: { ko: "PVE 성장 루틴", en: "PvE growth routine" },
    timeframe: { ko: "2일차 이후", en: "After day 2" },
    objectives: [
      { ko: "차량을 타며 Driving을 올리고, 락픽 루틴으로 Thievery 효율을 살린다.", en: "Raise Driving through travel and convert Thievery into lockpicking efficiency." },
      { ko: "Running, Endurance, Stealth, Survival은 반복 행동으로 보정한다.", en: "Train Running, Endurance, Stealth, and Survival through repeated actions." },
      { ko: "40드라이버 파밍지는 한 턴에 한곳만 사용하고 다음 턴은 양보한다.", en: "Use only one 40-screwdriver zone per turn and yield on the next rotation." },
    ],
    galaxyNote: { ko: "차량은 10일마다 시동과 이동 기록을 남겨 삭제 조건을 피한다.", en: "Start and move vehicles every 10 days to avoid deletion conditions." },
  },
  {
    id: "advanced",
    title: { ko: "고급 파밍과 금지 장비 확인", en: "Advanced looting and banned actions" },
    timeframe: { ko: "장비 확보 후", en: "After gearing" },
    objectives: [
      { ko: "원전, 벙커, 드랍쉽 주변 규칙을 먼저 확인한다.", en: "Review nuclear plant, bunker, and dropship rules first." },
      { ko: "M82 센트리 사냥, 원전 빠루, 벙커 안쪽 브레너 사격을 하지 않는다.", en: "Avoid M82 sentry farming, nuclear crowbar use, and shooting Brenner inside bunkers." },
      { ko: "파밍지 라디오 방치와 지뢰 설치 금지를 체크한다.", en: "Check the radio abandonment and mine placement bans." },
    ],
    galaxyNote: { ko: "갤럭시 PVE는 재산 보호와 파밍 순환을 서버 운영 기준으로 둔다.", en: "Galaxy PvE centers server operation on property protection and fair loot rotation." },
  },
]

export const versionKnowledge: VersionKnowledge = {
  version: "1.3.1.0.125621",
  releaseDate: "2026-06-30",
  checkedAt: "2026-07-05",
  title: {
    ko: "SCUM: INTO THE WILD - June Update",
    en: "SCUM: INTO THE WILD - June Update",
  },
  highlights: [
    {
      id: "wildlife",
      title: { ko: "자유 배회 랜드 동물 복귀", en: "Free-roaming land animals returned" },
      summary: {
        ko: "동물이 별도 사냥 흐름이 아니라 오픈월드 안에서 생물군계, 시간, 거리, 시야, LoD 상태에 따라 존재한다.",
        en: "Wildlife now exists in the open world through biome, time, distance, visibility, and LoD states rather than a separate hunting flow.",
      },
      points: [
        { ko: "산, 숲, 들판 등 생물군계별 동물 분포가 다르다.", en: "Animal populations differ by biome, including mountains, forests, and fields." },
        { ko: "쌍안경과 조준경으로 능선과 숲 가장자리를 확인하는 정찰 가치가 커졌다.", en: "Binoculars and scopes matter more for scouting ridges, treelines, and open ground." },
        { ko: "사체는 포식자를 끌어들일 수 있어 빠른 회수와 이탈 판단이 필요하다.", en: "Carcasses can attract predators, so recovery and disengagement timing matters." },
      ],
      sourceIds: ["source-patchtracker-scum-2026-06-30"],
    },
    {
      id: "quest-fish-cooking",
      title: { ko: "퀘스트, 트로피 물고기, 즉흥 요리", en: "Quest, trophy fish, and improvised cooking" },
      summary: {
        ko: "7월 31일까지 진행되는 1.0 기념 사냥 퀘스트, 벽 장식용 트로피 물고기, 기본 해금 즉흥 요리가 추가됐다.",
        en: "The patch added a 1.0 anniversary hunting quest through July 31, trophy fish wall mounts, and default improvised cooking recipes.",
      },
      points: [
        { ko: "Hunter 상인에게서 기간 한정 퀘스트를 시작할 수 있다.", en: "The limited quest starts at the Hunter trader." },
        { ko: "Carp, Tuna, Catfish, Pike, Dentex 트로피 물고기를 장식으로 제작할 수 있다.", en: "Carp, Tuna, Catfish, Pike, and Dentex trophy fish can become decorations." },
        { ko: "Pasta, Rice, Soup, Stew 계열 즉흥 요리는 요리책 없이 기본 제공된다.", en: "Improvised Pasta, Rice, Soup, and Stew recipes are available without a cookbook." },
      ],
      sourceIds: ["source-patchtracker-scum-2026-06-30"],
    },
    {
      id: "server-controls",
      title: { ko: "서버 설정 변화", en: "Server setting changes" },
      summary: {
        ko: "동물, 낚시 스팟, 방사능, 깃발 소유, 묘비 수량에 대한 커스텀 서버 제어가 추가됐다.",
        en: "Custom server controls were added for animals, fishing spots, radiation, flag ownership, and tombstone limits.",
      },
      points: [
        { ko: "동물 활성화, 전체 밀도, 비가상 동물 최대 수, 종별 표현 배율을 조정할 수 있다.", en: "Admins can control animal enablement, density, non-virtual caps, and species representation multipliers." },
        { ko: "High-Activity Fishing Spots 설정으로 활성 낚시 스팟 비율을 조정한다.", en: "High-Activity Fishing Spots controls the active fishing spot ratio." },
        { ko: "Maximum Flags Per Prisoner와 Tombstones Per Squad 설정이 추가됐다.", en: "Maximum Flags Per Prisoner and Tombstones Per Squad settings were added." },
      ],
      sourceIds: ["source-patchtracker-scum-2026-06-30"],
    },
  ],
}

export const scumKnowledgeSections: KnowledgeSection[] = [
  {
    id: "attributes",
    title: { ko: "능력치 구조", en: "Attribute structure" },
    summary: {
      ko: "SCUM 캐릭터 능력치는 Strength, Constitution, Dexterity, Intelligence 네 범주이며 플레이 중 행동으로 변화한다.",
      en: "SCUM attributes are Strength, Constitution, Dexterity, and Intelligence, and they evolve through play.",
    },
    points: [
      { ko: "Strength는 운반량, 근접 피해, 칼로리 소모와 연결되며 범위는 1~8이다.", en: "Strength affects carry weight, melee damage, and calorie burn, with a 1 to 8 range." },
      { ko: "Constitution은 체력, 스태미나, 저항, 수분·칼로리 효율과 연결되며 범위는 1~5다.", en: "Constitution affects health, stamina, resistance, and water or calorie efficiency, with a 1 to 5 range." },
      { ko: "Dexterity는 이동 속도와 제작·식사·장전 같은 행동 속도에 영향을 주며 범위는 1~5다.", en: "Dexterity affects movement and action speed such as crafting, eating, and reloading, with a 1 to 5 range." },
      { ko: "Intelligence는 스쿼드 규모와 경험치 획득에 영향을 주며 기본 범위는 1~5, 임시 상승은 8까지다.", en: "Intelligence affects squad size and XP gain, with a 1 to 5 base range and temporary increases up to 8." },
    ],
    sourceIds: ["source-scum-fandom-attributes"],
  },
  {
    id: "skill-levels",
    title: { ko: "스킬 레벨", en: "Skill levels" },
    summary: {
      ko: "스킬은 No Skill, Basic, Medium, Advanced, Advanced+의 5단계이며 관련 행동 수행으로 상승한다.",
      en: "Skills have five levels: No Skill, Basic, Medium, Advanced, and Advanced+, and improve through related actions.",
    },
    points: [
      { ko: "No Skill 다음 레벨까지 10,000 XP, Basic은 100,000 XP, Medium은 1,000,000 XP, Advanced는 10,000,000 XP가 필요하다.", en: "No Skill needs 10,000 XP to the next level, Basic 100,000, Medium 1,000,000, and Advanced 10,000,000." },
      { ko: "Strength 계열은 Rifles, Handguns, Archery, Melee Weapons와 연결된다.", en: "Strength governs skills such as Rifles, Handguns, Archery, and Melee Weapons." },
      { ko: "Dexterity 계열의 Thievery, Driving, Stealth는 갤럭시 PVE 초반 효율에 직접적이다.", en: "Dexterity skills such as Thievery, Driving, and Stealth directly affect Galaxy PvE early efficiency." },
      { ko: "Intelligence 계열은 Awareness, Engineering, Survival, Medical 등 장기 생존 작업과 연결된다.", en: "Intelligence covers long-run survival skills such as Awareness, Engineering, Survival, and Medical." },
    ],
    sourceIds: ["source-scum-fandom-skills"],
  },
]

export function pickLocalizedText(text: LocalizedText, locale: LocaleCode): string {
  return text[locale]
}
