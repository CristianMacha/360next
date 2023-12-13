'use client'
import Link from 'next/link';
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
                    <h1 className="leading-[normal] md:leading-[85px]">& MARKETING</h1>
                    <h1 className="leading-[normal] md:leading-[85px] text-[#797979]">DIGITAL</h1>
                </div>
                <div className="w-auto md:w-[750px]">
                    <div className="bg-[#F6F6F6] w-auto py-[25px] md:py-[58px] px-[16px] md:px-[25px] h-auto rounded-[40px] flex flex-col md:flex-row items-end">
                        <p className="font-primary text-[18px] leading-normal md:text-[24px] font-light md:leading-[32px]">Potencia tu presencia en línea, conquista tu mercado y lleva tu marca hacia nuevas alturas. con nuestra agencia de marketing digital</p>
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
            <div className=" hidden md:flex h-[77px] items-start shrink-0 self-stretch rounded-t-[40px] border-x-[1px] border-t-[1px] border-[#c7c7c7]">
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
                    game && (
                        <Suspense fallback={<div className='h-[800px] w-full rounded-[20px] text-white flex justify-center items-center text-[24px]'>Loading...</div>}>
                            <Spline scene="https://prod.spline.design/hDb-ZfPyU0kaAXNR/scene.splinecode" />
                        </Suspense>
                    )
                }
                {/* <div className='absolute top-0 right-0 left-0 bottom-0'></div> */}
                <div className='flex justify-center w-full absolute top-2'>
                    <div className='flex flex-row items-center gap-2 font-medium bg-[#D9FE95] px-3 py-1 rounded-[20px]'>360 <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                        <g clipPath="url(#clip0_2105_269)">
                            <path d="M30.2764 35.539C25.5661 35.539 18.1244 31.3536 11.1574 24.3897C2.03689 15.2735 -2.32156 5.34722 1.23945 1.79107C3.01835 0.0162235 6.39857 0.132395 10.757 2.12345C14.9218 4.02738 19.5708 7.42863 23.8453 11.7012C32.9658 20.8174 37.321 30.7405 33.76 34.2998C32.9206 35.1389 31.726 35.539 30.2732 35.539H30.2764ZM4.74559 1.82657C3.62208 1.82657 2.73747 2.117 2.14989 2.70108C-0.474871 5.32463 2.88598 14.2957 12.0646 23.4733C16.2325 27.6393 20.7492 30.9502 24.7783 32.7896C28.5557 34.516 31.5 34.7322 32.8463 33.3834C35.4711 30.7598 32.1102 21.7888 22.9316 12.6112C18.7637 8.44514 14.247 5.13424 10.2179 3.29485C8.08061 2.31707 6.20809 1.82334 4.74236 1.82334L4.74559 1.82657Z" fill="black" />
                            <path d="M1.23816 34.2999C-2.31963 30.7437 2.0356 20.8175 11.1528 11.7012C15.4274 7.42869 20.0764 4.02744 24.2411 2.12351C28.6028 0.132452 31.983 0.0130535 33.7587 1.79113C37.3165 5.34728 32.9613 15.2735 23.844 24.3898C16.8769 31.3536 9.43529 35.5391 4.72493 35.5391C3.27211 35.5391 2.07757 35.1389 1.23816 34.2999ZM24.7803 3.29814C20.7511 5.13752 16.2345 8.44842 12.0665 12.6145C2.88469 21.792 -0.472934 30.7631 2.1486 33.3866C3.4981 34.7355 6.43925 34.5161 10.2166 32.7929C14.2457 30.9503 18.7624 27.6426 22.9304 23.4765C32.1122 14.299 35.4698 5.32792 32.845 2.70437C32.2607 2.12028 31.3728 1.82985 30.2493 1.82985C28.7836 1.82985 26.9143 2.32358 24.7738 3.30136L24.7803 3.29814Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2105_269">
                                <rect width="35" height="35" fill="white" transform="translate(0 0.539062)" />
                            </clipPath>
                        </defs>
                    </svg>
                        Virtual Solutions
                    </div>
                </div>
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