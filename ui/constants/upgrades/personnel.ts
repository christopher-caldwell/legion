import { slugger } from '@caldwell619/github-slugger'

import { Upgrade, UpgradeType, Expansions, Alignment, Faction } from 'store'

export const personnelUpgrades: Upgrade[] = [
  {
    title: '2-1B Medical Droid',
    type: UpgradeType.Personnel,
    points: 18,
    availableThrough: [slugger(Expansions.RebelSpecialist)],
    restriction: {
      faction: Faction.Rebel,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'B1 Battle Droid',
    type: UpgradeType.Personnel,
    points: 6,
    availableThrough: [slugger(Expansions.CloneWarsCoreSet), slugger(Expansions.B1)],
    restriction: {
      unit: [slugger('B1 Battle Droids')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'B1 Security Droid',
    type: UpgradeType.Personnel,
    points: 9,
    availableThrough: [slugger(Expansions.B1)],
    restriction: {
      unit: [slugger('B1 Battle Droids')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'B2 Super Battle Droid',
    type: UpgradeType.Personnel,
    points: 16,
    availableThrough: [slugger(Expansions.B2)],
    restriction: {
      unit: [slugger('B2 Super Battle Droids')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'EV-series Medical Droid',
    type: UpgradeType.Personnel,
    points: 14,
    availableThrough: [slugger(Expansions.SeparatistSpecialists)],
    restriction: {
      isOnlyForDroids: true,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Fleet Trooper',
    type: UpgradeType.Personnel,
    points: 11,
    availableThrough: [slugger(Expansions.FleetTroopers)],
    restriction: {
      unit: [slugger('Fleet Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'FX-9 Medical Droid',
    type: UpgradeType.Personnel,
    points: 19,
    availableThrough: [slugger(Expansions.ImperialSpecialist)],
    restriction: {
      faction: Faction.Empire,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Imperial Comms Technician',
    type: UpgradeType.Personnel,
    points: 10,
    availableThrough: [slugger(Expansions.ImperialSpecialist)],
    restriction: {
      faction: Faction.Empire,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Imperial Officer',
    type: UpgradeType.Personnel,
    points: 20,
    availableThrough: [slugger(Expansions.ImperialSpecialist)],
    restriction: {
      faction: Faction.Empire,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'OOM-Series Battle Droid',
    type: UpgradeType.Personnel,
    points: 12,
    availableThrough: [slugger(Expansions.B1)],
    restriction: {
      unit: [slugger('B1 Battle Droids')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Phase I Clone Captain',
    type: UpgradeType.Personnel,
    points: 17,
    availableThrough: [slugger(Expansions.Phase1Clones)],
    restriction: {
      unit: [slugger('Phase I Clone Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Phase I Clone Trooper',
    type: UpgradeType.Personnel,
    points: 13,
    availableThrough: [slugger(Expansions.Phase1Clones), slugger(Expansions.CloneWarsCoreSet)],
    restriction: {
      unit: [slugger('Phase I Clone Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Phase I Clone Specialist',
    type: UpgradeType.Personnel,
    points: 17,
    availableThrough: [slugger(Expansions.Phase1Clones)],
    restriction: {
      unit: [slugger('Phase I Clone Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Phase II Clone Trooper',
    type: UpgradeType.Personnel,
    points: 15,
    availableThrough: [slugger(Expansions.Phase2Clones)],
    restriction: {
      unit: [slugger('Phase II Clone Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'PK-series Worker Droid',
    type: UpgradeType.Personnel,
    points: 12,
    availableThrough: [slugger(Expansions.SeparatistSpecialists)],
    restriction: {
      isOnlyForDroids: true,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
