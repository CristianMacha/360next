import InfoSection from "@/components/info-section";
import PortadaService from "@/components/portada-service";
import OurWork from "./our-work";

import type { Metadata } from 'next'
import InfoCardLarge from "@/presentation/components/InfoCardLarge";

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
                title="Redes Sociales" />
            <InfoCardLarge
                image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FFONDITO%20CEL%202.0.png?alt=media&token=3b2cb576-2d5f-4d9c-8150-c6c888524512"
                title="Tendencias"
                description="Nos mantenemos siempre un paso adelante al ofrecerte lo último en tendencias digitales. Sabemos que estar al tanto de las tendencias en las redes sociales es fundamental para el éxito de tu marca."
                features={['Marketing', 'Facebook']} />
            <InfoSection
                title="Gestión de Contenido"
                image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FredesSocialesGestionContenido.jpg?alt=media&token=dbc0823f-a8d2-4567-a080-2e184fbafdcd"
                features={['Creación de páginas de Facebook', 'Gestión de redes sociales', 'Estrategias de marketing en redes sociales']}
                description="Destaca con contenido de calidad. Ofrecemos servicios especializados en la creación y gestión de contenido persuasivo, adaptado a tu audiencia y objetivos." />
            <InfoSection
                title="Interacción con la audiencia"
                image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FredesSocialesInteracionAudiencia.jpg?alt=media&token=fad572f5-5cb5-4c6f-afa7-131a859ca2c2"
                features={['Optimización de perfiles', 'Publicaciones en redes sociales', 'Técnicas avanzadas de SEO']}
                description="Fomenta la participación. Desarrollamos estrategias personalizadas para interactuar con tu audiencia, promoviendo la participación y construyendo relaciones sólidas en línea." />
            <OurWork />
        </>
    )
}