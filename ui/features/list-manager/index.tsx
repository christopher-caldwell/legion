import { FC, useState } from 'react'
import { Typography, Grid, styled, Card as MuiCard, CardContent, CardHeader } from '@mui/material'
import { useRecoilValue } from 'recoil'

import { listPointsLimit } from 'constants/list'
import { listAtom, listNameAtom, listPointsSelector } from 'store'
import { FullScreenDialog } from 'components'
import { SelectedUnits } from './components'

export const ListManager: FC = () => {
  const listName = useRecoilValue(listNameAtom)
  const listPoints = useRecoilValue(listPointsSelector)
  const list = useRecoilValue(listAtom)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Card onClick={() => setIsOpen(true)}>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <Typography noWrap sx={{ width: '100%' }} variant='subtitle1'>
              {listName}
            </Typography>
          </Grid>
          <Grid item xs={2} container justifyContent='flex-end'>
            <Typography variant='subtitle1'>
              {listPoints}/{listPointsLimit}
            </Typography>
          </Grid>
          <Grid item xs={1} container justifyContent='flex-end'>
            <Typography variant='subtitle1'>{list.length}</Typography>
          </Grid>
        </Grid>
      </Card>
      <FullScreenDialog isOpen={isOpen} setIsOpen={setIsOpen}>
        <SelectedUnits />
      </FullScreenDialog>
    </>
  )
}

const Card = styled(MuiCard)`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: ${({ theme: { spacing } }) => spacing(1.5)};
  z-index: 100000000000;
`
