import { slugger } from '@caldwell619/github-slugger'
import { UnitType, Expansions, UpgradeType } from 'store'

import { BaseUnit } from './shared'

export const commandersUnits: BaseUnit[] = [
  {
    title: 'Darth Vader',
    subtitle: 'Dark Lord of the Sith',
    points: 190,
    isUnique: true,
    availableThrough: [slugger(Expansions.CoreSet)],
    unitType: UnitType.Commander,
    upgradeSlots: [UpgradeType.Force, UpgradeType.Force, UpgradeType.Force, UpgradeType.Command],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'General Veers',
    subtitle: 'Master Tactician',
    points: 75,
    isUnique: true,
    availableThrough: [slugger(Expansions.GeneralVeers)],
    unitType: UnitType.Commander,
    upgradeSlots: [UpgradeType.Command, UpgradeType.Command, UpgradeType.Gear],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Emperor Palpatine',
    subtitle: 'Ruler of the Galactic Empire',
    points: 190,
    isUnique: true,
    availableThrough: [slugger(Expansions.Palpatine)],
    unitType: UnitType.Commander,
    upgradeSlots: [UpgradeType.Force, UpgradeType.Force, UpgradeType.Force, UpgradeType.Command],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Imperial Officer',
    subtitle: 'Ruthless Commander',
    points: 45,
    isUnique: false,
    unitType: UnitType.Commander,
    availableThrough: [slugger(Expansions.ImperialSpecialist)],
    upgradeSlots: [UpgradeType.Command, UpgradeType.Gear],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Director Krennic',
    subtitle: 'Architect of Terror',
    points: 75,
    isUnique: true,
    unitType: UnitType.Commander,
    upgradeSlots: [UpgradeType.Command, UpgradeType.Command, UpgradeType.Gear],
    availableThrough: [slugger(Expansions.Krennic)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Iden Versio',
    subtitle: 'Inferno Squad Leader',
    points: 100,
    isUnique: true,
    unitType: UnitType.Commander,
    upgradeSlots: [
      UpgradeType.Training,
      UpgradeType.Training,
      UpgradeType.Gear,
      UpgradeType.Armament,
      UpgradeType.Counterpart,
    ],
    availableThrough: [slugger(Expansions.Iden)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Agent Kallus',
    subtitle: 'Hunter of Spectres',
    points: 90,
    isUnique: true,
    unitType: UnitType.Commander,
    upgradeSlots: [UpgradeType.Armament, UpgradeType.Command, UpgradeType.Gear, UpgradeType.Training],
    availableThrough: [slugger(Expansions.Kallus)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
