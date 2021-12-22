import { BaseUnit } from 'constants/units/empire/shared'

export enum UnitType {
  Commander = 'commander',
  Operative = 'operative',
  Corps = 'corps',
  SpecialForces = 'special-forces',
  Support = 'support',
  Heavy = 'heavy',
}

export enum UpgradeType {
  Armament = 'armament',
  Command = 'command',
  Comms = 'comms',
  Crew = 'crew',
  Counterpart = 'counterpart',
  Force = 'force',
  Gear = 'gear',
  Generator = 'generator',
  Grenades = 'grenades',
  Hardpoint = 'hardpoint',
  HeavyWeapons = 'heavy-weapons',
  Ordnance = 'ordnance',
  Personnel = 'personnel',
  Pilot = 'pilot',
  Training = 'training',
}

export enum Alignment {
  Dark = 'dark',
  Light = 'light',
}

export enum Faction {
  Empire = 'empire',
  Rebel = 'rebel',
  Cis = 'cis',
  Gar = 'gar',
}
export enum VehicleType {
  Repulsor = 'repulsor',
  Ground = 'ground',
}
export interface UpgradeRestriction {
  alignment?: Alignment
  faction?: Faction
  isOnlyForVehicles?: boolean
  isOnlyForNonEmplacement?: boolean
  isOnlyForDroids?: boolean
  vehicleType?: VehicleType
  /** Slugged name of vehicle unit this upgrade can be applied to */
  vehicle?: string
  /** Slugged name(s) of unit this upgrade can be applied to */
  unit?: string[]
}

/** Some cards influence the unit they are being added to.
 * TODO: slot? Yikes..
 */
// interface PointsModifier {
//   modification: number
// }

export interface Upgrade {
  type: UpgradeType
  title: string
  points: number
  restriction?: UpgradeRestriction
  /** Slugged name of the expansion pack(s) this card comes in */
  availableThrough?: string[]
  imageSlug: string
  /** Some cards influence the unit they are attached to.
   * If unit is present, this means this modification only applies to the unit provided
   */
  pointsModifiers?: {
    unit?: string
    points: number
  }
  isUnique?: true
}

export interface ListUpgrade extends Upgrade {
  id: string
  slotIndex: number
}

export interface ListUnitActiveUpgrade {
  id: string
  upgrade: UpgradeType
  slotIndex: number
}

export interface Unit extends BaseUnit {
  upgrades: Upgrade[]
}

export interface ListUnit extends Unit {
  id: string
  updatedAt: Date
}
