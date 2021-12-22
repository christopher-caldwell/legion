import { DateScalar } from './date'
import * as projectResolvers from './project'
import * as clientResolvers from './client'
import * as proposalResolvers from './proposal'
import * as activityResolvers from './activity'
import * as taskResolvers from './task'
import * as notesResolvers from './notes'

export const resolvers = {
  ...projectResolvers,
  ...clientResolvers,
  ...proposalResolvers,
  ...activityResolvers,
  ...taskResolvers,
  ...notesResolvers,
  Date: DateScalar
}
