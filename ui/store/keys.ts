export enum AtomKeys {
  List = 'list',
  ListName = 'list-name',
}

export enum SelectorKeys {
  HasChosenCommander = 'has-chosen-commander',
  ListPoints = 'list-points'
}

export const ensureKeysAreUnique = <KeyType>(keys: KeyType): boolean => {
  const atomKeys = Object.values(keys)
  const uniqueAtomKeysLength = new Set(atomKeys).size

  return uniqueAtomKeysLength === atomKeys.length
}

const areAtomKeysUnique = ensureKeysAreUnique(AtomKeys)
const areSelectorKeysUnique = ensureKeysAreUnique(SelectorKeys)

if (!areAtomKeysUnique || !areSelectorKeysUnique) throw new Error('Recoil keys are not all unique')
