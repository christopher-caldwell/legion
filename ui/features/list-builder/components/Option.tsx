import { FC } from 'react'
import { Typography, IconButton, Grid, styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import { useListBuilder } from 'features/list-builder/api'
import { listPointsLimit } from 'constants/list'
import { BaseUnit } from 'constants/units/empire'
import { UnitType } from 'store'

export const ListOption: FC<BaseUnit> = props => {
  const { unitType, title, subtitle, points } = props
  const { imageSlug, canAddUnit, canAddUnitBasedOnPoints, addThisUnit } = useListOption(props)

  return (
    <Grid container item xs={12}>
      <Grid item xs={2} container alignItems='center'>
        <img src={require(`assets/units/empire/${unitType}/${imageSlug}.webp`)} />
      </Grid>
      <Grid item xs={8} alignItems='center' container justifyContent='space-between'>
        <LabelContainer>
          <Label canAddUnit={canAddUnit} noWrap variant='h6'>
            {title}
          </Label>
          {subtitle ? (
            <Label canAddUnit={canAddUnit} noWrap variant='body2'>
              {subtitle}
            </Label>
          ) : null}
        </LabelContainer>
        <Points canAddUnitBasedOnPoints={canAddUnitBasedOnPoints} canAddUnit={canAddUnit} variant='subtitle2'>
          {points}
        </Points>
      </Grid>
      <Grid item xs={2} alignItems='center' justifyContent='flex-end' container>
        <IconButton disabled={!canAddUnit} onClick={addThisUnit}>
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export const Points = styled(Typography, {
  shouldForwardProp: prop => prop !== 'canAddUnit' && prop !== 'canAddUnitBasedOnPoints',
})<{ canAddUnitBasedOnPoints?: boolean; canAddUnit?: boolean }>`
  color: ${({ canAddUnitBasedOnPoints = true, theme: { palette } }) =>
    canAddUnitBasedOnPoints ? palette.success.main : palette.error.main};
  opacity: ${({ canAddUnit = true }) => (canAddUnit ? 1 : 0.4)};
`

export const Label = styled(Typography, { shouldForwardProp: prop => prop !== 'canAddUnit' })<{ canAddUnit?: boolean }>`
  color: ${({ canAddUnit = true, theme: { palette } }) => (canAddUnit ? palette.text.primary : palette.text.disabled)};
  width: 100%;
`
export const LabelContainer = styled('div')`
  width: 85%;
`

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
