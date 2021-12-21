import { useState } from 'react'
import { useInput } from '@caldwell619/react-hooks'
import Fuse from 'fuse.js'
import { useRecoilState } from 'recoil'

import { handleFilterAndSort, SortDirection } from 'utils'
import { ListUnit, sortChoiceMapAtom } from 'store'

export const useSearch = function <TData>({
  list,
  keys,
  sortOptions = defaultSortOptions as unknown as SortOption<TData>[],
  keyForPersistence,
}: UseSearchArgs<TData>) {
  const [sortChoiceMap, setSortChoiceMap] = useRecoilState(sortChoiceMapAtom)

  const [searchTerm, searchBind] = useInput('')
  const ListSearch = new Fuse(list, { keys, includeScore: true })

  const { sortConfigIndex, isAsc } = sortChoiceMap[keyForPersistence] || { sortConfigIndex: 0, isAsc: true }
  const sortConfig = sortOptions[sortConfigIndex]
  const searchResults = handleFilterAndSort({
    baseList: list,
    sortDirection: isAsc ? SortDirection.Asc : SortDirection.Desc,
    searchTerm,
    sortKey: sortConfig.key,
    FuseSearch: ListSearch,
  })

  const handleSortConfigIndexUpdate = () => {
    setSortChoiceMap(currentSortChoiceMap => {
      const newIndex = currentSortChoiceMap[keyForPersistence]?.sortConfigIndex + 1 === sortOptions.length ? 0 : 1
      return {
        ...currentSortChoiceMap,
        [keyForPersistence]: {
          ...(currentSortChoiceMap[keyForPersistence] || {}),
          sortConfigIndex: newIndex,
        },
      }
    })
  }

  const toggleSortOrder = () => {
    setSortChoiceMap(currentSortChoiceMap => {
      const isCurrentlyAsc = currentSortChoiceMap[keyForPersistence]?.isAsc
      return {
        ...currentSortChoiceMap,
        [keyForPersistence]: {
          ...(currentSortChoiceMap[keyForPersistence] || {}),
          isAsc: !isCurrentlyAsc,
        },
      }
    })
  }

  return {
    sortConfig,
    isAsc,
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
  keyForPersistence: string
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
