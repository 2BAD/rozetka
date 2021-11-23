import { z } from 'zod'

export const Description = z.object({
  text: z.string().nullable(),
  html: z.string().nullable(),
  isRichNoLimit: z.boolean(),
  rich: z.string().nullable()
})
export type Description = z.infer<typeof Description>

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

const Group = z.object({
  id: z.number(),
  is_group_primary: z.number(),
  href: z.string().nullable()
})

const Category = z.object({
  id: z.number(),
  title: z.string(),
  href: z.string(),
  use_group_links: z.boolean(),
  root_id: z.number()
})

const Brand = z.object({
  id: z.number(),
  title: z.string(),
  name: z.string(),
  logo: z.string().nullable()
})

const Comments = z.object({
  amount: z.number(),
  mark: z.number()
})

const Image = z.object({
  big_tile: z.string(),
  original: z.string(),
  preview: z.string()
})

const Loyalty = z.object({
  pl_bonus_charge_pcs: z.number(),
  pl_use_instant_bonus: z.number()
})

const Price = z.object({
  old: z.number(),
  current: z.number(),
  pcs: z.string()
})

const Tag = z.object({
  name: z.string(),
  title: z.string(),
  priority: z.number()
})

const Product = z.object({
  id: z.number(),
  mpath: z.string(),
  href: z.string(),
  group: Group,
  category: Category,
  title: z.string(),
  brand: Brand,
  comments: Comments,
  docket: z.string(),
  images: z.array(Image),
  loyalty: Loyalty,
  price: Price,
  status: z.string(),
  status_inherited: z.string(),
  sell_status: z.string(),
  merchant_id: z.number(),
  seller_id: z.number(),
  state: z.string(),
  tag: Tag.nullable(),
  premium_program: z.boolean(),
  sla_id: z.number()
})

export const RelatedProducts = z.array(Product)
export type RelatedProducts = z.infer<typeof RelatedProducts>
