import { Task, QueryTasksByProjectArgs } from '@generated/index'
import { Resolver } from '@/graphql-api/interfaces'
import query from './query.sql'

export const tasksByProject: Resolver<Task[], QueryTasksByProjectArgs> = async ({ projectId }, { Client }) => {
  const { rows } = await Client.query<Task>(query, [projectId])
  return rows
}
