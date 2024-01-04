'use client'
import React from 'react';
import Lottie from 'lottie-react';
import arrowLottie from "@/assets/lotties/lottieDesarrolloWebArrow.json";
import arrowLottieTwo from "@/assets/lotties/lottieDesarrolloWebArrowTwo.json";

const Spline = React.lazy(() => import('@splinetool/react-spline'));

import Chip from "./Chip";
import { useInView } from 'react-intersection-observer';

interface InfoCardLargeProps {
    image?: string;
    splineUrl?: string;
    lotties?: boolean;
    title: string;
    description: string;
    features: string[];
}

export default function InfoCardLarge({ description, image, title, features, splineUrl, lotties = false }: InfoCardLargeProps) {
    const {ref, inView } = useInView({
        threshold: 0
    })
    return (
        <div>
            <div className="px-[16px] md:px-[40px] pb-20">
                <div className="border-b border-black flex flex-row flex-wrap justify-between gap-0 md:gap-6 items-center pb-4 md:pb-8">
                    <h2 className="text-[30px] leading-[50px] md:text-[80px] md:leading-[80px] font-primary font-normal">{title}</h2>
                    <div>
                        <button className='py-[10px] px-[20px] md:py-[17px] md:px-[33px] rounded-full bg-[#D9FE95] font-primary font-medium text-[16px] md:text-[20px] flex flex-row gap-1 md:gap-4 items-center'>Trabajemos!
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block relative h-[500px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url(${image})` }}>
                {(inView && lotties) && <Lottie loop={false} animationData={arrowLottie} className='w-96 absolute top-[3rem] right-[10rem] -rotate-45' />}
                {(inView && lotties) && <Lottie loop={true} animationData={arrowLottieTwo} className='w-96 absolute bottom-[3rem] left-[10rem] -rotate-45 opacity-50' />}
                <Spline scene={splineUrl || 'https://prod.spline.design/LwngIR9F4ERBbbgk/scene.splinecode'} ref={ref} />
            </div>
            <div className="block lg:hidden relative h-[500px] md:h-screen bg-contain md:bg-cover bg-no-repeat bg-bottom" style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FgestionRedesSocialesTendencias.jpg?alt=media&token=78161481-051e-42fd-9631-79a3c5f12aee)` }}></div>
            <div className="bg-gradient-to-b from-[#D6D3FE] to-[#ffffff] px-[16px] md:px-[40px] flex justify-center flex-col py-10 md:py-40 gap-10">
                <p className="text-[24px] md:text-[36px] text-center">{description}</p>
                <div className="flex flex-row justify-center">
                    {
                        features.map((feature) => (
                            <div key={feature}>
                                <Chip label={feature} color="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}