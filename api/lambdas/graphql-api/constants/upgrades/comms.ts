import { slugger } from '@caldwell619/github-slugger'

import { Upgrade, UpgradeType, Expansions } from 'store'

export const commsUpgrades: Upgrade[] = [
  {
    title: 'Command Control Array',
    type: UpgradeType.Comms,
    points: 2,
    availableThrough: [slugger(Expansions.STAP)],
    restriction: {
      isOnlyForVehicles: true,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Comms Jammer',
    type: UpgradeType.Comms,
    points: 15,
    availableThrough: [
      slugger(Expansions.ImperialSpeeder),
      slugger(Expansions.AtSt),
      slugger(Expansions.Dewback),
      slugger(Expansions.AtRt),
      slugger(Expansions.Airspeeder),
      slugger(Expansions.CadBane),
      slugger(Expansions.Maul),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Comms Relay',
    type: UpgradeType.Comms,
    points: 5,
    availableThrough: [
      slugger(Expansions.RebelSpecialist),
      slugger(Expansions.RebelPathfinders),
      slugger(Expansions.DeathTroopers),
      slugger(Expansions.ImperialSpecialist),
      slugger(Expansions.Iden),
      slugger(Expansions.B1),
      slugger(Expansions.EscapePod),
      slugger(Expansions.UpgradeCardPack),
    ],
    restriction: {
      isOnlyForNonEmplacement: true,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'HQ Uplink',
    type: UpgradeType.Comms,
    points: 10,
    availableThrough: [
      slugger(Expansions.RebelSpecialist),
      slugger(Expansions.RebelPathfinders),
      slugger(Expansions.DeathTroopers),
      slugger(Expansions.ImperialSpecialist),
      slugger(Expansions.Iden),
      slugger(Expansions.B1),
      slugger(Expansions.EscapePod),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Long-Range Comlink',
    type: UpgradeType.Comms,
    points: 10,
    availableThrough: [
      slugger(Expansions.CoreSet),
      slugger(Expansions.AtRt),
      slugger(Expansions.Airspeeder),
      slugger(Expansions.ImperialSpeeder),
      slugger(Expansions.AtSt),
      slugger(Expansions.CloneWarsCoreSet),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Linked Targeting Array',
    type: UpgradeType.Comms,
    points: 5,
    availableThrough: [
      slugger(Expansions.BARC),
      slugger(Expansions.Droidekas),
      slugger(Expansions.STAP),
      slugger(Expansions.UpgradeCardPack),
    ],
    restriction: {
      isOnlyForNonEmplacement: false,
      isOnlyForVehicles: true,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Integrated Comms Antenna',
    type: UpgradeType.Comms,
    points: 3,
    availableThrough: [slugger(Expansions.B1), slugger(Expansions.B2), slugger(Expansions.EscapePod)],
    restriction: {
      isOnlyForDroids: true,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
