'use client'
import { useEffect } from 'react';

import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';

export default function Customers() {
    useEffect(() => {
        new KeenSlider("#my-keen-slider-two", {
            breakpoints: {
                "(min-width: 640px)": {
                    slides: { perView: 1, spacing: 16 },
                },
                "(min-width: 768px)": {
                    slides: { perView: 2, spacing: 16 },
                },
                "(min-width: 1024px)": {
                    slides: { perView: 3, spacing: 16 }
                }
            },
            slides: {
                perView: 1,
            },
        });
    }, []);
    return (
        <section className="flex flex-col py-[24px] px-[16px] items-start gap-[8px] w-full h-auto md:h-screen relative">
            <div className='flex justify-center w-full mb-16'>
                <div className='w-[581px] font-primary font-medium text-[64px] leading-[60px] text-center'>Mas de 12 clientes confian en nosotros</div>
            </div>
            <div id="my-keen-slider-two" className="keen-slider w-full">
                <div className="keen-slider__slide flex justify-center items-center h-[700px] md:h-[500px]">
                    <div className="flex w-[320px] h-[500px] py-[24px] px-[24px] lg:px-[48px] flex-col justify-between rounded-[40px] bg-[#F0ECEC] md:w-[368px] md:h-[406px] rotate-0 md:-rotate-[5deg]">
                        <div className='text-[24px] font-primary font-normal'>Google reviews</div>
                        <div className='text-[24px] font-primary font-light'>Muy bonito, me gusto el trabajo que hicieron para mi tienda virtual de venta de niños. Se vendieron niños rapidito. </div>
                        <div className='flex flex-row gap-4 items-center'>
                            <div className='w-[60px] h-[60px] rounded-full bg-gray-600'></div>
                            <div className='text-[24px] font-primary font-normal'>Juan Perez</div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide flex justify-center items-center h-[700px] md:h-[500px]">
                    <div className="flex w-[320px] h-[500px] py-[24px] px-[24px] lg:px-[48px] flex-col justify-between rounded-[40px] bg-[#F0ECEC] md:w-[368px] md:h-[406px] mb-0 md:mb-16">
                        <div className='text-[24px] font-primary font-normal'>Google reviews</div>
                        <div className='text-[24px] font-primary font-light'>Muy bonito, me gusto el trabajo que hicieron para mi tienda virtual de venta de niños. Se vendieron niños rapidito. </div>
                        <div className='flex flex-row gap-4 items-center'>
                            <div className='w-[60px] h-[60px] rounded-full bg-gray-600'></div>
                            <div className='text-[24px] font-primary font-normal'>Juan Perez</div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide flex justify-center items-center h-[700px] md:h-[500px]">
                    <div className="flex w-[320px] h-[500px] py-[24px] px-[24px] lg:px-[48px] flex-col justify-between rounded-[40px] bg-[#F0ECEC] md:w-[368px] md:h-[406px] rotate-0 md:rotate-[5deg]">
                        <div className='text-[24px] font-primary font-normal'>Google reviews</div>
                        <div className='text-[24px] font-primary font-light'>Muy bonito, me gusto el trabajo que hicieron para mi tienda virtual de venta de niños. Se vendieron niños rapidito. </div>
                        <div className='flex flex-row gap-4 items-center'>
                            <div className='w-[60px] h-[60px] rounded-full bg-gray-600'></div>
                            <div className='text-[24px] font-primary font-normal'>Juan Perez</div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide flex justify-center items-center h-[700px] md:h-[500px]">
                    <div className="flex w-[320px] h-[500px] py-[24px] px-[24px] lg:px-[48px] flex-col justify-between rounded-[40px] bg-[#F0ECEC] md:w-[368px] md:h-[406px] rotate-0 md:-rotate-[5deg]">
                        <div className='text-[24px] font-primary font-normal'>Google reviews</div>
                        <div className='text-[24px] font-primary font-light'>Muy bonito, me gusto el trabajo que hicieron para mi tienda virtual de venta de niños. Se vendieron niños rapidito. </div>
                        <div className='flex flex-row gap-4 items-center'>
                            <div className='w-[60px] h-[60px] rounded-full bg-gray-600'></div>
                            <div className='text-[24px] font-primary font-normal'>Juan Perez</div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide flex justify-center items-center h-[700px] md:h-[500px]">
                    <div className="flex w-[320px] h-[500px] py-[24px] px-[24px] lg:px-[48px] flex-col justify-between rounded-[40px] bg-[#F0ECEC] md:w-[368px] md:h-[406px] mb-0 md:mb-16">
                        <div className='text-[24px] font-primary font-normal'>Google reviews</div>
                        <div className='text-[24px] font-primary font-light'>Muy bonito, me gusto el trabajo que hicieron para mi tienda virtual de venta de niños. Se vendieron niños rapidito. </div>
                        <div className='flex flex-row gap-4 items-center'>
                            <div className='w-[60px] h-[60px] rounded-full bg-gray-600'></div>
                            <div className='text-[24px] font-primary font-normal'>Juan Perez</div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide flex justify-center items-center h-[700px] md:h-[500px]">
                    <div className="flex w-[320px] h-[500px] py-[24px] px-[24px] lg:px-[48px] flex-col justify-between rounded-[40px] bg-[#F0ECEC] md:w-[368px] md:h-[406px] rotate-0 md:rotate-[5deg]">
                        <div className='text-[24px] font-primary font-normal'>Google reviews</div>
                        <div className='text-[24px] font-primary font-light'>Muy bonito, me gusto el trabajo que hicieron para mi tienda virtual de venta de niños. Se vendieron niños rapidito. </div>
                        <div className='flex flex-row gap-4 items-center'>
                            <div className='w-[60px] h-[60px] rounded-full bg-gray-600'></div>
                            <div className='text-[24px] font-primary font-normal'>Juan Perez</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}