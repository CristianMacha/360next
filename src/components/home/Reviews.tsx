'use client'
import { useEffect } from 'react';

import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';
import styles from './reviews.module.css';

export default function Reviews() {
    useEffect(() => {
        new KeenSlider("#my-keen-slider", {
            breakpoints: {
                "(min-width: 640px)": {
                    slides: { perView: 1, spacing: 16 },
                },
                "(min-width: 768px)": {
                    slides: { perView: 2, spacing: 16 },
                },
                "(min-width: 1024px)": {
                    slides: { perView: 3, spacing: 16 }
                }
            },
            slides: {
                perView: 1,
            },
        });
    }, []);
    return (
        <section className="flex flex-col py-[24px] px-[16px] items-start gap-[8px] self-stretch">
            <div id="my-keen-slider" className="keen-slider">
                <div className="keen-slider__slide flex justify-center">
                    <div className={`flex w-[366px] h-[566px] py-[24px] px-[48px] justify-center items-center gap-[8px] rounded-[24px] backdrop-blur-[17.5px] ${styles.review} lg:w-[565px] lg:h-[787px]`}>
                        <div className="flex flex-col justify-center items-center gap-[32px] flex-1 self-stretch">
                            <span className="w-[237px] text-white text-center font-primary text-[32px] not-italic font-bold leading-[normal] lg:text-[40px]">GOOGLE REVIEWS</span>
                            <div className="flex items-start gap-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none" className="w-[32px] h-[32px]">
                                    <path d="M16 0L19.5922 11.0557H31.2169L21.8123 17.8885L25.4046 28.9443L16 22.1115L6.59544 28.9443L10.1877 17.8885L0.783095 11.0557H12.4078L16 0Z" fill="#E09E1E" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none" className="w-[32px] h-[32px]">
                                    <path d="M16 0L19.5922 11.0557H31.2169L21.8123 17.8885L25.4046 28.9443L16 22.1115L6.59544 28.9443L10.1877 17.8885L0.783095 11.0557H12.4078L16 0Z" fill="#E09E1E" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none" className="w-[32px] h-[32px]">
                                    <path d="M16 0L19.5922 11.0557H31.2169L21.8123 17.8885L25.4046 28.9443L16 22.1115L6.59544 28.9443L10.1877 17.8885L0.783095 11.0557H12.4078L16 0Z" fill="#E09E1E" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none" className="w-[32px] h-[32px]">
                                    <path d="M16 0L19.5922 11.0557H31.2169L21.8123 17.8885L25.4046 28.9443L16 22.1115L6.59544 28.9443L10.1877 17.8885L0.783095 11.0557H12.4078L16 0Z" fill="#E09E1E" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none" className="w-[32px] h-[32px]">
                                    <path d="M16 0L19.5922 11.0557H31.2169L21.8123 17.8885L25.4046 28.9443L16 22.1115L6.59544 28.9443L10.1877 17.8885L0.783095 11.0557H12.4078L16 0Z" fill="#E09E1E" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide flex justify-center">
                    <div className="flex w-[366px] h-[566px] py-[24px] px-[24px] lg:px-[48px] justify-center items-center gap-[8px] rounded-[24px] bg-[#e3e8e4] lg:w-[565px] lg:h-[787px]">
                        <div className="flex flex-col justify-between items-start flex-1 self-stretch">
                            <div className="flex justify-center items-center gap-[16px]">
                                <div className="flex items-start gap-[5px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                </div>
                                <span className="font-primary text-[16px] not-italic font-normal leading-[normal] lg:text-[24px]">5.0</span>
                            </div>
                            <div className="flex flex-col items-start gap-[24px] self-stretch">
                                <p className="self-stretch font-primary text-[24px] not-italic font-normal leading-[normal] lg:text-[30px]">Unikorns Agency delivered collaterals and materials promptly, meeting all deadlines. Their responsiveness to the client specific requirements was exceptional, and they were readily available for in-depth discussions, responding within an hour on most occasions.</p>
                                <div className="flex flex-col items-start gap-[12px]">
                                    <span className="font-primary text-[16px] not-italic font-bold leading-[normal] lg:text-[20px]">Colin Marsh</span>
                                    <span className="font-primary text-[12px] not-italic font-light leading-[normal] lg:text-[16px]">Head of Marketing Communications at Shopbox AI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide flex justify-center">
                    <div className="flex w-[366px] h-[566px] py-[24px] px-[24px] lg:px-[48px] justify-center items-center gap-[8px] rounded-[24px] bg-[#e3e8e4] lg:w-[565px] lg:h-[787px]">
                        <div className="flex flex-col justify-between items-start flex-1 self-stretch">
                            <div className="flex justify-center items-center gap-[16px]">
                                <div className="flex items-start gap-[5px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                </div>
                                <span className="font-primary text-[16px] not-italic font-normal leading-[normal] lg:text-[24px]">5.0</span>
                            </div>
                            <div className="flex flex-col items-start gap-[24px] self-stretch">
                                <p className="self-stretch font-primary text-[24px] not-italic font-normal leading-[normal] lg:text-[30px]">Unikorns Agency delivered collaterals and materials promptly, meeting all deadlines. Their responsiveness to the client specific requirements was exceptional, and they were readily available for in-depth discussions, responding within an hour on most occasions.</p>
                                <div className="flex flex-col items-start gap-[12px]">
                                    <span className="font-primary text-[16px] not-italic font-bold leading-[normal] lg:text-[20px]">Colin Marsh</span>
                                    <span className="font-primary text-[12px] not-italic font-light leading-[normal] lg:text-[16px]">Head of Marketing Communications at Shopbox AI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide flex justify-center">
                    <div className="flex w-[366px] h-[566px] py-[24px] px-[24px] lg:px-[48px] justify-center items-center gap-[8px] rounded-[24px] bg-[#e3e8e4] lg:w-[565px] lg:h-[787px]">
                        <div className="flex flex-col justify-between items-start flex-1 self-stretch">
                            <div className="flex justify-center items-center gap-[16px]">
                                <div className="flex items-start gap-[5px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                </div>
                                <span className="font-primary text-[16px] not-italic font-normal leading-[normal] lg:text-[24px]">5.0</span>
                            </div>
                            <div className="flex flex-col items-start gap-[24px] self-stretch">
                                <p className="self-stretch font-primary text-[24px] not-italic font-normal leading-[normal] lg:text-[30px]">Unikorns Agency delivered collaterals and materials promptly, meeting all deadlines. Their responsiveness to the client specific requirements was exceptional, and they were readily available for in-depth discussions, responding within an hour on most occasions.</p>
                                <div className="flex flex-col items-start gap-[12px]">
                                    <span className="font-primary text-[16px] not-italic font-bold leading-[normal] lg:text-[20px]">Colin Marsh</span>
                                    <span className="font-primary text-[12px] not-italic font-light leading-[normal] lg:text-[16px]">Head of Marketing Communications at Shopbox AI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide flex justify-center">
                    <div className="flex w-[366px] h-[566px] py-[24px] px-[24px] lg:px-[48px] justify-center items-center gap-[8px] rounded-[24px] bg-[#e3e8e4] lg:w-[565px] lg:h-[787px]">
                        <div className="flex flex-col justify-between items-start flex-1 self-stretch">
                            <div className="flex justify-center items-center gap-[16px]">
                                <div className="flex items-start gap-[5px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="none" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E09E1E" />
                                    </svg>
                                </div>
                                <span className="font-primary text-[16px] not-italic font-normal leading-[normal] lg:text-[24px]">5.0</span>
                            </div>
                            <div className="flex flex-col items-start gap-[24px] self-stretch">
                                <p className="self-stretch font-primary text-[24px] not-italic font-normal leading-[normal] lg:text-[30px]">Unikorns Agency delivered collaterals and materials promptly, meeting all deadlines. Their responsiveness to the client specific requirements was exceptional, and they were readily available for in-depth discussions, responding within an hour on most occasions.</p>
                                <div className="flex flex-col items-start gap-[12px]">
                                    <span className="font-primary text-[16px] not-italic font-bold leading-[normal] lg:text-[20px]">Colin Marsh</span>
                                    <span className="font-primary text-[12px] not-italic font-light leading-[normal] lg:text-[16px]">Head of Marketing Communications at Shopbox AI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}