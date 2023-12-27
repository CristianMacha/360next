'use client'
import { useState } from "react";
import React from 'react';

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
    const backgroundUrlImage = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FtestimonialBackground.jpg?alt=media&token=69c5d301-13e5-4b15-be93-f36fed4197a3';
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
        setFormValues({name: '', email: '', message: ''});
        setLoading(true);
        try {
            const response = await sendDataForm(formValues);
            if (response.ok) {
                setFormValues({...values});
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
    return (
        <section className="px-[16px] md:px-[40px] flex justify-center flex-col items-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${backgroundUrlImage})` }}>
            <h2 className="font-primary text-[60px] md:text-[96px]">Contáctanos</h2>
            <div className="rounded-[40px] h-[500px] md:h-[700px] w-full flex justify-center items-center" style={{ background: 'linear-gradient(180deg, #CAD4FF 0%, #756CFE 100%)' }}>
                <div className="flex flex-col justify-center gap-4">
                    {
                        counter === 0 && (
                            <>
                                <input type="text" name="name" id="name" required placeholder="Nombres" className="border-[3px] bg-transparent rounded-[999px] border-[#D9FE95] text-white placeholder:text-gray-200 px-[40px] py-[20px] outline-none" onChange={handleChange} />
                                <div className="flex justify-center">
                                    <button className="border-[3px] border-[#D9FE95] rounded-full p-2 disabled:opacity-50" onClick={handleNextStep} disabled={formValues.name.length<=0}>
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
                                    <button className="border-[3px] border-[#D9FE95] rounded-full p-2 disabled:opacity-50" onClick={handleNextStep} disabled={formValues.email.length<=0}>
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
                                    <button className="border-[3px] border-[#D9FE95] rounded-full p-2 text-white disabled:opacity-50" onClick={handleNextStep} disabled={formValues.message.length<=0}>{loading ? 'Enviando...' : 'Enviar'}
                                    </button>
                                </div>
                            </>
                        )
                    }
                    {
                        counter === 3 && (
                            <>
                                <div className="flex flex-col gap-4">
                                    <h2 className="font-primary text-[40px] md:text-[60px] leading-[40px] md:leading-normal">¡Gracias por contactarnos!</h2>
                                    <p className="font-primary text-[20px] md:text-[24px]">Pronto nos pondremos en contacto contigo.</p>
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
    )
}