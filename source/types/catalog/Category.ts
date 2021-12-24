import { z } from 'zod'

export const Category = z.object({
  id: z.number(),
  mpath: z.string(),
  name: z.string(),
  parent_id: z.number(),
  left_key: z.number(),
  right_key: z.number(),
  level: z.number(),
  href: z.string(),
  allow_index_three_parameters: z.boolean(),
  is_rozetka_top: z.boolean(),
  status: z.string(),
  titles_mode: z.string(),
  rz_mpath: z.string(),
  title: z.string(),
  root_id: z.number().nullish(),
  count: z.union([z.string(), z.number()]).nullish()
})
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Category = z.infer<typeof Category>
