import { atom } from 'recoil'

import { AtomKeys } from 'store/keys'
import { BaseUnit } from 'constants/units/empire/shared'
import { Upgrade } from './types'

export interface Unit extends BaseUnit {
  upgrades: Upgrade[]
}

export interface ListUnit extends Unit {
  id: string
}

export const listAtom = atom<ListUnit[]>({
  key: AtomKeys.List,
  default: [],
})

export const listNameAtom = atom<string>({
  key: AtomKeys.ListName,
  default: 'Super Sweet List',
})
