import { useRecoilValue } from 'recoil'
import { slugger } from '@caldwell619/github-slugger'

import { uniqueUpgradesSelector, Upgrade, ListUnitActiveUpgrade, listAtom } from 'store'
import { allUpgrades } from 'constants/upgrades'

export const useDetermineEligibleUpgrades = ({ id, upgrade }: ListUnitActiveUpgrade) => {
  const list = useRecoilValue(listAtom)
  const uniqueUpgrades = useRecoilValue(uniqueUpgradesSelector)
  const targetedUnit = list.find(({ id: unitId }) => unitId === id)
  if (!targetedUnit) throw new Error('[useDetermineEligibleUpgrades]: Cannot find target unit')
  const eligibleUpgrades: Upgrade[] = []
  for (const availableUpgrade of allUpgrades) {
    const restriction = availableUpgrade.restriction || {}
    if (uniqueUpgrades[availableUpgrade.title]) continue
    if (availableUpgrade.type !== upgrade) continue

    if (restriction.alignment && restriction.alignment !== targetedUnit.alignment) continue
    if (restriction.faction && restriction.faction !== targetedUnit.faction) continue
    if (restriction.isOnlyForVehicles && restriction.vehicleType !== targetedUnit.vehicleType) continue
    if (restriction.unit && !restriction.unit.includes(slugger(targetedUnit.title))) continue
    if (restriction.vehicle && restriction.vehicle !== slugger(targetedUnit.title)) continue
    if (restriction.isOnlyForNonEmplacement && restriction.isOnlyForNonEmplacement !== targetedUnit.isEmplacement)
      continue
    if (restriction.isOnlyForDroids && restriction.isOnlyForDroids !== targetedUnit.isDroid) continue

    eligibleUpgrades.push(availableUpgrade)
  }
  return { eligibleUpgrades, unit: targetedUnit }
}
