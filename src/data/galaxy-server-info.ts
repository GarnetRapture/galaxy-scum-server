/**
 * 갤럭시 서버 정보 - 실제 데이터
 */

export const galaxyServerInfo = {
  serverName: '갤럭시 서버',
  searchKeyword: 'KOR_PVE',
  fullName: '[KOR_PVE] SCUM 갤럭시 Since2021',

  basicInfo: {
    startYear: 2021,
    playStyle: 'PVE (Player vs Environment)',
    region: '한국',
    language: '한국어',
    playerLevel: '고인물 + 뉴비 혼합',
    community: '친화적, 협력 중심'
  },

  features: {
    welcomePack: {
      enabled: true,
      description: '모든 신규 유저에게 시작 아이템 제공',
      items: ['기본 도구', '기본 음식과 물', '의약품', '건설 재료'],
      rewardLevel: '초기 생존에 충분한 수준'
    },

    vehicleRental: {
      enabled: true,
      description: '관리자가 무료로 차량 제공',
      process: '디스코드에서 관리자 블락에게 신청',
      availability: '무제한',
      rentalPolicy: '새 차량 구매 시에만 반납'
    },

    newbieCare: {
      enabled: true,
      description: '관리자 블락의 직접 가이드',
      duration: '약 15분',
      content: ['게임 기본 설명', '생존 팁', '서버 규칙', '커뮤니티 안내'],
      process: '디스코드에서 신청'
    },

    experienceEvent: {
      status: '진행 중',
      multiplier: '1.5x-2x',
      benefit: '모든 활동의 경험치 증가',
      duration: '월별 변동'
    },

    weekendEvent: {
      schedule: '토요일, 일요일',
      type: '특별 파밍 이벤트',
      reward: '경험치 2배, 드롭율 증가',
      announcement: '디스코드 #이벤트 채널'
    }
  },

  adminInfo: {
    adminName: '블락',
    role: '서버 관리자',
    responsibilities: [
      '뉴비 케어 제공',
      '차량 렌트 관리',
      '서버 규칙 집행',
      '이벤트 운영',
      '커뮤니티 중재'
    ],
    contactMethod: '디스코드 DM 또는 멘션'
  },

  discordChannels: [
    { name: '공지사항', purpose: '서버 공식 안내' },
    { name: '뉴비질문', purpose: '신규 유저 질문' },
    { name: '이벤트', purpose: '주간/월간 이벤트 안내' },
    { name: '일반채팅', purpose: '자유로운 대화' },
    { name: '게임팁', purpose: '게임 정보 공유' }
  ],

  serverRules: [
    {
      category: 'PVE 규칙',
      rules: [
        '플레이어 간 전투 금지',
        '타 플레이어 기지 파괴 금지',
        '타 플레이어 자원 무단 수집 금지'
      ]
    },
    {
      category: '커뮤니티 규칙',
      rules: [
        '존중하는 태도 유지',
        '혐오 발언 금지',
        '스팸 금지',
        '한국어 사용 권장'
      ]
    },
    {
      category: '관리자 지시',
      rules: [
        '관리자 지시에 따를 것',
        '부정 행위 엄격 처벌',
        '계정 공유 금지'
      ]
    }
  ],

  farmingAreas: [
    {
      level: '뉴비',
      locations: ['비치', '시작 지역'],
      description: '초보자 친화적, 안전한 파밍 구역',
      rewards: ['기본 자원', '음식'],
      difficulty: '낮음',
      recommendation: '신규 유저 필수 방문'
    },
    {
      level: '초급',
      locations: ['농장', '시골 마을'],
      description: '초급 플레이어용 균형잡힌 구역',
      rewards: ['나무', '돌', '곡물'],
      difficulty: '낮음-중간',
      recommendation: '1-3일차 플레이어'
    },
    {
      level: '중급',
      locations: ['도시', '마을'],
      description: '고급 아이템과 위험이 공존',
      rewards: ['전자제품', '총기', '탄약'],
      difficulty: '중간',
      recommendation: '1주일 이상 플레이한 유저'
    },
    {
      level: '고급',
      locations: ['벙커', '드라이버'],
      description: '강력한 적과 희귀 아이템',
      rewards: ['고급 무기', '기술 부품'],
      difficulty: '높음',
      recommendation: '10일 이상 경험자'
    },
    {
      level: '엔드게임',
      locations: ['원전', '폐쇄 시설'],
      description: '최고 난이도, 팀플레이 권장',
      rewards: ['최고급 기술 아이템'],
      difficulty: '매우 높음',
      recommendation: '30일 이상 경험자'
    }
  ],

  joinProcess: [
    {
      step: 1,
      title: 'Steam에서 SCUM 구매',
      description: 'Steam 라이브러리에서 SCUM을 검색하고 구매'
    },
    {
      step: 2,
      title: '갤럭시 서버 찾기',
      description: '게임 서버 목록에서 "KOR_PVE" 또는 "갤럭시" 검색'
    },
    {
      step: 3,
      title: '캐릭터 생성',
      description: '게임에 스폰, 외형 커스터마이징, 스폰 위치 선택'
    },
    {
      step: 4,
      title: '웰컴팩 수령',
      description: '게임 메뉴에서 Welcome Pack 클레임'
    },
    {
      step: 5,
      title: '디스코드 가입',
      description: '갤럭시 서버 공식 디스코드 가입 및 자기소개'
    },
    {
      step: 6,
      title: '뉴비 케어 신청 (선택)',
      description: '관리자 블락에게 DM으로 15분 가이드 신청'
    }
  ],

  statistics: {
    foundedYear: 2021,
    onlinePlayers: '20-50명 (시간대별 변동)',
    totalMembers: '150+ (누적)',
    averagePlayTime: '일 평균 4-6시간',
    communityType: '친화적이고 협력적'
  }
}
