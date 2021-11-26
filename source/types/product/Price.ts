import { z } from 'zod'

export const Price = z.object({
  old_price: z.number(),
  old_price_formatted: z.string(),
  old_usd_price: z.string(),
  price: z.number(),
  price_formatted: z.string(),
  sell_status: z.string(),
  status: z.string(),
  usd_price: z.string(),
  pl_charge_pcs: z.number(),
  pl_use_instant_bonus: z.boolean(),
  pl_premium_bonus_charge_pcs: z.number(),
  show_in_site: z.unknown().nullable(),
  rests: z.number(),
  min_price: z.number(),
  max_price: z.number(),
  has_shops: z.boolean(),
  info: z.unknown().nullable()
})
export type Price = z.infer<typeof Price>

export const Prices = z.array(Price)
export type Prices = z.infer<typeof Prices>
