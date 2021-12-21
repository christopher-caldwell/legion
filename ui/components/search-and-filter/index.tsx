import { FC } from 'react'
import { UseInputBind } from '@caldwell619/react-hooks'
import { IconButton, Button, Grid, TextField, InputAdornment } from '@mui/material'
import SortIcon from '@mui/icons-material/ArrowUpward'
import SearchIcon from '@mui/icons-material/Search'
import Close from '@mui/icons-material/Close'

import { SortOption } from './useSearch'

export const SearchAndFilter = function <TData>({
  searchBind,
  toggleSortOrder,
  LeftDisplay,
  isAsc,
  handleSortNameUpdate,
  sortConfig,
}: Props<TData>) {
  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <SearchField {...searchBind} />
      </Grid>
      <Grid item xs={9} container alignItems='center'>
        {LeftDisplay ? LeftDisplay : null}
      </Grid>
      <Grid item xs={1} container alignItems='center'>
        <IconButton onClick={toggleSortOrder}>
          <SortIcon sx={{ transform: `rotate(${isAsc ? 0 : 180}deg)` }} fontSize='small' />
        </IconButton>
      </Grid>
      <Grid item xs={2} container alignItems='center' justifyContent='flex-end'>
        <Button variant='text' size='small' onClick={handleSortNameUpdate}>
          {sortConfig.label}
        </Button>
      </Grid>
    </Grid>
  )
}

interface Props<TData> {
  toggleSortOrder: () => void
  searchBind: UseInputBind
  /** Display given to the left side of the sorting buttons */
  LeftDisplay?: JSX.Element
  isAsc: boolean
  handleSortNameUpdate: () => void
  sortConfig: SortOption<TData>
}

const SearchField: FC<UseInputBind> = props => {
  const { onChange } = props
  //@ts-ignore - Don't need the full event to result - Doing it this way so an additional prop is not required
  const resetInput = () => onChange({ target: { value: '' } })
  return (
    <TextField
      label='Search'
      {...props}
      fullWidth
      InputProps={{
        startAdornment: (
          <IconButton aria-label='search icon' edge='start'>
            <SearchIcon />
          </IconButton>
        ),
        endAdornment: props.value ? (
          <InputAdornment position='end'>
            <IconButton aria-label='clear input' edge='end' onClick={resetInput}>
              <Close />
            </IconButton>
          </InputAdornment>
        ) : undefined,
      }}
    />
  )
}

export * from './useSearch'
