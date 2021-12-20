import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { styled, Grid } from '@mui/material'

import AddIcon from '@mui/icons-material/Add'
import { slugger } from '@caldwell619/github-slugger'

import { CardOption } from 'components'
import { Upgrade, listUnitActiveUpgradesAtom, ListUnitActiveUpgrade, listAtom } from 'store'
import { allUpgrades } from 'constants/upgrades'
import { humanizeWord, capitalize } from 'utils'

export const UpgradeSelection: FC = () => {
  const activeUpgrade = useRecoilValue(listUnitActiveUpgradesAtom)
  if (!activeUpgrade) throw new Error('Nope')
  const {
    eligibleUpgrades,
    unit: { title },
  } = useDetermineEligibleUpgrades(activeUpgrade)
  const upgradeName = capitalize(humanizeWord(activeUpgrade.upgrade))

  return (
    <Grid container spacing={2} sx={{ paddingBottom: '10vh' }}>
      <Grid item xs={12}>
        <Title>
          Adding {upgradeName} to {title}
        </Title>
      </Grid>
      {eligibleUpgrades.map(upgrade => (
        <CardOption
          key={upgrade.title}
          title={upgrade.title}
          points={upgrade.points}
          CardImage={<CardImage src={require(`assets/cards/upgrades/${upgrade.type}/${upgrade.imageSlug}.png`)} />}
          ActionIcon={<AddIcon />}
          onAction={() => {
            console.log('Click')
          }}
        />
      ))}
    </Grid>
  )
}

const useDetermineEligibleUpgrades = ({ id, upgrade }: ListUnitActiveUpgrade) => {
  const list = useRecoilValue(listAtom)
  const targetedUnit = list.find(({ id: unitId }) => unitId === id)
  if (!targetedUnit) throw new Error('[useDetermineEligibleUpgrades]: Cannot find target unit')
  const eligibleUpgrades: Upgrade[] = []
  for (const availableUpgrade of allUpgrades) {
    const restriction = availableUpgrade.restriction || {}
    if (availableUpgrade.type !== upgrade) continue

    if (restriction.alignment && restriction.alignment !== targetedUnit.alignment) continue
    if (restriction.faction && restriction.faction !== targetedUnit.faction) continue
    if (restriction.isOnlyForVehicles && restriction.vehicleType !== targetedUnit.vehicleType) continue
    if (restriction.unit && restriction.unit !== slugger(targetedUnit.title)) continue
    if (restriction.vehicle && restriction.vehicle !== slugger(targetedUnit.title)) continue
    if (restriction.isOnlyForNonEmplacement && restriction.isOnlyForNonEmplacement !== targetedUnit.isEmplacement)
      continue
    if (restriction.isOnlyForDroids && restriction.isOnlyForDroids !== targetedUnit.isDroid) continue

    eligibleUpgrades.push(availableUpgrade)
  }
  return { eligibleUpgrades, unit: targetedUnit }
}

const Title = styled('h1')`
  margin: 0;
  font-size: 1.1em;
`

const CardImage = styled('img')`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  object-fit: cover;
  object-position: top;
`
