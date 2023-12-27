export default function Testimonials() {
    const backgroundUrlImage = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FtestimonialBackground.jpg?alt=media&token=69c5d301-13e5-4b15-be93-f36fed4197a3';
    return (
        <section className="flex py-[24px] h-screen px-[16px] gap-[8px] bg-white lg:px-[40px] lg:pt-[100px] lg:pb-[36px] justify-center lg:items-center" style={{backgroundImage: `url(${backgroundUrlImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className="flex flex-col justify-center items-start gap-[100px] flex-1 lg:justify-between lg:items-end lg:flex-row lg:gap-[auto] border-b border-black rounded-[40px] pb-10">
                <div className="flex flex-col justify-center items-start gap-[40px] self-stretch lg:gap-[200px]">
                    <h2 className="text-black font-primary text-[60px] font-medium not-italic leading-[normal] md:text-[80px] lg:text-[112px]">Nuestros Clientes</h2>
                    <div className="flex flex-col items-start gap-[15px] lg:flex-row lg:gap-[24px]">
                        <div className="flex gap-[8px] items-end lg:h-[82px] lg:items-end lg:gap-[4px]">
                            <div className="text-black font-primary text-[40px] not-italic font-bold leading-[34.5px] md:text-[60px] lg:text-[100px] lg:leading-[88px]">12</div>
                            <div className="text-black font-primary text-[16px] not-italic font-normal leading-[normal] md:text-[32px]  lg:text-[20px]">Reseñas verificadas</div>
                        </div>
                        <div className="flex gap-[8px] items-end lg:h-[82px] lg:items-end lg:gap-[4px]">
                            <div className="text-black font-primary text-[40px] not-italic font-bold leading-[34.5px] md:text-[60px] lg:text-[100px] lg:leading-[88px]">0.5</div>
                            <div className="text-black font-primary text-[16px] not-italic font-normal leading-[normal] md:text-[32px] lg:text-[20px]">Puntuación media</div>
                        </div>
                    </div>
                </div>
                <h3 className="text-black font-primary text-[20px] not-italic font-normal leading-[normal] md:text-[30px] lg:flex lg:flex-1 lg:h-[211px] lg:flex-col lg:justify-end lg:text-[32px] lg:font-medium">Un cliente satisfecho es el mejor indicador de éxito de la colaboración y enfoque de un proyecto.</h3>
            </div>
        </section>
    )
}