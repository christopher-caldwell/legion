import { Dispatch, FC, forwardRef, ReactElement, SetStateAction, useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

export const FullScreenDialog: FC<Props> = ({ isOpen, setIsOpen, children }) => {
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Dialog sx={{ zIndex: 100000 }} fullScreen open={isOpen} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <IconButton color='inherit' onClick={handleClose} aria-label='close'>
            <CloseIcon color='action' />
          </IconButton>
        </Toolbar>
      </AppBar>
      {children}
    </Dialog>
  )
}

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
