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
} from 'constants/units/empire'
import { ListOption } from './components'
import { UnitType } from 'store'

export const Options: FC = () => {
  return (
    <Grid item xs={12}>
      <ScrollTabs
        tabs={[
          { label: 'All', View: <AllOptions /> },
          { label: 'Commanders', View: <CommanderOptions /> },
          { label: 'Operatives', View: <OperativeOptions /> },
          { label: 'Corps', View: <CorpsOptions /> },
          { label: 'Special Forces', View: <SpecialForcesOptions /> },
          { label: 'Support', View: <SupportOptions /> },
          { label: 'Heavy', View: <HeavyOptions /> },
        ]}
      />
    </Grid>
  )
}

const CommanderOptions: FC = () => (
  <>
    {commandersUnits.map(unit => (
      <ListOption key={unit.title} {...unit} unitType={UnitType.Commander} />
    ))}
  </>
)

const OperativeOptions: FC = () => (
  <>
    {operativesUnits.map(unit => (
      <ListOption key={unit.title} {...unit} unitType={UnitType.Operatives} />
    ))}
  </>
)

const CorpsOptions: FC = () => (
  <>
    {corpsUnits.map(unit => (
      <ListOption key={unit.title} {...unit} unitType={UnitType.Corps} />
    ))}
  </>
)

const SpecialForcesOptions: FC = () => (
  <>
    {specialForcesUnits.map(unit => (
      <ListOption key={unit.title} {...unit} unitType={UnitType.SpecialForces} />
    ))}
  </>
)

const SupportOptions: FC = () => (
  <>
    {supportUnits.map(unit => (
      <ListOption key={unit.title} {...unit} unitType={UnitType.Support} />
    ))}
  </>
)

const HeavyOptions: FC = () => (
  <>
    {heavyUnits.map(unit => (
      <ListOption key={unit.title} {...unit} unitType={UnitType.Heavy} />
    ))}
  </>
)

const AllOptions: FC = () => (
  <>
    <CommanderOptions />
    <OperativeOptions />
    <CorpsOptions />
    <SpecialForcesOptions />
    <SupportOptions />
    <HeavyOptions />
  </>
)
