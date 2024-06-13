import {
  Inter,
  Noto_Serif_TC,
  Playfair,
  Josefin_Sans,
  Scheherazade_New
} from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const noto = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const playfair = Playfair({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
})

export const scheherazade = Scheherazade_New({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})