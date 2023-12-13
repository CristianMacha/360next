'use client'
import React, { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

import styles from './portada.module.css';

export default function Portada() {
    const [game, setGame] = React.useState(false);
    const handlePlayGame = () => setGame(true);
   
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
            <div className="h-[800px] w-full rounded-[20px] overflow-hidden relative" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FSTATIC%203D.webp?alt=media&token=dbaadf1c-a177-41b4-a0bb-9d0d7a750b3b')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                {
                    game && (
                        <Suspense fallback={<div className='text-white flex justify-center items-center text-[24px]'>Loading...</div>}>
                            <Spline scene="https://prod.spline.design/hDb-ZfPyU0kaAXNR/scene.splinecode" />
                        </Suspense>
                    )
                }
                {/* <div className='absolute top-0 right-0 left-0 bottom-0'></div> */}
                <div className={`${styles.actions} hidden h-[50px] absolute bottom-2 right-2 left-2 rounded-[20px] md:flex items-center justify-between px-5`}>
                    <div className='text-white'>Interactúa con nuestra mascota (A, W, S, D)</div>
                    <div className={`w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center pl-[5px] cursor-pointer animate-pulse ${game ? 'hidden' : 'block'}`} onClick={handlePlayGame}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                            <path d="M15 9L-8.15666e-07 17.6603L-5.85621e-08 0.339745L15 9Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}