import { FC, Fragment } from 'react'
import { Grid } from '@mui/material'

import { ListUnit } from 'store'
import { useListBuilder } from 'features/list-builder/api'
import { ViewScreenCenterBox, SearchAndFilter, useSearch } from 'components'
import { SelectedUnit } from './Unit'

export const SelectedUnits: FC = () => {
  const { list } = useListBuilder()
  const { searchBind, isAsc, toggleSortOrder, sortConfig, handleSortConfigIndexUpdate, searchResults } = useSearch({
    list,
    keys: ['points', 'title', 'unitType'],
    keyForPersistence: 'selected-units',
  })

  if (!list.length) {
    return <ViewScreenCenterBox height='80%'>Such Empty</ViewScreenCenterBox>
  }
  return (
    <Grid container spacing={1} sx={{ paddingBottom: '10vh' }} alignItems='center'>
      <SearchAndFilter<ListUnit>
        searchBind={searchBind}
        isAsc={isAsc}
        toggleSortOrder={toggleSortOrder}
        sortConfig={sortConfig}
        handleSortNameUpdate={handleSortConfigIndexUpdate}
        LeftDisplay={
          <>
            {list.length} Activation{list.length === 1 ? '' : 's'}
          </>
        }
      />
      {searchResults.map(listUnit => (
        <Fragment key={listUnit.id}>
          <Grid item xs={12} sx={{ marginTop: ({ spacing }) => spacing(3) }} />
          <SelectedUnit {...listUnit} key={listUnit.id} />
        </Fragment>
      ))}
    </Grid>
  )
}
