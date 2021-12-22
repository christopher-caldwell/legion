import { slugger } from '@caldwell619/github-slugger'

import { Upgrade, UpgradeType, Expansions, Alignment } from 'store'

export const heavyWeaponUpgrades: Upgrade[] = [
  {
    title: 'Armor-Piercing Shells',
    type: UpgradeType.HeavyWeapons,
    points: 10,
    availableThrough: [slugger(Expansions.SaberTank)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'B2-ACM Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 26,
    availableThrough: [slugger(Expansions.B2)],
    restriction: {
      unit: [slugger('B2 Super Battle Droids')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'B2-HA Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 32,
    availableThrough: [slugger(Expansions.B2)],
    restriction: {
      unit: [slugger('B2 Super Battle Droids')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Beskad Duelist',
    type: UpgradeType.HeavyWeapons,
    points: 28,
    availableThrough: [slugger(Expansions.ClanWren)],
    restriction: {
      unit: [slugger('Mandalorian Resistance')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Bistan',
    type: UpgradeType.HeavyWeapons,
    points: 32,
    availableThrough: [slugger(Expansions.RebelPathfinders)],
    restriction: {
      unit: [slugger('Rebel Pathfinders')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
    isUnique: true,
  },
  {
    title: 'Bowcaster Wookiee',
    type: UpgradeType.HeavyWeapons,
    points: 35,
    availableThrough: [slugger(Expansions.Wookiee)],
    restriction: {
      unit: [slugger('Wookiee Warriors')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'BX-series Droid Sniper',
    type: UpgradeType.HeavyWeapons,
    points: 30,
    availableThrough: [slugger(Expansions.DroidCommandos)],
    restriction: {
      unit: [slugger('BX-series Droid Commandos')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'CM-O/93 Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 31,
    availableThrough: [slugger(Expansions.RebelVeterans)],
    restriction: {
      unit: [slugger('Rebel Veterans')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'CR-24 Flame Rifle',
    type: UpgradeType.HeavyWeapons,
    points: 20,
    availableThrough: [slugger(Expansions.Dewback)],
    restriction: {
      unit: [slugger('Dewback Rider')],
    },
    // TODO: bad picture
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'DC-15 Phase I Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 30,
    availableThrough: [slugger(Expansions.CloneWarsCoreSet), slugger(Expansions.Phase1Clones)],
    restriction: {
      unit: [slugger('Phase I Clone Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'DC-15x ARC Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 31,
    availableThrough: [slugger(Expansions.ArcTroopers)],
    restriction: {
      unit: [slugger('ARC Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Del Meeko',
    type: UpgradeType.HeavyWeapons,
    points: 38,
    availableThrough: [slugger(Expansions.InfernoSquad)],
    restriction: {
      unit: [
        slugger('Imperial Special Forces'),
        slugger('Stormtroopers'),
        slugger('Snowtroopers'),
        slugger('Shoretroopers'),
      ],
    },
    isUnique: true,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'DH-447 Sniper',
    type: UpgradeType.HeavyWeapons,
    points: 28,
    availableThrough: [slugger(Expansions.RebelCommandos)],
    restriction: {
      unit: [slugger('Rebel Commandos')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Dioxis Mine Saboteur',
    type: UpgradeType.HeavyWeapons,
    points: 28,
    availableThrough: [slugger(Expansions.DroidCommandos)],
    restriction: {
      unit: [slugger('BX-series Droid Commandos')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'DLT-19 Stormtrooper',
    type: UpgradeType.HeavyWeapons,
    points: 24,
    availableThrough: [slugger(Expansions.CoreSet), slugger(Expansions.Stormtrooper)],
    restriction: {
      unit: [slugger('Stormtroopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'DLT-19D Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 34,
    availableThrough: [slugger(Expansions.DeathTroopers)],
    restriction: {
      unit: [slugger('Imperial Death Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'DLT-19x Sniper',
    type: UpgradeType.HeavyWeapons,
    points: 28,
    availableThrough: [slugger(Expansions.ScoutTrooper)],
    restriction: {
      unit: [slugger('Scout Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'DLT-20A Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 26,
    availableThrough: [slugger(Expansions.RebelTroopers)],
    restriction: {
      unit: [slugger('Rebel Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'DP-23 Phase I Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 27,
    availableThrough: [slugger(Expansions.Phase1Clones)],
    restriction: {
      unit: [slugger('Phase I Clone Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'DT-F16',
    type: UpgradeType.HeavyWeapons,
    points: 22,
    availableThrough: [slugger(Expansions.DeathTroopers)],
    restriction: {
      unit: [slugger('Imperial Death Troopers')],
    },
    isUnique: true,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'E-5C B1 Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 18,
    availableThrough: [slugger(Expansions.B1), slugger(Expansions.CloneWarsCoreSet)],
    restriction: {
      unit: [slugger('B1 Battle Droids')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'E-5s B1 Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 20,
    availableThrough: [slugger(Expansions.B1)],
    restriction: {
      unit: [slugger('B1 Battle Droids')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'E-60R B1 Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 20,
    availableThrough: [slugger(Expansions.B1), slugger(Expansions.CloneWarsCoreSet)],
    restriction: {
      unit: [slugger('B1 Battle Droids')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Echo',
    type: UpgradeType.HeavyWeapons,
    points: 40,
    availableThrough: [slugger(Expansions.ArcTroopers)],
    restriction: {
      unit: [slugger('ARC Troopers'), slugger('Phase I Clone Troopers'), slugger('Phase II Clone Troopers')],
    },
    isUnique: true,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Electrostaff Guard',
    type: UpgradeType.HeavyWeapons,
    points: 25,
    availableThrough: [slugger(Expansions.RoyalGuards)],
    restriction: {
      unit: [slugger('Imperial Royal Guards')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Fives',
    type: UpgradeType.HeavyWeapons,
    points: 36,
    availableThrough: [slugger(Expansions.ArcTroopers)],
    restriction: {
      unit: [slugger('ARC Troopers'), slugger('Phase I Clone Troopers'), slugger('Phase II Clone Troopers')],
    },
    isUnique: true,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Flametrooper',
    type: UpgradeType.HeavyWeapons,
    points: 20,
    availableThrough: [slugger(Expansions.Snowtrooper)],
    restriction: {
      unit: [slugger('Snowtroopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Gideon Hask',
    type: UpgradeType.HeavyWeapons,
    points: 38,
    availableThrough: [slugger(Expansions.InfernoSquad)],
    restriction: {
      unit: [
        slugger('Imperial Special Forces'),
        slugger('Stormtroopers'),
        slugger('Snowtroopers'),
        slugger('Shoretroopers'),
      ],
    },
    isUnique: true,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'HH-12 Stormtrooper',
    type: UpgradeType.HeavyWeapons,
    points: 34,
    availableThrough: [slugger(Expansions.CoreSet), slugger(Expansions.Stormtrooper)],
    restriction: {
      unit: [slugger('Stormtroopers')],
    },
    isUnique: true,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'MPL-57 Barrage Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 33,
    availableThrough: [slugger(Expansions.FleetTroopers)],
    restriction: {
      unit: [slugger('Fleet Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'MPL-57 Ion Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 32,
    availableThrough: [slugger(Expansions.RebelTroopers), slugger(Expansions.CoreSet)],
    restriction: {
      unit: [slugger('Rebel Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Phase II Mortar Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 25,
    availableThrough: [slugger(Expansions.Phase2Clones)],
    restriction: {
      unit: [slugger('Phase II Clone Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Proton Charge Saboteur',
    type: UpgradeType.HeavyWeapons,
    points: 26,
    availableThrough: [slugger(Expansions.RebelCommandos)],
    restriction: {
      unit: [slugger('Rebel Commandos')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Radiation Cannon B1 Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 22,
    availableThrough: [slugger(Expansions.B1)],
    restriction: {
      unit: [slugger('B1 Battle Droids')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'RPS-6 Phase I Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 26,
    availableThrough: [slugger(Expansions.Phase1Clones)],
    restriction: {
      unit: [slugger('Phase I Clone Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'RT-97C Stormtrooper',
    type: UpgradeType.HeavyWeapons,
    points: 26,
    availableThrough: [slugger(Expansions.Stormtrooper)],
    restriction: {
      unit: [slugger('Stormtroopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Scatter Gun Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 23,
    availableThrough: [slugger(Expansions.FleetTroopers)],
    restriction: {
      unit: [slugger('Fleet Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Sonic Charge Saboteur',
    type: UpgradeType.HeavyWeapons,
    points: 26,
    availableThrough: [slugger(Expansions.ScoutTrooper)],
    restriction: {
      unit: [slugger('Scout Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'SX-21 Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 20,
    availableThrough: [slugger(Expansions.RebelTroopers)],
    restriction: {
      unit: [slugger('Rebel Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'T-21 Stormtrooper',
    type: UpgradeType.HeavyWeapons,
    points: 27,
    availableThrough: [slugger(Expansions.Stormtrooper)],
    restriction: {
      unit: [slugger('Stormtroopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'T-21B Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 32,
    availableThrough: [slugger(Expansions.Shoretrooper)],
    restriction: {
      unit: [slugger('Shoretroopers')],
    },
    // TODO: Bad image
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'T-7 Ion Snowtrooper',
    type: UpgradeType.HeavyWeapons,
    points: 34,
    availableThrough: [slugger(Expansions.Snowtrooper)],
    restriction: {
      unit: [slugger('Snowtroopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Tristan Wren',
    type: UpgradeType.HeavyWeapons,
    points: 38,
    availableThrough: [slugger(Expansions.ClanWren)],
    restriction: {
      unit: [slugger('Mandalorian Resistance')],
    },
    isUnique: true,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Ursa Wren',
    type: UpgradeType.HeavyWeapons,
    points: 38,
    availableThrough: [slugger(Expansions.ClanWren)],
    restriction: {
      unit: [slugger('Mandalorian Resistance')],
    },
    isUnique: true,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Z-6 Phase I Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 25,
    availableThrough: [slugger(Expansions.CloneWarsCoreSet), slugger(Expansions.Phase1Clones)],
    restriction: {
      unit: [slugger('Phase I Clone Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Z-6 Phase II Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 27,
    availableThrough: [slugger(Expansions.Phase2Clones)],
    restriction: {
      unit: [slugger('Phase II Clone Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Z-6 Trooper',
    type: UpgradeType.HeavyWeapons,
    points: 22,
    availableThrough: [slugger(Expansions.CoreSet), slugger(Expansions.RebelTroopers)],
    restriction: {
      unit: [slugger('Rebel Troopers')],
    },
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
