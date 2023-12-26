interface CardProps {
    image: string;
    title: string;
    description: string;
}

export default function Card({ image, title, description }: CardProps) {
    return (
        <div className="flex flex-col items-center bg-[#F6F6F6] rounded-[60px] p-10">
            <img src={image} alt={title} className="w-full h-[200px] object-cover rounded-xl" />
            <div className="flex flex-col mt-4">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-gray-500">{description}</p>
            </div>
        </div>
    )

}