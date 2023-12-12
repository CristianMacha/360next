'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import styles from './floatingMenu.module.css';

interface Menus {
    name: string;
    id: number;
    url: string;
    submenus?: Menus[];
}

export default function FloatingMenu() {
    const pathName = usePathname();
    useEffect(() => {
        console.log(pathName);
    }, []);

    const [serviceSelected, setServiceSelected] = useState(false);
    const handleSelectMenuService = () => setServiceSelected(!serviceSelected);


    return (
        <div className="flex justify-center items-center fixed bottom-2 w-full z-[100] px-4">
            <div className={`rounded-lg p-[2px] ${styles.body__floating__menu}`}>
                <div className={`flex justify-between items-center gap-4 px-2 md:px-4 py-2 rounded-lg border border-white w-[380px] md:w-auto`}>
                    <Link href={'/'} className={`${!serviceSelected ? 'block' : 'hidden'}`}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Flogo-white.png?alt=media&token=b5461392-747f-418e-95a7-d0a0c3019e20" alt="logo" className="w-[80px] h-[46px]" />
                    </Link>
                    <div className={`w-[46px] h-[46px] cursor-pointer text-white hover:text-[#baef01] ${serviceSelected ? 'block' : 'hidden'}`} onClick={handleSelectMenuService}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[46px] h-[46px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className={`flex flex-row gap-6 items-center text-white ${!serviceSelected ? 'block' : 'hidden'}`}>
                        <Link href="/" className={`text-[18px] hover:text-[#baef01] ${pathName === 'prices' ? 'text-[#baef01] font-medium' : ''}`}>Precios</Link>
                        <Link href="/about-us" className={`text-[18px] hover:text-[#baef01] ${pathName === '/about-us' ? 'text-[#baef01] font-medium' : ''}`}>Nosotros</Link>
                        <div className="text-[18px] cursor-pointer hover:text-[#baef01] relative" onClick={handleSelectMenuService}>Servicios
                        <div className="absolute -top-[3px] -right-[9px] bg-[#baef01] text-xs font-medium px-[4px] rounded-full text-black">3</div>
                        </div>
                    </div>
                    <div className={`flex flex-row gap-6 items-center text-white overflow-x-auto ${serviceSelected ? 'block' : 'hidden'}`}>
                        <Link href="/" className={`text-[18px] hover:text-[#baef01] whitespace-nowrap ${pathName === 'prices' ? 'text-[#baef01] font-medium' : ''}`}>Diseño Web</Link>
                        <Link href="/" className={`text-[18px] hover:text-[#baef01] whitespace-nowrap ${pathName === 'prices' ? 'text-[#baef01] font-medium' : ''}`}>Redes Sociales</Link>
                        <Link href="/" className={`text-[18px] hover:text-[#baef01] whitespace-nowrap ${pathName === 'prices' ? 'text-[#baef01] font-medium' : ''}`}>Desarrollo Web</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}