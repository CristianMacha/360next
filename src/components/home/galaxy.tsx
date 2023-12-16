'use client'
import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './galaxy.module.css'

export default function Galaxy() {
    const memeOne = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fmeme01.jpg?alt=media&token=cf6e96dd-809c-41b8-a6e9-81a580ed0875';
    const memeTwo = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FmemeTwo.jpg?alt=media&token=91c9bf4a-09a5-4c7a-a5e2-00ee8f93e255';

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        [".text-effect1", ".text-effect2", ".text-effect3", ".text-effect4", ".text-effect5", ".text-effect6", ".text-effect7"].forEach((fila) => {
            gsap.fromTo(fila, {
                y: 40,
                opacity: 0,
            }, {
                duration: 2.5,
                y: 10,
                opacity: 1,
                ease: "elastic.out(1,0.3)",
                scrollTrigger: {
                    start: "center bottom-=100",
                    trigger: fila,
                    scrub: 1,
                }
            })
        })
    }, []);

    return (
        <>
            <section className={`flex py-[40px] pb-[200px] md:py-[80px] px-[16px] flex-col justify-center items-center gap-[8px] self-stretch ${styles.galaxy} lg:hidden`}>
                <div className="flex flex-col justify-center items-center gap-[8px]">
                    <div className="flex items-center gap-[8px] self-stretch">
                        <span className="text-white text-justify font-primary text-[18px] not-italic font-normal leading-[normal]">Comenzando como entusiastas</span>
                        <div className={`w-[91.2px] h-[34px] rounded-[99px]`} style={{backgroundImage: `url(${memeOne})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
                    </div>
                    <span className="text-white text-justify font-primary text-[18px] not-italic font-normal leading-[normal] self-stretch">para otras personas. combinamos nuestras</span>
                    <div className="flex items-center content-center gap-[8px] self-stretch flex-wrap">
                        <span className="text-white text-justify font-primary text-[18px] not-italic font-normal leading-[normal]">habilidades</span>
                        <div className={`w-[91.2px] h-[34px] rounded-[99px]`} style={{backgroundImage: `url(${memeTwo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
                        <span className="text-white text-justify font-primary text-[18px] not-italic font-normal leading-[normal]">profesionales</span>
                        <span className="text-white text-justify font-primary text-[18px] not-italic font-normal leading-[normal]"> y empatía para crear un entorno</span>
                    </div>
                    <div className="flex items-center gap-[8px] self-stretch">
                        <span className="text-white text-justify font-primary text-[18px] not-italic font-normal leading-[normal]">colaborativo de trabajo único.</span>
                        <div className={`w-[91.2px] h-[34px] rounded-[99px]`} style={{backgroundImage: `url(${memeOne})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
                    </div>
                </div>
            </section>
            <section className={`pt-[139px] pb-[300px] px-[40px] hidden lg:flex flex-col justify-center items-start gap-[8px] self-stretch ${styles.galaxy}`}>
                <span className="self-stretch text-white font-primary text-[96px] not-italic font-bold leading-[normal] text-effect1">Comenzando como entusiastas</span>
                <div className="flex gap-[24px] flex-wrap items-center text-effect2">
                    <span className="self-stretch text-white font-primary text-[96px] not-italic font-bold leading-[normal] whitespace-nowrap">que querían crear algo</span>
                    <div className={`w-[264px] h-[101px] rounded-[99px]`} style={{backgroundImage: `url(${memeOne})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
                </div>
                <span className="self-stretch text-white font-primary text-[96px] not-italic font-bold leading-[normal] text-effect3">realmente grandioso para otras</span>
                <span className="self-stretch text-white font-primary text-[96px] not-italic font-bold leading-[normal] text-effect4">personas, cambiamos nuestras</span>
                <div className="flex gap-[24px] flex-wrap items-center text-effect5">
                    <span className="self-stretch text-white font-primary text-[96px] not-italic font-bold leading-[normal] whitespace-nowrap">habilidades</span>
                    <div className={`w-[264px] h-[101px] rounded-[99px]`} style={{backgroundImage: `url(${memeTwo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
                    <span className="self-stretch text-white font-primary text-[96px] not-italic font-bold leading-[normal] whitespace-nowrap">para crear</span>
                </div>
                <div className="flex gap-[24px] flex-wrap items-center text-effect6">
                    <span className="self-stretch text-white font-primary text-[96px] not-italic font-bold leading-[normal] whitespace-nowrap">un entorno</span>
                    <div className={`w-[264px] h-[101px] rounded-[99px]`} style={{backgroundImage: `url(${memeOne})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
                    <span className="self-stretch text-white font-primary text-[96px] not-italic font-bold leading-[normal] whitespace-nowrap">colaborativo</span>
                </div>
                <span className="self-stretch text-white font-primary text-[96px] not-italic font-bold leading-[normal] whitespace-nowrap text-effect7">de trabajo unico.</span>
            </section>
        </>
    )
}