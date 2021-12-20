import { FC } from 'react'
import { Typography, Grid, IconButton } from '@mui/material'
import Delete from '@mui/icons-material/Delete'
import RightArrow from '@mui/icons-material/ChevronRight'
import { useSetRecoilState } from 'recoil'

import { CardOption } from 'components'
import { ListUnit, listUnitActiveUpgradesAtom } from 'store'
import { useListBuilder } from 'features/list-builder/api'
import { humanizeWord, capitalize } from 'utils'

export const SelectedUnit: FC<ListUnit> = ({ id, unitType, title, subtitle, points, imageSlug, upgradeSlots }) => {
  const { removeUnit } = useListBuilder()
  const setActiveUpgrade = useSetRecoilState(listUnitActiveUpgradesAtom)
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
      {upgradeSlots.map((slot, index) => (
        <CardOption
          key={slot + index}
          title={capitalize(humanizeWord(slot))}
          CardImage={<img style={{ width: '30px' }} src={require(`assets/upgrades/${slot}.png`)} />}
          ActionIcon={<RightArrow />}
          onAction={() => setActiveUpgrade({ id, upgrade: slot })}
          titleStyles={{ color: ({ palette }) => palette.grey[700], fontSize: '0.95em' }}
        />
      ))}
    </>
  )
}
