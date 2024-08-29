import { Fira_Code } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

const neufreitExtraBold = localFont({
  src: '../public/fonts/Neufreit-Regular.ttf',
  variable: '--font-neufreit-extrabold',
})

export const metadata = {
  title: 'Vehbi Öztomurcuk Portfolio',
  description: 'Frontend Developer and AI Enthusiast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${firaCode.variable} ${neufreitExtraBold.variable}`}>
      <body>{children}</body>
    </html>
  )
}