import styles from './cardSampleProject.module.css';
interface CardSampleProjectProps {
    url: string;
    title: string;
    description: string;
    items: string[];
}

export default function CardSampleProject({ url, title, description, items }: CardSampleProjectProps) {
    return (
        <div className="flex items-end w-screen h-screen px-[20px] pb-[20px] md:px-[40px] md:pb-[40px]" style={{backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className="flex flex-col md:flex-row gap-1">
                <div className="flex flex-col gap-4">
                    <div className="font-primary text-black text-[32px] md:text-[60px] font-medium">{title}</div>
                    <div className="font-primary text-black text-[24px] font-light hidden md:block">{description}</div>
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