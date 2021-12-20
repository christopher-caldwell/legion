import { FC } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Grid, Button } from '@mui/material'
import BackIcon from '@mui/icons-material/ChevronLeft'

import { Upgrade, listUnitActiveUpgradesAtom, ListUnitActiveUpgrade, listAtom, Alignment, Faction } from 'store'
import { allUpgrades } from 'constants/upgrades'

export const UpgradeSelection: FC = () => {
  const [activeUpgrade, setActiveUpgrade] = useRecoilState(listUnitActiveUpgradesAtom)
  if (!activeUpgrade) throw new Error('Nope')
  const eligibleUpgrades = useDetermineEligibleUpgrades(activeUpgrade)

  return (
    <Grid container>
      <Grid item xs={12}>
        <Button startIcon={<BackIcon />} variant='text' onClick={() => setActiveUpgrade(undefined)}>
          Back
        </Button>
      </Grid>
      <Grid item xs={12}>
        {eligibleUpgrades.map(upgrade => (
          <div key={upgrade.title}>{upgrade.title}</div>
        ))}
      </Grid>
    </Grid>
  )
}

const useDetermineEligibleUpgrades = ({ id, upgrade }: ListUnitActiveUpgrade) => {
  const list = useRecoilValue(listAtom)
  const targetedUnit = list.find(({ id: unitId }) => unitId === id)
  if (!targetedUnit) throw new Error('[useDetermineEligibleUpgrades]: Cannot find target unit')
  const passableUpgrades: Upgrade[] = []
  for (const availableUpgrade of allUpgrades) {
    const restriction = availableUpgrade.restriction || {}
    if (availableUpgrade.type !== upgrade) continue
    if (restriction.alignment && restriction.alignment !== Alignment.Dark) continue
    if (restriction.faction && restriction.faction !== Faction.Empire) continue
    passableUpgrades.push(availableUpgrade)
  }
  return passableUpgrades
}
