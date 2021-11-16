import type { OptionsOfTextResponseBody as Params } from 'got'
import { catalog, common } from './client/index'

export const details = (id: number | number[]) => {
  const params: Params = {
    searchParams: new URLSearchParams([['product_ids', id.toString()]])
  }
  return catalog.get('v4/goods/getDetails', params)
}

export const price = (id: number | number[]) => {
  const paramName = Array.isArray(id) ? 'ids' : 'id'
  const params: Params = {
    searchParams: new URLSearchParams([[paramName, id.toString()]])
  }
  // trailing slash is necessary here
  return common.get('v2/goods/get-price/', params)
}
