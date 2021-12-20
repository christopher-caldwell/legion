import { FC } from 'react'
import { Typography, Grid, IconButton } from '@mui/material'
import Delete from '@mui/icons-material/Delete'
import RightArrow from '@mui/icons-material/ChevronRight'
import { useSetRecoilState } from 'recoil'

import { Label, LabelContainer, Points } from 'features/list-builder/components'
import { ListUnit, listUnitActiveUpgradesAtom } from 'store'
import { useListBuilder } from 'features/list-builder/api'
import { humanizeWord, capitalize } from 'utils'

export const SelectedUnit: FC<ListUnit> = ({ id, unitType, title, subtitle, points, imageSlug, upgradeSlots }) => {
  const { removeUnit } = useListBuilder()
  const setActiveUpgrade = useSetRecoilState(listUnitActiveUpgradesAtom)
  return (
    <Grid container item xs={12} spacing={1} sx={{ marginBottom: ({ spacing }) => spacing(2) }}>
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
      {upgradeSlots.map((slot, index) => (
        <Grid item container xs={12} justifyContent='flex-start' alignItems='center' key={slot + index}>
          <img style={{ width: '30px' }} src={require(`assets/upgrades/${slot}.png`)} />
          <Typography
            sx={{ marginLeft: ({ spacing }) => spacing(2), color: ({ palette }) => palette.grey[700], flex: 1 }}
          >
            {capitalize(humanizeWord(slot))}
          </Typography>
          <IconButton onClick={() => setActiveUpgrade({ id, upgrade: slot })}>
            <RightArrow />
          </IconButton>
        </Grid>
      ))}
    </Grid>
  )
}
