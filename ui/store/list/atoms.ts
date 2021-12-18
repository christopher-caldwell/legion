import { atom } from 'recoil'

import { AtomKeys } from 'store/keys'
import { BaseUnit } from 'constants/units/empire'

export enum UnitType {
  Commander = 'commander',
  Operatives = 'operatives',
  Corps = 'corps',
  SpecialForces = 'special-forces',
  Support = 'support',
  Heavy = 'heavy',
}
export interface Unit extends BaseUnit {
  upgrades: []
  unitType: UnitType
}

export interface ListUnit extends Unit {
  id: string
}

export const listAtom = atom<ListUnit[]>({
  key: AtomKeys.List,
  default: [],
})
