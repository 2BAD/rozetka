import got from 'got'
import { logRequest, logResponse } from './hooks/debug'
import { unwrapResponse } from './hooks/response'
import { updateSearchParams } from './hooks/searchParams'
import { Logger } from './../logger'

const logger = Logger.child({
  namespace: 'client'
})

export const rozetka = got.extend({
  headers: {
    'user-agent': '2bad/rozetka'
  },
  hooks: {
    beforeRequest: [logRequest(logger), updateSearchParams],
    // @todo should handle response payload from common api separately since it doesn't follow the convention
    afterResponse: [logResponse(logger), unwrapResponse]
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
  prefixUrl: 'https://xl-catalog-api.rozetka.com.ua/'
})

export const common = rozetka.extend({
  prefixUrl: 'https://common-api.rozetka.com.ua/'
})

export const product = rozetka.extend({
  prefixUrl: 'https://product-api.rozetka.com.ua/'
})
