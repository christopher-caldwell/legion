import { slugger } from '@caldwell619/github-slugger'
import { Expansions, UnitType, UpgradeType } from 'store'

import { BaseUnit } from './shared'

export const heavyUnits: BaseUnit[] = [
  {
    title: 'AT-ST',
    points: 155,
    isUnique: false,
    unitType: UnitType.Heavy,
    upgradeSlots: [
      UpgradeType.Pilot,
      UpgradeType.Hardpoint,
      UpgradeType.Hardpoint,
      UpgradeType.Hardpoint,
      UpgradeType.Comms,
    ],
    availableThrough: [slugger(Expansions.AtSt)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'TX-225 GAVw Occupier Combat Assault Tank',
    points: 140,
    isUnique: false,
    unitType: UnitType.Heavy,
    upgradeSlots: [UpgradeType.Pilot, UpgradeType.Hardpoint, UpgradeType.Comms],
    availableThrough: [slugger(Expansions.AssaultTank)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'LAAT/LE Patrol Transport',
    points: 105,
    isUnique: false,
    unitType: UnitType.Heavy,
    upgradeSlots: [UpgradeType.Pilot, UpgradeType.Comms, UpgradeType.Ordnance],
    availableThrough: [slugger(Expansions.LaatPatrol)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
