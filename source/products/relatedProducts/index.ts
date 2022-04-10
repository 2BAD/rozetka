import { product } from '../../client/index'
import type { Either } from '../../types/either'
import { genericParams } from '../genericParams'
import { RelatedProducts } from './types'

export const list = (productId: number): Promise<Either<RelatedProducts>> =>
  product
    .get('v4/goods/get-related', genericParams(productId))
    .then((r) => RelatedProducts.safeParse(r))
