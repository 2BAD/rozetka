import { z } from 'zod'

const Value = z.object({
  value_id: z.number(),
  value_name: z.string(),
  value_title: z.string(),
  href: z.string().nullable()
})

const Docket = z.object({
  option_id: z.number(),
  option_name: z.string(),
  option_title: z.string(),
  value_id: z.number(),
  value_title: z.string(),
  value_name: z.string(),
  order: z.number(),
  goods_id: z.number(),
  href: z.string().nullable(),
  values: z.array(Value).nullish()
})

const Gift = z.object({
  promotion_title: z.string(),
  promotion_url: z.string(),
  image_url: z.string(),
  gift_id: z.number().nullable(),
  goods_id: z.number()
})

const Tag = z.object({
  name: z.string(),
  title: z.string(),
  priority: z.number(),
  goods_id: z.number()
})

const Announce = z.object({
  date: z.string(),
  color: z.string(),
  color_font: z.string(),
  price: z.number()
})

const Pictogram = z.object({
  is_auction: z.boolean(),
  view_position: z.number().nullable(),
  order: z.number(),
  id: z.number(),
  goods_id: z.number(),
  title: z.string(),
  image_url: z.string(),
  view_type: z.string(),
  announce: Announce.nullable(),
  has_description: z.number(),
  description: z.string().nullable(),
  url: z.string().nullable(),
  url_title: z.string().nullable(),
  icon_mobile: z.string()
})

const Images = z.object({
  main: z.string(),
  preview: z.string(),
  hover: z.string(),
  all_images: z.array(z.string())
})

const Color = z.object({
  id: z.number(),
  hash: z.string(),
  url: z.string().nullable()
})

const Group = z.object({
  value: z.string(),
  href: z.string(),
  rank: z.string(),
  id: z.number(),
  is_group_primary: z.number(),
  option_id: z.number(),
  option_name: z.string(),
  value_id: z.number(),
  color: Color,
  active_option: z.boolean()
})

const Groups = z.object({
  color: z.array(Group).nullish()
})

const Config = z.object({
  title: z.boolean(),
  brand: z.boolean(),
  image: z.boolean(),
  price: z.boolean(),
  old_price: z.boolean(),
  promo_price: z.boolean(),
  status: z.boolean(),
  bonus: z.boolean(),
  gift: z.boolean(),
  rating: z.boolean(),
  wishlist_button: z.boolean(),
  compare_button: z.boolean(),
  buy_button: z.boolean(),
  tags: z.boolean(),
  pictograms: z.boolean(),
  description: z.boolean(),
  variables: z.boolean()
})

const Detail = z.object({
  id: z.number(),
  title: z.string(),
  title_suffix: z.string().nullable(),
  price: z.number(),
  old_price: z.number(),
  price_pcs: z.string(),
  href: z.string(),
  status: z.string(),
  status_inherited: z.string(),
  sell_status: z.string(),
  category_id: z.number(),
  seller_id: z.number(),
  merchant_id: z.number(),
  brand: z.string(),
  brand_id: z.number(),
  group_id: z.number(),
  group_name: z.string().nullable(),
  group_title: z.string().nullable(),
  pl_bonus_charge_pcs: z.number(),
  pl_use_instant_bonus: z.number(),
  state: z.string(),
  docket: z.array(Docket).nullable(),
  mpath: z.string(),
  is_group_primary: z.number(),
  dispatch: z.number(),
  premium: z.number(),
  preorder: z.number(),
  comments_amount: z.number(),
  comments_mark: z.number(),
  gift: z.union([Gift, z.boolean()]).nullable(),
  tag: Tag.nullable(),
  pictograms: z.array(Pictogram).nullable(),
  // @todo requires verification
  title_mode: z.unknown().nullable(),
  // @todo requires verification
  use_group_links: z.unknown().nullable(),
  is_need_street_id: z.boolean(),
  image_main: z.string(),
  images: Images,
  parent_category_id: z.number(),
  is_docket: z.boolean(),
  primary_good_title: z.string().nullable(),
  groups: z.union([Groups, z.array(z.unknown())]),
  stars: z.string(),
  discount: z.number(),
  config: Config
})

export const Details = z.array(Detail)
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Details = z.infer<typeof Details>
