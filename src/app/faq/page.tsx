import Portada from "./portada";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL('https://360next.vercel.app/'),
    title: 'Preguntas Frecuentes | 360 Virtual Solutions',
    description: 'Encuentra respuestas a las preguntas frecuentes sobre nuestros servicios de diseño y desarrollo web, marketing digital y social media. Obtén información detallada sobre nuestros servicios, procesos y enfoque para potenciar tu presencia en línea.',
    robots: 'index, follow',
    openGraph: {
      url: 'https://www.facebook.com/360VSolutions/',
      title: '360 Virtual Solutions | Huancayo',
      description: 'Somos una Agencia de Marketing & Desarrollo de Software, especializados brindar soluciones tecnológicas.',
    }
  }
export default function Faq() {
    return (
        <div className="pt-[64px]">
            <Portada />
        </div>
    )
}