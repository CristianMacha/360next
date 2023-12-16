export default function WhyUs() {
    return (
        <section className="px-[16px] md:px-[40px] py-52 flex flex-col justify-center items-center gap-16 relative">
            <div className="flex w-full">
                <h2 className="font-primary text-[96px] leading-[90px] font-medium w-[630px]">Por qué nos eligen?</h2>
            </div>
            <div className="flex flex-col items-end w-full">
                <div className="flex flex-col gap-6">
                    <p className="font-primary text-[24px] font-medium text-justify w-auto md:w-[730px]">Desde el momento en que se fundó nuestra empresa, hemos ayudado a nuestros clientes a encontrar soluciones excepcionales para sus negocios, creando marcas y productos digitales memorables. Nuestra experiencia crece cada año y nuestra experiencia acumulada nos permite desarrollar productos exactamente como deben ser.</p>
                    <div>
                        <button className='py-[17px] px-[33px] rounded-full bg-[#D9FE95] font-primary font-medium text-[20px] flex flex-row gap-4 items-center'>Trabajemos! <svg xmlns="http://www.w3.org/2000/svg" width="33" height="16" viewBox="0 0 33 16" fill="none">
                            <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="black" />
                        </svg></button>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="344" height="275" viewBox="0 0 344 275" fill="none" className="absolute opacity-30 md:opacity-40 -z-[1]">
                <path d="M3 2.53906C91 43.8724 261.2 144.539 238 216.539C209 306.539 61.5 272.039 95.5 216.539C129.5 161.039 314.5 222.539 341 238.039" stroke="#ABABE7" strokeWidth="5" strokeLinecap="round" />
            </svg>
        </section>
    )
}