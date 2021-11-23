import { z } from 'zod'
import { Product } from './Product'

const Block = z.object({
  id: z.number(),
  title: z.string(),
  goods_id: z.number()
})

export const Offer = z.object({
  block: Block,
  products: z.array(Product)
})
export type Offer = z.infer<typeof Offer>
