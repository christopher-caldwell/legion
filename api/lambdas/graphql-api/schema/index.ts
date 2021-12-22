import { buildSchema } from 'graphql'
import { DateTypeDefinition } from 'graphql-scalars'

import { stitchSchema } from '@/graphql-api/util'

import { SharedSchema } from './shared'
import { ProjectSchema, ProjectQueries, ProjectMutations } from './project'
import { ContractSchema, ContractQueries, ContractMutations } from './contract'
import { ProposalSchema, ProposalQueries, ProposalMutations } from './proposal'
import { ClientSchema, ClientQueries, ClientMutations } from './client'
import { TaskSchema, TaskQueries, TaskMutations } from './task'
import { InvoiceSchema, InvoiceQueries, InvoiceMutations } from './invoice'
import { NoteSchema, NoteQueries, NoteMutations } from './note'
import { ActivitySchema, ActivityQueries, ActivityMutations } from './activity'

const schemas = stitchSchema(
  SharedSchema,
  DateTypeDefinition,
  ProjectSchema,
  ContractSchema,
  ProposalSchema,
  ClientSchema,
  TaskSchema,
  InvoiceSchema,
  NoteSchema,
  ActivitySchema
)
const queries = `#graphql
  type Query {
    ${stitchSchema(
      ProjectQueries,
      ContractQueries,
      ProposalQueries,
      ClientQueries,
      TaskQueries,
      InvoiceQueries,
      NoteQueries,
      ActivityQueries
    )}
  }
`
const mutations = `#graphql
  type Mutation {
    ${stitchSchema(
      ProjectMutations,
      ContractMutations,
      ProposalMutations,
      ClientMutations,
      TaskMutations,
      InvoiceMutations,
      NoteMutations,
      ActivityMutations
    )}
  }
`

export const schema = buildSchema(stitchSchema(schemas, queries, mutations))

export * from '../resolvers'
