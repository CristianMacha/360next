export default function Portada() {
    return (
        <>
            <section className="flex pt-[120px] pb-[24px] px-[16px] justify-center items-center gap-[8px] self-stretch lg:hidden lg:pt-[24px]">
                <div className="flex h-[656px] flex-col justify-between items-start flex-1">
                    <div className="flex flex-col items-start flex-1 self-stretch">
                        <h1 className="self-stretch text-black font-primary text-[60px] font-bold leading-[normal]"><span className="text-[#797979]">Agencia</span> de Diseño</h1>
                        <h1 className="self-stretch text-black font-primary text-[60px] font-bold leading-[normal]">& Desarrollo</h1>
                        <h1 className="self-stretch text-[#797979] font-primary text-[60px] font-bold leading-[normal]">Creativo</h1>
                    </div>
                    <div className="flex justify-center items-end gap-[8px] flex-1 self-stretch">
                        <div className="flex-1 text-black font-primary text-[28px] font-normal leading-[normal]">
                            <p>Nos especializamos en crear experiencias innovadoras para pequeñas y grandes empresas.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hidden lg:flex h-[982px] px-[40px] pb-[60px] pt-0 flex-col justify-center items-center gap-[8px] self-stretch bg-white">
                <div className="flex h-[579px] flex-col justify-between items-center shrink-0 self-stretch">
                    <div className="flex justify-between items-start self-stretch">
                        <div className="flex flex-col items-start gap-[8px]">
                            <h1 className="text-black font-primary text-[70px] not-italic font-bold leading-[66px] uppercase"><span className="text-[#797979]">AGENCIA DE</span> DISEÑO</h1>
                            <h1 className="text-black font-primary text-[70px] not-italic font-bold leading-[66px] uppercase">& Desarrollo</h1>
                            <h1 className="text-[#797979] font-primary text-[70px] not-italic font-bold leading-[66px] uppercase">Creativo</h1>
                        </div>
                        <div className="flex justify-center items-end gap-[8px] self-stretch">
                            <p className="w-[375px] text-black font-primary text-[32px] not-italic font-normal leading-[normal]">Nos especializamos en crear experiencias innovadoras para pequeñas y grandes empresas.</p>
                        </div>
                    </div>
                    <div className="flex h-[77px] items-start shrink-0 self-stretch rounded-t-[40px] border-x-[1px] border-t-[1px] border-[#c7c7c7]">
                        <div className="flex justify-center items-center gap-[8px] flex-1 self-stretch border-r-[1px] border-[#c7c7c7]">
                            <h2><a href="/" className="text-black font-primary text-[24px] not-italic font-normal leading-[33.5px]">Branding</a></h2>
                        </div>
                        <div className="flex justify-center items-center gap-[8px] flex-1 self-stretch border-r-[1px] border-[#c7c7c7]">
                            <h2><a href="/" className="text-black font-primary text-[24px] not-italic font-normal leading-[33.5px]">Diseño de sistios web</a></h2>
                        </div>
                        <div className="flex justify-center items-center gap-[8px] flex-1 self-stretch border-r-[1px] border-[#c7c7c7]">
                            <h2><a href="/" className="text-black font-primary text-[24px] not-italic font-normal leading-[33.5px]">Social Media</a></h2>
                        </div>
                        <div className="flex justify-center items-center gap-[8px] flex-1 self-stretch">
                            <h2><a href="/" className="text-black font-primary text-[24px] not-italic font-normal leading-[33.5px]">Desarrollo web</a></h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}