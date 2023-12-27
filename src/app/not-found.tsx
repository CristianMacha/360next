import Link from "next/link";

export default function NotFound() {
    const tapeImage = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FnotFountPageBackground.jpg?alt=media&token=64da1dcd-7cad-4062-bc31-30e1587a389d';

    return (
        <div className="flex flex-col justify-center gap-10 items-center w-full h-screen overflow-hidden pt-20 md:pt-0">
            <h1 className="font-primary font-bold text-[200px] md:text-[320px] leading-none text-center text-white flex flex-col md:flex-row gap-2 md:gap-6 items-center" style={{ WebkitTextStrokeWidth: 8, WebkitTextStrokeColor: '#000000' }}>4 <svg xmlns="http://www.w3.org/2000/svg" width="251" height="251" viewBox="0 0 251 251" fill="none">
                <g clipPath="url(#clip0_2214_516)">
                    <path d="M217.129 251C183.349 251 129.982 220.985 80.0181 171.044C14.6113 105.668 -16.645 34.4823 8.89257 8.97962C21.6498 -3.74857 45.8908 -2.91545 77.1471 11.3633C107.014 25.0171 140.354 49.409 171.009 80.0492C236.416 145.426 267.649 216.588 242.111 242.114C236.091 248.131 227.525 251 217.106 251H217.129ZM34.0366 9.23419C25.9794 9.23419 19.6355 11.317 15.4217 15.5057C-3.40159 34.3203 20.7005 98.6555 86.524 164.472C116.414 194.348 148.805 218.092 177.7 231.283C204.789 243.664 225.904 245.215 235.559 235.542C254.382 216.727 230.28 152.392 164.457 86.5753C134.566 56.6988 102.175 32.9549 73.2806 19.7639C57.9534 12.7518 44.5248 9.21105 34.0134 9.21105L34.0366 9.23419Z" fill="black" />
                    <path d="M8.89112 242.113C-16.6233 216.61 14.6099 145.425 79.9935 80.0485C110.648 49.4083 143.988 25.0164 173.855 11.3625C205.135 -2.91618 229.376 -3.77244 242.11 8.9789C267.624 34.4816 236.391 105.667 171.007 171.044C121.043 220.984 67.6762 251 33.8962 251C23.4774 251 14.9109 248.13 8.89112 242.113ZM177.722 19.7863C148.827 32.9773 116.436 56.7212 86.5458 86.5977C20.6991 152.414 -3.37989 216.749 15.4202 235.564C25.0981 245.237 46.1903 243.664 73.2792 231.306C102.174 218.092 134.565 194.371 164.455 164.494C230.302 98.678 254.381 34.3427 235.557 15.5281C231.367 11.3394 225 9.25661 216.943 9.25661C206.431 9.25661 193.026 12.7974 177.675 19.8094L177.722 19.7863Z" fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0_2214_516">
                        <rect width="251" height="251" fill="white" />
                    </clipPath>
                </defs>
            </svg> 4</h1>
            <p className="content-small md:content-medium lg:content-large text-center w-auto md:w-[670px]">Pedimos disculpas por cualquier interrupción del continuo espacio-tiempo. No dude en regresar a nuestra página de inicio.</p>
            <Link href="/" className="bg-[#D9FE95] hover:bg-[#bfdf84] font-primary flex flex-row gap-4 items-center px-6 py-2 rounded-[40px] text-[18px] font-medium">Regresar a casa <svg xmlns="http://www.w3.org/2000/svg" width="33" height="16" viewBox="0 0 33 16" fill="none">
                <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="black" />
            </svg>
            </Link>
            <div className="absolute w-1/2 h-screen -z-[1] right-0" style={{ backgroundImage: `url(${tapeImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
            <div className="absolute w-1/2 h-screen -z-[1] rotate-[180deg] left-0" style={{ backgroundImage: `url(${tapeImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
        </div>
    )
}