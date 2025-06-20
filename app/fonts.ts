import localFont from 'next/font/local'
import { Lexend } from 'next/font/google'

export const papyrus = localFont({
  src: '../public/fonts/papyrus.ttf',
  variable: '--font-papyrus',
  display: 'swap',
})

export const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
}) 