import { product } from '../source/index'

describe('product', () => {
  const PRODUCT_ID = 6802844

  it('details should match snapshot', async () => {
    expect.assertions(1)
    const details = await product.details(PRODUCT_ID)
    expect(details).toMatchSnapshot()
  })
})
