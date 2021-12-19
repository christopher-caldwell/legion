import { FC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Layout } from '@caldwell619/component-toolkit'

import { Options } from 'features/list-builder'
import { ListManager } from 'features/list-manager'

const FactionBuilder: FC<Props> = ({ faction }) => {
  return (
    <Layout seo={{ title: faction }}>
      <Options />
      <ListManager />
    </Layout>
  )
}

export default FactionBuilder

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { faction: 'empire' } }, { params: { faction: 'rebel' } }],
    fallback: false,
  }
}

type Props = { faction: 'rebel' | 'empire' }
export const getStaticProps: GetStaticProps<{ faction: 'rebel' | 'empire' }> = async context => {
  const { faction } = context.params || {}
  if (faction !== 'rebel' && faction !== 'empire') throw new Error('Faction is not supported')
  return {
    props: {
      faction,
    },
  }
}
