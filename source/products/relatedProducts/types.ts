import { z } from 'zod'
import { customError } from '../../types/error'
import { Product } from '../types'

export const RelatedProducts = z
  .array(Product)
  .refine((a) => a.length, customError('empty_response'))

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type RelatedProducts = z.infer<typeof RelatedProducts>
