import { atom } from 'recoil'

import { AtomKeys } from 'store/keys'
import { ListUpgrade } from 'store'

export const upgradesAtom = atom<Record<string, ListUpgrade[]>>({
  key: AtomKeys.Upgrades,
  default: {},
})
