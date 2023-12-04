'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

    const showHeaderMobile = () => {
        const headerMobile = document.getElementById("header-mobile");
        headerMobile?.classList.toggle("active_header_mobile");
        // effectExpandX();
    };

    const handleDropdown = () => {
        const dropdown = document.getElementById("dropdown_mobile");
        dropdown?.classList.toggle("active");
    }

    return (
        <div>
            <header className={`flex h-[86px] lg:h-[96px] px-[16px] lg:px-[40px] items-center justify-center w-full header__animate fixed z-50 backdrop-blur-md bg-white/30`}>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex items-center gap-[96px]'>
                        <Link href='/'>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Flogo360Black.png?alt=media&token=4de7eb5c-2891-456a-8a44-73b726ffd991"
                                alt="logo"
                                className='w-[90px] h-[56px] lg:w-[128.913px] lg:h-[80.01px]' />
                        </Link>
                        <div className='hidden lg:flex items-start gap-[44px]'>
                            <Link key={'portfolio'} href='/portfolio' className={`text-black font-primary text-[18px] not-italic font-medium leading-[normal] ${pathName === '/portfolio' ? 'text-blue-500 font-bold' : ''}`}>Precios</Link>
                            <Link key={'nosotros'} href='/portfolio' className={`text-black font-primary text-[18px] not-italic font-medium leading-[normal] ${pathName === '/portfolio' ? 'text-blue-500 font-bold' : ''}`}>Nosotros</Link>
                            <div className={`text-black font-primary text-[18px] not-italic font-medium leading-[normal] cursor-pointer dropdown ${(pathName === '/design-web' || pathName === '/social-media') ? 'text-blue-500 font-bold' : ''}`}>
                                Servicios
                                <div className={`dropdown_content p-[16px] rounded-lg`}>
                                    <div className='flex flex-col gap-[10px]'>
                                        <Link key={'design-web'} href={'/design-web'} className={`text-black font-primary text-[18px] not-italic font-medium leading-[normal] ${pathName === '/design-web' ? 'text-blue-500 font-bold' : ''}`}>Diseño Web</Link>
                                        <Link key={'redes-sociales'} href={'/social-media'} className={`text-black font-primary text-[18px] not-italic font-medium leading-[normal] ${pathName === '/social-media' ? 'text-blue-500 font-bold' : ''}`}>Redes Sociales</Link>
                                        <Link key={'desarrollo'} href={'/social-media'} className={`text-black font-primary text-[18px] not-italic font-medium leading-[normal] ${pathName === '/social-media' ? 'text-blue-500 font-bold' : ''}`}>Desarrollo</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Link key={'contact'} href={'/contact'} className='hidden lg:block px-[16px] py-[8px] text-black font-medium rounded-full'>CONTACTO</Link>
                        <button className="flex lg:hidden w-[46px] h-[46px] justify-center items-center rounded-full" id="btn_open_header_mobile" onClick={showHeaderMobile}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="12"
                                viewBox="0 0 18 12"
                                fill="none"
                            >
                                <path
                                    d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z"
                                    fill="#1C1B1F"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            <div
                className="active_header_mobile fixed top-0 bottom-0 right-0 left-0 z-50 flex flex-col justify-between items-center px-[16px] pb-[16px] bg-white"
                id="header-mobile"
            >
                <header className="flex h-[86px] items-center justify-center w-full bg-white">
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-[96px]">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Flogo360-black.png?alt=media&token=9f3c6088-efe7-4c26-a1da-b6806082faeb"
                                alt="logo"
                                className="w-[90px] h-[56px] lg:w-[128.913px] lg:h-[80.01px]"
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <button id="btn_close_header_mobile" onClick={showHeaderMobile} className='flex w-[46px] h-[46px] justify-center items-center'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                >
                                    <path
                                        d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                                        fill="#1C1B1F"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>
                <div className="flex flex-col items-start gap-[16px]">
                    <a
                        href="/portfolio"
                        className={`font-primary text-[32px] not-italic font-medium leading-[normal] ${pathName == '/portfolio' ? 'text-blue-500 font-bold text-[40px]' : ''}`}>Portafolio</a>
                    <div className="dropdown" id="dropdown_mobile">
                        <span
                            id="btn_services"
                            onClick={handleDropdown}
                            className={`font-primary text-[32px] not-italic font-medium leading-[normal] cursor-pointer dropdown ${(pathName == '/design-web' || pathName == '/social-media') ? 'text-blue-500 font-bold text-[40px]' : ''}`}>Servicios</span>
                        <div className="dropdown_mobile">
                            <div className="flex flex-col gap-[10px] my-[8px]">
                                <a
                                    href="/design-web"
                                    className={`pl-[10px] font-primary text-[28px] text-black not-italic font-medium leading-[normal] ${pathName == '/design-web' ? 'text-blue-500 font-bold text-[30px]' : ''}`}>Diseño web</a>
                                <a
                                    href="/social-media"
                                    className={`pl-[10px] font-primary text-[28px] text-black not-italic font-medium leading-[normal] ${pathName == '/social-media' ? 'text-blue-500 font-bold text-[30px]' : ''}`}>Social media</a>
                                <a
                                    href="/branding"
                                    className={`pl-[10px] font-primary text-[28px] text-black not-italic font-medium leading-[normal] ${pathName == '/branding' ? 'text-blue-500 font-bold text-[30px]' : ''}`}>Branding</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <button
                        className="px-[16px] py-[8px] bg-[#bcf500] text-black font-medium rounded-full effect_expand_x">CONTACTO</button>
                </div>
            </div>
        </div>
    )
}