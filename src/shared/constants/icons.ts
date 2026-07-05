import type { ForwardRefExoticComponent, SVGProps } from "react"
import {
  AlertTriangle,
  BadgeHelp,
  BadgeInfo,
  BookOpen,
  Boxes,
  CalendarDays,
  Car,
  ClipboardCheck,
  Crosshair,
  Dumbbell,
  Factory,
  FileQuestion,
  Fish,
  HeartPulse,
  Home,
  Map,
  MapPin,
  MessageSquare,
  Package,
  Pickaxe,
  RadioTower,
  Search,
  Settings,
  Shield,
  ShieldAlert,
  ShoppingCart,
  Swords,
  Tag,
  Tent,
  Trophy,
  Utensils,
  Wrench,
  Zap,
} from "lucide-react"
import type { ScumContentCategory } from "@/shared/types"

export type LucideIconComponent = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "ref"> & {
    size?: string | number
    absoluteStrokeWidth?: boolean
  }
>

export const CATEGORY_ICONS: Record<ScumContentCategory, LucideIconComponent> = {
  beginnerGuide: BookOpen,
  character: Dumbbell,
  skill: Crosshair,
  metabolism: HeartPulse,
  health: HeartPulse,
  injury: ShieldAlert,
  looting: Package,
  crafting: Wrench,
  weapon: Crosshair,
  combat: Swords,
  hunting: Crosshair,
  fishing: Fish,
  cooking: Utensils,
  farming: Pickaxe,
  baseBuilding: Tent,
  vehicle: Car,
  trader: ShoppingCart,
  fame: Trophy,
  location: MapPin,
  bunker: Factory,
  radiation: RadioTower,
  contamination: AlertTriangle,
  enemy: ShieldAlert,
  quest: ClipboardCheck,
  cargoDrop: Boxes,
  serverSetting: Settings,
  galaxyServer: Shield,
  patchNotes: CalendarDays,
  galaxyDiscordShop: ShoppingCart,
  galaxyAdminContact: MessageSquare,
  galaxyRulesEnforcement: ShieldAlert,
  beginnerRoute: Map,
  gearPreset: Package,
  beginnerChecklist: ClipboardCheck,
  dangerMap: AlertTriangle,
  galaxyEvent: CalendarDays,
  faq: FileQuestion,
}

export const GENERAL_ICONS = {
  home: Home,
  search: Search,
  info: BadgeInfo,
  help: BadgeHelp,
  tag: Tag,
  discord: MessageSquare,
  event: CalendarDays,
  experience: Zap,
  rules: ShieldAlert,
} as const

export function getCategoryIcon(category: ScumContentCategory): LucideIconComponent {
  return CATEGORY_ICONS[category]
}
