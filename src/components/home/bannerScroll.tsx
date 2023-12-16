'use client'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import styles from './bannerScroll.module.css';

export default function BannerScroll() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".scroll", {
            x: '+200'
        }, {
            duration: 15,
            repeat: -1,
            x: '-100%',
            ease: 'linear'
        })
    }, []);

    return (
        <div className="flex h-[141px] flex-col justify-center items-center gap-[8px] self-stretch border-y border-[#c7c7c7] bg-white overflow-hidden lg:h-auto">
            <div className="flex items-center gap-[40px] flex-1 self-stretch">
                <div className="flex py-[40px] items-center gap-[8px] flex-1 self-stretch">
                <div className={`${styles.content_section} ${styles.text_move} font-primary`}>
            <div className={`${styles.text_wrapper}`}>
                <div className={`${styles.text}`}> 360 VIRTUAL SOLUTIONS X <span className="text-white" style={{ WebkitTextStrokeWidth: 1, WebkitTextStrokeColor: '#000000' }}> 360 VIRTUAL SOLUTIONS X </span> </div>
                <div className={`${styles.text}`}> 360 VIRTUAL SOLUTIONS X <span className="text-white" style={{ WebkitTextStrokeWidth: 1, WebkitTextStrokeColor: '#000000' }}> 360 VIRTUAL SOLUTIONS X </span> </div>
                <div className={`${styles.text}`}> 360 VIRTUAL SOLUTIONS X <span className="text-white" style={{ WebkitTextStrokeWidth: 1, WebkitTextStrokeColor: '#000000' }}> 360 VIRTUAL SOLUTIONS X </span> </div>
                <div className={`${styles.text}`}> 360 VIRTUAL SOLUTIONS X <span className="text-white" style={{ WebkitTextStrokeWidth: 1, WebkitTextStrokeColor: '#000000' }}> 360 VIRTUAL SOLUTIONS X </span> </div>
            </div>
        </div>
                </div>
            </div>
        </div>
    )
}