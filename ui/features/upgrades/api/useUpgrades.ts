import { useRecoilState, useRecoilValue } from 'recoil'
import { v4 as uuid } from 'uuid'

import { listUnitActiveUpgradesAtom, ListUpgrade, Upgrade, upgradesAtom } from 'store'

export const useUpgrades = (id: string) => {
  const [upgrades, setUpgrades] = useRecoilState(upgradesAtom)
  const activeUpgrade = useRecoilValue(listUnitActiveUpgradesAtom)
  console.log('upgrades', upgrades)
  const addUpgrade = (upgrade: Upgrade) => {
    if (activeUpgrade?.slotIndex === undefined) {
      throw new Error('[useUpgrades]: Trying to add an upgrade without an active upgrade slot')
    }
    setUpgrades(currentUpgrades => ({
      ...currentUpgrades,
      [id]: [...(currentUpgrades[id] || []), { id: uuid(), slotIndex: activeUpgrade?.slotIndex, ...upgrade }],
    }))
  }

  const removeUpgrade = (upgradeId: string) => {
    setUpgrades(currentUpgrades => {
      const mutableCurrentUpgrades = { ...currentUpgrades }
      const thisUnitsMutableUpgrades = [...mutableCurrentUpgrades[id]]
      const indexOfUpgrade = thisUnitsMutableUpgrades.findIndex(({ id }) => id === upgradeId)
      if (indexOfUpgrade === undefined) throw new Error(`[useUpgrades]: Cannot find upgrade ${upgradeId} to remove`)
      thisUnitsMutableUpgrades.splice(indexOfUpgrade, 1)
      mutableCurrentUpgrades[id] = thisUnitsMutableUpgrades
      return mutableCurrentUpgrades
    })
  }

  const getEquippedUpgrade = (slotIndex: number): ListUpgrade | undefined => {
    const targetUnitUpgrades = upgrades[id]
    if (!targetUnitUpgrades) return undefined
    const equippedUpgrade = targetUnitUpgrades.find(({ slotIndex: targetSlotIndex }) => targetSlotIndex === slotIndex)
    return equippedUpgrade
  }

  return {
    addUpgrade,
    removeUpgrade,
    upgrades,
    getEquippedUpgrade,
  }
}
