import type { OptionsOfTextResponseBody as Params } from 'got'
import { catalog, common, product } from './client/index'

export const details = (productId: number | number[]) => {
  const params: Params = {
    searchParams: new URLSearchParams([['product_ids', productId.toString()]])
  }
  return catalog.get('v4/goods/getDetails', params)
}

export const description = (productId: number) => {
  const params: Params = {
    searchParams: new URLSearchParams([['goodsId', productId.toString()]])
  }
  return product.get('v4/goods/get-goods-description', params)
}

export const characteristics = (productId: number) => {
  const params: Params = {
    searchParams: new URLSearchParams([['goodsId', productId.toString()]])
  }
  return product.get('v4/goods/get-characteristic', params)
}

export const relatedProducts = (productId: number) => {
  const params: Params = {
    searchParams: new URLSearchParams([['goodsId', productId.toString()]])
  }
  return product.get('v4/goods/get-related', params)
}

export const price = (productId: number | number[]) => {
  const paramName = Array.isArray(productId) ? 'ids' : 'id'
  const params: Params = {
    searchParams: new URLSearchParams([[paramName, productId.toString()]])
  }
  // trailing slash is necessary here
  return common.get('v2/goods/get-price/', params)
}
