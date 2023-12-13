'use client'
import { useEffect } from 'react';

import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

export default function Customers() {
    const imageFloatOne = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fgato.jpg?alt=media&token=39fa59f9-0a2d-4071-94c5-7e620948919f';
    useEffect(() => {
        // gsap.registerPlugin(MotionPathPlugin);
        // gsap.set('#customerOneFloat', { xPercent: -50, yPercent: -50, transformOrigin: '50% 50%' });
        // gsap.to('#customerOneFloat', { duration: 5, motionPath: '#custumerPathCircle', repeat: -1, ease: 'linear'});

        new KeenSlider("#my-keen-slider-two", {
            loop: true,
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
        },
            [
                (slider) => {
                    let timeout: any
                    let mouseOver = false
                    function clearNextTimeout() {
                        clearTimeout(timeout)
                    }
                    function nextTimeout() {
                        clearTimeout(timeout)
                        if (mouseOver) return
                        timeout = setTimeout(() => {
                            slider.next()
                        }, 3000)
                    }
                    slider.on("created", () => {
                        slider.container.addEventListener("mouseover", () => {
                            mouseOver = true
                            clearNextTimeout()
                        })
                        slider.container.addEventListener("mouseout", () => {
                            mouseOver = false
                            nextTimeout()
                        })
                        nextTimeout()
                    })
                    slider.on("dragStarted", clearNextTimeout)
                    slider.on("animationEnded", nextTimeout)
                    slider.on("updated", nextTimeout)
                },
            ]
        );
    }, []);
    return (
        <section className="flex flex-col justify-center items-center px-[16px] gap-[8px] w-full h-auto md:h-[160vh] relative overflow-hidden">
            {/* <div className='bg-red-500 rounded-full' id='customerOneFloat'>Hola</div> */}
            {/* <svg className=''>
                <path id='custumerPathCircle' d="M 200, 200 m -160, 0 a 160,160 0 1,0 320,0 a 160,160 0 1,0 -320,0" stroke="black" stroke-width="0.5" fill="none" />
            </svg> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="842" height="219" viewBox="0 0 842 219" fill="none">
  <path id='custumerPathCircle' d="M1 68.0001C717 570 588.5 -398.5 841.5 207.5" stroke="black"/>
</svg> */}
            <img src={imageFloatOne} alt='customer' className='absolute rounded-full w-[72px] h-[72px] top-[40px] z-[1] left-[550px]'></img>
            <img src={imageFloatOne} alt='customer' className='absolute rounded-full w-[52px] h-[52px] top-[290px] z-[1] right-[550px]'></img>
            <div className='border border-[#A3A2A2] w-[400px] h-[400px] md:w-[900px] md:h-[900px] rounded-full absolute'></div>
            <div className='border border-[#A3A2A2] w-[700px] h-[700px] md:w-[1300px] md:h-[1300px] rounded-full absolute'></div>
            <div className='flex justify-center w-full mb-0 md:mb-16'>
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