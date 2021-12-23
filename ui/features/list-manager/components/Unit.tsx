import { FC } from 'react'
import { Checkbox } from '@mui/material'
import Delete from '@mui/icons-material/Delete'
import RightArrow from '@mui/icons-material/ChevronRight'
import { useSetRecoilState } from 'recoil'

import { useListBuilder } from 'features/list-builder/api'
import { useUpgrades } from 'features/upgrades/api'
import { CardImage } from 'features/upgrades'
import { CardOption } from 'components'
import { ListUnit, listUnitActiveUpgradesAtom } from 'store'
import { humanizeWord, capitalize } from 'utils'

export const SelectedUnit: FC<ListUnit> = ({
  id,
  unitType,
  title,
  subtitle,
  points,
  imageSlug,
  upgradeSlots,
  counterpart,
}) => {
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
        CardImage={<CardImage height='40px' src={require(`assets/units/empire/${unitType}/${imageSlug}.webp`)} />}
      />
      {counterpart ? (
        <CardOption
          title={counterpart.title}
          points={counterpart.points}
          CardImage={
            <CardImage height='30px' src={require(`assets/units/empire/counterpart/${counterpart.imageSlug}.jpeg`)} />
          }
          ActionIcon={<Checkbox sx={{ width: ({ spacing }) => spacing(3) }} />}
          onAction={() => {
            console.log('Counter part')
          }}
        />
      ) : null}
      {upgradeSlots.map((slot, index) => {
        const equippedUpgrade = getEquippedUpgrade(index)
        return (
          <CardOption
            key={slot + index}
            imageGridProps={{ justifyContent: 'center' }}
            title={equippedUpgrade?.title || capitalize(humanizeWord(slot))}
            CardImage={<CardImage height='30px' src={require(`assets/upgrades/${slot}.png`)} />}
            ActionIcon={equippedUpgrade ? <Delete color='error' /> : <RightArrow />}
            onAction={() => {
              equippedUpgrade
                ? removeUpgrade(equippedUpgrade.id)
                : setActiveUpgrade({ id, upgrade: slot, slotIndex: index })
            }}
            titleStyles={{
              color: ({ palette }) => (equippedUpgrade ? palette.text.primary : palette.grey[500]),
              fontSize: '0.95em',
            }}
          />
        )
      })}
    </>
  )
}
