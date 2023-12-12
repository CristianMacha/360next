'use client'
import Spline from '@splinetool/react-spline';
import styles from './portada.module.css';

export default function Portada() {
    return (
        <section className="h-auto px-[16px] md:px-[40px] flex flex-col gap-20 md:gap-14 justify-start items-center py-[16px] md:pb-[40px] md:pt-[70px]">
            <div className="flex flex-col gap-4 md:flex-row justify-between w-full items-center py-40">
                <div className="font-primary font-bold text-[32px] leading-normal md:text-[106px]">
                    <h1 className="leading-[normal] md:leading-[85px] whitespace-nowrap"><span className='text-[#797979]'>AGENCIA DE</span> DISEÑO</h1>
                    <h1 className="leading-[normal] md:leading-[85px]">& DESARROLLO</h1>
                    <h1 className="leading-[normal] md:leading-[85px] text-[#797979]">CREATIVO</h1>
                </div>
                <div className="w-auto md:w-[750px]">
                    <div className="bg-[#F6F6F6] w-auto py-[25px] md:py-[58px] px-[16px] md:px-[25px] h-auto rounded-[40px] flex flex-col md:flex-row items-end">
                        <p className="font-primary text-[18px] leading-normal md:text-[24px] font-light md:leading-[32px]">Nos especializamos en crear experiencias innovadoras para pequeñas y grandes empresas.</p>
                        <div className="flex flex-row gap-2">
                            <div className="w-[46px] md:w-[58px]">
                                <img src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Ffoto1.jpg?alt=media&token=e47bd562-9d15-4dff-bf90-064c33967668" alt="" className='rounded-full' />
                            </div>
                            <div className="w-[46px] md:w-[58px]">
                                <img src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Ffoto2.jpg?alt=media&token=b548bd4c-4d5d-42c4-bbb9-0bd20e0794ab" alt="" className='rounded-full' />
                            </div>
                            <div className="w-[46px] md:w-[58px]">
                                <img src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Ffoto3.jpg?alt=media&token=31d1330f-9821-452b-b71a-3bac96f12f1f" alt="" className='rounded-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" hidden md:flex h-[77px] items-start shrink-0 self-stretch rounded-t-[40px] border-x-[1px] border-t-[1px] border-[#c7c7c7] py-10">
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
            <div className="h-[800px] w-full rounded-[20px] overflow-hidden relative" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FScreenshot%202023-12-11%20at%2008.40.50.png?alt=media&token=62d0e1ba-02e0-41d4-be53-f8464b041e8e')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <Spline scene="https://prod.spline.design/hDb-ZfPyU0kaAXNR/scene.splinecode" />
                {/* <div className='absolute top-0 right-0 left-0 bottom-0'></div> */}
                <div className={`${styles.actions} h-[50px] absolute bottom-2 right-2 left-2 rounded-[20px] flex items-center justify-center`}>
                    <div className='text-white'>Interactúa con nuestra mascota (A, W, S, D)</div>
                </div>
            </div>
        </section>
    )
}