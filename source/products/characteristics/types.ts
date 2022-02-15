import { z } from 'zod'
import { customError } from '../../types/error'

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

export const Characteristics = z
  .array(
    z.object({
      group_id: z.number(),
      group_order: z.number(),
      groupTitle: z.string(),
      options: z.array(Option)
    })
  )
  .refine((a) => a.length, customError('empty_response'))

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Characteristics = z.infer<typeof Characteristics>
