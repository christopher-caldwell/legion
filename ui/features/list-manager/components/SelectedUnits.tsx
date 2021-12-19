import { FC } from 'react'
import { Grid } from '@mui/material'

import { useListBuilder } from 'features/list-builder/api'
import { ViewScreenCenterBox } from 'components'
import { SelectedUnit } from './Unit'

export const SelectedUnits: FC = () => {
  const { list } = useListBuilder()
  if (!list.length) {
    return <ViewScreenCenterBox height='80%'>Such Empty</ViewScreenCenterBox>
  }
  return (
    <Grid container spacing={4}>
      {list.map(listUnit => (
        <SelectedUnit {...listUnit} key={listUnit.id} />
      ))}
    </Grid>
  )
}
