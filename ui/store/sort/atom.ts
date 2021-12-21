import { atom } from 'recoil'
import { AtomKeys } from 'store/keys'

export const sortChoiceMapAtom = atom<Record<string, { sortConfigIndex: number; isAsc: boolean }>>({
  key: AtomKeys.SortConfigMap,
  default: {},
})
