interface CardPricePros {
    description: string;
    plan: string,
    price: string;
    features: string[];
    style: 'basic' | 'premium' | 'advance'
}

export default function CardPrice({ description, plan, features, price, style }: CardPricePros) {
    return (
        <div className="shadow-md rounded-md bg-white">
            <div className={`bg-[#ABABE7]  ${style == 'basic' && 'bg-opacity-60'} ${style == 'premium' && 'bg-opacity-100'} text-center py-5 rounded-t-md`}>
                <p className="content-small md:content-medium lg:content-lg mb-5">{description}</p>
                <h2 className="title-small md:title-medium lg:title-large text-white whitespace-pre-line">{plan}</h2>
            </div>
            <div className="mt-10">
                <div className="title-small md:title-medium lg:title-large text-center">{price}</div>
                <div className="mt-10 px-10 flex flex-col divide-y divide-solid pb-5">
                    {
                        features.map((feature, index) => (
                            <div key={index} className="flex flex-row gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                {feature}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="pb-5 flex justify-center">
                <button className="bg-[#D9FE95] px-5 py-2 hover:bg-[#a1cf4d]">Mas información</button>
            </div>
        </div>
    )
}