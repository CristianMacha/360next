import PortadaService from "@/components/portada-service";
import OurWork from "./our-work";

export default function DesignWeb() {
    const backgroundDesignWeb = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FserviceDesignWeb.jpg?alt=media&token=e70eb8e4-d850-4379-b1f4-df0f36a78783';
    return (
        <>
            <PortadaService
                title="Diseño Web"
                description="Nos especializamos en crear sitios web visualmente atractivos y funcionales. Nuestro equipo de expertos en diseño web se enfoca en capturar la esencia de tu marca y transmitirla a través de un diseño personalizado y único"
                background={backgroundDesignWeb} />
            <OurWork />
        </>
    )
}