import { product } from '../../client/index'
import type { Either } from '../../types/either'
import { genericParams } from '../genericParams'
import { Characteristics } from './types'

export const get = (productId: number): Promise<Either<Characteristics>> =>
  product
    .get('v4/goods/get-characteristic', genericParams(productId))
    .then((r) => Characteristics.safeParse(r))

// export const list = (productIds: number[]): Promise<Characteristics[]> => {}
