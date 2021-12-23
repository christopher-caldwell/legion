import { Dispatch, FC, SetStateAction } from 'react'
import { Dialog, DialogTitle, DialogContent } from '@mui/material'
import { UnitType } from 'store'

export const DisplayCard: FC<Props> = ({ setIsOpen, isOpen, unitType, imageSlug, title }) => {
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <img src={require(`assets/cards/empire/${unitType}/${imageSlug}.jpeg`)} />
      </DialogContent>
    </Dialog>
  )
}

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  unitType: UnitType
  imageSlug: string
  title: string
}
