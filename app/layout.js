import { Fira_Code } from 'next/font/google'
import './globals.css'

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export const metadata = {
  title: 'Vehbi Öztomurcuk Portfolio',
  description: 'Frontend Developer and AI Enthusiast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={firaCode.variable}>
      <body>{children}</body>
    </html>
  )
}