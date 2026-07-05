/**
 * 실제 SCUM 게임 정보
 * 공식 게임 데이터 기반
 */

export const scumGameInfo = {
  title: 'SCUM',
  developer: 'Gamepires',
  publisher: 'Devolver Digital',
  platform: 'PC (Steam)',
  genre: '포스트 아포칼립틱 서바이벌',
  releaseDate: '2018-08-29',
  currentVersion: '1.3.1.0.125621',
  updateName: 'INTO THE WILD',

  description: 'SCUM은 하드코어 PvE 서바이벌 게임으로, 플레이어는 post-apocalyptic 세계에서 살아남기 위해 전략과 기술이 필요합니다. 실시간 생리 시뮬레이션, 상세한 캐릭터 커스터마이제이션, 광대한 오픈 월드를 제공합니다.',

  coreMechanics: [
    {
      name: '생존 시스템',
      desc: '배고픔, 목마름, 피로, 건강 게이지 관리',
      importance: '필수'
    },
    {
      name: '신진대사 시스템',
      desc: '칼로리, 단백질, 지방, 탄수화물 관리',
      importance: '필수'
    },
    {
      name: '질병 시스템',
      desc: '감염, 독, 질병 치료 및 예방',
      importance: '중요'
    },
    {
      name: '스킬 시스템',
      desc: '제작, 요리, 사냥, 낚시, 전투 등 17개 스킬',
      importance: '중요'
    },
    {
      name: '기지 건설',
      desc: '토지 소유, 건물 건설, 수비 시스템',
      importance: '중요'
    },
    {
      name: '차량 시스템',
      desc: '차량 입수, 수리, 연료 관리',
      importance: '선택'
    }
  ],

  locations: [
    {
      name: '시작 지역 (비치)',
      type: '뉴비 친화',
      description: '해변 지역으로 초보자용 안전한 파밍 구역',
      resources: ['물', '음식', '목재', '돌'],
      difficulty: '낮음',
      mobs: ['약한 좀비', '동물']
    },
    {
      name: '농장 지역',
      type: '초급 파밍',
      description: '농경지와 시골 건물이 있는 지역',
      resources: ['곡물', '채소', '육류'],
      difficulty: '낮음-중간',
      mobs: ['좀비', '동물']
    },
    {
      name: '도시 지역',
      type: '중급 파밍',
      description: '건물과 자동차, 고급 아이템이 많은 지역',
      resources: ['전자제품', '총기', '탄약', '의약품'],
      difficulty: '중간',
      mobs: ['강한 좀비']
    },
    {
      name: '벙커 (폐쇄된 군사시설)',
      type: '고급 파밍',
      description: '지하 군사시설로 방사능, 높은 난이도',
      resources: ['고급 무기', '탄약', '기술 장비'],
      difficulty: '높음',
      mobs: ['정예 좀비']
    },
    {
      name: '원전 (발전소)',
      type: '엔드게임',
      description: '방사능 구역, 최고 난이도의 파밍 지역',
      resources: ['희귀 기술 부품'],
      difficulty: '매우 높음',
      mobs: ['방사능 좀비']
    }
  ],

  animalTypes: [
    { name: '사슴', type: '초식동물', meat: '많음', rarity: '흔함' },
    { name: '멧돼지', type: '잡식동물', meat: '많음', rarity: '흔함' },
    { name: '토끼', type: '초식동물', meat: '적음', rarity: '많음' },
    { name: '곰', type: '육식동물', meat: '매우많음', rarity: '드묾' },
    { name: '늑대', type: '육식동물', meat: '많음', rarity: '드묾' }
  ],

  weaponTypes: [
    { category: '근접무기', examples: ['대검', '곡괭이', '도끼', '나이프'] },
    { category: '원거리무기', examples: ['활', '석궁', '권총', '소총', '샷건'] },
    { category: '폭발물', examples: ['수류탄', '휴대용 폭탄'] }
  ],

  buildingTypes: [
    { name: '기초(Foundation)', level: 1, materials: '돌, 나무', purpose: '건설 시작' },
    { name: '벽(Wall)', level: 1, materials: '나무, 돌', purpose: '보호' },
    { name: '문(Door)', level: 1, materials: '나무, 철', purpose: '출입' },
    { name: '침대(Bed)', level: 1, materials: '천, 나무', purpose: '저장 및 휴식' },
    { name: '화로(Furnace)', level: 2, materials: '돌, 철', purpose: '제련' },
    { name: '작업대(Workbench)', level: 2, materials: '나무, 철', purpose: '제작' }
  ]
}
