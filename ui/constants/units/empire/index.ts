import { slugger } from '@caldwell619/github-slugger'
import { UnitType } from 'store'

export interface BaseUnit {
  title: string
  subtitle?: string
  points: number
  isUnique: boolean
  unitType: UnitType
  imageSlug: string
}

export const commandersUnits: BaseUnit[] = [
  {
    title: 'Darth Vader',
    subtitle: 'Dark Lord of the Sith',
    points: 190,
    isUnique: true,
    unitType: UnitType.Commander,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'General Veers',
    subtitle: 'Master Tactician',
    points: 75,
    isUnique: true,
    unitType: UnitType.Commander,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Emperor Palpatine',
    subtitle: 'Ruler of the Galactic Empire',
    points: 190,
    isUnique: true,
    unitType: UnitType.Commander,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Imperial Officer',
    subtitle: 'Ruthless Commander',
    points: 45,
    isUnique: false,
    unitType: UnitType.Commander,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Director Krennic',
    subtitle: 'Architect of Terror',
    points: 75,
    isUnique: true,
    unitType: UnitType.Commander,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Iden Versio',
    subtitle: 'Inferno Squad Leader',
    points: 100,
    isUnique: true,
    unitType: UnitType.Commander,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Agent Kallus',
    subtitle: 'Hunter of Spectres',
    points: 90,
    isUnique: true,
    unitType: UnitType.Commander,
    get imageSlug() {
      return slugger(this.title)
    },
  },
]

export const operativesUnits: BaseUnit[] = [
  {
    title: 'Boba Fett',
    subtitle: 'Infamous Bounty Hunter',
    points: 120,
    isUnique: true,
    unitType: UnitType.Operative,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Bossk',
    subtitle: 'Trandoshan Terror',
    points: 115,
    isUnique: true,
    unitType: UnitType.Operative,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Darth Vader',
    subtitle: "The Emperor's Apprentice",
    points: 175,
    isUnique: true,
    unitType: UnitType.Operative,
    get imageSlug() {
      return slugger(this.title)
    },
  },
]

export const corpsUnits: BaseUnit[] = [
  {
    title: 'Stormtroopers',
    points: 44,
    isUnique: false,
    unitType: UnitType.Corps,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Snowtroopers',
    points: 44,
    isUnique: false,
    unitType: UnitType.Corps,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Shoretroopers',
    points: 52,
    isUnique: false,
    unitType: UnitType.Corps,
    get imageSlug() {
      return slugger(this.title)
    },
  },
]

export const specialForcesUnits: BaseUnit[] = [
  {
    title: 'Scout Troopers',
    points: 48,
    isUnique: false,
    unitType: UnitType.SpecialForces,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Royal Guards',
    points: 69,
    isUnique: false,
    unitType: UnitType.SpecialForces,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Scout Troopers',
    subtitle: 'Strike Team',
    points: 20,
    isUnique: false,
    unitType: UnitType.SpecialForces,
    get imageSlug() {
      return slugger(this.title + '-' + this.subtitle)
    },
  },
  {
    title: 'Death Troopers',
    points: 72,
    isUnique: false,
    unitType: UnitType.SpecialForces,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Special Forces',
    points: 68,
    isUnique: false,
    unitType: UnitType.SpecialForces,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Special Forces',
    subtitle: 'Inferno Squad',
    points: 34,
    isUnique: false,
    unitType: UnitType.SpecialForces,
    get imageSlug() {
      return slugger(this.title + '-' + this.subtitle)
    },
  },
]

export const supportUnits: BaseUnit[] = [
  {
    title: '74-Z Speeder Bikes',
    points: 70,
    isUnique: false,
    unitType: UnitType.Support,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'E-Web Heavy Blaster Team',
    points: 55,
    isUnique: false,
    unitType: UnitType.Support,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'Dewback Rider',
    points: 70,
    isUnique: false,
    unitType: UnitType.Support,
    get imageSlug() {
      return slugger(this.title)
    },
  },
]

export const heavyUnits: BaseUnit[] = [
  {
    title: 'AT-ST',
    points: 155,
    isUnique: false,
    unitType: UnitType.Heavy,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'TX-225 GAVw Occupier Combat Assault Tank',
    points: 140,
    isUnique: false,
    unitType: UnitType.Heavy,
    get imageSlug() {
      return slugger(this.title)
    },
  },
  {
    title: 'LAAT/LE Patrol Transport',
    points: 105,
    isUnique: false,
    unitType: UnitType.Heavy,
    get imageSlug() {
      return slugger(this.title)
    },
  },
]

export const allUnits = [
  ...commandersUnits,
  ...operativesUnits,
  ...supportUnits,
  ...corpsUnits,
  ...heavyUnits,
  ...specialForcesUnits,
]
