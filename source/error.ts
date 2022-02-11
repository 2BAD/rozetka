import { z } from 'zod'

export const errorMap: z.ZodErrorMap = (error, ctx) => {
  if (error.code === z.ZodIssueCode.custom) {
    switch (error.params?.code) {
      case 'empty_response':
        return { message: `Bad response. The item you requested is not available.` }
    }
  }

  // fall back to default message
  return { message: ctx.defaultError }
}
