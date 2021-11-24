import { z } from 'zod'

const Value = z.object({
  title: z.string(),
  href: z.string().nullable()
})

const Option = z.object({
  id: z.number(),
  type: z.string(),
  name: z.string(),
  title: z.string(),
  category_id: z.number(),
  status: z.string(),
  order: z.number(),
  in_short: z.number(),
  comparable: z.string(),
  values: z.array(Value)
})

export const Characteristics = z.array(
  z.object({
    group_id: z.number(),
    group_order: z.number(),
    groupTitle: z.string(),
    options: z.array(Option)
  })
)
export type Characteristics = z.infer<typeof Characteristics>
