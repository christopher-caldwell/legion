import { useRecoilState } from 'recoil'
import { v4 as uuid } from 'uuid'

import { Upgrade, upgradesAtom } from 'store'

export const useUpgrades = (id: string) => {
  const [upgrades, setUpgrades] = useRecoilState(upgradesAtom)

  const addUpgrade = (upgrade: Upgrade, slotIndex: number) => {
    setUpgrades(currentUpgrades => ({
      ...currentUpgrades,
      [id]: [...(currentUpgrades[id] || []), { id: uuid(), slotIndex, ...upgrade }],
    }))
  }

  const removeUpgrade = (upgradeId: string) => {
    setUpgrades(currentUpgrades => {
      const mutableCurrentUpgrades = { ...currentUpgrades }
      const thisUnitsMutableUpgrades = [...mutableCurrentUpgrades[id]]
      const indexOfUpgrade = thisUnitsMutableUpgrades.findIndex(({ id }) => id === upgradeId)
      if (!indexOfUpgrade) throw new Error(`[useUpgrades]: Cannot find upgrade ${upgradeId} to remove`)
      thisUnitsMutableUpgrades.splice(indexOfUpgrade, 1)
      mutableCurrentUpgrades[id] = thisUnitsMutableUpgrades
      return mutableCurrentUpgrades
    })
  }

  const getEquippedUpgrade = (slotIndex: number): Upgrade | undefined => {
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
