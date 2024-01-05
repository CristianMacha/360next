export default function Experience() {
    const tape = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FtapeOurExperience.png?alt=media&token=9c49c34b-7808-4ede-bbb0-766dc7e29716';
    return (
        <section className="flex justify-center h-auto md:h-screen py-[40px] px-[16px] flex-col items-start gap-[8px] md:px-[40px] experience-card relative">
            <div style={{ backgroundImage: `url(${tape})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[740px] -z-[1]"></div>
            <div className="flex flex-col items-start gap-[60px] self-stretch lg:flex-row lg:justify-between lg:items-center">
                <div className="flex flex-col items-start gap-[70px] self-stretch lg:gap-[140px]">
                    <h2 className="title-small md:title-medium lg:title-large">
                        Nuestra Experiencia
                    </h2>
                </div>
                <div className="flex w-auto py-[80px] px-[40px] flex-col justify-center items-center gap-[8px] self-stretch rounded-[40px] bg-[#D9FE95] lg:self-auto lg:w-[690px] overflow-hidden experience-desktop">
                    <div className="flex flex-col justify-center items-start gap-[28px] self-stretch lg:self-auto">
                        <div className="flex flex-col items-start gap-[44px] self-stretch lg:self-auto">
                            <h3 className="content-small md:content-medium lg:content-large font-normal">
                                Nuestro equipo cuenta con una gran cantidad de
                                <span className="font-bold"> experiencia</span>, por lo que puedes estar seguro de que
                                presentaremos <a className="font-bold">proyectos impresionantes</a> y que nuestra
                                comunicación sea impecable.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}