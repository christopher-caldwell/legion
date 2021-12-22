import { slugger } from '@caldwell619/github-slugger'

import { Upgrade, UpgradeType, Expansions } from 'store'

export const armamentUpgrades: Upgrade[] = [
  {
    title: 'E-11D Grenade Launcher Config',
    type: UpgradeType.Armament,
    points: 8,
    restriction: {
      unit: [slugger('Death Troopers')],
    },
    availableThrough: [slugger(Expansions.DeathTroopers)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: "Iden's DLT-20A Rifle",
    type: UpgradeType.Armament,
    points: 15,
    restriction: {
      unit: [slugger('Iden Versio')],
    },
    availableThrough: [slugger(Expansions.Iden)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: "Iden's TL-50 Repeater",
    type: UpgradeType.Armament,
    points: 15,
    restriction: {
      unit: [slugger('Iden Versio')],
    },
    availableThrough: [slugger(Expansions.Iden)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'T-21 Blaster Rifle',
    type: UpgradeType.Armament,
    points: 10,
    restriction: {
      unit: [slugger('Dewback Rider')],
    },
    availableThrough: [slugger(Expansions.Dewback)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'RT-97C Blaster Rifle',
    type: UpgradeType.Armament,
    points: 15,
    restriction: {
      unit: [slugger('Dewback Rider')],
    },
    availableThrough: [slugger(Expansions.Dewback)],
    get imageSlug() {
      return slugger(this.title)
    },
  },
]
