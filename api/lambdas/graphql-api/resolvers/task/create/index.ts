import { Task, MutationCreateTaskArgs, TaskStatus } from '@generated/index'
import { Resolver } from '@/graphql-api/interfaces'
import { createActivity } from '@/graphql-api/resolvers/activity'
import query from './query.sql'

export const createTask: Resolver<Task, MutationCreateTaskArgs> = async (
  { content, title, projectId, priority, dueDate },
  { Client }
) => {
  const { rows } = await Client.query<{ id: number }>(query, [title, content, priority, projectId, dueDate])
  const taskId = rows[0].id
  await createActivity(
    {
      title: `You created a new task: <strong>${title}</strong>`,
      projectId
    },
    { Client }
  )
  return {
    id: taskId,
    title,
    content,
    status: TaskStatus.Backlog,
    dueDate,
    priority,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}
