import styles from './cardSampleProject.module.css';

export default function CardSampleProject({ url }: { url: string }) {
    return (
        <div className={`flex h-[390px] relative px-[16px] py-[40px] flex-col justify-end items-center ${styles.card} gap-[20px] w-screen lg:h-screen lg:px-[40px] lg:py-[80px]`}>
            <img src={url} alt="image" className="bg-cover bg-no-repeat absolute top-o right-0 left-0 bottom-0 -z-[1] w-full h-full" />
            <div className="flex justify-between items-center self-stretch">
                <h3 className="text-white font-primary text-[28px] not-italic font-normal leading-[normal] lg:text-[32px]">CHROMIUM</h3>
                <div className="flex py-[8px] px-[24px] justify-center items-start gap-[8px] rounded-full border border-white">
                    <span className="text-white font-primary text-[12px] not-italic font-normal leading-[normal]">2023</span>
                </div>
            </div>
            <div
                className="hidden lg:flex justify-between items-end gap-[40px] self-stretch">
                <div className="flex-1 text-white font-primary text-[20px] not-italic font-normal leading-[normal]">
                    An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts.
                </div>
                <div className="flex justify-center items-center gap-[8px]">
                    <div className="flex py-[8px] px-[34px] justify-end items-center gap-[8px] rounded-full border border-white">
                        <span className="text-white font-primary text-[18px] not-italic font-normal leading-[normal]">Brand identify</span>
                    </div>
                    <div className="flex py-[8px] px-[34px] justify-end items-center gap-[8px] rounded-full border border-white">
                        <span className="text-white font-primary text-[18px] not-italic font-normal leading-[normal]">Brand identify</span>
                    </div>
                </div>
            </div>
        </div>
    )
}