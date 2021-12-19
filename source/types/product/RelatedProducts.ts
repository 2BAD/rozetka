import { z } from 'zod'
import { Product } from './Product'

export const RelatedProducts = z.array(Product)
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type RelatedProducts = z.infer<typeof RelatedProducts>
