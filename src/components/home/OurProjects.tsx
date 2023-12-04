export default function OurProjects() {
    return (
        <section className="flex py-[24px] px-[16px] items-start gap-[8px] self-stretch bg-black lg:px-[40px] lg:pt-[200px] lg:pb-[60px] lg:justify-center lg:items-center">
            <div className="flex flex-col justify-center items-start gap-[100px] flex-1 lg:justify-between lg:items-end lg:flex-row lg:gap-[auto]">
                <div className="flex flex-col justify-center items-start gap-[40px] self-stretch lg:gap-[200px]">
                    <h2 className="text-white font-primary text-[40px] font-medium not-italic leading-[normal] lg:text-[112px]">Nuestros Proyectos</h2>
                    <div className="flex flex-col items-start gap-[12px] lg:flex-row lg:gap-[24px]">
                        <div className="flex gap-[8px] items-end lg:h-[82px] lg:items-end lg:gap-[4px]">
                            <div className="text-white font-primary text-[40px] not-italic font-bold leading-[34.5px] lg:text-[100px] lg:leading-[88px]">42</div>
                            <div className="text-white font-primary text-[16px] not-italic font-normal leading-[normal] lg:text-[20px]">proyectos completados</div>
                        </div>
                        <div className="flex gap-[8px] items-end lg:h-[82px] lg:items-end lg:gap-[4px]">
                            <div className="text-white font-primary text-[40px] not-italic font-bold leading-[34.5px] lg:text-[100px] lg:leading-[88px]">2</div>
                            <div className="text-white font-primary text-[16px] not-italic font-normal leading-[normal] lg:text-[20px]">proyectos en curso</div>
                        </div>
                    </div>
                </div>
                <div className="text-white font-primary text-[20px] not-italic font-normal leading-[normal] lg:flex lg:flex-1 lg:h-[211px] lg:flex-col lg:justify-end lg:text-[32px] lg:font-medium">Nos especializamos en crear experiencias innovadoras para pequeñas y grandes empresas.</div>
            </div>
        </section>
    )
}