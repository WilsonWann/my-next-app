import { Inter, Noto_Serif_TC, } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const noto = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['400', '700'],
})