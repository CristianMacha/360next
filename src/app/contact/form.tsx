'use client'
import { useState } from "react";

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

export default function Form() {
    const contactImage = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FcontactImage.jpg?alt=media&token=4ea642e0-73d3-4f3f-943c-9136e188a5d3';

    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const handleChange = (e: any) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);
        try {
            const response = await sendDataForm(formValues);
            if (response.ok) {
                setMessage('Mensaje enviado con éxito');
                setFormValues({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                setMessage('Hubo un error al enviar mensaje');
            }
        } catch (error) {
            setMessage('Hubo un error en la petición');
        }
        setLoading(false);
    }

    return (
        <div className="px-[16px] md:px-[40px] h-screen flex justify-center items-center pt-[64px]">
            <div className="w-full">
                <h2 className="title-small md:title-medium lg:title-large mb-10">Contáctanos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-4 font-primary">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="content-small md:content-medium lg:content-large">Nombre</label>
                                    <input type="text" name="name" value={formValues.name} onChange={handleChange} required className="border border-black rounded-[20px] md:rounded-[40px] p-2 md:p-4" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="content-small md:content-medium lg:content-large">Correo electrónico</label>
                                    <input type="email" name="email" value={formValues.email} onChange={handleChange} required className="border border-black rounded-[20px] md:rounded-[40px] p-2 md:p-4" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="content-small md:content-medium lg:content-large">Mensaje</label>
                                    <textarea name="message" value={formValues.message} onChange={handleChange} className="border border-black rounded-[20px] md:rounded-[40px]  p-2 md:p-4" rows={5}></textarea>
                                </div>
                                <div className="flex justify-end flex-col">
                                    <div className="w-full flex justify-end">
                                        <button type='submit' disabled={loading} className="font-primary text-[20px] md:text-[24px] rounded-[40px] bg-[#D9FE95] text-black px-8 py-4 flex flex-row gap-4 items-center font-medium">{loading ? 'Enviando...' : 'Enviar'}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                    {message && <p className="font-primary text-[18px] md:text-[20px]" style={{ color: message.startsWith('Hubo') ? 'red' : 'green' }}>{message}</p>}
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="rounded-[40px] h-[400px] md:h-auto" style={{ backgroundImage: `url(${contactImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                </div>
            </div>
        </div>
    )
}