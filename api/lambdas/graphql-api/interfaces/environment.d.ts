declare global {
  namespace NodeJS {
    interface ProcessEnv {
      STAGE: 'dev' | 'qa' | 'prod' | 'local'
      PGPASSWORD: string
      PGUSER: string
      PGHOST: string
      PGDATABASE: string
      PGPORT: string
    }
  }
}

declare module '*.sql' {
  export = string
}

export {}
