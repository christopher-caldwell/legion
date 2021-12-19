import { Expansions, UnitType, UpgradeType } from 'store'

export interface BaseUnit {
  title: string
  subtitle?: string
  points: number
  isUnique: boolean
  unitType: UnitType
  imageSlug: string
  /** Slugged name of the expansion pack(s) this card comes in */
  availableThrough?: string[]
  upgradeSlots: UpgradeType[]
}
