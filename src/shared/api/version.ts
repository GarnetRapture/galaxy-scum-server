/**
 * SCUM 버전 정보 API
 * src/data/current-version.data.ts의 데이터를 반환하는 레이어
 */

import { currentVersion } from "@/data/current-version.data"
import type { GameVersion } from "@/domains/scum/version/types"

export async function getCurrentVersion(): Promise<GameVersion> {
  return currentVersion
}
