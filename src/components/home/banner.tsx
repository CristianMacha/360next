'use client'
import { useEffect } from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from './banner.module.css';

export default function Banner() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".content__pin",
                start: 'top top+=200',
                end: "bottom top+=200",
                scrub: true,
                markers: false,
            },
            duration: 1,
        });

        tl.to(".clip1", { clipPath: "circle(100.7% at 50% 50%)" }, "-=0.5")
            .to(".clip2", { clipPath: "circle(100.7% at 50% 50%)" }, "-=0.6")
            .to(".clip3", { clipPath: "circle(100.7% at 50% 50%)" }, "-=0.7")
            .to(".clip4", { clipPath: "circle(100.7% at 50% 50%)" }, "-=0.8")
            .to(".clip5", { clipPath: "circle(100.7% at 50% 50%)" }, "-=0.9");

            gsap.to(".banner_gsap", {
                scrollTrigger: {
                    trigger: ".content__pin",
                    start: "bottom-=500 top",
                    end: "bottom",
                    scrub: true,
                    markers: false,
                },
                borderRadius: '60px',
                width: 'calc(100% - 40px)',
                duration: 1,
            });
    }, []);

    return (
        <div className='h-[400vh] content__pin relative'>
            <div className='h-screen flex justify-center items-center pin__content sticky top-0'>
                <div className={`bg-purple-500 ${styles.clip5} clip5 w-full`}>
                    <div className={`bg-pink-500 ${styles.clip4} clip4 w-full`}>
                        <div className={`bg-yellow-500 ${styles.clip3} clip3 w-full`}>
                            <div className={`bg-blue-500 ${styles.clip2} clip2 w-full`}>
                                <div className={`bg-white ${styles.clip1} clip1 flex justify-center w-full`}>
                                    <section className={`flex py-[40px] px-[16px] flex-col justify-center items-center gap-[8px] w-full bg-[#31312E] h-screen lg:p-[80px] banner_gsap`}>
                                        <div className="flex flex-col justify-center items-center gap-[80px] self-stretch lg:gap-[200px]">
                                            <div className="flex flex-col justify-center items-center gap-[32px] self-stretch lg:gap-[64px]">
                                                <div className="flex flex-col justify-center items-center gap-[4px] self-stretch lg:self-auto">
                                                    <h4 className="self-stretch text-white text-center font-primary text-[32px] not-italic font-bold leading-[normal] lg:self-auto lg:text-[100px]">
                                                        Qué sucede tras bastidores?
                                                    </h4>
                                                    <h4 className="self-stretch text-white text-center font-primary text-[32px] not-italic font-bold leading-[normal] lg:self-auto lg:text-[100px]">
                                                        !Descubrelo por ti mismo!
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col items-center gap-[12px] self-stretch">
                                                    <h5 className="self-stretch text-white text-center font-primary text-[16px] not-italic font-bold leading-[normal] lg:self-auto lg:text-[40px]">
                                                        Esto es un tablero. Puedes hacer click en nuestros
                                                        comentarios y leerlos, si, eso es todo.
                                                    </h5>
                                                    <h5 className="text-white text-center font-primary text-[16px] not-italic font-bold leading-[normal] lg:self-auto lg:text-[40px]">
                                                        ... o explora mas a fondo
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="flex p-[4px] items-start gap-[8px] rounded-full border border-white bg-transparent">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none">
                                                    <mask id="mask0_1166_402" mask-type="alpha"
                                                        maskUnits="userSpaceOnUse"
                                                        x="0"
                                                        y="0"
                                                        width="24"
                                                        height="24"
                                                    >
                                                        <rect width="24" height="24" fill="#D9D9D9"></rect>
                                                    </mask>
                                                    <g mask="url(#mask0_1166_402)">
                                                        <path
                                                            d="M11 4V16.175L5.4 10.575L4 12L12 20L20 12L18.6 10.575L13 16.175V4H11Z"
                                                            fill="white"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}