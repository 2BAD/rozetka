import type { Response } from 'got'
import * as Api from '../../types/api'

/**
 * Validate response against common schema and unwrap nested data
 */
export const unwrapResponse = (response: Response): Response => {
  if (response.statusCode === 200) {
    const result = Api.Response.parse(response.body)
    response.body = result.data
  }

  return response
}
