import { z } from 'zod'

export const Response = z
  .object({
    data: z.union([z.array(z.unknown()), z.unknown()]),
    success: z.boolean().optional()
  })
  .refine((v) => v.data !== null, {
    message: `Response data property is null`
  })
