interface GoogleReviewProps {
    image: string;
    review: string;
    name: string;
    rotate: 'left' | 'right' | 'none';
}

export default function GoogleReview({ image, review, name, rotate }: GoogleReviewProps) {
    return (
        <div className={`flex w-[320px] py-[24px] px-[24px] lg:px-[48px] flex-col justify-between rounded-[40px] bg-[#F0ECEC] md:w-[380px] gap-2 rotate-0 ${rotate === 'right' && `md:rotate-[5deg]`} ${rotate === 'left' && 'md:-rotate-[5deg]'}`}>
            <h2 className='content-small'>Google reviews</h2>
            <h3 className='content-medium'>{review}</h3>
            <div className='flex flex-row gap-4 items-center'>
                <div className="flex items-center">
                    <div className='w-[40px] h-[40px] rounded-full bg-gray-600'></div>
                </div>
                <div className='content-small'>{name}</div>
            </div>
        </div>
    )
}