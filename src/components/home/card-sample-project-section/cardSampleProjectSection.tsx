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
                            description="Crea una presencia digital impactante con nuestro diseño web de vanguardia"
                            items={['2023']}
                            url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FDISENO%20WEB%20OPT.webp?alt=media&token=b3184fce-5a18-4136-b358-1ebc770c7e95"} />
                    </section>
                    <section>
                        <CardSampleProject
                            title="Redes Sociales"
                            description="Nuestro enfoque integral de negocios para los proyectos nos permite colaborar estrechamente con nuestros clientes y lograr los mejores resultados posibles."
                            items={['2023']}
                            url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FSOCIAL%20MEDIA%20OPT.webp?alt=media&token=3f148dcc-a6f8-4097-9a47-10607bf4d4e4"} />
                    </section>
                    <section>
                        <CardSampleProject
                            title="Desarrollo Web"
                            description="AAplicaciones, sistemas y mucho más!"
                            items={['2023']}
                            url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fdesarrollo%20opt.webp?alt=media&token=19384a3b-21b1-46a0-a9a4-04711cedeb70"} />
                    </section>
                </div>
            </div>
            <div className="block md:hidden">
                <CardSample
                    title="Diseño web"
                    description="Crea una presencia digital impactante con nuestro diseño web de vanguardia"
                    items={['2023']}
                    url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FDISENO%20WEB%20OPT.webp?alt=media&token=b3184fce-5a18-4136-b358-1ebc770c7e95"} />
                <CardSample
                    title="Redes Sociales"
                    description="Nuestro enfoque integral de negocios para los proyectos nos permite colaborar estrechamente con nuestros clientes y lograr los mejores resultados posibles."
                    items={['2023']}
                    url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FSOCIAL%20MEDIA%20OPT.webp?alt=media&token=3f148dcc-a6f8-4097-9a47-10607bf4d4e4"} />
                <CardSample
                    title="Desarrollo"
                    description="Aplicaciones, sistemas y mucho más!."
                    items={['2023']}
                    url={"https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fdesarrollo%20opt.webp?alt=media&token=19384a3b-21b1-46a0-a9a4-04711cedeb70"} />
            </div>
        </>
    )
}