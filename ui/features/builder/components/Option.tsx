import { FC } from 'react'
import { Typography, IconButton, Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useRecoilValue } from 'recoil'
import { slugger } from '@caldwell619/github-slugger'

import { useListBuilder } from 'features/builder/api'
import { Unit, listPointsSelector, listAtom } from 'store'
import { listPointsLimit } from 'constants/list'

export const ListOption: FC<Omit<Unit, 'upgrades'>> = props => {
  const { title, points, unitType, subtitle, isUnique } = props
  const listPoints = useRecoilValue(listPointsSelector)
  const list = useRecoilValue(listAtom)
  const { addUnit } = useListBuilder()
  const imageSlug = slugger(title)
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

  const canAddUnit = canAddUnitBasedOnPoints && !isUnitInList

  return (
    <Grid container item xs={12}>
      <Grid item xs={2} container alignItems='center'>
        <img src={require(`assets/units/empire/${unitType}/${imageSlug}.webp`)} />
      </Grid>
      <Grid item xs={8} alignItems='center' container justifyContent='space-between'>
        <div style={{ width: '85%' }}>
          <Typography
            sx={{ width: '100%', color: ({ palette }) => (canAddUnit ? palette.text.primary : palette.text.disabled) }}
            noWrap
            variant='h6'
          >
            {title}
          </Typography>
          {subtitle ? (
            <Typography
              sx={{
                width: '100%',
                color: ({ palette }) => (canAddUnit ? palette.text.primary : palette.text.disabled),
              }}
              noWrap
              variant='body2'
            >
              {subtitle}
            </Typography>
          ) : null}
        </div>
        <Typography
          variant='subtitle2'
          sx={{
            color: ({ palette }) => (canAddUnitBasedOnPoints ? palette.success.main : palette.error.main),
            opacity: canAddUnit ? 1 : 0.4,
          }}
        >
          {points}
        </Typography>
      </Grid>
      <Grid item xs={2} alignItems='center' justifyContent='flex-end' container>
        <IconButton disabled={!canAddUnit} onClick={addThisUnit}>
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}
