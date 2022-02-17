import { OptionsOfTextResponseBody as Params } from 'got'

/**
 * Create Options object with searchParams populated
 */
export const params = (...params: string[][]): Params => ({
  searchParams: new URLSearchParams(params)
})
