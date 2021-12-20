import { FC } from 'react'
import { Typography, Grid } from '@mui/material'

import { ScrollTabs, SortOption } from 'components'
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
import { SearchAndFilter, useSearch } from 'components'

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

const unitSortConfig: SortOption<BaseUnit>[] = [
  {
    label: 'Type',
    key: 'unitType',
  },
  {
    label: 'Points',
    key: 'points',
  },
  {
    label: 'Name',
    key: 'title',
  },
]
const UnitOptions: FC<{ units: BaseUnit[] }> = ({ units }) => {
  const { searchBind, isAsc, toggleSortOrder, sortConfig, handleSortConfigIndexUpdate, searchResults } =
    useSearch<BaseUnit>({
      list: units,
      keys: ['points', 'title'],
      sortOptions: unitSortConfig,
    })
  return (
    <>
      <SearchAndFilter<BaseUnit>
        searchBind={searchBind}
        isAsc={isAsc}
        toggleSortOrder={toggleSortOrder}
        sortConfig={sortConfig}
        handleSortNameUpdate={handleSortConfigIndexUpdate}
        LeftDisplay={
          <Typography>
            {searchResults.length} Unit{searchResults.length === 1 ? '' : 's'}
          </Typography>
        }
      />
      {searchResults.map(unit => (
        <ListOption key={unit.title + unit.subtitle || ''} {...unit} />
      ))}
    </>
  )
}
