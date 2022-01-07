/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { catalog } from '../source/index'

describe('catalog', () => {
  const CATEGORY_ID = 4649166
  const CATEGORY_ID_WITH_CHILDREN = 4625018

  it('categories should match snapshot', async () => {
    expect.assertions(1)
    const categories = await catalog.categories()
    expect(Object.keys(categories)).toMatchSnapshot()
  })

  it('children should match snapshot', async () => {
    expect.assertions(1)
    const matcher = {
      count: expect.any(Number),
      goods_count: expect.any(Number),
      goods_id: expect.any(Number)
    }
    const children = await catalog.children(CATEGORY_ID_WITH_CHILDREN)
    expect(children.children).toMatchSnapshot(
      Array.from({ length: children.children.length }).fill(matcher)
    )
  })

  it('details should match snapshot', async () => {
    expect.assertions(1)
    const details = await catalog.details(CATEGORY_ID)
    expect(details).toMatchSnapshot()
  })

  it('ids should match snapshot', async () => {
    expect.assertions(1)
    const ids = await catalog.ids(CATEGORY_ID)
    expect(ids.sort((a, b) => a - b)).toMatchSnapshot()
  })
})
