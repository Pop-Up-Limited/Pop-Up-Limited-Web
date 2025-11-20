import './globals.css'
import { COMPANY_NAME, COMPANY_TAGLINE } from '../src/config/site.js'

export const metadata = {
  title: `${COMPANY_NAME} · ${COMPANY_TAGLINE}`,
  description: 'Pop Up Limited specializes in product management, UI/UX design, iOS development, and digital marketing.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}

