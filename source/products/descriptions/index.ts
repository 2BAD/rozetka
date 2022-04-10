import { product } from '../../client/index'
import type { Either } from '../../types/either'
import { genericParams } from '../genericParams'
import { Description } from './types'

export const get = (productId: number): Promise<Either<Description>> =>
  product
    .get('v4/goods/get-goods-description', genericParams(productId))
    .then((r) => Description.safeParse(r))
