interface CardProps {
    image: string;
    title: string;
    description: string;
}

export default function Card({ image, title, description }: CardProps) {
    return (
        <div className="flex flex-col items-center bg-[#F6F6F6] rounded-[40px] p-5 shadow-md">
            <img src={image} alt={title} className="w-full h-[200px] object-contain rounded-xl" />
            <div className="flex flex-col mt-4">
                <h3 className="content-medium font-medium">{title}</h3>
                <p className="content-small font-light">{description}</p>
            </div>
        </div>
    )

}