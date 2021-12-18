import { selector } from 'recoil'

import { SelectorKeys } from 'store/keys'
import { listAtom, UnitType } from './atoms'

export const hasChosenCommanderSelector = selector<boolean>({
  key: SelectorKeys.HasChosenCommander,
  get: ({ get }) => {
    const list = get(listAtom)
    const commanderUnit = list.find(({ unitType }) => unitType === UnitType.Commander)
    return !!commanderUnit
  },
})

export const listPointsSelector = selector<number>({
  key: SelectorKeys.ListPoints,
  get: ({ get }) => {
    const list = get(listAtom)
    const points = list.reduce<number>((total, { points }) => total + points, 0)
    return points
  },
})
