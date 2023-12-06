'use client'
import Spline from '@splinetool/react-spline';

export default function Portada() {
    return (
        <section className="h-screen px-[16px] md:px-[40px] flex flex-col gap-7 md:gap-14 justify-center items-center py-2">
            <div className="h-[500px] w-full rounded-[40px] overflow-hidden">
                <Spline scene="https://prod.spline.design/Ef0Q22KLtkVQU67Y/scene.splinecode" />
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full">
                <div className="font-primary font-black text-[40px] md:text-[70px]">
                    <h1 className="leading-[normal] md:leading-[65px]"><span className='text-[#797979]'>AGENCIA DE</span> DISEÑO</h1>
                    <h1 className="leading-[normal] md:leading-[65px]">& DESARROLLO</h1>
                    <h1 className="leading-[normal] md:leading-[65px] text-[#797979]">CREATIVO</h1>
                </div>
                <div className="bg-[#F6F6F6] w-auto md:w-[700px] py-[58px] px-[25px] h-auto rounded-[40px] flex flex-col md:flex-row items-end">
                    <p className="font-primary text-[24px] md:text-[32px] font-light leading-[32px]">Nos especializamos en crear experiencias innovadoras para pequeñas y grandes empresas.</p>
                    <div className="flex flex-row gap-2">
                        <div className="w-[46px] h-[46px] bg-red-200 rounded-full"></div>
                        <div className="w-[46px] h-[46px] bg-blue-200 rounded-full"></div>
                        <div className="w-[46px] h-[46px] bg-green-200 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
        // <section className="flex h-screen px-[16px] md:px-[40px] pb-[60px] pt-0 flex-col justify-center items-center gap-[8px] self-stretch relative" >
        //     <div className="flex flex-col justify-between gap-[250px] items-center shrink-0 self-stretch">
        //         <div className="bg-gray-100 h-[500px]"></div>
        //         <div className="flex flex-col md:flex-row justify-between gap-[60px] items-start self-stretch">
        //             <div className="flex flex-col items-start gap-[8px]">
        //                 <h1 className="text-black font-primary text-[56px] md:text-[90px] not-italic font-black leading-[56px] md:leading-[80px] uppercase"><span className="text-[#baef01]">AGENCIA DE</span> DISEÑO</h1>
        //                 <h1 className="text-black font-primary text-[56px] md:text-[90px] not-italic font-black leading-[56px] md:leading-[80px] uppercase">& Desarrollo</h1>
        //                 <h1 className="text-[#baef01] font-primary text-[56px] md:text-[90px] not-italic font-black leading-[56px] md:leading-[80px] uppercase">Creativo</h1>
        //             </div>
        //             <div className="flex justify-center items-center gap-[8px] self-stretch">
        //                 <p className="w-[500px] text-black font-primary text-[18px] not-italic font-normal leading-[normal] lowercase">NOS ESPECIALIZAMOS EN CREAR EXPERIENCIAS INNOVADORAS QUE NO SOLO CAUTIVAN VISUALMENTE, SINO QUE TAMBIÉN GENERAN UN IMPACTO SIGNIFICATIVO EN LA AUDIENCIA</p>
        //             </div>
        //         </div>
        //         <div className=" hidden md:flex h-[77px] items-start shrink-0 self-stretch rounded-t-[40px] border-x-[1px] border-t-[1px] border-[#c7c7c7]">
        //             <div className="flex justify-center items-center gap-[8px] flex-1 self-stretch border-r-[1px] border-[#c7c7c7]">
        //                 <a href="/" className="text-black font-primary text-[24px] not-italic font-normal leading-[33.5px]">Branding</a>
        //             </div>
        //             <div className="flex justify-center items-center gap-[8px] flex-1 self-stretch border-r-[1px] border-[#c7c7c7]">
        //                 <a href="/" className="text-black font-primary text-[24px] not-italic font-normal leading-[33.5px]">Diseño de sistios web</a>
        //             </div>
        //             <div className="flex justify-center items-center gap-[8px] flex-1 self-stretch border-r-[1px] border-[#c7c7c7]">
        //                 <a href="/" className="text-black font-primary text-[24px] not-italic font-normal leading-[33.5px]">Event planer</a>
        //             </div>
        //             <div className="flex justify-center items-center gap-[8px] flex-1 self-stretch">
        //                 <a href="/" className="text-black font-primary text-[24px] not-italic font-normal leading-[33.5px]">Desarrollo web</a>
        //             </div>
        //         </div>
        //     </div>
        //     <img src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/floating.png?alt=media&token=5640abbf-ed86-4a3d-93b2-fc2f27d4854f" alt="" className="absolute right-1 -bottom-44 md:right-48 md:bottom-32 z-[2] md:-z-[1]" />
        // </section>
    )
}