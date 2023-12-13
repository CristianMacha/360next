export interface WorkProps {
    image: string;
    title: string;
    service: 'Desarrollo Web' | 'Diseño Web' | 'Marketing Digital' | 'Branding' | 'Desarrollo de Apps' | 'Ecommerce' | 'Redes Sociales';
    url: string;
}

export default function Work({ image, title, service, url }: WorkProps) {
    return (
        <div className="w-full h-[500px] md:h-[898px] border rounded-[20px] relative" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center bottom' }}>
            <div className="absolute right-2 left-2 px-5 py-1 bottom-2 bg__blur__negative rounded-[10px] flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                    <h3 className="font-primary font-normal text-[16px] md:text-[18px] text-white">{title}</h3>
                    <h4 className="font-primary font-light italic text-[14px] md:text-[16px] text-white">[{service}]</h4>
                </div>
                <div>
                    <a href={url} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 34 24" fill="none">
                            <path d="M33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.807611 21.9792 0.807611 21.3934 1.3934C20.8076 1.97919 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM0 13.5H32V10.5H0V13.5Z" fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}