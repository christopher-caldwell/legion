import { slugger } from '@caldwell619/github-slugger'

import { Expansions, UnitType, UpgradeType, Faction, Alignment } from 'store'
import { BaseUnit } from './shared'

export const operativesUnits: BaseUnit[] = [
  {
    title: 'Boba Fett',
    subtitle: 'Infamous Bounty Hunter',
    points: 120,
    isUnique: true,
    unitType: UnitType.Operative,
    faction: Faction.Empire,
    upgradeSlots: [UpgradeType.Training, UpgradeType.Training, UpgradeType.Gear, UpgradeType.Gear],
    availableThrough: [slugger(Expansions.Boba)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Bossk',
    subtitle: 'Trandoshan Terror',
    points: 115,
    isUnique: true,
    unitType: UnitType.Operative,
    faction: Faction.Empire,
    upgradeSlots: [UpgradeType.Training, UpgradeType.Training, UpgradeType.Gear],
    availableThrough: [slugger(Expansions.Bossk)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Darth Vader',
    subtitle: "The Emperor's Apprentice",
    points: 175,
    isUnique: true,
    unitType: UnitType.Operative,
    faction: Faction.Empire,
    alignment: Alignment.Dark,
    upgradeSlots: [UpgradeType.Force, UpgradeType.Force, UpgradeType.Training, UpgradeType.Training],
    availableThrough: [slugger(Expansions.Vader)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
