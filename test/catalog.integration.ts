import * as catalog from '../source/catalog'

describe('catalog', () => {
  const CATEGORY_ID = 4649166

  it('categories should match snapshot', async () => {
    expect.assertions(1)
    const categories = await catalog.categories()
    expect(categories).toMatchSnapshot()
  })
  it('children should match snapshot', async () => {
    expect.assertions(1)
    const children = await catalog.children(CATEGORY_ID)
    expect(children).toMatchSnapshot()
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
  }, 20000)
})
