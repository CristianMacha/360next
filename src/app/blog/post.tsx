import Image from "next/image";

interface PostProps {
    reference: string;
    date: string;
    title: string;
    image: string;
}

export default function Post({ date, title, image, reference }: PostProps) {
    return (
        <a href={`blog/${reference}`} className="border border-black flex flex-col justify-between">
            <div className="p-4 flex flex-col gap-5">
                <Image src={image} alt={title} width={100} height={400} className="w-full h-[288px]" />
                <p className="text-2xl font-medium leading-none">{title}</p>
            </div>
            <div className="px-4 py-1 border-t border-black text-2xl font-light">
                {date}
            </div>
        </a>
    )
}