interface PostProps {
    reference: string;
    date: string;
    title: string;
    description: string;
    image: string;
}

export default function Post({ date, title, description, image, reference }: PostProps) {
    return (
        <a href={`blog/${reference}`} className="border border-black">
            <div className="p-4 flex flex-col gap-5">
                <img src={image} alt={title} width={100} height={400} className="w-full h-[288px]" />
                <p className="text-2xl font-medium leading-none">Descubre cómo crear una página web en 8 sencillos pasos</p>
            </div>
            <div className="px-4 py-1 border-t border-black text-2xl font-light">
                Agosto 26, 2021
            </div>
        </a>
    )
}