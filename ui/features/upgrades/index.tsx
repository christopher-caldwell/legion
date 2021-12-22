import { FC } from 'react'
import { useRecoilState } from 'recoil'
import { styled, Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import { CardOption } from 'components'
import { listUnitActiveUpgradesAtom } from 'store'
import { humanizeWord, capitalize } from 'utils'
import { useDetermineEligibleUpgrades, useUpgrades } from './api'

export const UpgradeSelection: FC = () => {
  const [activeUpgrade, setActiveUpgrade] = useRecoilState(listUnitActiveUpgradesAtom)
  if (!activeUpgrade)
    throw new Error('[UpgradeSelection]: Trying to access upgrade selection without an active upgrade')
  const { addUpgrade } = useUpgrades(activeUpgrade.id)
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
      {eligibleUpgrades.map(upgrade => {
        return (
          <CardOption
            key={upgrade.title}
            title={upgrade.title}
            points={upgrade.points}
            CardImage={<CardImage src={require(`assets/cards/upgrades/${upgrade.type}/${upgrade.imageSlug}.png`)} />}
            ActionIcon={<AddIcon />}
            onAction={() => {
              addUpgrade(upgrade)
              // race condition?
              setActiveUpgrade(undefined)
            }}
          />
        )
      })}
    </Grid>
  )
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
