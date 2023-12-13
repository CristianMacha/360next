import InfoSection from "@/components/info-section";
import PortadaService from "@/components/portada-service";
import OurWork from "./our-work";

export default function Development() {
    const backgroundDevelopment = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FbackgroundDevelopment.jpg?alt=media&token=49b862e5-77f2-4552-a9ab-9505e05ab8b7';

    return (
        <div className="relative">
            <PortadaService
                title="Desarrollo"
                description="¡Impulsa tu presencia en línea con nuestra agencia de desarrollo web especializada en desarrollo full stack! Nuestro equipo de expertos está listo para ayudarte a destacar y alcanzar tus objetivos digitales."
                background={backgroundDevelopment} />
            <InfoSection
                title="Desarrollo Web"
                description="Inspire la conexión a través de experiencias excepcionales en el sitio web"
                features={['Website', 'Landing Page']}
                image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fweb-development.jpg?alt=media&token=364fe7cb-ee03-4761-a582-bae6ba40dc11" />
            <InfoSection
                title="Aplicaciones"
                description="Inspire la conexión a través de experiencias excepcionales en el sitio web"
                features={['Applicaciones Web']}
                image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fweb-development.jpg?alt=media&token=364fe7cb-ee03-4761-a582-bae6ba40dc11" />
            <OurWork />
        </div>
    )
}