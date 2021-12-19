import { FC } from 'react'
import { styled } from '@mui/material'

export const ViewScreenCenterBox: FC<Props> = ({ children, height }) => {
  return <Container height={height}>{children}</Container>
}

interface Props {
  height?: string
}

const Container = styled('div')<{ height?: string }>`
  height: ${({ height = '100%' }) => height};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
