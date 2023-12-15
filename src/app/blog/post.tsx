interface PostProps {
    date: string;
    title: string;
    description: string;
    images: string[];
}

export default function Post({ date, title, description, images }: PostProps) {
    return (
        <div className="flex flex-col gap-4">
            <div className="border border-black p-8 md:p-10 rounded-[40px]">
                <div className="flex flex-col gap-6">
                    <span className="font-primary text-[12px] text-gray-700">{date}</span>
                    <h2 className="font-primary font-medium text-[24px] leading-[normal]">{title}</h2>
                    <h3 className="font-primary font-light text-[16px]">{description}</h3>
                </div>
            </div>
            {
                images.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            images.map((image) => {
                                return (
                                    <div key={image} className={`w-full rounded-[40px] h-[400px] ${images.length == 1 ? 'col-span-1 md:col-span-2' : ''}`} style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                                )
                            })
                        }
                    </div>
                ) : null
            }
        </div>
    )
}