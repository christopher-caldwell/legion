import { FC } from 'react'
import { Theme, SxProps, Typography, IconButton, Grid, styled } from '@mui/material'

export const CardOption: FC<Props> = ({
  title,
  subtitle,
  points,
  CardImage,
  canTakeAction = true,
  canTakeActionBasedOnPoints = true,
  onAction,
  ActionIcon,
  titleStyles,
}) => {
  return (
    <Grid container item xs={12}>
      <Grid item xs={2} container alignItems='center'>
        {CardImage}
      </Grid>
      <Grid item xs={8} alignItems='center' container justifyContent='space-between'>
        <LabelContainer>
          <Label canTakeAction={canTakeAction} noWrap variant='h6' sx={{ fontSize: '1.1em', ...titleStyles }}>
            {title}
          </Label>
          {subtitle ? (
            <Label canTakeAction={canTakeAction} noWrap variant='body2'>
              {subtitle}
            </Label>
          ) : null}
        </LabelContainer>
        {points ? (
          <Points
            canTakeActionBasedOnPoints={canTakeActionBasedOnPoints}
            canTakeAction={canTakeAction}
            variant='subtitle2'
          >
            {points}
          </Points>
        ) : null}
      </Grid>
      <Grid item xs={2} alignItems='center' justifyContent='flex-end' container>
        <IconButton disabled={!canTakeAction} onClick={onAction}>
          {ActionIcon}
        </IconButton>
      </Grid>
    </Grid>
  )
}

interface Props {
  title: string
  subtitle?: string
  points?: number
  CardImage: JSX.Element
  canTakeAction?: boolean
  canTakeActionBasedOnPoints?: boolean
  onAction: () => void
  ActionIcon: JSX.Element
  titleStyles?: SxProps<Theme>
}

export const Points = styled(Typography, {
  shouldForwardProp: prop => prop !== 'canTakeAction' && prop !== 'canTakeActionBasedOnPoints',
})<{ canTakeActionBasedOnPoints?: boolean; canTakeAction?: boolean }>`
  color: ${({ canTakeActionBasedOnPoints = true, theme: { palette } }) =>
    canTakeActionBasedOnPoints ? palette.success.main : palette.error.main};
  opacity: ${({ canTakeAction = true }) => (canTakeAction ? 1 : 0.4)};
`

export const Label = styled(Typography, { shouldForwardProp: prop => prop !== 'canTakeAction' })<{
  canTakeAction?: boolean
}>`
  color: ${({ canTakeAction = true, theme: { palette } }) =>
    canTakeAction ? palette.text.primary : palette.text.disabled};
  width: 100%;
  font-weight: normal;
`
export const LabelContainer = styled('div')`
  width: 85%;
`
