import { FC } from 'react'
import { Grid } from '@mui/material'

import { ScrollTabs } from 'components'
import {
  commandersUnits,
  operativesUnits,
  specialForcesUnits,
  corpsUnits,
  supportUnits,
  heavyUnits,
  allUnits,
  BaseUnit,
} from 'constants/units/empire'
import { ListOption } from './components'

export const Options: FC = () => {
  return (
    <Grid item xs={12}>
      <ScrollTabs
        tabs={[
          { label: 'All', View: <UnitOptions units={allUnits} /> },
          { label: 'Commanders', View: <UnitOptions units={commandersUnits} /> },
          { label: 'Operatives', View: <UnitOptions units={operativesUnits} /> },
          { label: 'Corps', View: <UnitOptions units={corpsUnits} /> },
          { label: 'Special Forces', View: <UnitOptions units={specialForcesUnits} /> },
          { label: 'Support', View: <UnitOptions units={supportUnits} /> },
          { label: 'Heavy', View: <UnitOptions units={heavyUnits} /> },
        ]}
      />
    </Grid>
  )
}

const UnitOptions: FC<{ units: BaseUnit[] }> = ({ units }) => (
  <>
    {units.map(unit => (
      <ListOption key={unit.title + unit.subtitle || ''} {...unit} />
    ))}
  </>
)
