import { FC, useState } from 'react'
import { Box, Tab, Tabs, Grid } from '@mui/material'

export const ScrollTabs: FC<Props> = ({ tabs }) => {
  const [value, setValue] = useState(0)

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const View = tabs[value]?.View || null

  return (
    <>
      <Box sx={{ bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons='auto'
          aria-label='scrollable auto tabs example'
        >
          {tabs.map(({ label }) => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>
      </Box>
      {/* TODO: Swipeable Views */}
      <Grid spacing={4} sx={{ padding: ({ spacing }) => spacing(2) }} container item xs={12}>
        {View}
      </Grid>
    </>
  )
}

interface Props {
  tabs: {
    label: string
    View: JSX.Element
  }[]
}
