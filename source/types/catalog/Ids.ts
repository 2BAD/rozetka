import { z } from 'zod'

const AlternateDomain = z.object({
  lang: z.string(),
  hreflang: z.string(),
  domain: z.string(),
  subdomain: z.string()
})

export const Ids = z.object({
  ids: z.array(z.number()),
  ids_count: z.number(),
  total_pages: z.number(),
  show_next: z.number(),
  goods_with_filter: z.number(),
  goods_in_category: z.number(),
  goods_limit: z.number(),
  active_pages: z.array(z.number()),
  shown_page: z.number(),
  alternate: z.array(AlternateDomain)
})
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Ids = z.infer<typeof Ids>
