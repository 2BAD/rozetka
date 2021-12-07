import type { Options } from 'got'

/**
 * Append random floating-point number in the range 0 to less than 1 to searchParams
 * @example
 * ?r=0.09930972877541944
 */
export const updateSearchParams = (options: Options): void => {
  if (options.url instanceof URL) {
    options.url.searchParams.set('r', Math.random().toString())
  }
}
