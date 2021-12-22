import { slugger } from '@caldwell619/github-slugger'

import { Upgrade, UpgradeType, Expansions, Alignment } from 'store'

export const pilotUpgrades: Upgrade[] = [
  {
    title: 'Ascension Cables',
    type: UpgradeType.Gear,
    points: 4,
    availableThrough: [
      slugger(Expansions.ClanWren),
      slugger(Expansions.Lando),
      slugger(Expansions.InfernoSquad),
      slugger(Expansions.Kallus),
      slugger(Expansions.ArcTroopers),
      slugger(Expansions.Padme),
      slugger(Expansions.CadBane),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
