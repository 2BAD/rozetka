import { server } from '../../utils/server'
import { PRODUCT_ID } from '../fixtures'
import { get } from './index'

describe('/products/characteristics', () => {
  describe('GET', () => {
    it('When asked for an existing product \n\t Then should be able to retrieve and parse its characteristics', async () => {
      expect.assertions(1)
      const { done } = await server(import.meta.url, 'stub.json')

      const r = await get(PRODUCT_ID)
      expect(r.data).toMatchSnapshot()
      done()
    })
  })
})
