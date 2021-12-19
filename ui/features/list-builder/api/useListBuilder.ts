import { useRecoilState, useRecoilValue } from 'recoil'
import { v4 as uuid } from 'uuid'

import { listAtom, listPointsSelector, hasChosenCommanderSelector } from 'store'
import { BaseUnit } from 'constants/units/empire'

export const useListBuilder = () => {
  const [list, setList] = useRecoilState(listAtom)
  const listPoints = useRecoilValue(listPointsSelector)
  const hasChosenCommander = useRecoilValue(hasChosenCommanderSelector)

  const addUnit = (unit: BaseUnit): void => {
    setList(currentList => [
      {
        id: uuid(),
        ...unit,
        upgrades: [],
      },
      ...currentList,
    ])
  }
  const removeUnit = (id: string): void => {
    setList(currentList => {
      return currentList.filter(listUnit => id !== listUnit.id)
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
