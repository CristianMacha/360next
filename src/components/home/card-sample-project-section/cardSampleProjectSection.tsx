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
                            url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360page%2FserviceDesignWeb1600x900.jpeg?alt=media&token=6c9386d5-8714-48c0-8143-510a060feba0"} />
                    </section>
                    <section>
                        <CardSampleProject
                            title="Redes Sociales"
                            description="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
                            items={['2023']}
                            url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360page%2FserviceDesignWeb1600x900.jpeg?alt=media&token=6c9386d5-8714-48c0-8143-510a060feba0"} />
                    </section>
                    <section>
                        <CardSampleProject
                            title="Desarrollo Web"
                            description="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
                            items={['2023']}
                            url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360page%2FserviceDesignWeb1600x900.jpeg?alt=media&token=6c9386d5-8714-48c0-8143-510a060feba0"} />
                    </section>
                </div>
            </div>
            <div className="block md:hidden">
                <CardSample
                    title="Diseño web"
                    description="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
                    items={['2023']}
                    url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360page%2FserviceDesignWeb1600x900.jpeg?alt=media&token=6c9386d5-8714-48c0-8143-510a060feba0"} />
                <CardSample
                    title="Diseño web"
                    description="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
                    items={['2023']}
                    url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360page%2FserviceDesignWeb1600x900.jpeg?alt=media&token=6c9386d5-8714-48c0-8143-510a060feba0"} />
                <CardSample
                    title="Diseño web"
                    description="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
                    items={['2023']}
                    url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360page%2FserviceDesignWeb1600x900.jpeg?alt=media&token=6c9386d5-8714-48c0-8143-510a060feba0"} />
            </div>
        </>
    )
}