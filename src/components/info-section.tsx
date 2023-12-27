interface InfoSectionProps {
    title: string;
    description: string;
    features: string[];
    image: string;
}

export default function InfoSection({ title, description, features, image }: InfoSectionProps) {
    return (
        <section className="pt-16 md:pt-32 px-[16px] md:px-[40px] flex justify-center items-center">
            <div className="w-full flex flex-col gap-10">
            <div className="border-b border-black flex flex-row flex-wrap justify-between gap-0 md:gap-6 items-center pb-4 md:pb-8">
                    <h2 className="text-[30px] leading-[50px] md:text-[80px] md:leading-[80px] font-primary font-normal">{title}</h2>
                    <div>
                        <button className='py-[10px] px-[20px] md:py-[17px] md:px-[33px] rounded-full bg-[#D9FE95] font-primary font-medium text-[16px] md:text-[20px] flex flex-row gap-1 md:gap-4 items-center'>Trabajemos!
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="h-[500px] rounded-[20px]" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
                    <div className="flex flex-col justify-center gap-4">
                        <p className="font-primary text-[24px] md:text-[28px]">{description}</p>
                        <div className="flex flex-row flex-wrap">
                            {features.map((feature, index) => {
                                return (
                                    <div key={feature} className="font-primary px-4 py-1 border rounded-full border-black">{feature}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}