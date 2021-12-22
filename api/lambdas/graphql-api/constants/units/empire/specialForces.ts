import { slugger } from '@caldwell619/github-slugger'

import { Expansions, UnitType, UpgradeType, Faction } from 'store'
import { BaseUnit } from './shared'

export const specialForcesUnits: BaseUnit[] = [
  {
    title: 'Scout Troopers',
    points: 48,
    isUnique: false,
    unitType: UnitType.SpecialForces,
    availableThrough: [slugger(Expansions.ScoutTrooper)],
    upgradeSlots: [
      UpgradeType.HeavyWeapons,
      UpgradeType.Training,
      UpgradeType.Comms,
      UpgradeType.Gear,
      UpgradeType.Grenades,
    ],
    faction: Faction.Empire,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Royal Guards',
    points: 69,
    isUnique: false,
    unitType: UnitType.SpecialForces,
    availableThrough: [slugger(Expansions.RoyalGuards)],
    faction: Faction.Empire,
    upgradeSlots: [
      UpgradeType.HeavyWeapons,
      UpgradeType.Training,
      UpgradeType.Training,
      UpgradeType.Gear,
      UpgradeType.Grenades,
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Scout Troopers',
    subtitle: 'Strike Team',
    points: 20,
    isUnique: false,
    unitType: UnitType.SpecialForces,
    availableThrough: [slugger(Expansions.ScoutTrooper)],
    faction: Faction.Empire,
    upgradeSlots: [
      UpgradeType.HeavyWeapons,
      UpgradeType.Training,
      UpgradeType.Comms,
      UpgradeType.Gear,
      UpgradeType.Grenades,
    ],
    get imageSlug() {
      return slugger(this.title + '-' + this.subtitle)
    },
  },
  {
    title: 'Death Troopers',
    points: 72,
    isUnique: false,
    unitType: UnitType.SpecialForces,
    availableThrough: [slugger(Expansions.DeathTroopers)],
    faction: Faction.Empire,
    upgradeSlots: [
      UpgradeType.HeavyWeapons,
      UpgradeType.Training,
      UpgradeType.Comms,
      UpgradeType.Gear,
      UpgradeType.Armament,
      UpgradeType.Grenades,
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Special Forces',
    points: 68,
    isUnique: false,
    unitType: UnitType.SpecialForces,
    availableThrough: [slugger(Expansions.ImperialSpecialForces)],
    faction: Faction.Empire,
    upgradeSlots: [
      UpgradeType.HeavyWeapons,
      UpgradeType.Training,
      UpgradeType.Training,
      UpgradeType.Comms,
      UpgradeType.Gear,
      UpgradeType.Grenades,
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Special Forces',
    subtitle: 'Inferno Squad',
    points: 34,
    isUnique: false,
    unitType: UnitType.SpecialForces,
    availableThrough: [slugger(Expansions.ImperialSpecialForces)],
    faction: Faction.Empire,
    upgradeSlots: [
      UpgradeType.HeavyWeapons,
      UpgradeType.HeavyWeapons,
      UpgradeType.Training,
      UpgradeType.Training,
      UpgradeType.Comms,
      UpgradeType.Gear,
      UpgradeType.Grenades,
    ],
    get imageSlug() {
      return slugger(this.title + '-' + this.subtitle)
    },
  },
]
