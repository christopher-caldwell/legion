export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Activity = {
  __typename?: 'Activity';
  id: Scalars['Int'];
  title: Scalars['String'];
  date: Scalars['Date'];
  actionText?: Maybe<Scalars['String']>;
  actionToPath?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
};

export enum CLientStatus {
  Active = 'Active',
  Archived = 'Archived'
}

export type Client = {
  __typename?: 'Client';
  id: Scalars['Int'];
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  status: CLientStatus;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};

export type ClientContact = {
  __typename?: 'ClientContact';
  id: Scalars['Int'];
  name: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};

export enum ClientSortKey {
  Name = 'name',
  Email = 'email'
}

export type Contract = {
  __typename?: 'Contract';
  id: Scalars['Int'];
  project: Project;
  sentDate?: Maybe<Scalars['Date']>;
  acceptedDate?: Maybe<Scalars['Date']>;
  fromName?: Maybe<Scalars['String']>;
  fromEmail?: Maybe<Scalars['String']>;
  toName?: Maybe<Scalars['String']>;
  toEmail?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};


export type Invoice = {
  __typename?: 'Invoice';
  id: Scalars['Int'];
  amountDue: Scalars['Int'];
  amountPaid: Scalars['Int'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  paidDate?: Maybe<Scalars['Date']>;
  project?: Maybe<Project>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject: Project;
  removeProject: MutationResult;
  createContract: Contract;
  createProposal: Proposal;
  createClient: Client;
  removeClient?: Maybe<MutationResult>;
  archiveClient?: Maybe<MutationResult>;
  activateClient?: Maybe<MutationResult>;
  createClientContact?: Maybe<MutationResult>;
  removeClientContact?: Maybe<MutationResult>;
  createTask: Task;
  createInvoice: Invoice;
  writeNoteForClient: MutationResult;
  writeNoteForProject: MutationResult;
  createActivity: MutationResult;
};


export type MutationCreateProjectArgs = {
  name: Scalars['String'];
  clientId: Scalars['Int'];
};


export type MutationRemoveProjectArgs = {
  id: Scalars['Int'];
};


export type MutationCreateContractArgs = {
  projectId: Scalars['Int'];
  content?: Maybe<Scalars['String']>;
};


export type MutationCreateProposalArgs = {
  projectId: Scalars['Int'];
  name: Scalars['String'];
};


export type MutationCreateClientArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRemoveClientArgs = {
  id: Scalars['Int'];
};


export type MutationArchiveClientArgs = {
  id: Scalars['Int'];
};


export type MutationActivateClientArgs = {
  id: Scalars['Int'];
};


export type MutationCreateClientContactArgs = {
  clientId: Scalars['Int'];
  name: Scalars['String'];
  isDefault?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};


export type MutationRemoveClientContactArgs = {
  id: Scalars['Int'];
};


export type MutationCreateTaskArgs = {
  projectId: Scalars['Int'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  dueDate: Scalars['Date'];
  priority: PriorityLevel;
};


export type MutationCreateInvoiceArgs = {
  contactName: Scalars['String'];
  email: Scalars['String'];
};


export type MutationWriteNoteForClientArgs = {
  content: Scalars['String'];
  clientId: Scalars['Int'];
};


export type MutationWriteNoteForProjectArgs = {
  content: Scalars['String'];
  projectId: Scalars['Int'];
};


export type MutationCreateActivityArgs = {
  title: Scalars['String'];
  actionText?: Maybe<Scalars['String']>;
  actionToPath?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['Int']>;
  clientId?: Maybe<Scalars['Int']>;
};

export type MutationResult = {
  __typename?: 'MutationResult';
  status: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
};

export type Note = {
  __typename?: 'Note';
  id: Scalars['Int'];
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};

export enum PriorityLevel {
  Highest = 'Highest',
  High = 'High',
  Neutral = 'Neutral',
  Low = 'Low',
  Lowest = 'Lowest'
}

export type Project = {
  __typename?: 'Project';
  id: Scalars['Int'];
  name: Scalars['String'];
  client?: Maybe<Client>;
  description?: Maybe<Scalars['String']>;
  proposal?: Maybe<Proposal>;
  contract?: Maybe<Contract>;
  status: ProjectStatus;
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};

export enum ProjectSortKey {
  Name = 'name',
  CreatedAt = 'createdAt'
}

export enum ProjectStatus {
  Active = 'Active',
  Abandoned = 'Abandoned',
  Completed = 'Completed',
  Hold = 'Hold'
}

export type Proposal = {
  __typename?: 'Proposal';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sentDate?: Maybe<Scalars['Date']>;
  seenDate?: Maybe<Scalars['Date']>;
  acceptedDate?: Maybe<Scalars['Date']>;
  fromName?: Maybe<Scalars['String']>;
  fromEmail?: Maybe<Scalars['String']>;
  toName?: Maybe<Scalars['String']>;
  toEmail?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  content: Scalars['String'];
  project?: Maybe<Project>;
  client?: Maybe<Client>;
};

export enum ProposalSortKey {
  Name = 'name',
  SentDate = 'sentDate',
  AcceptedDate = 'acceptedDate'
}

export type Query = {
  __typename?: 'Query';
  project: Project;
  projects: Array<Project>;
  projectsByClientId: Array<Project>;
  contract: Contract;
  contracts: Array<Contract>;
  proposal: Proposal;
  proposals: Array<Proposal>;
  proposalByProject?: Maybe<Proposal>;
  client: Client;
  clients: Array<Client>;
  clientContacts: Array<ClientContact>;
  task: Task;
  tasks: Array<Task>;
  tasksByProject: Array<Task>;
  invoice: Invoice;
  invoices: Array<Invoice>;
  invoiceByProject: Array<Invoice>;
  notesByClient?: Maybe<Note>;
  notesByProject?: Maybe<Note>;
  activity: Array<Activity>;
  activityByProject: Array<Activity>;
};


export type QueryProjectArgs = {
  id: Scalars['Int'];
};


export type QueryProjectsArgs = {
  sortDirection?: Maybe<SortDirection>;
  sortKey?: Maybe<ProjectSortKey>;
  searchTerm?: Maybe<Scalars['String']>;
};


export type QueryProjectsByClientIdArgs = {
  clientId: Scalars['Int'];
};


export type QueryContractArgs = {
  id: Scalars['Int'];
};


export type QueryProposalArgs = {
  id: Scalars['Int'];
};


export type QueryProposalsArgs = {
  sortDirection?: Maybe<SortDirection>;
  sortKey?: Maybe<ProposalSortKey>;
  searchTerm?: Maybe<Scalars['String']>;
};


export type QueryProposalByProjectArgs = {
  projectId: Scalars['Int'];
};


export type QueryClientArgs = {
  id: Scalars['Int'];
};


export type QueryClientsArgs = {
  sortDirection?: Maybe<SortDirection>;
  sortKey?: Maybe<ClientSortKey>;
  searchTerm?: Maybe<Scalars['String']>;
};


export type QueryClientContactsArgs = {
  clientId: Scalars['Int'];
};


export type QueryTaskArgs = {
  id: Scalars['Int'];
};


export type QueryTasksByProjectArgs = {
  projectId: Scalars['Int'];
};


export type QueryInvoiceArgs = {
  id: Scalars['Int'];
};


export type QueryInvoiceByProjectArgs = {
  projectId: Scalars['Int'];
};


export type QueryNotesByClientArgs = {
  clientId: Scalars['Int'];
};


export type QueryNotesByProjectArgs = {
  projectId: Scalars['Int'];
};


export type QueryActivityByProjectArgs = {
  projectId: Scalars['Int'];
};

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Task = {
  __typename?: 'Task';
  id: Scalars['Int'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  dueDate: Scalars['Date'];
  status: TaskStatus;
  priority: PriorityLevel;
  project?: Maybe<Project>;
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};

export enum TaskStatus {
  Backlog = 'backlog',
  ReadyToStart = 'ready_to_start',
  InProgress = 'in_progress',
  Done = 'done'
}
