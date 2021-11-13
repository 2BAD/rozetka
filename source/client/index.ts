import got from 'got'
import { logRequest, logResponse } from './hooks/debug'
import { updateSearchParams } from './hooks/searchParams'

export const rozetka = got.extend({
  headers: {
    'user-agent': '2bad/rozetka'
  },
  hooks: {
    beforeRequest: [logRequest, updateSearchParams],
    afterResponse: [logResponse]
  },
  // only `lang` parameter is needed, the rest is just to simulate the frontend
  searchParams: new URLSearchParams([
    ['front-type', 'xl'],
    ['country', 'UA'],
    ['lang', 'ru']
  ])
})
