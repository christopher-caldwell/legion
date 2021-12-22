import { slugger } from '@caldwell619/github-slugger'

import { Upgrade, UpgradeType, Expansions, Alignment } from 'store'

export const gearUpgrades: Upgrade[] = [
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
  {
    title: 'Electro Grappling Line',
    type: UpgradeType.Gear,
    points: 5,
    availableThrough: [slugger(Expansions.Sabine)],
    restriction: {
      unit: [slugger('Sabine Wren')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Electrobinoculars',
    type: UpgradeType.Gear,
    points: 8,
    availableThrough: [
      slugger(Expansions.RebelTroopers),
      slugger(Expansions.Stormtrooper),
      slugger(Expansions.B1),
      slugger(Expansions.Phase1Clones),
      slugger(Expansions.UpgradeCardPack),
    ],
    // TODO: B1 can ignore this cards icon requirement?
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Emergency Stims',
    type: UpgradeType.Gear,
    points: 8,
    availableThrough: [
      slugger(Expansions.Boba),
      slugger(Expansions.Bossk),
      slugger(Expansions.ScoutTrooper),
      slugger(Expansions.Solo),
      slugger(Expansions.Chewbacca),
      slugger(Expansions.RebelCommandos),
      slugger(Expansions.Rex),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Environmental Gear',
    type: UpgradeType.Gear,
    points: 3,
    availableThrough: [
      slugger(Expansions.GeneralVeers),
      slugger(Expansions.DeathTroopers),
      slugger(Expansions.LeiaOrgana),
      slugger(Expansions.CloneWarsCoreSet),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Grappling Hooks',
    type: UpgradeType.Gear,
    points: 3,
    availableThrough: [
      slugger(Expansions.FleetTroopers),
      slugger(Expansions.RebelTroopers),
      slugger(Expansions.Stormtrooper),
      slugger(Expansions.Snowtrooper),
      slugger(Expansions.Phase2Clones),
      slugger(Expansions.UpgradeCardPack),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'JT-12 Jetpacks',
    type: UpgradeType.Gear,
    points: 10,
    availableThrough: [slugger(Expansions.ArcTroopers)],
    restriction: {
      unit: [slugger('Clone Captain Rex'), slugger('Arc Troopers')],
    },
    pointsModifiers: {
      unit: slugger('Clone Captain Rex'),
      points: -5,
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Personal Combat Shield',
    type: UpgradeType.Gear,
    points: 10,
    availableThrough: [slugger(Expansions.Sabine)],
    restriction: {
      unit: [slugger('Sabine Wren')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Portable Scanner',
    type: UpgradeType.Gear,
    points: 6,
    availableThrough: [
      slugger(Expansions.Lando),
      slugger(Expansions.Kallus),
      slugger(Expansions.RepublicSpecialists),
      slugger(Expansions.SeparatistSpecialists),
    ],
    // TODO: B1 can ignore this cards icon requirement?
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Recon Intel',
    type: UpgradeType.Gear,
    points: 2,
    availableThrough: [
      slugger(Expansions.ImperialSpecialist),
      slugger(Expansions.RoyalGuards),
      slugger(Expansions.RebelSpecialist),
      slugger(Expansions.Wookiee),
      slugger(Expansions.CloneWarsCoreSet),
      slugger(Expansions.Rex),
      slugger(Expansions.UpgradeCardPack),
      slugger(Expansions.Cassian),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Targeting Scopes',
    type: UpgradeType.Gear,
    points: 6,
    availableThrough: [
      slugger(Expansions.CoreSet),
      slugger(Expansions.Phase1Clones),
      slugger(Expansions.UpgradeCardPack),
      slugger(Expansions.CadBane),
    ],
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
