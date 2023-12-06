'use client'
import Spline from '@splinetool/react-spline';

export default function Portada() {
    return (
        <section className="h-screen px-[16px] md:px-[40px] flex flex-col gap-7 md:gap-14 justify-start items-center py-[16px] md:py-[40px]">
            <div className="h-[500px] w-full rounded-[40px] overflow-hidden" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fportada.jpg?alt=media&token=be043f08-40e8-4106-9d34-6984972c73e1')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <Spline scene="https://prod.spline.design/Ef0Q22KLtkVQU67Y/scene.splinecode" />
            </div>
            <div className="flex flex-col gap-4 md:flex-row justify-between w-full">
                <div className="font-primary font-bold text-[40px] md:text-[70px]">
                    <h1 className="leading-[normal] md:leading-[65px] whitespace-nowrap"><span className='text-[#797979]'>AGENCIA DE</span> DISEÑO</h1>
                    <h1 className="leading-[normal] md:leading-[65px]">& DESARROLLO</h1>
                    <h1 className="leading-[normal] md:leading-[65px] text-[#797979]">CREATIVO</h1>
                </div>
                <div className="w-auto md:w-[750px]">
                    <div className="bg-[#F6F6F6] w-auto py-[25px] md:py-[58px] px-[16px] md:px-[25px] h-auto rounded-[40px] flex flex-col md:flex-row items-end">
                        <p className="font-primary text-[18px] md:text-[24px] font-light leading-[32px]">Nos especializamos en crear experiencias innovadoras para pequeñas y grandes empresas.</p>
                        <div className="flex flex-row gap-2">
                            <div className="w-[46px] md:w-[58px]">
                                <img src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Ffoto1.jpg?alt=media&token=e47bd562-9d15-4dff-bf90-064c33967668" alt="" />
                            </div>
                            <div className="w-[46px] md:w-[58px]">
                                <img src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Ffoto2.jpg?alt=media&token=b548bd4c-4d5d-42c4-bbb9-0bd20e0794ab" alt="" />
                            </div>
                            <div className="w-[46px] md:w-[58px]">
                                <img src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Ffoto3.jpg?alt=media&token=31d1330f-9821-452b-b71a-3bac96f12f1f" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" hidden md:flex h-[77px] items-start shrink-0 self-stretch rounded-t-[40px] border-x-[1px] border-t-[1px] border-[#c7c7c7]">
                <div className="flex justify-center items-center gap-[8px] flex-1 self-stretch border-r-[1px] border-[#c7c7c7]">
                    <a href="/" className="text-black font-primary text-[24px] not-italic font-normal leading-[33.5px]">Branding</a>
                </div>
                <div className="flex justify-center items-center gap-[8px] flex-1 self-stretch border-r-[1px] border-[#c7c7c7]">
                    <a href="/" className="text-black font-primary text-[24px] not-italic font-normal leading-[33.5px]">Diseño de sistios web</a>
                </div>
                <div className="flex justify-center items-center gap-[8px] flex-1 self-stretch border-r-[1px] border-[#c7c7c7]">
                    <a href="/" className="text-black font-primary text-[24px] not-italic font-normal leading-[33.5px]">Event planer</a>
                </div>
                <div className="flex justify-center items-center gap-[8px] flex-1 self-stretch">
                    <a href="/" className="text-black font-primary text-[24px] not-italic font-normal leading-[33.5px]">Desarrollo web</a>
                </div>
            </div>
        </section>
    )
}