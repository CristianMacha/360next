import InfoSection from "@/components/info-section";
import PortadaService from "@/components/portada-service";
import OurWork from "./our-work";

import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL('https://360next.vercel.app/'),
    title: 'Gestion de redes sociales |360 Virtual Solutions',
    description: 'Servicio profesional de gestión de contenido para redes sociales. Maximiza el impacto de tu presencia en redes sociales con nuestro equipo especializado en estrategias de contenido y publicaciones.',
    robots: 'index, follow',
    openGraph: {
      url: 'https://www.facebook.com/360VSolutions/',
      title: '360 Virtual Solutions | Huancayo',
      description: 'Somos una Agencia de Marketing & Desarrollo de Software, especializados brindar soluciones tecnológicas.',
    }
  }
export default function SocialNetworks() {
    const backgroundSocialNetwork = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FserviceSocialNetworks.jpg?alt=media&token=117c5df9-8f22-491e-8319-c8468daebfe7';
    return (
        <>
            <PortadaService
                background={backgroundSocialNetwork}
                description="Ofrecemos servicios completos que incluyen la creación de páginas de Facebook, la gestión de redes sociales y estrategias de marketing en redes sociales. Confía en nuestro equipo de expertos para impulsar tu marca en el mundo digital y alcanzar el éxito deseado."
                title="Gestión de Redes Sociales" />
            <InfoSection
                title="Tendencias"
                image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fweb-development.jpg?alt=media&token=364fe7cb-ee03-4761-a582-bae6ba40dc11"
                features={['Creación de páginas de Facebook', 'Gestión de redes sociales', 'Estrategias de marketing en redes sociales']}
                description="Nos mantenemos siempre un paso adelante al ofrecerte lo último en tendencias digitales. Sabemos que estar al tanto de las tendencias en las redes sociales es fundamental para el éxito de tu marca." />
            <InfoSection
                title="Posicionamiento Seo"
                image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fweb-development.jpg?alt=media&token=364fe7cb-ee03-4761-a582-bae6ba40dc11"
                features={['Optimización de perfiles', 'Publicaciones en redes sociales', 'Técnicas avanzadas de SEO']}
                description="Creamos estrategias para optimizar tus perfiles y publicaciones en las redes sociales más relevantes, usamos técnicas avanzadas de SEO para mejorar la visibilidad de tu marca." />
            <OurWork />
        </>
    )
}