import type { OptionsOfTextResponseBody as Params } from 'got'
import { catalog, common } from './client/index'

export const categories = () => common.get('v2/fat-menu/full')

export const ids = (categoryId: number) => {
  const params: Params = {
    searchParams: new URLSearchParams([['category_id', categoryId.toString()]])
  }
  return catalog.get('v4/goods/get', params)
}
