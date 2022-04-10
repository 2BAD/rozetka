import { PRODUCT_ID, WRONG_PRODUCT_ID } from '../fixtures'
import { list } from './index'

describe('/products/related', () => {
  describe('GET', () => {
    it('When asked for an existing product \n\t Then should be able to retrieve and parse a list of related products', async () => {
      expect.assertions(1)

      const r = await list(PRODUCT_ID)
      expect(r.data).toMatchSnapshot()
    })
    it('When asked for an non-existing product \n\t Then should return an Error object', async () => {
      expect.assertions(2)

      const r = await list(WRONG_PRODUCT_ID)
      expect(r.error).toBeInstanceOf(Error)
      expect(r.error).toMatchSnapshot()
    })
  })
})
