import Portada from "./portada";
import Posts from "./posts";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL('https://360next.vercel.app/'),
    title: 'Blog |360 Virtual Solutions',
    description: 'Explora nuestro blog para obtener información actualizada sobre diseño web, desarrollo web, marketing digital y social media. Encuentra artículos, consejos y tendencias para potenciar tu presencia en línea.',
    robots: 'index, follow',
    openGraph: {
      url: 'https://www.facebook.com/360VSolutions/',
      title: '360 Virtual Solutions | Huancayo',
      description: 'Somos una Agencia de Marketing & Desarrollo de Software, especializados brindar soluciones tecnológicas.',
    }
  }
export default function Blog() {
    return (
        <>
            <Portada />
            <Posts />
        </>
    )
}