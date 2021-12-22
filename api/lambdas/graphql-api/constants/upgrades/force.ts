import { slugger } from '@caldwell619/github-slugger'

import { Upgrade, UpgradeType, Expansions, Alignment } from 'store'

export const forceUpgrades: Upgrade[] = [
  {
    title: 'Anger',
    type: UpgradeType.Force,
    points: 5,
    availableThrough: [
      slugger(Expansions.Palpatine),
      slugger(Expansions.AnakinSkywalker),
      slugger(Expansions.Dooku),
      slugger(Expansions.Maul),
    ],
    restriction: {
      alignment: Alignment.Dark,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Battle Meditation',
    type: UpgradeType.Force,
    points: 10,
    availableThrough: [
      slugger(Expansions.CoreSet),
      slugger(Expansions.CloneWarsCoreSet),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Burst of Speed',
    type: UpgradeType.Force,
    points: 3,
    availableThrough: [slugger(Expansions.Yoda)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Fear',
    type: UpgradeType.Force,
    points: 3,
    availableThrough: [
      slugger(Expansions.Vader),
      slugger(Expansions.AnakinSkywalker),
      slugger(Expansions.Dooku),
      slugger(Expansions.Maul),
    ],
    restriction: {
      alignment: Alignment.Dark,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Force Barrier',
    type: UpgradeType.Force,
    points: 10,
    availableThrough: [slugger(Expansions.AnakinSkywalker), slugger(Expansions.Yoda), slugger(Expansions.Maul)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Force Choke',
    type: UpgradeType.Force,
    points: 5,
    availableThrough: [
      slugger(Expansions.CoreSet),
      slugger(Expansions.Palpatine),
      slugger(Expansions.AnakinSkywalker),
      slugger(Expansions.Dooku),
      slugger(Expansions.Maul),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Force Guidance',
    type: UpgradeType.Force,
    points: 10,
    availableThrough: [
      slugger(Expansions.CloneWarsCoreSet),
      slugger(Expansions.UpgradeCardPack),
      slugger(Expansions.LukeSkywalker),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Force Lift',
    type: UpgradeType.Force,
    points: 5,
    availableThrough: [slugger(Expansions.Yoda)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Force Push',
    type: UpgradeType.Force,
    points: 10,
    availableThrough: [
      slugger(Expansions.CoreSet),
      slugger(Expansions.CloneWarsCoreSet),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Force Reflexes',
    type: UpgradeType.Force,
    points: 15,
    availableThrough: [
      slugger(Expansions.CoreSet),
      slugger(Expansions.CloneWarsCoreSet),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Hope',
    type: UpgradeType.Force,
    points: 3,
    availableThrough: [slugger(Expansions.CloneWarsCoreSet)],
    restriction: {
      alignment: Alignment.Light,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Jedi Mind Trick',
    type: UpgradeType.Force,
    points: 5,
    availableThrough: [slugger(Expansions.CoreSet), slugger(Expansions.CloneWarsCoreSet)],
    restriction: {
      alignment: Alignment.Light,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Saber Throw',
    type: UpgradeType.Force,
    points: 10,
    availableThrough: [slugger(Expansions.CoreSet), slugger(Expansions.UpgradeCardPack)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
