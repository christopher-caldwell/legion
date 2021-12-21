import { FC } from 'react'
import { Typography, Grid, IconButton } from '@mui/material'
import Delete from '@mui/icons-material/Delete'
import RightArrow from '@mui/icons-material/ChevronRight'
import { useSetRecoilState } from 'recoil'

import { useListBuilder } from 'features/list-builder/api'
import { useUpgrades } from 'features/upgrades/api'
import { CardOption } from 'components'
import { ListUnit, listUnitActiveUpgradesAtom } from 'store'
import { humanizeWord, capitalize } from 'utils'

export const SelectedUnit: FC<ListUnit> = ({ id, unitType, title, subtitle, points, imageSlug, upgradeSlots }) => {
  const { removeUnit } = useListBuilder()
  const setActiveUpgrade = useSetRecoilState(listUnitActiveUpgradesAtom)
  const { getEquippedUpgrade, removeUpgrade } = useUpgrades(id)
  return (
    <>
      <CardOption
        onAction={() => removeUnit(id)}
        ActionIcon={<Delete color='error' />}
        points={points}
        title={title}
        subtitle={subtitle}
        CardImage={<img src={require(`assets/units/empire/${unitType}/${imageSlug}.webp`)} />}
      />
      {upgradeSlots.map((slot, index) => {
        const equippedUpgrade = getEquippedUpgrade(index)
        return (
          <CardOption
            key={slot + index}
            title={equippedUpgrade?.title || capitalize(humanizeWord(slot))}
            CardImage={<img style={{ width: '30px' }} src={require(`assets/upgrades/${slot}.png`)} />}
            ActionIcon={equippedUpgrade ? <Delete /> : <RightArrow />}
            onAction={() => {
              equippedUpgrade ? removeUpgrade(slot) : setActiveUpgrade({ id, upgrade: slot })
            }}
            titleStyles={{
              color: ({ palette }) => (equippedUpgrade ? palette.grey[700] : palette.text.primary),
              fontSize: '0.95em',
            }}
          />
        )
      })}
    </>
  )
}
