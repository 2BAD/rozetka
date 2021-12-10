import { Options } from 'got'
import { updateSearchParams } from '../source/client/hooks/searchParams'

describe('searchParams hook', () => {
  it('should update query string', () => {
    expect.assertions(3)

    const options = new Options({
      url: 'http://localhost',
      searchParams: {
        r: 0
      }
    })

    updateSearchParams(options)

    expect(options).toHaveProperty('searchParams')

    const r = (options.searchParams as URLSearchParams).get('r')
    expect(r).not.toBeNull()
    // @ts-expect-error we just checked it for not null
    expect(parseFloat(r)).toBeGreaterThan(0)
  })
})
