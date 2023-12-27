import styles from './cardSampleProject.module.css';
interface CardSampleProjectProps {
    url: string;
    title: string;
    description: string;
    items: string[];
    position: 'top' | 'bottom';
}

export default function CardSampleProject({ url, title, description, items, position }: CardSampleProjectProps) {
    return (
        <div className={`flex ${position === 'top' ? 'items-start' : 'items-end'} w-screen h-screen px-[20px] pb-[20px] md:px-[40px] md:pb-[40px] card`} style={{backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className="flex flex-col md:flex-row gap-1">
                <div className="flex flex-col gap-4">
                    <div className="title-small md:title-medium lg:title-large">{title}</div>
                    <div className="content-small md:content-medium lg:content-large hidden md:block">{description}</div>
                </div>
                <div className="flex flex-row flex-wrap justify-start md:justify-end gap-1">
                    {items.map((item, index) => (
                        <div key={index}>
                            <div className="border border-white rounded-full px-[16px] py-[8px] font-primary font-extralight text-black">{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}