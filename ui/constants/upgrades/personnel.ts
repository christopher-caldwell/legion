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
  {
    title: 'R4 Astromech Droid',
    type: UpgradeType.Personnel,
    points: 9,
    availableThrough: [slugger(Expansions.ImperialSpecialist)],
    restriction: {
      faction: Faction.Empire,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'R5 Astromech Droid',
    type: UpgradeType.Personnel,
    points: 8,
    availableThrough: [slugger(Expansions.RebelSpecialist)],
    restriction: {
      faction: Faction.Rebel,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Rebel Comms Technician',
    type: UpgradeType.Personnel,
    points: 9,
    availableThrough: [slugger(Expansions.RebelSpecialist)],
    restriction: {
      faction: Faction.Rebel,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Rebel Officer',
    type: UpgradeType.Personnel,
    points: 19,
    availableThrough: [slugger(Expansions.RebelSpecialist)],
    restriction: {
      faction: Faction.Rebel,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Rebel Trooper',
    type: UpgradeType.Personnel,
    points: 10,
    availableThrough: [slugger(Expansions.RebelTroopers), slugger(Expansions.CoreSet)],
    restriction: {
      unit: [slugger('Rebel Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Rebel Trooper Captain',
    type: UpgradeType.Personnel,
    points: 14,
    availableThrough: [slugger(Expansions.RebelTroopers)],
    restriction: {
      unit: [slugger('Rebel Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Rebel Trooper Specialist',
    type: UpgradeType.Personnel,
    points: 14,
    availableThrough: [slugger(Expansions.RebelTroopers)],
    restriction: {
      unit: [slugger('Rebel Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Rebel Veteran',
    type: UpgradeType.Personnel,
    points: 12,
    availableThrough: [slugger(Expansions.RebelVeterans)],
    restriction: {
      unit: [slugger('Rebel Veterans')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Shoretrooper',
    type: UpgradeType.Personnel,
    points: 13,
    availableThrough: [slugger(Expansions.Shoretrooper)],
    restriction: {
      unit: [slugger('Shoretroopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Snowtrooper',
    type: UpgradeType.Personnel,
    points: 12,
    availableThrough: [slugger(Expansions.Snowtrooper)],
    restriction: {
      unit: [slugger('Snowtroopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Stormtrooper',
    type: UpgradeType.Personnel,
    points: 11,
    availableThrough: [slugger(Expansions.Stormtrooper), slugger(Expansions.CoreSet)],
    restriction: {
      unit: [slugger('Stormtrooper')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Stormtrooper Captain',
    type: UpgradeType.Personnel,
    points: 15,
    availableThrough: [slugger(Expansions.Stormtrooper)],
    restriction: {
      unit: [slugger('Stormtrooper')],
    },
    //TODO: Slot modifier, gain training slot
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Stormtrooper Specialist',
    type: UpgradeType.Personnel,
    points: 15,
    availableThrough: [slugger(Expansions.Stormtrooper)],
    restriction: {
      unit: [slugger('Stormtrooper')],
    },
    //TODO: Slot modifier, gain training slot
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'T-Series Tactical Droid',
    type: UpgradeType.Personnel,
    points: 18,
    availableThrough: [slugger(Expansions.SeparatistSpecialists)],
    restriction: {
      isOnlyForDroids: true,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Viper Recon Droid',
    type: UpgradeType.Personnel,
    points: 8,
    availableThrough: [slugger(Expansions.SeparatistSpecialists)],
    restriction: {
      isOnlyForDroids: true,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
