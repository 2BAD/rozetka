import { ZodError } from 'zod'

type Success<T> = {
  success: true
  data: T
  error?: never
}

type Failure<T> = {
  success: false
  data?: never
  error: ZodError<T>
}

export type Either<T> = Success<T> | Failure<T>
