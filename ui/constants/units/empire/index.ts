export interface BaseUnit {
  title: string
  subtitle?: string
  points: number
  isUnique: boolean
}

export const commandersUnits: BaseUnit[] = [
  {
    title: 'Darth Vader',
    subtitle: 'Dark Lord of the Sith',
    points: 190,
    isUnique: true,
  },
  {
    title: 'General Veers',
    subtitle: 'Master Tactician',
    points: 75,
    isUnique: true,
  },
  {
    title: 'Emperor Palpatine',
    subtitle: 'Ruler of the Galactic Empire',
    points: 190,
    isUnique: true,
  },
  {
    title: 'Imperial Officer',
    subtitle: 'Ruthless Commander',
    points: 45,
    isUnique: false,
  },
  {
    title: 'Director Krennic',
    subtitle: 'Architect of Terror',
    points: 75,
    isUnique: true,
  },
  {
    title: 'Iden Versio',
    subtitle: 'Inferno Squad Leader',
    points: 100,
    isUnique: true,
  },
  {
    title: 'Agent Kallus',
    subtitle: 'Hunter of Spectres',
    points: 90,
    isUnique: true,
  },
]

export const operativesUnits: BaseUnit[] = [
  {
    title: 'Boba Fett',
    subtitle: 'Infamous Bounty Hunter',
    points: 120,
    isUnique: true,
  },
  {
    title: 'Bossk',
    subtitle: 'Trandoshan Terror',
    points: 115,
    isUnique: true,
  },
  {
    title: 'Darth Vader',
    subtitle: "The Emperor's Apprentice",
    points: 175,
    isUnique: true,
  },
]

export const corpsUnits: BaseUnit[] = [
  {
    title: 'Stormtroopers',
    points: 44,
    isUnique: false,
  },
  {
    title: 'Snowtroopers',
    points: 44,
    isUnique: false,
  },
  {
    title: 'Shoretroopers',
    points: 52,
    isUnique: false,
  },
]

export const specialForcesUnits: BaseUnit[] = [
  {
    title: 'Scout Troopers',
    points: 48,
    isUnique: false,
  },
  {
    title: 'Royal Guards',
    points: 69,
    isUnique: false,
  },
  {
    title: 'Scout Troopers (ST)',
    points: 20,
    isUnique: false,
  },
  {
    title: 'Death Troopers',
    points: 72,
    isUnique: false,
  },
  {
    title: 'Special Forces',
    points: 68,
    isUnique: false,
  },
  {
    title: 'Special Forces (IS)',
    points: 34,
    isUnique: false,
  },
]

export const supportUnits: BaseUnit[] = [
  {
    title: '74-Z Speeder Bikes',
    points: 70,
    isUnique: false,
  },
  {
    title: 'E-Web Heavy Blaster Team',
    points: 55,
    isUnique: false,
  },
  {
    title: 'Dewback Rider',
    points: 70,
    isUnique: false,
  },
]

export const heavyUnits: BaseUnit[] = [
  {
    title: 'AT-ST',
    points: 155,
    isUnique: false,
  },
  {
    title: 'TX-225 GAVw Tank',
    points: 140,
    isUnique: false,
  },
  {
    title: 'LAAT Patrol Transport',
    points: 105,
    isUnique: false,
  },
]
