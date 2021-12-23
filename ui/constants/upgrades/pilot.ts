import { slugger } from '@caldwell619/github-slugger'

import { Upgrade, UpgradeType, Expansions, Alignment, VehicleType, Faction } from 'store'

export const pilotUpgrades: Upgrade[] = [
  {
    title: 'Aayla Secura',
    type: UpgradeType.Pilot,
    points: 5,
    isUnique: true,
    availableThrough: [slugger(Expansions.SaberTank)],
    restriction: {
      unit: [slugger('TX-130 Saber-class Fighter Tank')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'First Sergeant Arbmab',
    type: UpgradeType.Pilot,
    points: 5,
    isUnique: true,
    availableThrough: [slugger(Expansions.AssaultTank)],
    restriction: {
      faction: Faction.Empire,
      vehicleType: VehicleType.Ground,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'General Weiss',
    type: UpgradeType.Pilot,
    points: 10,
    isUnique: true,
    availableThrough: [slugger(Expansions.AtSt)],
    restriction: {
      faction: Faction.Empire,
      vehicleType: VehicleType.Ground,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Imperial Hammers Elite Armor Pilot',
    type: UpgradeType.Pilot,
    points: 10,
    availableThrough: [slugger(Expansions.AssaultTank)],
    restriction: {
      faction: Faction.Empire,
      vehicleType: VehicleType.Ground,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Lok Durd',
    type: UpgradeType.Pilot,
    points: 9,
    isUnique: true,
    availableThrough: [slugger(Expansions.AAT)],
    restriction: {
      unit: [slugger('AAT Trade Federation Battle Tank')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'OOM-Series Droid Pilot',
    type: UpgradeType.Pilot,
    points: 7,
    availableThrough: [slugger(Expansions.AAT)],
    restriction: {
      unit: [slugger('AAT Trade Federation Battle Tank')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Outer Rim Speeder Jockey',
    type: UpgradeType.Pilot,
    points: 10,
    availableThrough: [slugger(Expansions.Landspeeder)],
    restriction: {
      faction: Faction.Rebel,
      vehicleType: VehicleType.Repulsor,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Plo Koon',
    type: UpgradeType.Pilot,
    points: 9,
    isUnique: true,
    availableThrough: [slugger(Expansions.SaberTank)],
    restriction: {
      unit: [slugger('TX-130 Saber-class Fighter Tank')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Ryder Azadi',
    type: UpgradeType.Pilot,
    points: 5,
    isUnique: true,
    availableThrough: [slugger(Expansions.Landspeeder)],
    restriction: {
      faction: Faction.Rebel,
      vehicleType: VehicleType.Repulsor,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'T-Series Tactical Droid Pilot',
    type: UpgradeType.Pilot,
    points: 5,
    availableThrough: [slugger(Expansions.AAT)],
    restriction: {
      unit: [slugger('AAT Trade Federation Battle Tank')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Veteran Clone Pilot',
    type: UpgradeType.Pilot,
    points: 7,
    availableThrough: [slugger(Expansions.SaberTank)],
    restriction: {
      unit: [slugger('TX-130 Saber-class Fighter Tank')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Wedge Antilles',
    type: UpgradeType.Pilot,
    points: 5,
    isUnique: true,
    availableThrough: [slugger(Expansions.Airspeeder)],
    restriction: {
      faction: Faction.Rebel,
      vehicleType: VehicleType.Repulsor,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
