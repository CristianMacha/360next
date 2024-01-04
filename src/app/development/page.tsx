import InfoSection from "@/components/info-section";
import PortadaService from "@/components/portada-service";
import OurWork from "./our-work";
import type { Metadata } from 'next'
import InfoCardLarge from "@/presentation/components/InfoCardLarge";

export const metadata: Metadata = {
    metadataBase: new URL('https://360next.vercel.app/'),
    title: 'Desarrollo | 360 Virtual Solutions',
    description: 'Descubre cómo nuestro equipo de desarrollo web puede crear soluciones digitales innovadoras para tu empresa. Conoce nuestros servicios de diseño, desarrollo y mantenimiento de sitios web adaptados a tus necesidades.',
    robots: 'index, follow',
    openGraph: {
        url: 'https://www.facebook.com/360VSolutions/',
        title: '360 Virtual Solutions | Huancayo',
        description: 'Somos una Agencia de Marketing & Desarrollo de Software, especializados brindar soluciones tecnológicas.',
    }
}
export default function Development() {
    const backgroundDevelopment = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FbackgroundDevelopment.jpg?alt=media&token=49b862e5-77f2-4552-a9ab-9505e05ab8b7';

    return (
        <div className="relative">
            <PortadaService
                title="Desarrollo Web"
                description="¡Impulsa tu presencia en línea con nuestra agencia de desarrollo web especializada en desarrollo full stack! Nuestro equipo de expertos está listo para ayudarte a destacar y alcanzar tus objetivos digitales."
                background={backgroundDevelopment} />
            <InfoSection
                title="Programación Web"
                description="Estamos listos para crear soluciones personalizadas y funcionales que se adapten a tus necesidades, desde sitios web atractivos y responsivos, estamos aquí para convertir tus ideas en realidad."
                features={['Website', 'Landing Page']}
                image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fweb-development.jpg?alt=media&token=364fe7cb-ee03-4761-a582-bae6ba40dc11" />
            <InfoSection
                title="Aplicaciones"
                description="Transforma tu visión en una realidad móvil con nuestras aplicaciones personalizadas, diseñadas para cautivar a tus usuarios y potenciar el crecimiento de tu negocio."
                features={['Applicaciones Web']}
                image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fweb-development.jpg?alt=media&token=364fe7cb-ee03-4761-a582-bae6ba40dc11" />
            {/* <OurWork /> */}
            <InfoCardLarge
                lotties={true}
                description="Nos mantenemos siempre un paso adelante al ofrecerte lo último en tendencias digitales. Sabemos que estar al tanto de las tendencias en las redes sociales es fundamental para el éxito de tu marca."
                splineUrl="https://prod.spline.design/OcTCyrrgfVny4DJb/scene.splinecode"
                image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FunSoloClick.webp?alt=media&token=69cb2262-ad53-4ccf-bea2-c4e3d87689c0"
                features={[
                    'Website',
                    'Desarrollo Web',
                    'Landing Page',
                    'SaaS',
                    'Startup',
                    'Web',
                    'Fintech',
                    'Marketing'
                ]}
                title=""
            />
        </div>
    )
}