import type { Metadata } from 'next'
import Header from '../components/header'
import Footer from '@/components/home/footer'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://360next.vercel.app/'),
  title: '360 Virtual Solutions',
  description: 'Somos una agencia especializada en marketing digital, diseño y desarrollo web, y branding. Ayudamos a las empresas a destacar en línea y a construir marcas sólidas. ¡Contáctanos para potenciar tu presencia en internet!',
  robots: 'index, follow',
  openGraph: {
    url: 'https://www.facebook.com/360VSolutions/',
    title: '360 Virtual Solutions | Huancayo',
    description: 'Somos una Agencia de Marketing & Desarrollo de Software, especializados brindar soluciones tecnológicas.',
    locale:"es_PE",
    type:"website"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden relative'>
        <Header />
        {children}
        {/* <FloatingMenu /> */}
        <Footer />
      </body>
    </html>
  )
}
