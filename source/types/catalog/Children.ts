import { z } from 'zod'
import { Category } from './Category'
import { TileConfig } from './Details'

const Child = Category.partial({ root_id: true }).merge(
  z.object({
    goods_id: z.number(),
    is_append_goods: z.boolean(),
    goods_count: z.number(),
    count_children: z.number(),
    child_id: z.number(),
    attach: z.string(),
    count_not_filtered: z.number().nullish()
  })
)

export const Children = z.object({
  current: Category.merge(
    z.object({
      subdomain: z.string().nullish()
    })
  ),
  children: z.array(Child),
  hasFilter: z.boolean(),
  tile_config: TileConfig,
  is_need_street_id: z.boolean()
})
export type Children = z.infer<typeof Children>
