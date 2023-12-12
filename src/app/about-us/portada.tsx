'use client'
import Spline from '@splinetool/react-spline';

export default function Portada() {
    return (
        <section className="h-auto md:h-screen px-[16px] md:px-[40px] flex flex-col gap-7 md:gap-14 justify-start items-center py-[16px] md:py-[40px] relative">
            <div className="h-[500px] w-full rounded-[40px] overflow-hidden hidden md:block" >
                <Spline scene="https://prod.spline.design/hDb-ZfPyU0kaAXNR/scene.splinecode" />
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='font-primary font-medium text-[32px]'>Nosotros</h1>
                        <div className='flex flex-row gap-4'>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                    <g clipPath="url(#clip0_2047_174)">
                                        <path d="M30.2764 35.0001C25.5661 35.0001 18.1244 30.8146 11.1574 23.8508C2.03689 14.7345 -2.32156 4.80828 1.23945 1.25213C3.01835 -0.522717 6.39857 -0.406545 10.757 1.58451C14.9218 3.48844 19.5708 6.88969 23.8453 11.1622C32.9658 20.2785 37.321 30.2015 33.76 33.7609C32.9206 34.5999 31.726 35.0001 30.2732 35.0001H30.2764ZM4.74559 1.28763C3.62208 1.28763 2.73747 1.57806 2.14989 2.16214C-0.474871 4.78569 2.88598 13.7567 12.0646 22.9343C16.2325 27.1004 20.7492 30.4113 24.7783 32.2507C28.5557 33.9771 31.5 34.1933 32.8463 32.8444C35.4711 30.2209 32.1102 21.2498 22.9316 12.0722C18.7637 7.9062 14.247 4.5953 10.2179 2.75591C8.08061 1.77813 6.20809 1.2844 4.74236 1.2844L4.74559 1.28763Z" fill="black" />
                                        <path d="M1.23816 33.7608C-2.31963 30.2047 2.0356 20.2784 11.1528 11.1622C15.4274 6.88963 20.0764 3.48837 24.2411 1.58445C28.6028 -0.40661 31.983 -0.526009 33.7587 1.25207C37.3165 4.80822 32.9613 14.7345 23.844 23.8507C16.8769 30.8146 9.43529 35 4.72493 35C3.27211 35 2.07757 34.5998 1.23816 33.7608ZM24.7803 2.75907C20.7511 4.59846 16.2345 7.90936 12.0665 12.0754C2.88469 21.253 -0.472933 30.224 2.1486 32.8476C3.4981 34.1965 6.43925 33.977 10.2166 32.2538C14.2457 30.4112 18.7624 27.1035 22.9303 22.9375C32.1122 13.7599 35.4698 4.78885 32.845 2.16531C32.2607 1.58122 31.3728 1.29079 30.2493 1.29079C28.7836 1.29079 26.9143 1.78452 24.7738 2.7623L24.7803 2.75907Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2047_174">
                                            <rect width="35" height="35" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p className='font-primary font-normal text-[20px]'>Lanzando experiencias digitales que transformen empresas e industrias. Para seguir siendo competitivas en un panorama en evolución, las empresas necesitan innovar.</p>
                        </div>
                        <div>
                            <button className='py-[17px] px-[33px] rounded-full bg-[#D9FE95] font-primary font-medium text-[20px] flex flex-row gap-4 items-center'>Trabajemos! <svg xmlns="http://www.w3.org/2000/svg" width="33" height="16" viewBox="0 0 33 16" fill="none">
                                <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="black" />
                            </svg></button>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <p className='font-primary font-medium text-[24px] leading-normal'>Somos una empresa de marketing que conecta marcas con consumidores a través de interfaces digitales.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}