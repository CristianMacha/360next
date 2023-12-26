interface PortadaServiceProps {
    title: string;
    description: string;
    background: string;
}

export default function PortadaService({ title, description, background }: PortadaServiceProps) {
    return (
        <section className="pt-[64px] px-[16px] md:px-[40px]">
            <div className="flex flex-col gap-2">
                <div className="h-[568px] bg-gray-50 rounded-[20px]" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>
                <div className="flex justify-between font-primary text-[14px] md:text-[16px] font-normal">
                    <span>Servicios</span>
                    <span>2024</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h1 className="text-[50px] leading-[60px] md:text-[96px] md:leading-[80px] font-primary font-medium">{title}</h1>
                        <div className="flex flex-row gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69" fill="none">
                                <g clipPath="url(#clip0_2197_88)">
                                    <path d="M59.6878 69.0001C50.4017 69.0001 35.731 60.7489 21.9959 47.0202C4.01558 29.0481 -4.5768 9.47921 2.4435 2.46852C5.95046 -1.03047 12.6143 -0.801444 21.2067 3.12378C29.4172 6.87724 38.5824 13.5826 47.0093 22.0056C64.9897 39.9776 73.5757 59.5402 66.5554 66.5572C64.9006 68.2113 62.5456 69.0001 59.6815 69.0001H59.6878ZM9.35559 2.5385C7.14066 2.5385 5.39673 3.11106 4.23835 4.26254C-0.936174 9.43468 5.68951 27.1205 23.7844 45.2134C32.0013 53.4265 40.9055 59.9537 48.8487 63.5799C56.2954 66.9835 62.1001 67.4097 64.7542 64.7505C69.9287 59.5783 63.303 41.8925 45.2081 23.7996C36.9912 15.5865 28.087 9.05933 20.1438 5.43311C15.9304 3.50549 12.2388 2.53214 9.34922 2.53214L9.35559 2.5385Z" fill="black" />
                                    <path d="M2.44486 66.557C-4.56907 59.5464 4.01694 39.9775 21.9909 22.0054C30.4178 13.5824 39.583 6.87707 47.7935 3.12362C56.3923 -0.80161 63.0561 -1.037 66.5567 2.46835C73.5707 9.47905 64.9847 29.0479 47.0107 47.02C33.2756 60.7487 18.6049 69 9.31876 69C6.45463 69 4.09969 68.2111 2.44486 66.557ZM48.8564 5.43931C40.9133 9.06553 32.009 15.5927 23.7921 23.8058C5.69087 41.8987 -0.928448 59.5845 4.23971 64.7567C6.90017 67.4159 12.6984 66.9833 20.1452 63.5861C28.0883 59.9535 36.9926 53.4327 45.2095 45.2196C63.3107 27.1267 69.9301 9.44088 64.7555 4.26874C63.6035 3.11725 61.8532 2.54469 59.6383 2.54469C56.7487 2.54469 53.0635 3.51805 48.8437 5.44567L48.8564 5.43931Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2197_88">
                                        <rect width="69" height="69" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69" fill="none" className="opacity-[0.6]">
                                <g clipPath="url(#clip0_2197_88)">
                                    <path d="M59.6878 69.0001C50.4017 69.0001 35.731 60.7489 21.9959 47.0202C4.01558 29.0481 -4.5768 9.47921 2.4435 2.46852C5.95046 -1.03047 12.6143 -0.801444 21.2067 3.12378C29.4172 6.87724 38.5824 13.5826 47.0093 22.0056C64.9897 39.9776 73.5757 59.5402 66.5554 66.5572C64.9006 68.2113 62.5456 69.0001 59.6815 69.0001H59.6878ZM9.35559 2.5385C7.14066 2.5385 5.39673 3.11106 4.23835 4.26254C-0.936174 9.43468 5.68951 27.1205 23.7844 45.2134C32.0013 53.4265 40.9055 59.9537 48.8487 63.5799C56.2954 66.9835 62.1001 67.4097 64.7542 64.7505C69.9287 59.5783 63.303 41.8925 45.2081 23.7996C36.9912 15.5865 28.087 9.05933 20.1438 5.43311C15.9304 3.50549 12.2388 2.53214 9.34922 2.53214L9.35559 2.5385Z" fill="black" />
                                    <path d="M2.44486 66.557C-4.56907 59.5464 4.01694 39.9775 21.9909 22.0054C30.4178 13.5824 39.583 6.87707 47.7935 3.12362C56.3923 -0.80161 63.0561 -1.037 66.5567 2.46835C73.5707 9.47905 64.9847 29.0479 47.0107 47.02C33.2756 60.7487 18.6049 69 9.31876 69C6.45463 69 4.09969 68.2111 2.44486 66.557ZM48.8564 5.43931C40.9133 9.06553 32.009 15.5927 23.7921 23.8058C5.69087 41.8987 -0.928448 59.5845 4.23971 64.7567C6.90017 67.4159 12.6984 66.9833 20.1452 63.5861C28.0883 59.9535 36.9926 53.4327 45.2095 45.2196C63.3107 27.1267 69.9301 9.44088 64.7555 4.26874C63.6035 3.11725 61.8532 2.54469 59.6383 2.54469C56.7487 2.54469 53.0635 3.51805 48.8437 5.44567L48.8564 5.43931Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2197_88">
                                        <rect width="69" height="69" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69" fill="none" className="opacity-[0.3]">
                                <g clipPath="url(#clip0_2197_88)">
                                    <path d="M59.6878 69.0001C50.4017 69.0001 35.731 60.7489 21.9959 47.0202C4.01558 29.0481 -4.5768 9.47921 2.4435 2.46852C5.95046 -1.03047 12.6143 -0.801444 21.2067 3.12378C29.4172 6.87724 38.5824 13.5826 47.0093 22.0056C64.9897 39.9776 73.5757 59.5402 66.5554 66.5572C64.9006 68.2113 62.5456 69.0001 59.6815 69.0001H59.6878ZM9.35559 2.5385C7.14066 2.5385 5.39673 3.11106 4.23835 4.26254C-0.936174 9.43468 5.68951 27.1205 23.7844 45.2134C32.0013 53.4265 40.9055 59.9537 48.8487 63.5799C56.2954 66.9835 62.1001 67.4097 64.7542 64.7505C69.9287 59.5783 63.303 41.8925 45.2081 23.7996C36.9912 15.5865 28.087 9.05933 20.1438 5.43311C15.9304 3.50549 12.2388 2.53214 9.34922 2.53214L9.35559 2.5385Z" fill="black" />
                                    <path d="M2.44486 66.557C-4.56907 59.5464 4.01694 39.9775 21.9909 22.0054C30.4178 13.5824 39.583 6.87707 47.7935 3.12362C56.3923 -0.80161 63.0561 -1.037 66.5567 2.46835C73.5707 9.47905 64.9847 29.0479 47.0107 47.02C33.2756 60.7487 18.6049 69 9.31876 69C6.45463 69 4.09969 68.2111 2.44486 66.557ZM48.8564 5.43931C40.9133 9.06553 32.009 15.5927 23.7921 23.8058C5.69087 41.8987 -0.928448 59.5845 4.23971 64.7567C6.90017 67.4159 12.6984 66.9833 20.1452 63.5861C28.0883 59.9535 36.9926 53.4327 45.2095 45.2196C63.3107 27.1267 69.9301 9.44088 64.7555 4.26874C63.6035 3.11725 61.8532 2.54469 59.6383 2.54469C56.7487 2.54469 53.0635 3.51805 48.8437 5.44567L48.8564 5.43931Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2197_88">
                                        <rect width="69" height="69" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69" fill="none" className="opacity-[0.1]">
                                <g clipPath="url(#clip0_2197_88)">
                                    <path d="M59.6878 69.0001C50.4017 69.0001 35.731 60.7489 21.9959 47.0202C4.01558 29.0481 -4.5768 9.47921 2.4435 2.46852C5.95046 -1.03047 12.6143 -0.801444 21.2067 3.12378C29.4172 6.87724 38.5824 13.5826 47.0093 22.0056C64.9897 39.9776 73.5757 59.5402 66.5554 66.5572C64.9006 68.2113 62.5456 69.0001 59.6815 69.0001H59.6878ZM9.35559 2.5385C7.14066 2.5385 5.39673 3.11106 4.23835 4.26254C-0.936174 9.43468 5.68951 27.1205 23.7844 45.2134C32.0013 53.4265 40.9055 59.9537 48.8487 63.5799C56.2954 66.9835 62.1001 67.4097 64.7542 64.7505C69.9287 59.5783 63.303 41.8925 45.2081 23.7996C36.9912 15.5865 28.087 9.05933 20.1438 5.43311C15.9304 3.50549 12.2388 2.53214 9.34922 2.53214L9.35559 2.5385Z" fill="black" />
                                    <path d="M2.44486 66.557C-4.56907 59.5464 4.01694 39.9775 21.9909 22.0054C30.4178 13.5824 39.583 6.87707 47.7935 3.12362C56.3923 -0.80161 63.0561 -1.037 66.5567 2.46835C73.5707 9.47905 64.9847 29.0479 47.0107 47.02C33.2756 60.7487 18.6049 69 9.31876 69C6.45463 69 4.09969 68.2111 2.44486 66.557ZM48.8564 5.43931C40.9133 9.06553 32.009 15.5927 23.7921 23.8058C5.69087 41.8987 -0.928448 59.5845 4.23971 64.7567C6.90017 67.4159 12.6984 66.9833 20.1452 63.5861C28.0883 59.9535 36.9926 53.4327 45.2095 45.2196C63.3107 27.1267 69.9301 9.44088 64.7555 4.26874C63.6035 3.11725 61.8532 2.54469 59.6383 2.54469C56.7487 2.54469 53.0635 3.51805 48.8437 5.44567L48.8564 5.43931Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2197_88">
                                        <rect width="69" height="69" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p className="text-[18px] md:text-[28px] leading-normal font-primary font-light">{description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}