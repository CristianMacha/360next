import Post from "./post";
export default function Posts() {
    return (
        <section className="miseccion px-[16px] md:px-[40px] pt-[70px]" >
            <div className="flex flex-col lg:flex-row gap-10 justify-between relative">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Post
                        date="Agosto 26, 2021"
                        title="Descubre cómo crear una página web en 8 sencillos pasos"
                        reference="descubre-como-crear-una-pagina-web-en-8-sencillos-pasos"
                        image={'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fblogone.jpg?alt=media'}
                    />
                    <Post
                        date="Agosto 26, 2021"
                        title="Descubre cómo diseñar una página web para tu negocio"
                        reference="como-disenar-una-pagina-web-para-tu-negocio"
                        image={'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fblogtwo.jpg?alt=media'}
                    />
                    <Post
                        date="Agosto 26, 2021"
                        title="Cómo gestionar las redes sociales de tu negocio"
                        reference="como-gestionar-las-redes-sociales-de-tu-negocio"
                        image={'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fblogthree.jpg?alt=media'}
                    />
                </div>
            </div>
        </section>

    )
}