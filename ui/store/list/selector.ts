import { selector } from 'recoil'

import { SelectorKeys, listAtom, upgradesAtom } from 'store'
import { UnitType } from './types'

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
    const upgrades = get(upgradesAtom)
    const points = list.reduce<number>((total, { id, points }) => {
      const targetUnitUpgrades = upgrades[id] || []
      const targetUpgradePoints = targetUnitUpgrades.reduce(
        (upgradeTotal, currentUpgrade) => upgradeTotal + currentUpgrade.points,
        0
      )
      return total + points + targetUpgradePoints
    }, 0)
    return points
  },
})
