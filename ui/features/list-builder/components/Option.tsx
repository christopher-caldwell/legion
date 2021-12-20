import { FC } from 'react'
import AddIcon from '@mui/icons-material/Add'

import { CardOption } from 'components'
import { useListBuilder } from 'features/list-builder/api'
import { listPointsLimit } from 'constants/list'
import { BaseUnit } from 'constants/units/empire'
import { UnitType } from 'store'

export const ListOption: FC<BaseUnit> = props => {
  const { unitType, title, subtitle, points } = props
  const { imageSlug, canAddUnit, canAddUnitBasedOnPoints, addThisUnit } = useListOption(props)

  return (
    <CardOption
      title={title}
      subtitle={subtitle}
      points={points}
      onAction={addThisUnit}
      canTakeActionBasedOnPoints={canAddUnitBasedOnPoints}
      canTakeAction={canAddUnit}
      CardImage={<img src={require(`assets/units/empire/${unitType}/${imageSlug}.webp`)} />}
      ActionIcon={<AddIcon />}
    />
  )
}

const useListOption = (props: BaseUnit) => {
  const { title, points, isUnique, unitType, imageSlug } = props
  const { addUnit, list, listPoints, hasChosenCommander } = useListBuilder()
  const canAddUnitBasedOnPoints = points + listPoints < listPointsLimit
  const addThisUnit = () => {
    addUnit(props)
  }

  const determineIfUnitIsAlreadyInList = () => {
    if (!isUnique) return false
    const isUnitInList = list.find(({ title: listUnitTitle }) => title === listUnitTitle)
    return !!isUnitInList
  }
  const isUnitInList = determineIfUnitIsAlreadyInList()

  let canAddUnit = canAddUnitBasedOnPoints && !isUnitInList
  if (unitType === UnitType.Commander && hasChosenCommander) canAddUnit = false

  return {
    canAddUnitBasedOnPoints,
    canAddUnit,
    addThisUnit,
    imageSlug,
  }
}
