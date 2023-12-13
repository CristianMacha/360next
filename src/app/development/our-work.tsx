import Work from "@/components/work";

export default function OurWork() {
    return (
        <section className="px-[16px] md:px-[40px] pt-32">
            <h2 className="font-primary text-[72px] leading-[60px] md:text-[96px] md:leading-[80px] font-medium mb-10">Nuestro Trabajo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1 md:col-span-2">
                    <Work
                        image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fwork360VirtualSolutions.jpg?alt=media&token=7a7662de-67b2-47e3-b659-3e1b0f01e942"
                        service="Desarrollo Web"
                        title="360 Virtual Solutions"
                        url="https://360virtualsol.com" />
                </div>
                <div>
                    <Work
                        image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FworkGraniteImpressions.jpg?alt=media&token=22c9ef2f-ff3a-494d-8d32-9d35b076d840"
                        service="Desarrollo Web"
                        title="Granite Impressions"
                        url="https://granite-impressions.com" />
                </div>
                <div>
                    <Work
                        image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FworkGrupoFerpo.jpg?alt=media&token=aa619cd9-3407-4aa1-9670-c9ba50de2551"
                        service="Desarrollo Web"
                        title="Grupo Ferpo"
                        url="https://ferpo.com" />
                </div>
            </div>
            <div className="mt-5">
                <button className='w-full py-[17px] px-[33px] rounded-full bg-[#D9FE95] font-primary font-medium text-[20px] flex justify-center flex-row gap-4 items-center'>Trabajemos! <svg xmlns="http://www.w3.org/2000/svg" width="33" height="16" viewBox="0 0 33 16" fill="none">
                    <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="black" />
                </svg></button>
            </div>
        </section>
    )
}