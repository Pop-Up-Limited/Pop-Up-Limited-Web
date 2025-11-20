import './globals.css'
import { COMPANY_NAME, COMPANY_TAGLINE } from '../src/config/site.js'
import Navigation from '../src/components/Navigation'
import { LanguageProvider } from '../src/contexts/LanguageContext'

export const metadata = {
  title: `${COMPANY_NAME} · ${COMPANY_TAGLINE}`,
  description: 'Pop Up Limited specializes in product management, UI/UX design, iOS development, and digital marketing.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <LanguageProvider>
          <Navigation />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  )
}

