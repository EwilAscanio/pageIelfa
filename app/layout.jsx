import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProviderWrapper } from '@/components/ThemeProviderWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IELFA - Iglesia Evangélica Libre Flor Amarillo',
  description: 'Una comunidad de fe, esperanza y amor. Únete a nosotros en nuestro camino espiritual.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}