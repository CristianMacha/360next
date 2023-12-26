import Chip from "./Chip";

interface ImageCardProps {
    image: string;
    title: string;
    description: string;
    features: string[];
}

export default function ImageCard({ image, title, description, features }: ImageCardProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={image} alt={title} className="w-96 h-96 object-cover rounded-xl" />
            <div className="flex flex-col items-center justify-center mt-4">
                <h3 className="text-2xl font-bold text-center">{title}</h3>
                <p className="text-center text-gray-500">{description}</p>
                <div className="flex flex-wrap items-center justify-center mt-4">
                    {features.map((feature, index) => (
                        <Chip key={index} label={feature} color="bg-blue-500" />
                    ))}
                </div>
            </div>
        </div>
    )
}