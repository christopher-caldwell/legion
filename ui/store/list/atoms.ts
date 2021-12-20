import { atom } from 'recoil'

import { AtomKeys } from 'store/keys'

import { ListUnit, ListUnitActiveUpgrade } from './types'

export const listAtom = atom<ListUnit[]>({
  key: AtomKeys.List,
  default: [],
})

export const listNameAtom = atom<string>({
  key: AtomKeys.ListName,
  default: 'Super Sweet List',
})

/** ID and the type of upgrade for the unit being targeted with upgrades */
export const listUnitActiveUpgradesAtom = atom<ListUnitActiveUpgrade | undefined>({
  key: AtomKeys.ListUnitActiveUpgrade,
  default: undefined,
})
