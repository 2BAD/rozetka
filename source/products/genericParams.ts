import { OptionsOfTextResponseBody } from 'got'
import { params } from '../client/utils/params'

/**
 * Create a common set of parameters for most of the api calls
 */

export const genericParams = (id: number): OptionsOfTextResponseBody =>
  params({ goodsId: id.toString() })
