import { z } from 'zod'
import { customError } from '../../types/error'

export const Description = z
  .object({
    text: z.string().nullable(),
    html: z.string().nullable(),
    isRichNoLimit: z.boolean(),
    rich: z.string().nullable()
  })
  .refine((o) => Object.values(o).some((v) => v), customError('empty_response'))

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Description = z.infer<typeof Description>
