/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import 'jest-extended'
import { product } from '../source/index'

describe('product', () => {
  const PRODUCT_ID = 6802844
  const PRODUCT_IDS_ARRAY = [6802844, 9906369]
  const WRONG_PRODUCT_ID = 999999999

  it('details should match snapshot', async () => {
    expect.assertions(1)
    const matcher = {
      docket: expect.toBeOneOf([expect.any(Array), null]),
      gift: expect.toBeOneOf([true, false, null])
    }
    const details = await product.details(PRODUCT_ID)
    expect(details).toMatchSnapshot([matcher])
  })

  it('details should be an empty array if wrong id is requested', async () => {
    expect.assertions(1)

    const details = await product.details(WRONG_PRODUCT_ID)
    expect(details).toBeEmpty()
  })

  it('description should match snapshot', async () => {
    expect.assertions(1)
    const description = await product.description(PRODUCT_ID)
    expect(description).toMatchSnapshot()
  })

  it('description of wrong id should match snapshot', async () => {
    expect.assertions(1)
    const description = await product.description(WRONG_PRODUCT_ID)
    expect(description).toMatchSnapshot()
  })

  it('characteristics should match snapshot', async () => {
    expect.assertions(1)
    const characteristics = await product.characteristics(PRODUCT_ID)
    expect(characteristics).toMatchSnapshot()
  })

  it('characteristics should be an empty array if wrong id is requested', async () => {
    expect.assertions(1)
    const characteristics = await product.characteristics(WRONG_PRODUCT_ID)
    expect(characteristics).toMatchSnapshot()
  })

  it('tags should match snapshot', async () => {
    expect.assertions(1)
    const matcher = {
      icon: expect.any(String),
      id: expect.any(Number),
      order: expect.any(Number),
      show_in_catalog: expect.any(Number),
      title: expect.any(String)
    }
    const tags = await product.tags(PRODUCT_ID)
    expect(tags[0]).toMatchSnapshot(matcher)
  })

  it('price should match snapshot', async () => {
    expect.assertions(1)
    const price = await product.price([PRODUCT_ID])
    expect(price).toMatchSnapshot()
  })

  it('multiple prices should match snapshot', async () => {
    expect.assertions(1)
    const matcher = {
      old_price: expect.any(Number),
      old_price_formatted: expect.any(String),
      old_usd_price: expect.any(String),
      pl_premium_bonus_charge_pcs: expect.any(Number),
      price: expect.any(Number),
      price_formatted: expect.any(String),
      usd_price: expect.any(String)
    }
    const price = await product.price(PRODUCT_IDS_ARRAY)
    expect(price).toMatchSnapshot(new Array(2).fill(matcher))
  })
})
