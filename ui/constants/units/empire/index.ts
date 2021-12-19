import { commandersUnits } from './commander'
import { corpsUnits } from './corps'
import { heavyUnits } from './heavy'
import { supportUnits } from './support'
import { operativesUnits } from './operative'
import { specialForcesUnits } from './specialForces'

export const allUnits = [
  ...commandersUnits,
  ...operativesUnits,
  ...supportUnits,
  ...corpsUnits,
  ...heavyUnits,
  ...specialForcesUnits,
]
