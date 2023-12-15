import Post from "./post";

export default function Posts() {
    return (
        <section className="px-[16px] md:px-[40px] mt-[96px]">
            <div className="flex flex-col md:flex-row gap-10 justify-between relative">
                <div className="w-[400px]">
                    left
                </div>
                <div className="w-full">
                    <Post
                        date="13 Diciembre 2023"
                        title="¿Cómo puede una página web impactar positivamente el crecimiento de tu negocio?"
                        images={[
                            'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/post13decImg01.jpg?alt=media&token=7dd8b9ff-7ec7-4875-af8b-6303be1f3a53',
                            'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fpost13DecImg02.jpg?alt=media&token=43b979ae-82fc-4151-b7da-6358188d0474'
                        ]}
                        description="Un sitio web bien desarrollado y diseñado estratégicamente puede tener un impacto significativo en el crecimiento de tu negocio. Actúa como una poderosa herramienta de marketing y comunicación que te permite llegar a una audiencia más amplia, generar confianza en tu marca y convertir visitantes en clientes. Además, un sitio web funcional y fácil de usar mejora la experiencia del usuario, lo que a su vez aumenta las conversiones y fideliza a los clientes existentes. En resumen, un sitio web efectivo es una inversión valiosa que puede impulsar el éxito y la expansión de tu negocio en el mundo digital." />
                </div>
                <div className="w-[400px] relative">
                    <button className='py-[10px] md:py-[17px] px-[20px] md:px-[33px] rounded-full bg-[#D9FE95] font-primary font-medium text-[20px] flex flex-row gap-4 items-center sticky top-4'>Trabajemos! <svg xmlns="http://www.w3.org/2000/svg" width="33" height="16" viewBox="0 0 33 16" fill="none">
                        <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="black" />
                    </svg></button>
                </div>
            </div>
        </section>

    )
}