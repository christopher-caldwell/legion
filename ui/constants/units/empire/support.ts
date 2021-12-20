import { slugger } from '@caldwell619/github-slugger'

import { Expansions, UnitType, UpgradeType, Faction } from 'store'
import { BaseUnit } from './shared'

export const supportUnits: BaseUnit[] = [
  {
    title: '74-Z Speeder Bikes',
    points: 70,
    isUnique: false,
    unitType: UnitType.Support,
    availableThrough: [slugger(Expansions.ImperialSpeeder)],
    upgradeSlots: [UpgradeType.Comms],
    faction: Faction.Empire,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'E-Web Heavy Blaster Team',
    points: 55,
    isUnique: false,
    unitType: UnitType.Support,
    availableThrough: [slugger(Expansions.Eweb)],
    upgradeSlots: [UpgradeType.Comms, UpgradeType.Generator],
    faction: Faction.Empire,
    isEmplacement: true,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Dewback Rider',
    points: 70,
    isUnique: false,
    unitType: UnitType.Support,
    availableThrough: [slugger(Expansions.Dewback)],
    upgradeSlots: [UpgradeType.Training, UpgradeType.Comms, UpgradeType.Armament],
    faction: Faction.Empire,
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
