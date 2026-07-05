/**
 * 갤럭시 서버 히어로 섹션
 */

export function ServerHero() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-2">갤럭시 서버</h1>
        <p className="text-xl text-blue-100 mb-4">SCUM PVE 한글 서버 · Since 2021</p>
        <p className="text-lg text-blue-50 mb-6">
          고인물과 뉴비가 함께하는 가족 같은 커뮤니티 서버
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-blue-700 rounded-full text-sm font-medium">
            PVE 전용
          </span>
          <span className="px-4 py-2 bg-blue-700 rounded-full text-sm font-medium">
            웰컴팩 지원
          </span>
          <span className="px-4 py-2 bg-blue-700 rounded-full text-sm font-medium">
            뉴비 가이드
          </span>
          <span className="px-4 py-2 bg-blue-700 rounded-full text-sm font-medium">
            주말 이벤트
          </span>
          <span className="px-4 py-2 bg-orange-500 rounded-full text-sm font-medium">
            경험치 이벤트 진행 중
          </span>
        </div>
      </div>
    </div>
  )
}
