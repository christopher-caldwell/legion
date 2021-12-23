import { slugger } from '@caldwell619/github-slugger'

import { Upgrade, UpgradeType, Expansions } from 'store'

export const crewUpgrades: Upgrade[] = [
  {
    title: 'A-300 Rifle Gunner',
    type: UpgradeType.Crew,
    points: 9,
    availableThrough: [slugger(Expansions.Landspeeder)],
    restriction: {
      unit: [slugger('X-34 Landspeeder')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'BARC Ion Gunner',
    type: UpgradeType.Crew,
    points: 28,
    availableThrough: [slugger(Expansions.BARC), slugger(Expansions.CloneWarsCoreSet)],
    restriction: {
      unit: [slugger('BARC Speeder')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'BARC RPS-6 Gunner',
    type: UpgradeType.Crew,
    points: 24,
    availableThrough: [slugger(Expansions.BARC), slugger(Expansions.CloneWarsCoreSet)],
    restriction: {
      unit: [slugger('BARC Speeder')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'BARC Twin Laser Gunner',
    type: UpgradeType.Crew,
    points: 18,
    availableThrough: [slugger(Expansions.BARC), slugger(Expansions.CloneWarsCoreSet)],
    restriction: {
      unit: [slugger('BARC Speeder')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'RPS-6 Rocket Gunner',
    type: UpgradeType.Crew,
    points: 36,
    availableThrough: [slugger(Expansions.Landspeeder)],
    restriction: {
      unit: [slugger('X-34 Landspeeder')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
