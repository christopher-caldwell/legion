import { slugger } from '@caldwell619/github-slugger'

import { Expansions, UnitType, UpgradeType } from 'store'
import { BaseUnit } from './shared'

export const corpsUnits: BaseUnit[] = [
  {
    title: 'Stormtroopers',
    points: 44,
    isUnique: false,
    unitType: UnitType.Corps,
    upgradeSlots: [UpgradeType.HeavyWeapons, UpgradeType.Personnel, UpgradeType.Gear, UpgradeType.Grenades],
    availableThrough: [slugger(Expansions.Stormtrooper), slugger(Expansions.CoreSet)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Snowtroopers',
    points: 44,
    isUnique: false,
    unitType: UnitType.Corps,
    upgradeSlots: [UpgradeType.HeavyWeapons, UpgradeType.Personnel, UpgradeType.Gear, UpgradeType.Grenades],
    availableThrough: [slugger(Expansions.Snowtrooper)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Shoretroopers',
    points: 52,
    isUnique: false,
    unitType: UnitType.Corps,
    upgradeSlots: [
      UpgradeType.HeavyWeapons,
      UpgradeType.Personnel,
      UpgradeType.Training,
      UpgradeType.Gear,
      UpgradeType.Grenades,
    ],
    availableThrough: [slugger(Expansions.Shoretrooper)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'DF-90 Mortar Trooper',
    points: 36,
    isUnique: false,
    unitType: UnitType.Corps,
    upgradeSlots: [UpgradeType.Comms],
    availableThrough: [slugger(Expansions.Shoretrooper)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
