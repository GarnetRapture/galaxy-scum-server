/**
 * 갤럭시 서버 정보 API
 * src/domains/galaxy-server/profile/galaxy-server-profile.data.ts의 데이터를 반환
 */

import { galaxyServerProfile } from "@/domains/galaxy-server/profile/galaxy-server-profile.data"
import type { GalaxyServerProfile } from "@/domains/galaxy-server/profile/types"

export async function getGalaxyServerProfile(): Promise<GalaxyServerProfile> {
  return galaxyServerProfile
}
