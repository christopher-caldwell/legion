import { slugger } from '@caldwell619/github-slugger'

import { Upgrade, UpgradeType, Expansions, Alignment, UnitType } from 'store'

export const trainingUpgrades: Upgrade[] = [
  {
    title: 'Defensive Stance',
    type: UpgradeType.Training,
    points: 5,
    availableThrough: [slugger(Expansions.AnakinSkywalker), slugger(Expansions.Maul)],
    restriction: {
      isOnlyForForceUsers: true,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Duck and Cover',
    type: UpgradeType.Training,
    points: 8,
    availableThrough: [
      slugger(Expansions.Boba),
      slugger(Expansions.DeathTroopers),
      slugger(Expansions.ScoutTrooper),
      slugger(Expansions.Solo),
      slugger(Expansions.Jyn),
      slugger(Expansions.LukeSkywalker),
      slugger(Expansions.RebelCommandos),
      slugger(Expansions.RebelPathfinders),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Endurance',
    type: UpgradeType.Training,
    points: 6,
    availableThrough: [
      slugger(Expansions.Bossk),
      slugger(Expansions.Dewback),
      slugger(Expansions.Sabine),
      slugger(Expansions.Rex),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Hunter',
    type: UpgradeType.Training,
    points: 6,
    availableThrough: [
      slugger(Expansions.Boba),
      slugger(Expansions.RoyalGuards),
      slugger(Expansions.Chewbacca),
      slugger(Expansions.Bossk),
      slugger(Expansions.Wookiee),
      slugger(Expansions.CloneWarsCoreSet),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Into the Fray',
    type: UpgradeType.Training,
    points: 4,
    availableThrough: [slugger(Expansions.Yoda), slugger(Expansions.Wookiee)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Offensive Push',
    type: UpgradeType.Training,
    points: 4,
    availableThrough: [
      slugger(Expansions.RebelTroopers),
      slugger(Expansions.Cassian),
      slugger(Expansions.Stormtrooper),
      slugger(Expansions.Iden),
      slugger(Expansions.InfernoSquad),
      slugger(Expansions.Phase1Clones),
      slugger(Expansions.Padme),
      slugger(Expansions.CadBane),
      slugger(Expansions.Maul),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Offensive Stance',
    type: UpgradeType.Training,
    points: 5,
    availableThrough: [slugger(Expansions.AnakinSkywalker), slugger(Expansions.Maul)],
    restriction: {
      isOnlyForForceUsers: true,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Overwatch',
    type: UpgradeType.Training,
    points: 4,
    availableThrough: [
      slugger(Expansions.DeathTroopers),
      slugger(Expansions.RebelPathfinders),
      slugger(Expansions.Phase2Clones),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Protector',
    type: UpgradeType.Training,
    points: 5,
    availableThrough: [slugger(Expansions.Yoda), slugger(Expansions.Wookiee)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Seize the Initiative',
    type: UpgradeType.Training,
    points: 5,
    availableThrough: [
      slugger(Expansions.AnakinSkywalker),
      slugger(Expansions.RepublicSpecialists),
      slugger(Expansions.Maul),
      slugger(Expansions.Lando),
      slugger(Expansions.Kallus),
    ],
    restriction: {
      unitType: [UnitType.Commander, UnitType.Operative],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Situational Awareness',
    type: UpgradeType.Training,
    points: 2,
    availableThrough: [
      slugger(Expansions.ClanWren),
      slugger(Expansions.Lando),
      slugger(Expansions.InfernoSquad),
      slugger(Expansions.Kallus),
      slugger(Expansions.ArcTroopers),
      slugger(Expansions.Padme),
      slugger(Expansions.CadBane),
      slugger(Expansions.DroidCommandos),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Tenacity',
    type: UpgradeType.Training,
    points: 2,
    availableThrough: [
      slugger(Expansions.RoyalGuards),
      slugger(Expansions.Dewback),
      slugger(Expansions.Chewbacca),
      slugger(Expansions.Wookiee),
      slugger(Expansions.CloneWarsCoreSet),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
