export default function Footer() {
    return (
        <footer className="flex py-[24px] px-[16px] flex-col items-start gap-[8px] lg:py-[80px] lg:px-[40px] bg-white">
            <div className="flex flex-col items-start gap-[58px] self-stretch lg:justify-between lg:flex-row">
                <div className="flex flex-col items-start gap-[8px] self-stretch">
                    <span className="title-small">Nos encantaría saber de usted</span>
                    <span className="content-medium font-light">No dude en comunicarse con nosotros si quieres colaborar con nosotros o simplemente charlar.</span>
                    <div className="flex items-center gap-[8px]">
                        <span className="content-medium">Conviertete en cliente</span>
                        <div className="flex w-[24px] h-[24px] p-[4px] justify-center items-center gap-[8px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18" fill="none" className="shrink-0 rotate-[135deg]">
                                <mask id="mask0_1166_516" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                                    <rect x="0.699219" y="16.6895" width="16" height="16" transform="rotate(-87.8166 0.699219 16.6895)" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1166_516)">
                                    <path d="M14.3128 8.19937L6.19868 8.40367L9.83686 4.57755L8.86367 3.66842L3.66627 9.13431L9.13215 14.3317L10.0584 13.3748L6.23224 9.73658L14.3463 9.53228L14.3128 8.19937Z" fill="black" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-[8px]">
                    <span className="content-medium font-medium">Nuestra dirección</span>
                    <span className="content-small font-light">Tacna 265 - Huancayo</span>
                </div>
                <div className="flex flex-col justify-center items-start gap-[8px]">
                    <span className="content-medium font-medium">Síganos</span>
                    <div className="flex flex-col items-start gap-[4px]">
                        <div className="flex justify-center items-center gap-[8px]">
                            <a href="/" className="content-small font-light">Facebook</a>
                            <div className="flex w-[24px] h-[24px] p-[4px] justify-center items-center gap-[8px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18" fill="none" className="shrink-0 rotate-[135deg]">
                                    <mask id="mask0_1166_516" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                                        <rect x="0.699219" y="16.6895" width="16" height="16" transform="rotate(-87.8166 0.699219 16.6895)" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_1166_516)">
                                        <path d="M14.3128 8.19937L6.19868 8.40367L9.83686 4.57755L8.86367 3.66842L3.66627 9.13431L9.13215 14.3317L10.0584 13.3748L6.23224 9.73658L14.3463 9.53228L14.3128 8.19937Z" fill="black" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-[8px]">
                            <a href="/" className="content-small font-light">TikTok</a>
                            <div className="flex w-[24px] h-[24px] p-[4px] justify-center items-center gap-[8px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18" fill="none" className="shrink-0 rotate-[135deg]">
                                    <mask id="mask0_1166_516" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                                        <rect x="0.699219" y="16.6895" width="16" height="16" transform="rotate(-87.8166 0.699219 16.6895)" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_1166_516)">
                                        <path d="M14.3128 8.19937L6.19868 8.40367L9.83686 4.57755L8.86367 3.66842L3.66627 9.13431L9.13215 14.3317L10.0584 13.3748L6.23224 9.73658L14.3463 9.53228L14.3128 8.19937Z" fill="black" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}