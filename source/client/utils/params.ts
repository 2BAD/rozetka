import { OptionsOfTextResponseBody as Params } from 'got'

/**
 * Create Options object with searchParams populated
 */
export const buildParams = (params: string[][]): Params => ({
  searchParams: new URLSearchParams(params)
})
