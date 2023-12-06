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
                <div className="container_scroll flex flex-row">
                    <section>
                        <CardSampleProject
                            title="Diseño web"
                            description="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
                            items={['2023']}
                            url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FDesarrolloWeb%201.jpg?alt=media&token=59415c4e-ec94-4aed-aeb2-bbbb2dfc5e39"} />
                    </section>
                    <section>
                        <CardSampleProject
                            title="Redes Sociales"
                            description="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
                            items={['2023']}
                            url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FSocial%20media%201.jpg?alt=media&token=74b6dccd-70ce-4ae9-92c6-296c37ee70a9"} />
                    </section>
                    <section>
                        <CardSampleProject
                            title="Desarrollo"
                            description="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
                            items={['2023']}
                            url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fdesarrollo%20opt.webp?alt=media&token=19384a3b-21b1-46a0-a9a4-04711cedeb70"} />
                    </section>
                </div>
            </div>
            <div className="block md:hidden">
                <CardSample
                    title="Diseño web"
                    description="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
                    items={['2023']}
                    url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FDISENO%20WEB%20OPT.webp?alt=media&token=b3184fce-5a18-4136-b358-1ebc770c7e95"} />
                <CardSample
                    title="Redes Sociales"
                    description="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
                    items={['2023']}
                    url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FSOCIAL%20MEDIA%20OPT.webp?alt=media&token=3f148dcc-a6f8-4097-9a47-10607bf4d4e4"} />
                <CardSample
                    title="Desarrollo"
                    description="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
                    items={['2023']}
                    url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fdesarrollo%20opt.webp?alt=media&token=19384a3b-21b1-46a0-a9a4-04711cedeb70"} />
            </div>
        </>
    )
}