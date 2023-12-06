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
                            url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FPIC1%20OPT.webp?alt=media&token=cdfc52f5-53d4-4b8e-b25b-1d2440a7d28f"} />
                    </section>
                    <section>
                        <CardSampleProject
                            title="Redes Sociales"
                            description="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
                            items={['2023']}
                            url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FPIC2%20OPT.webp?alt=media&token=329a6085-0d76-4062-b2af-35752bd0e601"} />
                    </section>
                    <section>
                        <CardSampleProject
                            title="Desarrollo"
                            description="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
                            items={['2023']}
                            url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FPIC3%20OPT.webp?alt=media&token=f8d33f1f-36ad-4023-a5af-21f29598eb5d"} />
                    </section>
                </div>
            </div>
            <div className="block md:hidden">
                <CardSample
                    title="Diseño web"
                    description="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
                    items={['2023']}
                    url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FPIC1%20OPT.webp?alt=media&token=cdfc52f5-53d4-4b8e-b25b-1d2440a7d28f"} />
                <CardSample
                    title="Redes Sociales"
                    description="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
                    items={['2023']}
                    url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FPIC2%20OPT.webp?alt=media&token=329a6085-0d76-4062-b2af-35752bd0e601"} />
                <CardSample
                    title="Desarrollo"
                    description="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
                    items={['2023']}
                    url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FPIC3%20OPT.webp?alt=media&token=f8d33f1f-36ad-4023-a5af-21f29598eb5d"} />
            </div>
        </>
    )
}