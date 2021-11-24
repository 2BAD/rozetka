import { z } from 'zod'

const Leaf = z.object({
  id: z.number(),
  title: z.string(),
  manual_url: z.string(),
  category_id: z.number(),
  top_category_id: z.number(),
  on_subdomain: z.number(),
  is_portal: z.boolean(),
  outer_link: z.boolean()
})

const Child = z.object({
  id: z.number(),
  title: z.string(),
  parent_id: z.number(),
  column_number: z.string(),
  manual_url: z.string(),
  category_id: z.number(),
  top_category_id: z.number(),
  on_subdomain: z.number(),
  is_portal: z.boolean(),
  children: z.array(Leaf)
})

const Children = z.object({
  one: z.array(Child),
  two: z.array(Child),
  three: z.array(Child)
})

const Logo = z.object({
  id: z.number(),
  logo: z.string(),
  manual_url: z.string(),
  name: z.string(),
  title: z.string()
})

const SubCategory = z.object({
  link_url: z.string(),
  title: z.string(),
  id: z.number(),
  parent_id: z.number(),
  order: z.number(),
  top_parent_id: z.number()
})

const Category = z.object({
  id: z.number(),
  order: z.number(),
  title: z.string(),
  parent_id: z.number(),
  manual_url: z.string(),
  border: z.number(),
  logos: z.array(Logo),
  icon_src: z.string().nullable(),
  category_id: z.number(),
  top_category_id: z.number(),
  target_blank: z.number(),
  banner_mobile_src: z.string(),
  on_subdomain: z.number(),
  is_portal: z.boolean(),
  banner_href: z.string(),
  banner_src: z.string(),
  children: Children,
  popular_categories: z.array(SubCategory),
  outer_link: z.boolean()
})

export const Catalog = z.record(Category)
export type Catalog = z.infer<typeof Catalog>
