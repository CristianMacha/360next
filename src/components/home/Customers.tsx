'use client'
import { useEffect } from 'react';

import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import GoogleReview from '@/presentation/components/GoogleReview';

const reviews = [
    {
        id: 'cd637474-1e98-460e-87ed-96ca947e4dea',
        review: 'Tuve una experiencia increíble con esta empresa.Desde el principio, su atención fue agradable y profesional. Cumplieron con el tiempo de entrega, lo cual fue impresionante, ademas el sitio web que realizaron supero todas mis expectativas ya que reflejo perfectamente el mensaje que quería transmitir.',
        name: 'Alex Rodriguez',
        rotate: -5
    },
    {
        id: '0501fd29-0587-4668-baf5-1d15c509b3e5',
        review: 'Su enfoque experto en marketing digital, diseño web y desarrollo es excepcional. Crean sitios modernos y funcionales, adaptados a las necesidades específicas de los negocios. Su comunicación rápida y profesional hace que la colaboración sea impecable. Si buscas una solución digital integral, confía en 360 Virtual Solutions!',
        name: 'Kevin Zain Torres Huaroc',
        rotate: 0
    },
    {
        id: 'a3b9f713-3320-4a86-bdf8-cc177d7bf62d',
        review: 'Equipo profesional y atención personalizada. ¡Muy satisfecho con los resultados!',
        name: 'Alex Alcocer Rodriguez',
        rotate: 5
    },
]

export default function Customers() {
    useEffect(() => {

        new KeenSlider("#my-keen-slider-two", {
            loop: true,
            breakpoints: {
                "(min-width: 640px)": {
                    slides: { perView: 1, spacing: 16 },
                },
                "(min-width: 768px)": {
                    slides: { perView: 2, spacing: 16 },
                },
                "(min-width: 1024px)": {
                    slides: { perView: 3, spacing: 16 }
                }
            },
            slides: {
                perView: 1,
            },
        },
            [
                (slider) => {
                    let timeout: any
                    let mouseOver = false
                    function clearNextTimeout() {
                        clearTimeout(timeout)
                    }
                    function nextTimeout() {
                        clearTimeout(timeout)
                        if (mouseOver) return
                        timeout = setTimeout(() => {
                            slider.next();
                        }, 3000)
                    }
                    slider.on("created", () => {
                        slider.container.addEventListener("mouseover", () => {
                            mouseOver = true
                            clearNextTimeout()
                        })
                        slider.container.addEventListener("mouseout", () => {
                            mouseOver = false
                            nextTimeout()
                        })
                        nextTimeout();
                    })
                    slider.on("dragStarted", clearNextTimeout)
                    slider.on("animationEnded", nextTimeout)
                    slider.on("updated", nextTimeout)
                },
            ],
        );
    }, []);
    return (
        <section className="flex flex-col justify-center items-center py-[40px] px-[16px] gap-[8px] w-full h-auto md:h-[160vh] relative overflow-hidden">
            <div className='absolute rounded-full w-[72px] h-[72px] top-[50px] z-[1] bg-[#D9FE95]'></div>
            <div className='absolute rounded-full w-[72px] h-[72px] top-[350px] z-[1] left-[250px] bg-[#B6B9FE]'></div>
            <div className='absolute rounded-full w-[52px] h-[52px] top-[280px] z-[1] right-[450px] bg-[#B6B9FE]'></div>
            <div className='border border-[#A3A2A2] w-[400px] h-[400px] md:w-[900px] md:h-[900px] rounded-full absolute'></div>
            <div className='border border-[#A3A2A2] w-[700px] h-[700px] md:w-[1300px] md:h-[1300px] rounded-full absolute'></div>
            <div className='flex justify-center w-full mb-0 md:mb-16'>
                <h3 className='w-[581px] font-primary font-medium text-[40px] leading-[40px] md:text-[64px] md:leading-[60px] text-center z-[1]'>Mas de 12 clientes confian en nosotros</h3>
            </div>
            <div id="my-keen-slider-two" className="keen-slider w-full z-[2]">
                {
                    reviews.map((review) => (
                        <div key={review.id} className="keen-slider__slide flex justify-center items-center py-10">
                            <GoogleReview
                                image=""
                                review={review.review}
                                name={review.name}
                                rotate={review.rotate} />
                        </div>
                    )
                    )
                }
            </div>
        </section>
    )
}