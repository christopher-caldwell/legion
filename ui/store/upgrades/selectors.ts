import { selector } from 'recoil'

import { SelectorKeys, ListUpgrade, upgradesAtom } from 'store'

export const uniqueUpgradesSelector = selector({
  key: SelectorKeys.UniqueUpgrades,
  get({ get }) {
    const upgradesMap = get(upgradesAtom)
    const allUpgrades = Object.values(upgradesMap).reduce((upgrades, currentSet) => [...upgrades, ...currentSet], [])
    const uniqueUpgrades: Record<string, ListUpgrade> = {}
    for (const upgrade of allUpgrades) {
      if (upgrade.isUnique) uniqueUpgrades[upgrade.title] = upgrade
    }
    return uniqueUpgrades
  },
})
