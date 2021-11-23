import { z } from 'zod'

export const Promotion = z.object({
  id: z.number(),
  constructor_id: z.number(),
  url: z.string(),
  title: z.string(),
  //@todo replace with proper date and time validation
  period_start: z.string(),
  period_end: z.string(),
  hide_date: z.boolean(),
  icon: z.string(),
  //@todo requires verification
  announce: z.string().nullable()
})
export type Promotion = z.infer<typeof Promotion>
