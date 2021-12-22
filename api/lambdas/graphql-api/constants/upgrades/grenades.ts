import { slugger } from '@caldwell619/github-slugger'

import { Upgrade, UpgradeType, Expansions, Alignment } from 'store'

export const grenadesUpgrades: Upgrade[] = [
  {
    title: 'Concussion Grenades',
    type: UpgradeType.Grenades,
    points: 5,
    availableThrough: [slugger(Expansions.CoreSet), slugger(Expansions.UpgradeCardPack)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'EMP "Droid Poppers"',
    type: UpgradeType.Grenades,
    points: 5,
    availableThrough: [
      slugger(Expansions.InfernoSquad),
      slugger(Expansions.ArcTroopers),
      slugger(Expansions.DroidCommandos),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Fragmentation Grenades',
    type: UpgradeType.Grenades,
    points: 5,
    availableThrough: [
      slugger(Expansions.DeathTroopers),
      slugger(Expansions.RoyalGuards),
      slugger(Expansions.Wookiee),
      slugger(Expansions.RebelPathfinders),
      slugger(Expansions.CloneWarsCoreSet),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Impact Grenades',
    type: UpgradeType.Grenades,
    points: 5,
    availableThrough: [
      slugger(Expansions.FleetTroopers),
      slugger(Expansions.RebelTroopers),
      slugger(Expansions.Snowtrooper),
      slugger(Expansions.Stormtrooper),
      slugger(Expansions.Phase2Clones),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Smoke Grenades',
    type: UpgradeType.Grenades,
    points: 6,
    availableThrough: [
      slugger(Expansions.Phase1Clones),
      slugger(Expansions.Rex),
      slugger(Expansions.CadBane),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
