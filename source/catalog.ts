import { catalog, common } from './client/index'
import { buildParams } from './client/utils/params'
import { Catalog } from './types/catalog/Catalog'
import { Children } from './types/catalog/Children'
import { Details } from './types/catalog/Details'
import { Ids } from './types/catalog/Ids'

export const categories = (): Promise<Catalog> =>
  common.get('v2/fat-menu/full').then((r) => Catalog.parse(r))

export const children = (categoryId: number): Promise<Children> =>
  catalog
    .get('v4/categories/getChildren', buildParams([['category_id', categoryId.toString()]]))
    .then((r) => Children.parse(r))

export const details = (categoryId: number): Promise<Details> =>
  catalog
    .get('v4/categories/get', buildParams([['id', categoryId.toString()]]))
    .then((r) => Details.parse(r))

export const ids = (categoryId: number): Promise<number[]> =>
  catalog.paginate.all('v4/goods/get', {
    searchParams: new URLSearchParams([['category_id', categoryId.toString()]]),
    pagination: {
      transform: (response) => {
        const data = Ids.parse(response.body)
        return data.ids
      },
      paginate: ({ response }) => {
        // Get the last retrieved page number
        const { searchParams } = response.request.options
        const previousPage =
          searchParams instanceof URLSearchParams ? Number(searchParams.get('page') ?? 1) : 1

        // If there are no more data, finish
        const data = Ids.parse(response.body)
        if (data.total_pages === previousPage) {
          return false
        }

        // Otherwise, update the page number by one and continue
        return {
          searchParams: {
            page: previousPage + 1
          }
        }
      },
      // Wait 1s before making another request to prevent API rate limiting.
      backoff: 1000
    }
  })
