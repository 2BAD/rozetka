import { z } from 'zod'

export const Descriptions = z.object({
  text: z.string().nullable(),
  html: z.string().nullable(),
  isRichNoLimit: z.boolean(),
  rich: z.string().nullable()
})
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Descriptions = z.infer<typeof Descriptions>
