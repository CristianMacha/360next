'use client'
import { useEffect, useState } from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from './banner.module.css';
import Comment from '../Comment';

export default function Banner() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: any) => {
        setCursorPos({ x: e.clientX + 10, y: e.clientY + 10 });
    }

    const handleMouseLeave = () => {
        setCursorPos({ x: 0, y: 0 });
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".content__pin",
                start: 'top center',
                end: "bottom center",
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

        const cursorGreen = gsap.timeline({ repeat: -1 });
        const cursorBlue = gsap.timeline({ repeat: -1 });
        const cursorPink = gsap.timeline({ repeat: -1 });
        const cursorYellow = gsap.timeline({ repeat: -1 });
        const cursorPurple = gsap.timeline({ repeat: -1 });

        cursorGreen.to(".cursor__green", { y: 200, x: 60, duration: 4 })
            .to(".cursor__green", { y: 100, x: 300, duration: 4 })
            .to(".cursor__green", { y: 0, x: 0, duration: 4 });
        cursorBlue.to(".cursor__blue", { y: 300, x: 120, duration: 4 })
            .to(".cursor__blue", { y: 400, x: 420, duration: 4 })
            .to(".cursor__blue", { y: 400, x: 520, duration: 4 })
            .to(".cursor__blue", { y: 0, x: 0, duration: 4 })
        cursorPink.to(".cursor__pink", { y: 400, x: 120, duration: 4 })
            .to(".cursor__pink", { y: -400, x: -420, duration: 4 })
            .to(".cursor__pink", { y: 0, x: 0, duration: 4 })
        cursorYellow.to(".cursor__yellow", { y: -400, x: -120, duration: 4 })
            .to(".cursor__yellow", { y: 400, x: -420, duration: 4 })
            .to(".cursor__yellow", { y: 0, x: 0, duration: 4 })
        cursorPurple.to(".cursor__purple", { y: 300, x: 520, duration: 4 })
            .to(".cursor__purple", { y: 700, x: 420, duration: 4 })
            .to(".cursor__purple", { y: 0, x: 0, duration: 4 })

    }, []);

    return (
        <div className='h-[400vh] content__pin relative -mt-[200px]'>
            <div className='h-screen flex flex-col justify-center items-center pin__content sticky top-0'>
                <div className={`bg-purple-500 ${styles.clip5} clip5 w-full`}>
                    <div className={`bg-pink-500 ${styles.clip4} clip4 w-full`}>
                        <div className={`bg-yellow-500 ${styles.clip3} clip3 w-full`}>
                            <div className={`bg-blue-500 ${styles.clip2} clip2 w-full`}>
                                <div className={`bg-white ${styles.clip1} clip1 flex justify-center w-full`}>
                                    <section className={`flex py-[40px] px-[16px] flex-col justify-center items-center gap-[8px] w-full bg-[#31312E] h-screen lg:p-[80px] banner_gsap relative cursor-default overflow-hidden`}
                                        onMouseMove={handleMouseMove}
                                        onMouseLeave={handleMouseLeave}>
                                        {cursorPos.x !== 0 && cursorPos.y !== 0 && (
                                            <div style={{ position: 'fixed', top: cursorPos.y, left: cursorPos.x }} className='hidden md:block p-[2px] px-[4px] bg-black text-white text-xs'>
                                                You
                                            </div>
                                        )}
                                        <div className='cursor__green absolute'>
                                            <div>
                                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.19704 20.3624L1.22843 1.52392L16.5588 12.648L8.71267 14.1258L8.52458 14.1612L8.39986 14.3064L3.19704 20.3624Z" fill="#2FD499" stroke="white" strokeWidth="1.09101"></path></svg>
                                            </div>
                                            <div className='py-[2px] px-[4px] bg-green-500 text-black text-xs ml-4'>Maria</div>
                                        </div>
                                        <div className='cursor__purple absolute '>
                                            <div>
                                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.19704 20.3624L1.22843 1.52392L16.5588 12.648L8.71267 14.1258L8.52458 14.1612L8.39986 14.3064L3.19704 20.3624Z" fill="#2FD499" stroke="white" strokeWidth="1.09101"></path></svg>
                                            </div>
                                            <div className='py-[2px] px-[4px] bg-purple-500 text-white text-xs ml-4'>Maria</div>
                                        </div>
                                        <div className='cursor__pink absolute top-[450px] right-[600px]'>
                                            <div>
                                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.19704 20.3624L1.22843 1.52392L16.5588 12.648L8.71267 14.1258L8.52458 14.1612L8.39986 14.3064L3.19704 20.3624Z" fill="#2FD499" stroke="white" strokeWidth="1.09101"></path></svg>
                                            </div>
                                            <div className='py-[2px] px-[4px] bg-pink-500 text-white text-xs ml-4'>Eliu</div>
                                        </div>
                                        <div className='cursor__yellow absolute bottom-[150px] right-[440px]'>
                                            <div>
                                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.19704 20.3624L1.22843 1.52392L16.5588 12.648L8.71267 14.1258L8.52458 14.1612L8.39986 14.3064L3.19704 20.3624Z" fill="#2FD499" stroke="white" strokeWidth="1.09101"></path></svg>
                                            </div>
                                            <div className='py-[2px] px-[4px] bg-yellow-500 text-black text-xs ml-4'>Alex</div>
                                        </div>
                                        <div className='cursor__blue absolute top-[40px] left-[100px]'>
                                            <div>
                                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.19704 20.3624L1.22843 1.52392L16.5588 12.648L8.71267 14.1258L8.52458 14.1612L8.39986 14.3064L3.19704 20.3624Z" fill="#2FD499" stroke="white" strokeWidth="1.09101"></path></svg>
                                            </div>
                                            <div className='py-[2px] px-[4px] bg-blue-500 text-white text-xs ml-4'>Zain</div>
                                        </div>
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
                                        <div className='absolute top-10 left-16'>
                                            <Comment image='https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Ffoto2.jpg?alt=media&token=b548bd4c-4d5d-42c4-bbb9-0bd20e0794ab' name='Cristian' comment='Hello world' position='right' />
                                        </div>
                                        <div className='absolute bottom-20 left-4 md:left-20'>
                                            <Comment image='https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Ffoto2.jpg?alt=media&token=b548bd4c-4d5d-42c4-bbb9-0bd20e0794ab' name='Cristian' comment='Hello world' position='right' />
                                        </div>
                                        <div className='absolute top-32  md:bottom-32 right-4 md:right-32'>
                                            <Comment image='https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Ffoto2.jpg?alt=media&token=b548bd4c-4d5d-42c4-bbb9-0bd20e0794ab' name='Cristian' comment='Hello world' position='left' />
                                        </div>
                                        <div className='absolute bottom-40 md:bottom-32 right-4 md:right-64'>
                                            <Comment image='https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Ffoto2.jpg?alt=media&token=b548bd4c-4d5d-42c4-bbb9-0bd20e0794ab' name='Cristian' comment='Hello world' position='left' />
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

