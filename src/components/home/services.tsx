export default function Services() {
    const tape = "https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FtapeService.png?alt=media&token=c4247817-cae3-4d4d-a66c-3a6c46febbe8";
    return (
        <section className="flex pt-[32px] flex-col items-start lg:pt-0 relative">
            <div style={{ backgroundImage: `url(${tape})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[740px] -z-[1]"></div>
            <div className="flex flex-col items-start lg:px-[40px] lg:flex-row lg:justify-center">
                <div className="flex py-0 px-[16px] items-start gap-[8px] lg:pt-[150px] lg:pr-[36px] lg:pl-0 lg:pb-0 lg:rounded-t-none lg:rounded-bl-[50px] lg:rounded-br-none lg:border-b lg:border-[#c7c7c7] lg:self-stretch relative">
                    <h2 className="text-black font-primary text-[40px] not-italic font-bold leading-[normal] lg:text-[112px] lg:leading-[normal] sticky top-[50px] h-auto  md:h-[500px] ">Ofrecemos</h2>
                </div>
                <div className="flex pt-[70px] pb-[64px] flex-col justify-center items-center gap-[60px] rounded-bl-[50px] rounded-br-[50px] border-b border-[#C7C7C7] md:py-[200px] lg:px-[32px] md:gap-y-[40px] md:gap-x-[40] md:flex-1 md:flex-row md:flex-wrap md:rounded-t-none md:rounded-bl-none md:rounded-br-[50px] md:border-b md:border-l">
                    <div className="flex px-[16px] pb-[16px] flex-col items-start gap-[12px] border-b border-[#c7c7c7] lg:border-b-0">
                        <h3 className="text-black font-primary text-[24px] not-italic font-bold leading-[normal] md:text-[50px] lg:text-[28px]">Branding</h3>
                        <h4 className=" text-[#2B2A2A] font-primary text-[20px] font-light leading-[normal] md:text-[28px] lg:flex lg:w-[387px]">Una identidad de marca atemporal y memorable que ayuda a las empresas a establecer una presencia fuerte y consistente en el mercado.</h4>
                    </div>
                    <div className="flex px-[16px] pb-[16px] flex-col items-start gap-[12px] border-b border-[#c7c7c7] lg:border-b-0">
                        <h3 className="text-black font-primary text-[24px] not-italic font-bold leading-[normal] md:text-[50px] lg:text-[28px]">Event Planner</h3>
                        <h4 className=" text-[#2B2A2A] font-primary text-[20px] font-light leading-[normal] md:text-[28px] lg:flex lg:w-[387px]">Una identidad de marca atemporal y memorable que ayuda a las empresas a establecer una presencia fuerte y consistente en el mercado.</h4>
                    </div>
                    <div className="flex px-[16px] pb-[16px] flex-col items-start gap-[12px] border-b border-[#c7c7c7]  lg:border-b-0">
                        <h3 className="text-black font-primary text-[24px] not-italic font-bold leading-[normal] md:text-[50px] lg:text-[28px]">Diseño Web</h3>
                        <h4 className=" text-[#2B2A2A] font-primary text-[20px] font-light leading-[normal] md:text-[28px] lg:flex lg:w-[387px]">Una identidad de marca atemporal y memorable que ayuda a las empresas a establecer una presencia fuerte y consistente en el mercado.</h4>
                    </div>
                    <div className="flex px-[16px] pb-[16px] flex-col items-start gap-[12px]">
                        <h3 className="text-black font-primary text-[24px] not-italic font-bold leading-[normal] md:text-[50px] lg:text-[28px]">Desarrollo Web</h3>
                        <h4 className=" text-[#2B2A2A] font-primary text-[20px] font-light leading-[normal] md:text-[28px] lg:flex lg:w-[387px]">Una identidad de marca atemporal y memorable que ayuda a las empresas a establecer una presencia fuerte y consistente en el mercado.</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}