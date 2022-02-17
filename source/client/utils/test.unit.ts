import { params } from './params'

describe('parameter builder', () => {
  it('should return Options object with searchParam set to URLSearchParams object instance', () => {
    expect.assertions(3)

    const p = params(['goodsId', '100'])

    expect(p).toHaveProperty('searchParams')
    expect(p.searchParams).toBeInstanceOf(URLSearchParams)
    expect(p).toMatchSnapshot()
  })

  it('should accept an array of arrays', () => {
    expect.assertions(2)

    const p = params(['goodsId', '100'], ['lang', 'ru'])

    expect(p.searchParams?.toString()).toBe('goodsId=100&lang=ru')
    expect(p).toMatchSnapshot()
  })
})
