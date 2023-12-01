'use client'
import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CardSampleProject from "./cardSampleProject";

export default function CardSampleProjectSection() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = gsap.utils.toArray(".container_scroll section");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".container_scroll",
                pin: true,
                scrub: 1,
                end: "+=3000",
            }
        })
    }, []);

    return (
        <>
            <div className="overflow-x-hidden relative hidden md:block">
                <div className="container_scroll flex w-screen">
                    <section className="w-screen h-[390px] lg:h-screen">
                        <CardSampleProject url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fservice3.webp?alt=media&token=a229d11a-e567-43cb-a82a-fd4cda28392d"} />
                    </section>
                    <section className="w-screen h-[390px] lg:h-screen">
                        <CardSampleProject url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fservice1.webp?alt=media&token=c09c7392-f5d7-42a6-a412-ac375bfc4d46"} />
                    </section>
                    <section className="w-screen h-[390px] lg:h-screen">
                        <CardSampleProject url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fservice2.webp?alt=media&token=9b5bbfa4-53ae-4ff7-8c6e-b64fec542d90"} />
                    </section>
                </div>
            </div>
            <div className="block md:hidden">
                <CardSampleProject url="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fservice3.webp?alt=media&token=a229d11a-e567-43cb-a82a-fd4cda28392d" />
                <CardSampleProject url="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fservice1.webp?alt=media&token=c09c7392-f5d7-42a6-a412-ac375bfc4d46" />
                <CardSampleProject url="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fservice2.webp?alt=media&token=9b5bbfa4-53ae-4ff7-8c6e-b64fec542d90" />
            </div>
        </>
    )
}