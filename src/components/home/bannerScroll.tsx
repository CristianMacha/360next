'use client'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function BannerScroll() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".scroll", {
            x: 300,
        }, {
            scrollTrigger: {
                trigger: ".scroll",
                scrub: 1,
            },
            x: -600,
        })
    }, []);

    return (
        <div className="flex h-[141px] flex-col justify-center items-center gap-[8px] self-stretch border-y border-[#c7c7c7] bg-white overflow-hidden lg:h-auto">
            <div className="flex items-center gap-[40px] flex-1 self-stretch">
                <div className="flex py-[40px] items-center gap-[8px] flex-1 self-stretch">
                    <h4 className="overflow-hidden text-[#1a1a1a] text-ellipsis font-primary text-[80px] not-italic font-bold leading-[95px] whitespace-nowrap ml-10 lg:text-[200px] lg:leading-[200px] scroll">360 Virtual Solutions.</h4>
                </div>
            </div>
        </div>
    )
}