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
  resolveBodyOnly: true,
  responseType: 'json',
  // only `lang` parameter is needed, the rest is just to simulate the frontend
  searchParams: new URLSearchParams([
    ['front-type', 'xl'],
    ['country', 'UA'],
    ['lang', 'ru']
  ])
})

export const catalog = rozetka.extend({
  prefixUrl: 'https://xl-catalog-api.rozetka.com.ua/',
  searchParams: new URLSearchParams([
    ['with_groups', '1'],
    ['with_docket', '1'],
    ['goods_group_href', '1']
  ])
})

export const common = rozetka.extend({
  prefixUrl: 'https://common-api.rozetka.com.ua/'
})

export const product = rozetka.extend({
  prefixUrl: 'https://product-api.rozetka.com.ua/'
})
