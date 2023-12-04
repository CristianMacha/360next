interface BannerProps {
    title: string;
    description: string;
}
export default function Banner({ title, description }: BannerProps) {
    return (
        <div
            className="h-screen px-[8px] lg:px-[40px] flex justify-center items-center bg-cover bg-no-repeat"
            style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fbg.webp?alt=media&token=04065e19-33a8-4aaf-9f66-c189f13542cc)' }}>
            <div>
                <h4 className="text-[32px] md:text-[100px] font-primary font-medium text-white text-center leading-[normal] md:leading-[96px]">{title}</h4>
                <p className="text-center text-primary text-white mt-20">{description}</p>
            </div>
        </div>
    )
}