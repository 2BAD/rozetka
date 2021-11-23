import { z } from 'zod'
import { Product } from './Product'

export const RelatedProducts = z.array(Product)
export type RelatedProducts = z.infer<typeof RelatedProducts>
