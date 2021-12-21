import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { v4 as uuid } from 'uuid'

import { listAtom, listPointsSelector, hasChosenCommanderSelector, upgradesAtom } from 'store'
import { BaseUnit } from 'constants/units/empire'

export const useListBuilder = () => {
  const [list, setList] = useRecoilState(listAtom)
  const listPoints = useRecoilValue(listPointsSelector)
  const setUpgradesMap = useSetRecoilState(upgradesAtom)
  const hasChosenCommander = useRecoilValue(hasChosenCommanderSelector)

  const addUnit = (unit: BaseUnit): void => {
    setList(currentList => [
      {
        id: uuid(),
        ...unit,
        upgrades: [],
        updatedAt: new Date(),
      },
      ...currentList,
    ])
  }
  const removeUnit = (id: string): void => {
    setList(currentList => {
      return currentList.filter(listUnit => id !== listUnit.id)
    })
    setUpgradesMap(currentUpgradeMap => {
      const mutableUpgradeMap = { ...currentUpgradeMap }
      delete mutableUpgradeMap[id]
      return mutableUpgradeMap
    })
  }

  return {
    removeUnit,
    addUnit,
    list,
    listPoints,
    hasChosenCommander,
  }
}
