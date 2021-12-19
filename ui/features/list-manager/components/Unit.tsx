import { FC } from 'react'
import { Typography, Grid, IconButton } from '@mui/material'
import Delete from '@mui/icons-material/Delete'
import RightArrow from '@mui/icons-material/ChevronRight'

import { Label, LabelContainer, Points } from 'features/list-builder/components'
import { ListUnit } from 'store'
import { useListBuilder } from 'features/list-builder/api'

export const SelectedUnit: FC<ListUnit> = ({ id, unitType, title, subtitle, points, imageSlug, upgradeSlots }) => {
  const { removeUnit } = useListBuilder()
  return (
    <Grid container item xs={12} spacing={2}>
      <Grid item xs={2} container alignItems='center'>
        <img src={require(`assets/units/empire/${unitType}/${imageSlug}.webp`)} />
      </Grid>
      <Grid item xs={8} alignItems='center' container justifyContent='space-between'>
        <LabelContainer>
          <Label canAddUnit noWrap variant='h6'>
            {title}
          </Label>
          {subtitle ? (
            <Label canAddUnit noWrap variant='body2'>
              {subtitle}
            </Label>
          ) : null}
        </LabelContainer>
        <Points variant='subtitle2'>{points}</Points>
      </Grid>
      <Grid item xs={2} alignItems='center' justifyContent='flex-end' container>
        <IconButton onClick={() => removeUnit(id)}>
          <Delete color='error' />
        </IconButton>
      </Grid>
      {upgradeSlots.map(slot => (
        <Grid item container xs={12} justifyContent='flex-start' alignItems='center'>
          <img style={{ width: '30px' }} src={require(`assets/upgrades/${slot}.png`)} />
          <Typography
            sx={{ marginLeft: ({ spacing }) => spacing(2), color: ({ palette }) => palette.grey[700], flex: 1 }}
          >
            {capitalize(humanizeWord(slot))}
          </Typography>
          <IconButton>
            <RightArrow />
          </IconButton>
        </Grid>
      ))}
    </Grid>
  )
}

const humanizeWord = (sluggedWord: string) => {
  const words = sluggedWord.split('-')
  return words.reduce<string>((total, current) => `${total} ${current}`, '').trim()
}

const capitalize = (s: string) => {
  return (s = s.charAt(0).toUpperCase() + s.slice(1))
}
