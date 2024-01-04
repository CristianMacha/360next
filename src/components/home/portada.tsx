'use client'
import Link from 'next/link';
import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

import styles from './portada.module.css';

export default function Portada() {
    const [game, setGame] = React.useState(false);
    const [loadingFake, setLoadingFake] = React.useState(false);

    const handlePlayGame = () => {
        if(game) {
            // setLoadingFake(prevLoadingFake => !prevLoadingFake);
            setGame(prevGame => !prevGame);
        } else {
            setLoadingFake(prevLoadingFake => !prevLoadingFake);
    
            setTimeout(() => {
                setLoadingFake(prevLoadingFake => !prevLoadingFake);
                setGame(prevGame => !prevGame);
            }, 3000);
        }
    };

    return (
        <section className="h-auto px-[16px] md:px-[40px] flex flex-col gap-5 md:gap-[100px] justify-start items-center py-[16px] md:pb-[40px] md:pt-[0px]">
            <div className="flex flex-col gap-16 md:gap-4 md:flex-row justify-between w-full items-center pt-[100px]">
                <div className="display-small md:display-medium lg:display-large">
                    <h1 className="whitespace"><span className='text-[#797979]'>AGENCIA DE</span> DISEÑO</h1>
                    <h1>& MARKETING</h1>
                    <h1 className="text-[#797979]">DIGITAL</h1>
                </div>
                <div className="w-auto md:w-[750px]">
                    <div className="bg-[#F6F6F6] w-auto py-[32px] md:py-[25px] lg:py-[58px] px-[16px] flex-col md:px-[25px] h-auto rounded-[40px] flex items-end gap-4">
                        <p className="content-small md:content-medium lg:content-large">Potencia tu presencia en línea, conquista tu mercado y lleva tu marca hacia nuevas alturas. con nuestra agencia de marketing digital</p>
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
            <div className="hidden md:flex h-[77px] items-start shrink-0 self-stretch rounded-t-[40px] border-x-[1px] border-t-[1px] border-[#c7c7c7]">
                <div className="flex justify-center items-center gap-[8px] flex-1 self-stretch border-r-[1px] border-[#c7c7c7]">
                    <Link href="/design-web" className="text-black font-primary text-[24px] not-italic font-normal leading-[33.5px]">Diseño Web</Link>
                </div>
                <div className="flex justify-center items-center gap-[8px] flex-1 self-stretch border-r-[1px] border-[#c7c7c7]">
                    <Link href="/social-networks" className="text-black font-primary text-[24px] not-italic font-normal leading-[33.5px]">Redes Sociales</Link>
                </div>
                <div className="flex justify-center items-center gap-[8px] flex-1 self-stretch">
                    <Link href="/development" className="text-black font-primary text-[24px] not-italic font-normal leading-[33.5px]">Desarrollo</Link>
                </div>
            </div>
            <div className="h-[800px] w-full rounded-[20px] overflow-hidden relative" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FSTATIC%203D.webp?alt=media&token=dbaadf1c-a177-41b4-a0bb-9d0d7a750b3b')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                {
                    game ? (
                        <Suspense fallback={<div className='absolute top-0 right-0 left-0 bottom-0 rounded-[20px] text-white flex justify-center items-center text-[24px]'>Loading...</div>}>
                            <Spline scene="https://prod.spline.design/hDb-ZfPyU0kaAXNR/scene.splinecode" className='z-[11]' />
                        </Suspense>
                    ) : null
                }
                {
                    loadingFake ? (<div className='absolute z-10 top-0 left-0 right-0 bottom-0 bg-black/60 rounded-[20px] text-white flex justify-center items-center text-[24px]'>Loading...</div>) : null
                }
                {/* <div className='absolute top-0 right-0 left-0 bottom-0'></div> */}
                <div className='flex justify-center w-full absolute top-2'>
                    <div className='flex flex-row items-center'>
                        <span className='bg-[#D9FE95] px-6 py-1 rounded-l-[10px] text-[24px]'>{!game ? 'Iniciar' : 'Pausar'}</span>
                        <div className='bg-black rounded-full flex justify-center items-center w-[90px] h-[90px] border-[4px] border-[#D9FE95] -ml-[10px] cursor-pointer' onClick={handlePlayGame}>
                            {
                                !game ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[24px] h-[24px] text-white">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                </svg>

                                ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor" className="w-[24px] h-[24px] text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                                </svg>)
                            }
                        </div>
                    </div>
                </div>
                {
                    game ? (
                        <div className='absolute top-2 left-2'>
                            <div className='flex flex-col justify-center items-center gap-1'>
                                <div>
                                    <div className={`backdrop-blur-sm bg-black/30 text-white font-primary rounded-lg p-4 w-[50px] text-center`}>W</div>
                                </div>
                                <div className='flex flex-row gap-1'>
                                    <div>
                                        <div className={`backdrop-blur-sm bg-black/30 text-white font-primary rounded-lg p-4 w-[50px] text-center`}>A</div>
                                    </div>
                                    <div>
                                        <div className={`backdrop-blur-sm bg-black/30 text-white font-primary rounded-lg p-4 w-[50px] text-center`}>S</div>
                                    </div>
                                    <div>
                                        <div className={`backdrop-blur-sm bg-black/30 text-white font-primary rounded-lg p-4 w-[50px] text-center`}>D</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
                {
                    game ? (
                        <div className='absolute top-2 right-2'>
                            <div className='flex flex-col justify-center items-center gap-1'>
                                <div>
                                    <div className={`backdrop-blur-sm bg-black/30 text-white font-primary rounded-lg p-4 w-[50px] flex justify-center items-center`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06l-2.47-2.47V21a.75.75 0 01-1.5 0V4.81L8.78 7.28a.75.75 0 01-1.06-1.06l3.75-3.75z" clipRule="evenodd" />
                                        </svg>

                                    </div>
                                </div>
                                <div className='flex flex-row gap-1'>
                                    <div>
                                        <div className={`backdrop-blur-sm bg-black/30 text-white font-primary rounded-lg p-4 w-[50px] flex justify-center items-center`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z" clipRule="evenodd" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div>
                                        <div className={`backdrop-blur-sm bg-black/30 text-white font-primary rounded-lg p-4 w-[50px] flex justify-center items-center`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.47 2.47V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div>
                                        <div className={`backdrop-blur-sm bg-black/30 text-white font-primary rounded-lg p-4 w-[50px] flex justify-center items-center`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
                <div className={`${styles.actions} h-[50px] absolute bottom-2 right-2 left-2 rounded-[20px] flex items-center justify-between px-5`}>
                    <div className='text-white'>Interactúa con nuestra mascota</div>
                </div>
            </div>
        </section>
    )
}