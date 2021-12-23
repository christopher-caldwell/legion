import { useRecoilValue } from 'recoil'
import { slugger } from '@caldwell619/github-slugger'

import { uniqueUpgradesSelector, Upgrade, ListUnitActiveUpgrade, listAtom } from 'store'
import { upgradeMap } from 'constants/upgrades'

// This is gross, but there are so many edge cases, this is the simplest and most effective way to catch them all
export const useDetermineEligibleUpgrades = ({ id, upgrade }: ListUnitActiveUpgrade) => {
  const list = useRecoilValue(listAtom)
  const uniqueUpgrades = useRecoilValue(uniqueUpgradesSelector)
  const targetedUnit = list.find(({ id: unitId }) => unitId === id)
  if (!targetedUnit) throw new Error('[useDetermineEligibleUpgrades]: Cannot find target unit')

  const eligibleUpgrades: Upgrade[] = []
  const activeUpgradeOptions = upgradeMap[upgrade]

  for (const availableUpgrade of activeUpgradeOptions) {
    const restriction = availableUpgrade.restriction || {}

    // Unique
    if (uniqueUpgrades[availableUpgrade.title]) continue
    if (restriction.isOnlyForForceUsers && restriction.isOnlyForForceUsers !== targetedUnit.isForceUser) continue
    if (restriction.alignment && restriction.alignment !== targetedUnit.alignment) continue
    if (restriction.faction && restriction.faction !== targetedUnit.faction) continue
    if (restriction.isOnlyForVehicles && restriction.vehicleType !== targetedUnit.vehicleType) continue
    if (restriction.unit && !restriction.unit.includes(slugger(targetedUnit.title))) continue
    if (restriction.isOnlyForNonEmplacement && restriction.isOnlyForNonEmplacement !== targetedUnit.isEmplacement)
      continue
    if (restriction.isOnlyForDroids && restriction.isOnlyForDroids !== targetedUnit.isDroid) continue

    eligibleUpgrades.push(availableUpgrade)
  }
  return { eligibleUpgrades, unit: targetedUnit }
}
