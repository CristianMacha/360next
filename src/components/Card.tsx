interface CardProps {
    position: 'left' | 'right' | 'center';
    title: string;
    description: string;
}
export default function Card({ position, title, description }: CardProps) {
    return (
        <div className="flex flex-col justify-between py-[20px] gap-4">
            <div style={{textAlign: position}} className="px-[10px]">
                <h2 className="font-primary text-[64px] md:text-[200px] leading-[normal] md:leading-[170px]">{title}</h2>
                <p className="font-primary text-[24px] md:text-[32px] mt-10 font-light">{description}</p>
            </div>
            <div className="h-[40px] border-b border-x rounded-b-2xl"></div>
        </div>
    )
}