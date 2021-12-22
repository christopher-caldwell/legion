export interface SqlAccount {
  id: number
  email: string
  phone?: string | null
  created_at: Date
  last_logged_in_at: Date | null
  first_name: string | null
  last_name: string | null
  password: string
}

export interface UserCreationArgs {
  emailAddress: string
  password: string
  firstName: string
  lastName: string
  phone: string
}
