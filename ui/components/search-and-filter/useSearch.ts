import { useState } from 'react'
import { useInput } from '@caldwell619/react-hooks'
import Fuse from 'fuse.js'

import { handleFilterAndSort, SortDirection } from 'utils'
import { ListUnit } from 'store'

export const useSearch = function <TData>({
  list,
  keys,
  sortOptions = defaultSortOptions as unknown as SortOption<TData>[],
}: UseSearchArgs<TData>) {
  const [sortConfigIndex, setSortConfigIndex] = useState(0)
  const [isAsc, setIsAsc] = useState(true)
  const [searchTerm, searchBind] = useInput('')
  const ListSearch = new Fuse(list, { keys, includeScore: true })

  const sortConfig = sortOptions[sortConfigIndex]
  const searchResults = handleFilterAndSort({
    baseList: list,
    sortDirection: isAsc ? SortDirection.Asc : SortDirection.Desc,
    searchTerm,
    sortKey: sortConfig.key,
    FuseSearch: ListSearch,
  })

  const handleSortConfigIndexUpdate = () => {
    setSortConfigIndex(currentSortConfigIndex => {
      if (currentSortConfigIndex + 1 === sortOptions.length) return 0
      return currentSortConfigIndex + 1
    })
  }

  const toggleSortOrder = () => {
    setIsAsc(isCurrentlyAsc => !isCurrentlyAsc)
  }

  return {
    sortConfig,
    setSortConfigIndex,
    isAsc,
    setIsAsc,
    searchTerm,
    searchBind,
    toggleSortOrder,
    searchResults,
    handleSortConfigIndexUpdate,
  }
}

interface UseSearchArgs<TData> {
  list: TData[]
  /** Keys to be passed to the Fuse search */
  keys: string[]
  sortOptions?: SortOption<TData>[]
}

export interface SortOption<TData> {
  label: string
  key: keyof TData
}
export const defaultSortOptions: SortOption<ListUnit>[] = [
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
