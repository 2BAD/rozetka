import type { Options, Response } from 'got'
import type { Logger } from 'roarr'

export const logRequest =
  (log: Logger) =>
  (options: Options): void => {
    const { method, url, body, searchParams } = options

    const context = {
      method: method,
      url: url?.toString() ?? '',
      body: body?.toString() ?? '',
      searchParams: searchParams?.toString() ?? ''
    }

    log.debug(context, 'request parameters')
  }

export const logResponse =
  (log: Logger) =>
  (response: Response): Response => {
    const { url, headers, statusCode } = response

    const context = {
      url,
      headers: JSON.stringify(headers),
      statusCode
    }
    log.debug(context, 'response info')

    return response
  }
