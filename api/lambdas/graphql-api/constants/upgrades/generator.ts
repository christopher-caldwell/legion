import { slugger } from '@caldwell619/github-slugger'

import { Upgrade, UpgradeType, Expansions, Alignment } from 'store'

export const generatorUpgrades: Upgrade[] = [
  {
    title: 'Barrage Generator',
    type: UpgradeType.Generator,
    points: 10,
    availableThrough: [
      slugger(Expansions.Eweb),
      slugger(Expansions.LaserCanon),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Overcharged Generator',
    type: UpgradeType.Generator,
    points: 10,
    availableThrough: [
      slugger(Expansions.Eweb),
      slugger(Expansions.LaserCanon),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
