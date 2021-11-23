import { z } from 'zod'
import { Category } from './Category'

export const TileConfig = z.object({
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
