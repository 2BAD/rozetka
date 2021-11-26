import type { Response } from 'got'
import * as Api from '../../types/api'

/**
 * Validate response against common schema and unwrap nested data
 */
export const unwrapResponse = (response: Response): Response => {
  if (response.statusCode === 200) {
    // get-price endpoint doesn't have common wrapper so should be handled separately
    if (response.url.includes('v2/goods/get-price/')) {
      response.body = Api.PriceResponse.parse(response.body)
    } else {
      const result = Api.Response.parse(response.body)
      response.body = result.data
    }
  }

  return response
}
