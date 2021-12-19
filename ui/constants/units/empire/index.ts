import { commandersUnits } from './commander'
import { corpsUnits } from './corps'
import { heavyUnits } from './heavy'
import { supportUnits } from './support'
import { operativesUnits } from './operative'
import { specialForcesUnits } from './specialForces'

export { commandersUnits } from './commander'
export { corpsUnits } from './corps'
export { heavyUnits } from './heavy'
export { supportUnits } from './support'
export { operativesUnits } from './operative'
export { specialForcesUnits } from './specialForces'
export * from './shared'

export const allUnits = [
  ...commandersUnits,
  ...operativesUnits,
  ...supportUnits,
  ...corpsUnits,
  ...heavyUnits,
  ...specialForcesUnits,
]
