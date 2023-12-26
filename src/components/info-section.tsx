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
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:items-center border-b border-black pb-8">
                    <h2 className="text-[30px] leading-[50px] md:text-[80px] md:leading-[80px] font-primary font-normal">{title}</h2>
                    <div>
                        <button className='py-[17px] px-[33px] rounded-full bg-[#D9FE95] font-primary font-medium text-[20px] flex flex-row gap-4 items-center'>Trabajemos! <svg xmlns="http://www.w3.org/2000/svg" width="33" height="16" viewBox="0 0 33 16" fill="none">
                            <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="black" />
                        </svg></button>
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