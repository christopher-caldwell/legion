import { useRecoilState } from 'recoil'
import { v4 as uuid } from 'uuid'

import { listAtom, Unit } from 'store'

export const useListBuilder = () => {
  const [list, setList] = useRecoilState(listAtom)

  const addUnit = (unit: Omit<Unit, 'upgrades'>): void => {
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
  }
}
