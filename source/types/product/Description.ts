import { z } from 'zod'

export const Description = z.object({
  text: z.string().nullable(),
  html: z.string().nullable(),
  isRichNoLimit: z.boolean(),
  rich: z.string().nullable()
})
export type Description = z.infer<typeof Description>
