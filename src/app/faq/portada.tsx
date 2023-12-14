import Panel from "./panel";

export default function Portada() {
    const cubeImage = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FfaqCube.jpg?alt=media&token=5245b082-17c4-42d3-b41e-dd1b424f710b';

    return (
        <section className="flex flex-col gap-10 px-[16px] md:px-[40px]">
            <h1 className="font-primary text-[96px] leading-[80px]">Preguntas y Respuestas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="h-[678px] rounded-[40px]" style={{ backgroundImage: `url(${cubeImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                <div>
                    <div className="flex flex-col gap-4">
                        <Panel question="Costos estimados" size="medium">
                            <p className="font-primary text-[20px] leading-normal">Las estimaciones de costos dependen del alcance y la complejidad del proyecto. Ofrecemos precios competitivos adaptados a sus necesidades específicas. Para brindarle una estimación precisa, necesitaríamos más detalles sobre los requisitos y objetivos de su proyecto. Comuníquese con nosotros para analizar su proyecto y estaremos encantados de brindarle una estimación de costos personalizada.</p>
                        </Panel>
                        <Panel question="Proceso de desarrollo" size="large">
                            <div className="font-primary text-[20px] leading-normal">
                                <p>Nuestro proceso de desarrollo es estructurado y colaborativo. Típicamente incluye los siguientes pasos clave:</p>
                                <div className="pl-8">
                                    <ol className="list-decimal">
                                        <li>Consulta: Entender sus metas y requisitos.</li>
                                        <li>Propuesta: Proporcionar una propuesta de proyecto
                                            detallada y un cronograma.</li>
                                        <li>Diseño: Crear un diseño visualmente atractivo y funcional.</li>
                                        <li>Desarrollo: Implementar el diseño en un sitio web o aplicación
                                            completamente funcional.</li>
                                        <li>Pruebas: Garantizar que el producto cumpla con los
                                            estándares de calidad.</li>
                                        <li>Lanzamiento: Desplegar el producto final</li>
                                    </ol>
                                </div>
                            </div>
                        </Panel>
                        <Panel question="Soporte post-lanzamiento" size="medium">
                            <p className="font-primary text-[20px] leading-normal">Nuestra dedicación se extiende más allá del lanzamiento. Brindamos soporte continuo para abordar cualquier problema, implementar actualizaciones y garantizar que su proyecto se mantenga optimizado. Nuestro soporte post-lanzamiento tiene como objetivo garantizar el éxito y la funcionalidad continuada de su solución digital.</p>
                        </Panel>
                        <Panel question="Cronograma del proyecto" size="medium">
                            <p className="font-primary text-[20px] leading-normal">El cronograma del proyecto varía según la complejidad del proyecto y sus requisitos específicos. Un cronograma típico involucra etapas como consulta, diseño, desarrollo, pruebas y lanzamiento. Para una evaluación más precisa, por favor contáctenos con detalles sobre su proyecto, y estaremos encantados de esbozar un cronograma adaptado a sus necesidades.</p>
                        </Panel>
                    </div>
                </div>
            </div>
        </section>
    )
}