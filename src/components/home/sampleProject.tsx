'use client'
import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SampleProject() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".project-one", {
            scrollTrigger: {
                trigger: ".project-one",
                scrub: 1
            },
            x: -60,
            y: -60,
            ease: "power2.out"
        });

        gsap.to(".project-two", {
            scrollTrigger: {
                trigger: ".project-two",
                scrub: 1
            },
            x: 60,
            y: -60,
            ease: "power2.out"
        });

        gsap.to(".project-three", {
            scrollTrigger: {
                trigger: ".project-three",
                scrub: 1
            },
            x: -60,
            y: 60,
            ease: "power2.out"
        });

        gsap.to(".project-four", {
            scrollTrigger: {
                trigger: ".project-four",
                scrub: 1
            },
            x: 60,
            y: 60,
            ease: "power2.out"
        });
    }, []);

    return (
        <section className="flex py-[80px] px-[40px] flex-col items-center gap-[64px] self-stretch bg-white lg:gap-[102px]">
            <div className="flex p-[5px] flex-col justify-center items-center gap-[12px] self-stretch lg:self-auto lg:justify-between lg:flex-row">
                <img src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FsampleProjectOne.png?alt=media&token=9f88071e-b9c6-42b5-b1c8-18381dfba9d2" alt="proyecto one" className="w-[173px] h-[124px] object-cover bg-no-repeat lg:w-[588px] lg:h-[395px] project-one" />
                <img src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FsampleProjectOne.png?alt=media&token=9f88071e-b9c6-42b5-b1c8-18381dfba9d2" alt="proyecto one" className="w-[173px] h-[124px] object-cover bg-no-repeat lg:w-[588px] lg:h-[395px] project-two" />
            </div>
            <div className="flex flex-col justify-center gap-[36px] self-stretch lg:self-auto lg:items-center">
                <h2 className="self-stretch text-black text-center font-primary text-[32px] not-italic font-bold leading-[normal] lg:self-auto lg:text-[70px]">Nuestra creatividad no solo termina nuestros proyectos</h2>
                <div className="flex justify-center items-center gap-[8px] lg:py-[8px] lg:px-[36px]">
                    <button className="text-black text-center text-[24px] not-italic font-normal leading-[normal] rounded-full border border-black py-[4px] px-[24px] font-primary lg:text-[40px] hover:bg-black hover:text-white">Click Aqui</button>
                </div>
            </div>
            <div className="flex p-[5px] flex-col justify-center items-center gap-[12px] self-stretch lg:self-auto lg:justify-between lg:flex-row">
                <img src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FsampleProjectOne.png?alt=media&token=9f88071e-b9c6-42b5-b1c8-18381dfba9d2" alt="proyecto one" className="w-[173px] h-[124px] object-cover bg-no-repeat lg:w-[588px] lg:h-[395px] project-three" />
                <img src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FsampleProjectOne.png?alt=media&token=9f88071e-b9c6-42b5-b1c8-18381dfba9d2" alt="proyecto one" className="w-[173px] h-[124px] object-cover bg-no-repeat lg:w-[588px] lg:h-[395px] project-four" />
            </div>
        </section>
    )
}