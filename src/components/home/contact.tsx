'use client'
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FormValues {
    name: string;
    email: string;
    message: string;
}

async function sendDataForm(formValues: FormValues) {
    const response = await fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValues)
    });

    return response;
}

export default function Contact() {
    const backgroundUrlImage = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FcontactBackground.jpg?alt=media&token=37d6d95c-c5f7-4070-a65f-187039a115e7';
    const [counter, setCounter] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: any) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSend = async (values: FormValues) => {
        setFormValues({ name: '', email: '', message: '' });
        setLoading(true);
        try {
            const response = await sendDataForm(formValues);
            if (response.ok) {
                setFormValues({ ...values });
            } else {
                console.error('Hubo un error al enviar mensaje');
            }
        } catch (error) {
            console.error('Hubo un error en la petición');
        }
        setLoading(false);
    }

    const handleNextStep = async () => {
        if (counter === 2) {
            await handleSend(formValues);
            setCounter(3);
        } else {
            setCounter(counter + 1)
        }
    };

    const handlePrevStep = () => setCounter(counter - 1);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.cta-content',
                scrub: 1,
                start: 'top center',
                end: 'center center',
                markers: false
            }
        })

        timeline.to('.contact-cta', {
            position: 'absolute',
            padding: '0px',
            height: '100%',
            width: '100%',
            zIndex: '60',
            borderRadius: '0px',
            // duration: 1,
        })
        // gsap.to('.contact-cta', {
        //     // ease: 'none',
        //     position: 'absolute',
        //     padding: '0px',
        //     height: '100%',
        //     width: '100%',
        //     borderRadius: '0px',
        //     duration: 1.5,
        //     scrollTrigger: {
        //         trigger: '.cta-content',
        //         scrub: 1,
        //         start: 'top center',
        //         end: 'center-=200 center',
        //         markers: true
        //     }
        // })
    }, []);
    return (
        <div className="h-[200vh] cta-content z-[60]">
            <section className="px-[16px] flex justify-center flex-col items-center bg-cover bg-no-repeat h-screen bg-center sticky top-0" style={{ backgroundImage: `url(${backgroundUrlImage})` }}>
                <div className="rounded-[40px] h-[500px] md:h-[600px] w-full md:w-[761px] flex flex-col gap-24 justify-center items-center contact-cta" style={{ background: 'linear-gradient(180deg, #CAD4FF 0%, #756CFE 100%)' }}>
                <h2 className="title-small md:title-medium lg:title-large text-white">Contáctanos</h2>
                    <div className="flex flex-col justify-center gap-4">
                        {
                            counter === 0 && (
                                <>
                                    <input type="text" name="name" id="name" required placeholder="Nombres" className="border-[3px] bg-transparent rounded-[999px] border-[#D9FE95] text-white placeholder:text-gray-200 px-[40px] py-[20px] outline-none" onChange={handleChange} />
                                    <div className="flex justify-center">
                                        <button className="border-[3px] border-[#D9FE95] rounded-full p-2 disabled:opacity-50" onClick={handleNextStep} disabled={formValues.name.length <= 0}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </>
                            )
                        }
                        {
                            counter === 1 && (
                                <>
                                    <input type="text" name="email" id="email" required placeholder="Correo electrónico" className="border-[3px] bg-transparent rounded-[999px] border-[#D9FE95] text-white placeholder:text-gray-200 px-[40px] py-[20px] outline-none" onChange={handleChange} />
                                    <div className="flex justify-center gap-2">
                                        <button className="border-[3px] border-[#D9FE95] rounded-full p-2" onClick={handlePrevStep}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                            </svg>
                                        </button>
                                        <button className="border-[3px] border-[#D9FE95] rounded-full p-2 disabled:opacity-50" onClick={handleNextStep} disabled={formValues.email.length <= 0}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </>
                            )
                        }
                        {
                            counter === 2 && (
                                <>
                                    <textarea name="message" id="message" required placeholder="Mensaje" className="border-[3px] bg-transparent rounded-[20px] border-[#D9FE95] text-white placeholder:text-gray-200 px-[40px] py-[20px] outline-none" onChange={handleChange} />
                                    <div className="flex justify-center gap-2">
                                        <button className="border-[3px] border-[#D9FE95] rounded-full p-2" onClick={handlePrevStep}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                            </svg>
                                        </button>
                                        <button className="border-[3px] border-[#D9FE95] rounded-full p-2 text-white disabled:opacity-50" onClick={handleNextStep} disabled={formValues.message.length <= 0}>{loading ? 'Enviando...' : 'Enviar'}
                                        </button>
                                    </div>
                                </>
                            )
                        }
                        {
                            counter === 3 && (
                                <>
                                    <div className="flex flex-col gap-4">
                                        <h2 className="title-small md:title-medium lg:title-large text-white">¡Gracias por contactarnos!</h2>
                                        <p className="content-small md:content-medium lg:content-large text-white">Pronto nos pondremos en contacto contigo.</p>
                                        {/* <Suspense fallback={<div className='text-white text-[24px]'>Loading...</div>}>
                                        <Spline scene="https://prod.spline.design/109fbyYwdKCbuZAs/scene.splinecode" />
                                    </Suspense> */}
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}