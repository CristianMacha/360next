'use client'
import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CardSampleProject from "./cardSampleProject";
import CardSample from "@/components/CardSample";

export default function CardSampleProjectSection() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = gsap.utils.toArray(".container_scroll section");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            // top: "+=500",
            scrollTrigger: {
                trigger: ".container_scroll",
                pin: true,
                scrub: 1,
                end: "+=3000",
                markers: false
            }
        })
    }, []);

    return (
        <>
            <div className="px-[16px] md:px-[40px]">
                <h2 className="title-small md:title-medium lg:title-large">Nuestros Servicios</h2>
            </div>
            <div className="overflow-x-hidden relative hidden md:block">
                <div className="container_scroll flex flex-row">
                    <section>
                        <CardSampleProject
                            title="Diseño web"
                            description="Transformamos ideas en experiencias visuales cautivadoras."
                            items={['']}
                            position="bottom"
                            url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FGALE%201%20OPT.webp?alt=media&token=7292bc01-3aa9-4dc8-9107-bc71291ede59"} />
                    </section>
                    <section>
                        <CardSampleProject
                            title="Desarrollo Web"
                            description="Conectamos marcas con su audiencia de manera auténtica"
                            items={['']}
                            position="top"
                            url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FdesarrollowebServiceBg.webp?alt=media&token=59f0841c-3d8e-4a89-bbc6-f1a9d083dc39"} />
                    </section>
                    <section>
                        <CardSampleProject
                            title="Redes Sociales"
                            description="Conectamos marcas con su audiencia de manera auténtica"
                            items={['']}
                            position="top"
                            url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FGALE%203%20OPT.webp?alt=media&token=09d82f45-90c2-4e7a-8b8e-27665e75157b"} />
                    </section>
                </div>
            </div>
            <div className="block md:hidden">
                <CardSample
                    title="Diseño web"
                    description="Transformamos ideas en experiencias visuales cautivadoras."
                    items={['2023']}
                    url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fmobile%20Disen%CC%83o%20web.jpg?alt=media&token=e79ca2f6-78ce-48a8-a47d-6fc781cb539b"} />
                <CardSample
                    title="Redes Sociales"
                    description="Conectamos marcas con su audiencia de manera auténtica"
                    items={['2023']}
                    url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fmobile%20Social%20media.jpg?alt=media&token=db1c5369-f1a4-4091-81c6-4bf9a7995298"} />
                <CardSample
                    title="Desarrollo"
                    description="Más que códigos, construimos soluciones digitales."
                    items={['2023']}
                    url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fmobile%20Desarrollo%20web.jpg?alt=media&token=ce2f7091-cb46-43ab-a3cc-6e85f7ec9050"} />
            </div>
        </>
    )
}