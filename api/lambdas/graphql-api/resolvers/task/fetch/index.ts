import { Task, QueryTaskArgs } from '@generated/index'
import { Resolver } from '@/graphql-api/interfaces'
import query from './query.sql'

export const task: Resolver<Task, QueryTaskArgs> = async ({ id }, { Client }) => {
  const { rows } = await Client.query<Task>(query, [id])
  if (!rows[0]) throw new Error('Not found')
  return rows[0]
}
