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
  root_id: z.number()
})
export type Category = z.infer<typeof Category>

const TileConfig = z.object({
  template: z.string(),
  possible_templates: z.array(z.string()),
  template_view: z.string()
})

export const Details = z.object({
  category: Category,
  parents: z.array(Category.partial({ root_id: true })),
  show_brands_slider: z.boolean(),
  tile_config: TileConfig,
  redirect_to: z.string().nullable(),
  subdomain: z.string().nullable(),
  is_need_street_id: z.boolean(),
  is_shop_category: z.boolean()
})
export type Details = z.infer<typeof Details>

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
export type Ids = z.infer<typeof Ids>