import { slugger } from '@caldwell619/github-slugger'

import { Upgrade, UpgradeType, Expansions, Alignment } from 'store'

export const ordnanceUpgrades: Upgrade[] = [
  {
    title: '"Bunker Buster" Shells',
    type: UpgradeType.Ordnance,
    points: 12,
    availableThrough: [slugger(Expansions.SpeederTruck)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Armor-Piercing Shells',
    type: UpgradeType.Ordnance,
    points: 10,
    availableThrough: [slugger(Expansions.SaberTank)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'High-Energy Shells',
    type: UpgradeType.Ordnance,
    points: 8,
    availableThrough: [slugger(Expansions.AAT), slugger(Expansions.SaberTank)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
