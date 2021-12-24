import { z } from 'zod'

const Leaf = z
  .object({
    id: z.number(),
    title: z.string(),
    manual_url: z.string(),
    category_id: z.number().nullable(),
    top_category_id: z.number().nullable(),
    on_subdomain: z.number(),
    is_portal: z.boolean(),
    outer_link: z.boolean()
  })
  // extract category_id from manual_url property since it contains unreliable data
  .transform((c) => {
    const exp = /\/c(\d+)\//
    const match = exp.exec(c.manual_url)
    const extractedId = match !== null && match.length > 0 ? Number(match[1]) : null
    return {
      ...c,
      category_id: extractedId ?? c.category_id
    }
  })
  // replace top_category_id with placeholder since it contains unreliable data
  .transform((c) => ({ ...c, top_category_id: 'NOT_RELIABLE_SEE_README' }))

const Child = z
  .object({
    id: z.number(),
    title: z.string(),
    parent_id: z.number(),
    column_number: z.string(),
    manual_url: z.string(),
    category_id: z.number().nullable(),
    top_category_id: z.number().nullable(),
    on_subdomain: z.number(),
    is_portal: z.boolean(),
    children: z.array(Leaf)
  })
  // extract category_id from manual_url property since it contains unreliable data
  .transform((c) => {
    const exp = /\/c(\d+)\//
    const match = exp.exec(c.manual_url)
    const extractedId = match !== null && match.length > 0 ? Number(match[1]) : null
    return {
      ...c,
      category_id: extractedId ?? c.category_id
    }
  })
  // replace top_category_id with placeholder since it contains unreliable data
  .transform((c) => ({ ...c, top_category_id: 'NOT_RELIABLE_SEE_README' }))

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
  category_id: z.number().nullable(),
  top_category_id: z.number().nullable(),
  target_blank: z.number(),
  banner_mobile_src: z.string(),
  on_subdomain: z.number(),
  is_portal: z.boolean(),
  banner_href: z.string(),
  banner_src: z.string().nullable(),
  children: Children.nullish(),
  popular_categories: z.array(SubCategory).nullish(),
  outer_link: z.boolean()
})

export const Catalog = z.record(Category)
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Catalog = z.infer<typeof Catalog>
