export default function Testimonials() {
    const backgroundUrlImage = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FtestimonialBackground.jpg?alt=media&token=69c5d301-13e5-4b15-be93-f36fed4197a3';
    return (
        <section className="flex py-[24px] h-auto lg:h-screen px-[16px] gap-[8px] bg-white lg:px-[40px] lg:pt-[100px] lg:pb-[36px] justify-center lg:items-center" style={{backgroundImage: `url(${backgroundUrlImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className="flex flex-col justify-center items-start gap-[100px] flex-1 lg:justify-between lg:items-end lg:flex-row lg:gap-[auto] border-b border-black rounded-[40px] pb-10 md:pb-20">
                <div className="flex flex-col justify-center items-start gap-[40px] self-stretch lg:gap-[200px]">
                    <h2 className="title-small md:title-medium lg:title-large">Nuestros Clientes</h2>
                    <div className="flex flex-col items-start gap-[15px] lg:flex-row lg:gap-[24px]">
                        <div className="flex gap-[8px] items-end lg:h-[82px] lg:items-end lg:gap-[4px]">
                            <div className="display-small md:display-medium lg:display-large">12</div>
                            <div className="content-small md:content-medium lg:content-large">Reseñas verificadas</div>
                        </div>
                        <div className="flex gap-[8px] items-end lg:h-[82px] lg:items-end lg:gap-[4px]">
                            <div className="display-small md:display-medium lg:display-large">5.0</div>
                            <div className="content-small md:content-medium lg:content-large">Puntuación media</div>
                        </div>
                    </div>
                </div>
                <h3 className="content-small md:content-medium lg:content-large px-5">Un cliente satisfecho es el mejor indicador de éxito de la colaboración y enfoque de un proyecto.</h3>
            </div>
        </section>
    )
}