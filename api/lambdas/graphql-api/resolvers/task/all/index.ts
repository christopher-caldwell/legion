import { Task } from '@generated/index'
import { Resolver } from '@/graphql-api/interfaces'
import query from './query.sql'

export const tasks: Resolver<Task[]> = async (_, { Client }) => {
  const { rows } = await Client.query<Task>(query)
  return rows
}
