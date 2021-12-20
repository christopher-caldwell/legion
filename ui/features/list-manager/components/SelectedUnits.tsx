import { FC, useState } from 'react'
import { IconButton, Button, Grid, TextField, InputAdornment } from '@mui/material'
import SortIcon from '@mui/icons-material/ArrowUpward'
import SearchIcon from '@mui/icons-material/Search'
import { useInput, UseInputBind } from '@caldwell619/react-hooks'
import Fuse from 'fuse.js'

import { ListUnit } from 'store'
import { useListBuilder } from 'features/list-builder/api'
import { ViewScreenCenterBox } from 'components'
import { handleFilterAndSort, SortDirection } from 'utils'
import { SelectedUnit } from './Unit'

export const SelectedUnits: FC = () => {
  const [sortConfigIndex, setSortConfigIndex] = useState(0)
  const [isAsc, setIsAsc] = useState(true)
  const { list } = useListBuilder()
  const [searchTerm, searchBind] = useInput('')
  const ListSearch = new Fuse(list, { keys: ['points', 'title'], includeScore: true })

  const handleSortConfigIndexUpdate = () => {
    setSortConfigIndex(currentSortConfigIndex => {
      if (currentSortConfigIndex + 1 === sortOptions.length) return 0
      return currentSortConfigIndex + 1
    })
  }

  const sortConfig = sortOptions[sortConfigIndex]
  const toggleSortOrder = () => {
    setIsAsc(isCurrentlyAsc => !isCurrentlyAsc)
  }

  const searchResults = handleFilterAndSort({
    baseList: list,
    sortDirection: isAsc ? SortDirection.Asc : SortDirection.Desc,
    searchTerm,
    sortKey: sortConfig.key,
    FuseSearch: ListSearch,
  })

  if (!list.length) {
    return <ViewScreenCenterBox height='80%'>Such Empty</ViewScreenCenterBox>
  }
  return (
    <Grid container spacing={0} sx={{ paddingBottom: '10vh' }} alignItems='center'>
      <Grid item xs={12}>
        <SearchField {...searchBind} />
      </Grid>
      <Grid item xs={9}>
        {list.length} Activation{list.length === 1 ? '' : 's'}
      </Grid>
      <Grid item xs={1} container alignItems='center'>
        <IconButton onClick={toggleSortOrder}>
          <SortIcon sx={{ transform: `rotate(${isAsc ? 0 : 180}deg)` }} fontSize='small' />
        </IconButton>
      </Grid>
      <Grid item xs={2} container alignItems='center' justifyContent='flex-end'>
        <Button variant='text' size='small' onClick={handleSortConfigIndexUpdate}>
          {sortConfig.label}
        </Button>
      </Grid>
      {searchResults.map(listUnit => (
        <>
          <Grid item xs={12} sx={{ marginTop: ({ spacing }) => spacing(4) }} />
          <SelectedUnit {...listUnit} key={listUnit.id} />
        </>
      ))}
    </Grid>
  )
}

const sortOptions: { label: string; key: keyof ListUnit }[] = [
  {
    label: 'Type',
    key: 'unitType',
  },
  {
    label: 'Recent',
    key: 'updatedAt',
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

const SearchField: FC<UseInputBind> = props => {
  return (
    <TextField
      label='Search'
      {...props}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton aria-label='search icon' edge='end'>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}
