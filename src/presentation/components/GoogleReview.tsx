interface GoogleReviewProps {
    image: string;
    review: string;
    name: string;
    rotate: number;
}

export default function GoogleReview({ image, review, name, rotate }: GoogleReviewProps) {
    return (
        <div className={`flex w-[320px] py-[24px] px-[24px] lg:px-[48px] flex-col justify-between rounded-[40px] bg-[#F0ECEC] md:w-[380px] rotate-0 ${rotate > 0 && 'md:rotate-[' + rotate + 'deg]'} ${rotate < 0 && 'md:-rotate-[' + Math.abs(rotate) + 'deg]'}`}>
            <h2 className='text-[24px] font-primary font-normal'>Google reviews</h2>
            <h3 className='text-[24px] font-primary font-light'>{review}</h3>
            <div className='flex flex-row gap-4 items-center'>
                <div className="flex items-center">
                    <div className='w-[60px] h-[60px] rounded-full bg-gray-600'></div>
                </div>
                <div className='text-[24px] font-primary font-normal'>{name}</div>
            </div>
        </div>
    )
}