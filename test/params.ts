import { buildParams } from '../source/client/utils/params'

describe('Parameter builder for Got client', () => {
  it('should return Options object with searchParam set to URLSearchParams object instance', () => {
    expect.assertions(3)

    const params = buildParams([['goodsId', '100']])

    expect(params).toHaveProperty('searchParams')
    expect(params.searchParams).toBeInstanceOf(URLSearchParams)
    expect(params).toMatchSnapshot()
  })

  it('should accept array of arrays', () => {
    expect.assertions(2)

    const params = buildParams([
      ['goodsId', '100'],
      ['lang', 'ru']
    ])

    expect(params.searchParams?.toString()).toBe('goodsId=100&lang=ru')
    expect(params).toMatchSnapshot()
  })
})
