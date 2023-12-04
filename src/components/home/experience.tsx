export default function Experience() {
    return (
        <section className="flex py-[24px] px-[16px] flex-col items-start gap-[8px] bg-white self-stretch lg:px-[40px] experience-card">
            <div className="flex flex-col items-start gap-[60px] self-stretch lg:flex-row lg:justify-between lg:items-center">
                <div className="flex flex-col items-start gap-[70px] self-stretch lg:gap-[140px]">
                    <p className="text-black font-primary text-[40px] not-italic font-bold leading-[normal] lg:text-[112px] lg:leading-[95px]">
                        Experiencia
                    </p>
                    <div className="flex justify-between items-start self-stretch">
                        <div className="flex flex-col items-start gap-[24px] flex-1 lg:gap-[40px]">
                            <h4 className="text-black opacity-50 font-primary text-[18px] not-italic font-normal leading-[normal]">
                                Especialización
                            </h4>
                            <div className="flex flex-col items-start gap-[4px] self-stretch">
                                <h3 className="self-stretch text-black font-primary text-[16px] not-italic font-normal leading-[normal] lg:text-[24px]">
                                    Visualización de Marca
                                </h3>
                                <h3 className="self-stretch text-black font-primary text-[16px] not-italic font-normal leading-[normal] lg:text-[24px]">
                                    Sitios Web de Marketing
                                </h3>
                                <h3 className="self-stretch text-black font-primary text-[16px] not-italic font-normal leading-[normal] lg:text-[24px]">
                                    Sitios Web Corporativos
                                </h3>
                                <h3 className="self-stretch text-black font-primary text-[16px] not-italic font-normal leading-[normal] lg:text-[24px]">
                                    Productos Digitales
                                </h3>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-[24px] flex-1 lg:gap-[40px]">
                            <h4 className="text-black opacity-50 font-primary text-[18px] not-italic font-normal leading-[normal]">
                                Industrias
                            </h4>
                            <div className="flex flex-col items-start gap-[4px] self-stretch">
                                <h3 className="self-stretch text-black font-primary text-[16px] not-italic font-normal leading-[normal] lg:text-[24px]">
                                    Bienes raíces
                                </h3>
                                <h3 className="self-stretch text-black font-primary text-[16px] not-italic font-normal leading-[normal] lg:text-[24px]">
                                    Tecnologia Financiera (Fintech)
                                </h3>
                                <h3 className="self-stretch text-black font-primary text-[16px] not-italic font-normal leading-[normal] lg:text-[24px]">
                                    Educación Tecnológica (Edtech)
                                </h3>
                                <h3 className="self-stretch text-black font-primary text-[16px] not-italic font-normal leading-[normal] lg:text-[24px]">
                                    Software como Servicio (SaaS)
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-auto py-[31px] px-[34px] flex-col justify-center items-center gap-[8px] self-stretch rounded-[40px] bg-[#D9FE95] lg:self-auto lg:w-[690px] overflow-hidden experience-desktop">
                    <div className="flex flex-col justify-center items-start gap-[28px] self-stretch lg:self-auto">
                        <div className="flex flex-col items-start gap-[44px] self-stretch lg:self-auto">
                            <span className="font-primary text-[16px] not-italic font-normal leading-[normal] text text-black">Experiencia</span>
                            <p className="self-stretch font-primary text-black text-[32px] not-italic font-normal leading-[normal] lg:text-[36px] text">
                                Nuestro equipo cuenta con una gran cantidad de
                                experiencia, por lo que puedes estar seguro de que
                                presentaremos proyectos impresionantes y que nuestra
                                comunicación sea impecable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}