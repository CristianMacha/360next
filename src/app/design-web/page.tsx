import Banner from "@/components/Banner";
import Card from "@/components/Card";
import CardSample from "@/components/CardSample";
import Hero from "@/components/Hero";

export default function DesignWeb() {
    return (
        <div>
            <Hero
                url="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FdisenoWebPortada.jpg?alt=media&token=a3c4c803-f658-40ce-9711-b2e5c9593b5c"
                title="Diseño Web"
                description="Una amplia variedad de experiencias web, incluyendo promocionales, páginas de destino, marketing, portafolios y sitios corporativos." />
            <div className="h-screen flex items-center px-[8px] md:px-[40px]">
                <Card
                    title="Intuitivo e Interactivo"
                    description="Creamos experiencias web que cautivan a tus visitantes desde el primer clic. Nuestro enfoque centrado en el usuario garantiza la facilidad de navegación y una estética impactante."
                    position="left" />
            </div>
            <div className="h-screen flex items-center px-[8px] md:px-[40px]">
                <Card
                    title="Responsivo"
                    description="Tu sitio se verá y funcionará perfectamente en todos los dispositivos. Desde computadoras de escritorio hasta smartphones, aseguramos una experiencia consistente para todos los usuarios."
                    position="right" />
            </div>
            <div className="h-screen flex items-center px-[8px] md:px-[40px]">
                <Card
                    title="SEO"
                    description="Posiciona tu empresa en lo más alto de los resultados de búsqueda locales. Implementamos estrategias de SEO para aumentar la visibilidad y atraer tráfico relevante."
                    position="left" />
            </div>
            <div className="h-screen flex items-center px-[8px] md:px-[40px]">
                <Card
                    title="Tecnología"
                    description="Mantente a la vanguardia con características innovadoras. Desde animaciones atractivas hasta integración de redes sociales, dotamos a tu sitio web con las últimas tendencias tecnológicas."
                    position="right" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <CardSample url="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360page%2FserviceDesignWeb1600x900.jpeg?alt=media&token=6c9386d5-8714-48c0-8143-510a060feba0" title="Yordex" description="Financial service and no-code software that allows to manage multiple payouts" items={['2023', 'Brand indentity', 'Website design']} />
                <CardSample url="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360page%2FserviceDesignWeb1600x900.jpeg?alt=media&token=6c9386d5-8714-48c0-8143-510a060feba0" title="Yordex" description="Financial service and no-code software that allows to manage multiple payouts" items={['2023', 'Brand indentity', 'Website design']} />
            </div>
            <div>
                <Banner
                    title="Da el Primer Paso Hacia una Marca Poderosa"
                    description="Tu marca es más que un logo; es la promesa que haces a tus clientes. En 360 VIRTUAL SOLUTIONS, te ayudamos a cumplir esa promesa. ¡Descubre cómo podemos potenciar tu marca hoy mismo!" />
            </div>
        </div>
    )
}