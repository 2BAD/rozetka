import { product } from '../source/index'

describe('product', () => {
  const PRODUCT_ID = 6802844
  const PRODUCT_IDS_ARRAY = [6802844, 9906369]

  it('details should match snapshot', async () => {
    expect.assertions(1)
    const details = await product.details(PRODUCT_ID)
    expect(details).toMatchSnapshot()
  })
  it('description should match snapshot', async () => {
    expect.assertions(1)
    const description = await product.description(PRODUCT_ID)
    expect(description).toMatchSnapshot()
  })
  it('characteristics should match snapshot', async () => {
    expect.assertions(1)
    const characteristics = await product.characteristics(PRODUCT_ID)
    expect(characteristics).toMatchSnapshot()
  })
  it('tags should match snapshot', async () => {
    expect.assertions(1)
    const tags = await product.tags(PRODUCT_ID)
    expect(tags).toMatchSnapshot()
  })
  it('price should match snapshot', async () => {
    expect.assertions(1)
    const price = await product.price([PRODUCT_ID])
    expect(price).toMatchSnapshot()
  })
  it('multiple prices should match snapshot', async () => {
    expect.assertions(1)
    const matcher = {
      old_price: expect.any(Number) as number,
      old_price_formatted: expect.any(String) as string,
      old_usd_price: expect.any(String) as string,
      pl_premium_bonus_charge_pcs: expect.any(Number) as number,
      price: expect.any(Number) as number,
      price_formatted: expect.any(String) as string,
      usd_price: expect.any(String) as string
    }
    const price = await product.price(PRODUCT_IDS_ARRAY)
    expect(price).toMatchSnapshot(new Array(2).fill(matcher))
  })
})
