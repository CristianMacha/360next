'use client'
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './header.module.css';

export default function Header() {
    const pathName = usePathname();
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const showAnim = gsap
            .from(".header__animate", {
                yPercent: -100,
                paused: true,
                duration: 0.2,
            })
            .progress(1);

        ScrollTrigger.create({
            start: "top top-=70",
            end: "bottom bottom",
            onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse();
            },
        });
    }, [])

    const [active, setActive] = useState(false);
    const [menuContent, setMenuContent] = useState(false);
    const toggleActiveMenu = (value: boolean) => {
        setActive(value);
        if (value) {
            setTimeout(() => {
                setMenuContent(true);
            }, 500);
        } else {
            setMenuContent(false);
        }
    };


    return (
        <div>
            <header className={`flex h-[64px] px-[16px] lg:px-[40px] items-center justify-center w-full header__animate fixed z-50 backdrop-blur-md bg-white/30`}>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex items-center gap-[96px]'>
                        <Link href='/' className='flex flex-row gap-4 items-center text-[18px] md:text-[30px] font-bold'>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Flogo360Black.png?alt=media&token=4de7eb5c-2891-456a-8a44-73b726ffd991"
                                alt="logo"
                                className='w-[46px] h-[22px] md:w-[56px] md:h-[32px]' />
                            Virtual solutions
                        </Link>
                    </div>
                    <div className='flex justify-center items-center gap-28'>
                        <div className='font-primary text-[#5E5E5E] hidden md:block'>Huancayo, Peru</div>
                        <div className='flex flex-row items-center gap-6'>Menu
                            <button onClick={() => toggleActiveMenu(true)} className='w-[43px] h-[43px] rounded-full border flex justify-center items-center border-black'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`${styles.menu} ${active ? styles.active : ''}`}>
                <div className={`${menuContent ? 'block p-10' : 'hidden'}`}>
                    <div className='flex justify-between items-center'>Huancayo, Perú
                        <div className='flex flex-row items-center gap-6'>Close
                            <button onClick={() => toggleActiveMenu(false)} className='w-[43px] h-[43px] rounded-full border flex justify-center items-center border-black'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}