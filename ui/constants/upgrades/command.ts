import { slugger } from '@caldwell619/github-slugger'

import { Upgrade, UpgradeType, Expansions } from 'store'

export const commandUpgrades: Upgrade[] = [
  {
    title: 'Aggressive Tactics',
    type: UpgradeType.Command,
    points: 10,
    availableThrough: [slugger(Expansions.CloneWarsCoreSet), slugger(Expansions.UpgradeCardPack)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Commanding Presence',
    type: UpgradeType.Command,
    points: 10,
    availableThrough: [
      slugger(Expansions.GeneralVeers),
      slugger(Expansions.ImperialSpecialist),
      slugger(Expansions.RebelSpecialist),
      slugger(Expansions.LeiaOrgana),
      slugger(Expansions.CloneWarsCoreSet),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Esteemed Leader',
    type: UpgradeType.Command,
    points: 10,
    availableThrough: [
      slugger(Expansions.LeiaOrgana),
      slugger(Expansions.GeneralVeers),
      slugger(Expansions.Krennic),
      slugger(Expansions.Rex),
      slugger(Expansions.Dooku),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Improvised Orders',
    type: UpgradeType.Command,
    points: 10,
    availableThrough: [
      slugger(Expansions.Palpatine),
      slugger(Expansions.Solo),
      slugger(Expansions.Padme),
      slugger(Expansions.SeparatistSpecialists),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Inspiring Presence',
    type: UpgradeType.Command,
    points: 5,
    availableThrough: [
      slugger(Expansions.RepublicSpecialists),
      slugger(Expansions.SeparatistSpecialists),
      slugger(Expansions.Lando),
      slugger(Expansions.Kallus),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Strict Orders',
    type: UpgradeType.Command,
    points: 5,
    availableThrough: [slugger(Expansions.Krennic), slugger(Expansions.Jyn), slugger(Expansions.UpgradeCardPack)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Vigilance',
    type: UpgradeType.Command,
    points: 5,
    availableThrough: [
      slugger(Expansions.RepublicSpecialists),
      slugger(Expansions.SeparatistSpecialists),
      slugger(Expansions.Lando),
      slugger(Expansions.Kallus),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
