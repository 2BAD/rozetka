import { catalog, common } from './client/index'
import { buildParams } from './client/utils/params'
import { Details } from './types/catalog/Details'
import { Ids } from './types/catalog/Ids'

export const categories = () => common.get('v2/fat-menu/full')

export const details = (categoryId: number): Promise<Details> =>
  catalog
    .get('v4/categories/get', buildParams([['id', categoryId.toString()]]))
    .then((r) => Details.parse(r))

// @todo should paginate automatically
export const ids = (categoryId: number): Promise<Ids> =>
  catalog
    .get('v4/goods/get', buildParams([['category_id', categoryId.toString()]]))
    .then((r) => Ids.parse(r))
