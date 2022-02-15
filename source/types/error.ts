import { CustomErrorParams } from 'zod'

type ErrorCode = 'empty_response'

export const customError = (errorCode: ErrorCode): CustomErrorParams => {
  switch (errorCode) {
    case 'empty_response':
      return { message: `Bad response. The item you requested is not available.` }
  }
}
