'use client'
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './header.module.css';

export default function Header() {
    const pathName = usePathname();

    const [active, setActive] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const toggleActiveMenu = () => setActive(!active);

    const handleDropdown = () => setDropdown(!dropdown);

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
            end: "bottom+=3000 bottom",
            onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse();
            },
        });
    }, [])

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
                            <button onClick={toggleActiveMenu} className='w-[43px] h-[43px] rounded-full border flex justify-center items-center border-black'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`${styles.menu} ${active ? styles.active : ''}`}>
                <div className={`p-10 flex flex-col justify-between h-full`}>
                    <div>
                        <div className='flex justify-between items-center'>Huancayo, Perú
                            <div className='flex flex-row items-center gap-6'>Close
                                <button onClick={toggleActiveMenu} className='w-[43px] h-[43px] rounded-full border flex justify-center items-center border-black'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 pt-10'>
                            <div>
                                <Link
                                    href="/"
                                    onClick={toggleActiveMenu}
                                    className={`font-primary text-[32px] not-italic font-normal leading-[normal] ${pathName == '/' ? 'text-blue-500 font-bold text-[40px]' : ''}`}>Inicio</Link>
                            </div>
                            <div>
                                <Link
                                    href="/prices"
                                    onClick={toggleActiveMenu}
                                    className={`font-primary text-[32px] not-italic font-normal leading-[normal] ${pathName == '/prices' ? 'text-blue-500 font-bold text-[40px]' : ''}`}>Precios</Link>
                            </div>
                            <div>
                                <Link
                                    href="/about-us"
                                    onClick={toggleActiveMenu}
                                    className={`font-primary text-[32px] not-italic font-normal leading-[normal] ${pathName == '/about-us' ? 'text-blue-500 font-bold text-[40px]' : ''}`}>Nosotros</Link>
                            </div>
                            <div className={`dropdown ${dropdown ? 'active' : ''}`} id="dropdown_mobile">
                                <span
                                    id="btn_services"
                                    onClick={handleDropdown}
                                    className={`font-primary text-[32px] not-italic font-normal leading-[normal] cursor-pointer dropdown ${(pathName == '/design-web' || pathName == '/social-networks' || pathName == '/development') ? 'text-blue-500 font-bold text-[40px]' : ''}`}>Servicios</span>
                                <div className="dropdown_mobile">
                                    <div className="flex flex-col gap-[10px] my-[8px]">
                                        <div>
                                            <Link
                                                href="/design-web"
                                                onClick={toggleActiveMenu}
                                                className={`pl-[10px] font-primary text-[28px] text-black not-italic font-normal leading-[normal] ${pathName == '/design-web' ? 'text-blue-500 font-bold text-[30px]' : ''}`}>Diseño web</Link>

                                        </div>
                                        <div>
                                            <Link
                                                href="/social-networks"
                                                onClick={toggleActiveMenu}
                                                className={`pl-[10px] font-primary text-[28px] text-black not-italic font-normal leading-[normal] ${pathName == '/social-networks' ? 'text-blue-500 font-bold text-[30px]' : ''}`}>Redes Sociales</Link>

                                        </div>
                                        <div>
                                            <Link
                                                href="/development"
                                                onClick={toggleActiveMenu}
                                                className={`pl-[10px] font-primary text-[28px] text-black not-italic font-normal leading-[normal] ${pathName == '/development' ? 'text-blue-500 font-bold text-[30px]' : ''}`}>Desarrollo</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link
                                    href="/blog"
                                    onClick={toggleActiveMenu}
                                    className={`font-primary text-[32px] not-italic font-normal leading-[normal] ${pathName == '/blog' ? 'text-blue-500 font-bold text-[40px]' : ''}`}>Blog</Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end flex-col items-end gap-2'>
                        <Link href="https://facebook.com" className='flex flex-row gap-4 items-center font-medium'>facebook<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M16.268 1.23215C16.268 0.67987 15.8203 0.232155 15.268 0.232155L6.26797 0.232155C5.71568 0.232155 5.26797 0.679871 5.26797 1.23216C5.26797 1.78444 5.71568 2.23215 6.26797 2.23216L14.268 2.23215L14.268 10.2322C14.268 10.7844 14.7157 11.2322 15.268 11.2322C15.8203 11.2322 16.268 10.7844 16.268 10.2322L16.268 1.23215ZM1.9532 15.9611L15.9751 1.93926L14.5609 0.525048L0.538987 14.5469L1.9532 15.9611Z" fill="black" />
                        </svg></Link>

                        <Link href="https://instagram.com" className='flex flex-row gap-4 items-center font-medium'>instagram<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M16.268 1.23215C16.268 0.67987 15.8203 0.232155 15.268 0.232155L6.26797 0.232155C5.71568 0.232155 5.26797 0.679871 5.26797 1.23216C5.26797 1.78444 5.71568 2.23215 6.26797 2.23216L14.268 2.23215L14.268 10.2322C14.268 10.7844 14.7157 11.2322 15.268 11.2322C15.8203 11.2322 16.268 10.7844 16.268 10.2322L16.268 1.23215ZM1.9532 15.9611L15.9751 1.93926L14.5609 0.525048L0.538987 14.5469L1.9532 15.9611Z" fill="black" />
                        </svg></Link>

                        <Link href="https://instagram.com" className='flex flex-row gap-4 items-center font-medium'>youtube<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M16.268 1.23215C16.268 0.67987 15.8203 0.232155 15.268 0.232155L6.26797 0.232155C5.71568 0.232155 5.26797 0.679871 5.26797 1.23216C5.26797 1.78444 5.71568 2.23215 6.26797 2.23216L14.268 2.23215L14.268 10.2322C14.268 10.7844 14.7157 11.2322 15.268 11.2322C15.8203 11.2322 16.268 10.7844 16.268 10.2322L16.268 1.23215ZM1.9532 15.9611L15.9751 1.93926L14.5609 0.525048L0.538987 14.5469L1.9532 15.9611Z" fill="black" />
                        </svg></Link>

                        <Link href="https://instagram.com" className='flex flex-row gap-4 items-center font-medium'>tiktok<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M16.268 1.23215C16.268 0.67987 15.8203 0.232155 15.268 0.232155L6.26797 0.232155C5.71568 0.232155 5.26797 0.679871 5.26797 1.23216C5.26797 1.78444 5.71568 2.23215 6.26797 2.23216L14.268 2.23215L14.268 10.2322C14.268 10.7844 14.7157 11.2322 15.268 11.2322C15.8203 11.2322 16.268 10.7844 16.268 10.2322L16.268 1.23215ZM1.9532 15.9611L15.9751 1.93926L14.5609 0.525048L0.538987 14.5469L1.9532 15.9611Z" fill="black" />
                        </svg></Link>
                    </div>
                </div>
            </div>
            <div onClick={toggleActiveMenu} className={`fixed bg-black/30 z-[51] transition-all ${active ? 'top-0 bottom-0 right-0 left-0' : 'top-0'}`}></div>
        </div>
    )
}