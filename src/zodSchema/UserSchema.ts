import { z } from 'zod'

export const UserSchema = z.object({
  name: z.string().min(2, { message: '請輸入姓名' }),
  phone: z.string().regex(/(^[09]{2}\d{8}$)/g, { message: '請輸入聯絡電話' }),
  lineId: z.string(),
  message: z.string(),
})

export type User = z.infer<typeof UserSchema>
