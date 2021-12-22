export const SharedSchema = `#graphql
  enum SortDirection {
    asc
    desc
  }

  type MutationResult {
    status: Int!
    message: String
  }
`

/** DynamoDB keys to attach to the existing schema */
export const BaseRecord = `
  groupId: String!
  individualId: String!
  reverseLookupGroupId: String
  reverseLookupIndividualId: String
`
