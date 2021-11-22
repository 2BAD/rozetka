import { catalog, common } from './client/index'
import { buildParams } from './client/utils/params'

export const categories = () => common.get('v2/fat-menu/full')

export const details = (categoryId: number) =>
  catalog.get('v4/categories/get', buildParams([['id', categoryId.toString()]]))

// @todo should paginate automatically
export const ids = (categoryId: number) => {
  return catalog.get(
    'v4/goods/get',
    buildParams([['category_id', categoryId.toString()]])
  )
}
