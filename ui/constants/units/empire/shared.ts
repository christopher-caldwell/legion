import { Alignment, Expansions, Faction, UnitType, UpgradeType, VehicleType } from 'store'

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
  faction: Faction
  alignment?: Alignment
  vehicleType?: VehicleType
  isDroid?: boolean
  isEmplacement?: boolean
}
