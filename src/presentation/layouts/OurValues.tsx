import Card from "../components/Card";

export default function OurValues() {
    const values = [
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Felipses.png?alt=media&token=0e049f3d-377e-4af7-8425-58ff353aba9d',
            title: 'Transparencia',
            description: 'Defendemos la comunicación clara y abierta. Mantenemos a nuestros clientes informados durante todas las etapas del proyecto y estamos disponibles para cualquier pregunta.'
        }
    ]
    return (
        <div className="flex flex-col justify-center items-center gap-4 px-[16px] md:px-[40px]">
            <img src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FCintaNuestrosValores.png?alt=media&token=7fc54726-188b-44c7-9e69-d659707a4b77" alt="" className="absolute -z-[1]" />
            <h2 className="text-[72px] font-bold">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="col-span-1 md:col-span-2">
                    <Card
                        image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Felipses.png?alt=media&token=0e049f3d-377e-4af7-8425-58ff353aba9d"
                        title="Transparencia"
                        description="Defendemos la comunicación clara y abierta. Mantenemos a nuestros clientes informados durante todas las etapas del proyecto y estamos disponibles para cualquier pregunta." />
                </div>
                <div>
                    <Card
                        image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Felipses.png?alt=media&token=0e049f3d-377e-4af7-8425-58ff353aba9d"
                        title="Oportunidad"
                        description="Para seguir siendo competitivas en un panorama en constante evolución, las empresas necesitan innovar. Por eso no trabajamos sólo en los productos de hoy." />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="col-span-1">
                    <Card
                        image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Felipses.png?alt=media&token=0e049f3d-377e-4af7-8425-58ff353aba9d"
                        title="Creatividad"
                        description="La creatividad es nuestro motor. Pensamos con imaginación y resolvemos problemas innovadores para ofrecer experiencias digitales únicas y atractivas." />
                </div>
                <div className="col-span-1 lg:col-span-2">
                    <Card
                        image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Felipses.png?alt=media&token=0e049f3d-377e-4af7-8425-58ff353aba9d"
                        title="Soñar en Grande"
                        description="Ningún sueño es demasiado ambicioso para nosotros. Alentamos a nuestros clientes a soñar en grande y luego trabajamos incansablemente para convertir esas visiones en realidades digitales." />
                </div>
                <div>
                    <Card
                        image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Felipses.png?alt=media&token=0e049f3d-377e-4af7-8425-58ff353aba9d"
                        title="Innovación"
                        description="Prosperamos superando límites y explorando nuevas tecnologías. Como pioneros dedicados, creamos experiencias digitales preparadas para el futuro que no solo siguen la curva, sino que la definen." />
                </div>
            </div>
        </div>
    )
}