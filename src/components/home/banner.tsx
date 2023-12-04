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
                trigger: ".banner_gsap",
                start: "center-=100 center",
                end: "center+=100 center",
                scrub: 0.5,
            },
        });
        tl.to(".banner_gsap", {
            clipPath: "circle(70.7% at 50% 50%)",
            ease: "power2.inOut",
        })
            .to(".clip1", { clipPath: "circle(100.7% at 50% 50%)" }, "-=0.5")
            .to(".clip2", { clipPath: "circle(100.7% at 50% 50%)" }, "-=0.6")
            .to(".clip3", { clipPath: "circle(100.7% at 50% 50%)" }, "-=0.7")
            .to(".clip4", { clipPath: "circle(100.7% at 50% 50%)" }, "-=0.8")
            .to(".clip5", { clipPath: "circle(100.7% at 50% 50%)" }, "-=0.9")

        tl.to(".banner_gsap", {
            width: "calc(100% - 20px)",
            borderRadius: "40px",
        });
    }, []);

    return (
        <div className={`bg-purple-500 ${styles.clip5} clip5`}>
            <div className={`bg-pink-500 ${styles.clip4} clip4`}>
                <div className={`bg-yellow-500 ${styles.clip3} clip3`}>
                    <div className={`bg-blue-500 ${styles.clip2} clip2`}>
                        <div className={`bg-white ${styles.clip1} clip1 flex justify-center`}>
                            <section className={`flex py-[40px] px-[16px] flex-col justify-center items-center gap-[8px] w-full bg-[#ABABE7] lg:h-[985px] lg:p-[80px] ${styles.banner_gsap} banner_gsap`}>
                                <div className="flex flex-col justify-center items-center gap-[80px] self-stretch lg:gap-[200px]">
                                    <div className="flex flex-col justify-center items-center gap-[32px] self-stretch lg:gap-[64px]">
                                        <div className="flex flex-col justify-center items-center gap-[4px] self-stretch lg:self-auto">
                                            <p className="self-stretch text-white text-center font-primary text-[32px] not-italic font-bold leading-[normal] lg:self-auto lg:text-[100px]">
                                                Qué sucede tras bastidores?
                                            </p>
                                            <p className="self-stretch text-white text-center font-primary text-[32px] not-italic font-bold leading-[normal] lg:self-auto lg:text-[100px]">
                                                !Descubrelo por ti mismo!
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center gap-[12px] self-stretch">
                                            <p className="self-stretch text-white text-center font-primary text-[16px] not-italic font-bold leading-[normal] lg:self-auto lg:text-[40px]">
                                                Esto es un tablero. Puedes hacer click en nuestros
                                                comentarios y leerlos, si, eso es todo.
                                            </p>
                                            <p className="text-white text-center font-primary text-[16px] not-italic font-bold leading-[normal] lg:self-auto lg:text-[40px]">
                                                ... o explora mas a fondo
                                            </p>
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
    )
}