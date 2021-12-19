import { z } from 'zod'

const Tag = z.object({
  id: z.number(),
  title: z.string(),
  show_in_catalog: z.number(),
  show_in_details: z.number(),
  is_special_tag: z.number(),
  view_position: z.number().nullable(),
  order: z.number(),
  has_description: z.number(),
  icon: z.string(),
  icon_mobile: z.string(),
  // @todo requires verification
  announce: z.string().nullable()
})

export const Tags = z.array(Tag)
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Tags = z.infer<typeof Tags>
