import type { Options, Response } from 'got'
import { Logger } from './../../logger'

const log = Logger.child({
  namespace: 'client'
})

export const logRequest = (options: Options): void => {
  const { method, url, body, searchParams } = options

  const context = {
    method: method,
    url: url?.toString() ?? '',
    body: body?.toString() ?? '',
    searchParams: searchParams?.toString() ?? ''
  }

  log.debug(context, 'request parameters')
}

export const logResponse = (response: Response): Response => {
  const { url, headers, statusCode } = response

  try {
    const context = {
      url,
      headers: JSON.stringify(headers),
      statusCode
    }
    log.debug(context, 'response info')
  } catch (error) {
    log.error('unable to parse response headers')
  }

  return response
}
