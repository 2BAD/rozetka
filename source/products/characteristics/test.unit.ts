import { server } from '../../utils/mockServer'
import { PRODUCT_ID, WRONG_PRODUCT_ID } from '../fixtures'
import { get } from './index'

describe('/products/characteristics', () => {
  describe('GET', () => {
    it('When asked for an existing product \n\t Then should be able to retrieve and parse its characteristics', async () => {
      expect.assertions(1)
      const { done } = await server(import.meta.url, 'good.json')

      const r = await get(PRODUCT_ID)
      expect(r.data).toMatchSnapshot()
      done()
    })
    it('When asked for an non-existing product \n\t Then should return an Error object', async () => {
      expect.assertions(1)
      const { done } = await server(import.meta.url, 'empty.json')

      const r = await get(WRONG_PRODUCT_ID)
      expect(r.error).toMatchSnapshot()
      done()
    })
  })
})
