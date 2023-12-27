import PortadaService from "@/components/portada-service";
import OurWork from "./our-work";
import Feature from "./feature";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL('https://360next.vercel.app/'),
    title: 'Diseño web | 360 Virtual Solutions',
    description: 'Descubre cómo nuestro equipo de diseño web puede crear experiencias visuales impactantes para tu marca. Conoce nuestros servicios de diseño de interfaces, diseño gráfico y creación de identidad visual para potenciar tu presencia en línea.',
    robots: 'index, follow',
    openGraph: {
      url: 'https://www.facebook.com/360VSolutions/',
      title: '360 Virtual Solutions | Huancayo',
      description: 'Somos una Agencia de Marketing & Desarrollo de Software, especializados brindar soluciones tecnológicas.',
    }
  }
export default function DesignWeb() {
    const backgroundDesignWeb = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FserviceDesignWeb.jpg?alt=media&token=e70eb8e4-d850-4379-b1f4-df0f36a78783';
    return (
        <>
            <PortadaService
                title="Diseño Web"
                description="Creamos páginas web que sean visualmente atractivas . Nuestro equipo de expertos en diseño web se enfoca en capturar la esencia de tu marca y transmitirla a través de un diseño personalizado y único"
                background={backgroundDesignWeb} />
            <Feature />
            <OurWork />
        </>
    )
}