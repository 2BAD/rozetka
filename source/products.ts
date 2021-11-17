import { buildParams } from './client/utils/params'
import { catalog, common, product } from './client/index'

/**
 * Create a common set of parameters for most of the api calls
 */
const genericParams = (id: number) => buildParams([['goodsId', id.toString()]])

export const details = (productId: number | number[]) =>
  catalog.get(
    'v4/goods/getDetails',
    buildParams([
      ['with_groups', '1'],
      ['with_docket', '1'],
      ['goods_group_href', '1'],
      ['product_ids', productId.toString()]
    ])
  )

export const description = (productId: number) =>
  product.get('v4/goods/get-goods-description', genericParams(productId))

export const characteristics = (productId: number) =>
  product.get('v4/goods/get-characteristic', genericParams(productId))

export const tags = (productId: number) =>
  product.get('v4/marketing/get-tags', genericParams(productId))

export const promotions = (productId: number) =>
  product.get('v4/marketing/get-promotions', genericParams(productId))

export const offers = (productId: number) =>
  product.get('v4/marketing/get-super-offer', genericParams(productId))

export const relatedProducts = (productId: number) =>
  product.get('v4/goods/get-related', genericParams(productId))

export const price = (productId: number | number[]) => {
  const paramName = Array.isArray(productId) ? 'ids' : 'id'
  // trailing slash is necessary here
  return common.get(
    'v2/goods/get-price/',
    buildParams([[paramName, productId.toString()]])
  )
}
