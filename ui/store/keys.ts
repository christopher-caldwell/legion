export enum AtomKeys {
  List = 'list',
  ListName = 'list-name',
  ListUnitActiveUpgrade = 'list-unit-active-upgrade',
  Upgrades = 'upgrades',
  SortConfigMap = 'sort-config-map',
}

export enum SelectorKeys {
  HasChosenCommander = 'has-chosen-commander',
  ListPoints = 'list-points',
}

export const ensureKeysAreUnique = <KeyType>(keys: KeyType): boolean => {
  const atomKeys = Object.values(keys)
  const uniqueAtomKeysLength = new Set(atomKeys).size

  return uniqueAtomKeysLength === atomKeys.length
}

const areAtomKeysUnique = ensureKeysAreUnique(AtomKeys)
const areSelectorKeysUnique = ensureKeysAreUnique(SelectorKeys)

if (!areAtomKeysUnique || !areSelectorKeysUnique) throw new Error('Recoil keys are not all unique')
