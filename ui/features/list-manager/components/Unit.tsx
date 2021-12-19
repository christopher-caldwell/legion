import { FC } from 'react'
import { Grid, IconButton } from '@mui/material'
import Delete from '@mui/icons-material/Delete'

import { Label, LabelContainer, Points } from 'features/list-builder/components'
import { ListUnit } from 'store'
import { useListBuilder } from 'features/list-builder/api'

export const SelectedUnit: FC<ListUnit> = ({ id, unitType, title, subtitle, points, imageSlug }) => {
  const { removeUnit } = useListBuilder()
  return (
    <Grid container item xs={12}>
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
    </Grid>
  )
}
