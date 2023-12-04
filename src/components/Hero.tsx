interface HeroProps {
    url: string;
    title: string;
    description: string;
}
export default function Hero({ url, title, description }: HeroProps) {
    return (
        <div className="h-screen flex justify-start items-center px-[40px] bg-cover bg-no-repeat" style={{backgroundImage: `url("${url}")`, backgroundPosition: 'top center'}}>
            <div className="text-white">
                <h1 className="text-[90px] leading-[80px] md:leading-[150px] md:text-[200px] font-medium font-primary">{title}</h1>
                <p className=" text-[24px] lg:text-[32px] w-full md:w-[900px] leading-[normal] font-primary mt-10">{description}</p>
            </div>
        </div>
    )
}