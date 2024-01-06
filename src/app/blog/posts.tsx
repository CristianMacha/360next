import Post from "./post";
export default function Posts() {
    return (
        <section className="miseccion px-[16px] md:px-[40px] pt-[70px]" >
            <div className="flex flex-col lg:flex-row gap-10 justify-between relative">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Post
                        date="13 Diciembre 2023"
                        title="¿Cómo puede una página web impactar positivamente el crecimiento de tu negocio?"
                        reference="descubre-como-crear-una-pagina-web-en-8-sencillos-pasos"
                        image={'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fpost13DecImg02.jpg?alt=media'}
                        description="Un sitio web bien desarrollado y diseñado estratégicamente puede tener un impacto significativo en el crecimiento de tu negocio. Actúa como una poderosa herramienta de marketing y comunicación que te permite llegar a una audiencia más amplia, generar confianza en tu marca y convertir visitantes en clientes. Además, un sitio web funcional y fácil de usar mejora la experiencia del usuario, lo que a su vez aumenta las conversiones y fideliza a los clientes existentes. En resumen, un sitio web efectivo es una inversión valiosa que puede impulsar el éxito y la expansión de tu negocio en el mundo digital." />
                </div>
            </div>
        </section>

    )
}