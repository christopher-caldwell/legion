import { Dispatch, FC, forwardRef, ReactElement, SetStateAction } from 'react'
import { Dialog, AppBar, Toolbar, IconButton, Slide, DialogContent } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { TransitionProps } from '@mui/material/transitions'

export const FullScreenDialog: FC<Props> = ({ isOpen, setIsOpen, LeftAction, children }) => {
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Dialog sx={{ zIndex: 10000000 }} fullScreen open={isOpen} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar sx={{ justifyContent: LeftAction ? 'space-between' : 'flex-end', alignItems: 'center' }}>
          {LeftAction ? LeftAction : null}
          <IconButton color='inherit' onClick={handleClose} aria-label='close'>
            <CloseIcon color='action' />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

interface Props {
  LeftAction?: JSX.Element
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})
