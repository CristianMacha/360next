import Portada from './portada';
import DigitalSolution from './digital-solution';
import WhyUs from './why-us';
import OurValues from '@/presentation/layouts/OurValues';
import TextFooter from './text-footer';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL('https://360next.vercel.app/'),
    title: 'Sobre Nosotros | 360 Virtual Solutions',
    description: 'Descubre quiénes somos y cómo nuestro equipo de expertos en diseño web, desarrollo web, marketing digital y social media puede ayudarte a alcanzar tus metas en línea. Conoce nuestra historia, valores y compromiso con la excelencia.',
    robots: 'index, follow',
    openGraph: {
      url: 'https://www.facebook.com/360VSolutions/',
      title: '360 Virtual Solutions | Huancayo',
      description: 'Somos una Agencia de Marketing & Desarrollo de Software, especializados brindar soluciones tecnológicas.',
    }
  }

export default function AboutUs() {
    return (
        <>
            <Portada />
            <DigitalSolution />
            <WhyUs />
            <OurValues />
            <TextFooter />
        </>
    )
}