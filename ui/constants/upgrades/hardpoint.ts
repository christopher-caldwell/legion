import { slugger } from '@caldwell619/github-slugger'

import { Upgrade, UpgradeType, Expansions, Alignment } from 'store'

export const hardpointUpgrades: Upgrade[] = [
  {
    title: '88 Twin Light Blaster Cannon',
    type: UpgradeType.Hardpoint,
    points: 20,
    availableThrough: [slugger(Expansions.AtSt)],
    restriction: {
      unit: [slugger('AT-ST')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'AT-RT Flamethrower',
    type: UpgradeType.Hardpoint,
    points: 25,
    availableThrough: [slugger(Expansions.CoreSet), slugger(Expansions.AtRt)],
    restriction: {
      unit: [slugger('AT-RT')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'AT-RT Laser Cannon',
    type: UpgradeType.Hardpoint,
    points: 35,
    availableThrough: [slugger(Expansions.CoreSet), slugger(Expansions.AtRt)],
    restriction: {
      unit: [slugger('AT-RT')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'AT-RT Rotary Blaster',
    type: UpgradeType.Hardpoint,
    points: 30,
    availableThrough: [slugger(Expansions.CoreSet), slugger(Expansions.AtRt)],
    restriction: {
      unit: [slugger('AT-RT')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'AT-ST Mortar Launcher',
    type: UpgradeType.Hardpoint,
    points: 10,
    availableThrough: [slugger(Expansions.AtSt)],
    restriction: {
      unit: [slugger('AT-ST')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Ax-108 “Ground Buzzer”',
    type: UpgradeType.Hardpoint,
    points: 20,
    availableThrough: [slugger(Expansions.Airspeeder)],
    restriction: {
      unit: [slugger('T-47 Airspeeder')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'DLT-19 Rifle Pintle',
    type: UpgradeType.Hardpoint,
    points: 18,
    availableThrough: [slugger(Expansions.AssaultTank)],
    restriction: {
      unit: [slugger('TX-225 GAVw Occupier Combat Assault Tank')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'DW-3 Concussion Grenade Launcher',
    type: UpgradeType.Hardpoint,
    points: 15,
    availableThrough: [slugger(Expansions.AtSt)],
    restriction: {
      unit: [slugger('AT-ST')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'M-45 Ion Blaster',
    type: UpgradeType.Hardpoint,
    points: 30,
    availableThrough: [slugger(Expansions.Landspeeder)],
    restriction: {
      unit: [slugger('X-34 Landspeeder')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Mark II Medium Blaster',
    type: UpgradeType.Hardpoint,
    points: 34,
    availableThrough: [slugger(Expansions.Landspeeder)],
    restriction: {
      unit: [slugger('X-34 Landspeeder')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Mo/DK Power Harpoon',
    type: UpgradeType.Hardpoint,
    points: 8,
    availableThrough: [slugger(Expansions.Airspeeder)],
    restriction: {
      unit: [slugger('T-47 Airspeeder')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'RT-97C Rifle Pintle',
    type: UpgradeType.Hardpoint,
    points: 14,
    availableThrough: [slugger(Expansions.AssaultTank)],
    restriction: {
      unit: [slugger('TX-225 GAVw Occupier Combat Assault Tank')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'TX-130 Beam Cannon Turret',
    type: UpgradeType.Hardpoint,
    points: 30,
    availableThrough: [slugger(Expansions.SaberTank)],
    restriction: {
      unit: [slugger('TX-130 Saber-class Fighter Tank')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'TX-130 Twin Laser Turret',
    type: UpgradeType.Hardpoint,
    points: 14,
    availableThrough: [slugger(Expansions.SaberTank)],
    restriction: {
      unit: [slugger('TX-130 Saber-class Fighter Tank')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
