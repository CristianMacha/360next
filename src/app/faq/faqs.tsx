'use client'
import React, { Suspense, useState } from 'react';

import Panel from "./panel";
import Link from 'next/link';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Faqs() {
    
    const [activePanel, setActivePanel] = useState<string | null>('panel1');
    const handleToggle = (panelId: string) => {
        setActivePanel(prevPanelId => prevPanelId === panelId ? null : panelId);
    };
    const cubeImage = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FfaqCube.jpg?alt=media&token=5245b082-17c4-42d3-b41e-dd1b424f710b';

    return (
        <section className="flex flex-col gap-10 px-[16px] md:px-[40px] py-[20px] md:py-[40px]">
            <h2 className="font-primary text-[50px] sm:text-[60px] md:text-[66px] lg:text-[85px] ">Preguntas Frecuentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className='flex flex-col gap-4'>
                    <div className="h-[550px] rounded-[40px] overflow-hidden" style={{ backgroundImage: `url(${cubeImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                        {/* <Suspense fallback={<div className='h-[800px] w-full rounded-[20px] text-white flex justify-center items-center text-[24px]'>Loading...</div>}>
                        <Spline scene="https://prod.spline.design/xaLPaPgJvFyBJ447/scene.splinecode" />
                    </Suspense> */}
                    </div>
                    <div className='flex'>
                        <Link href={'/faq'} className='py-[17px] px-[33px] rounded-full bg-[#D9FE95] font-primary font-medium text-[18px] flex flex-row gap-4 items-center md:text-[25px]'>Ver mas preguntas <svg xmlns="http://www.w3.org/2000/svg" width="33" height="16" viewBox="0 0 33 16" fill="none">
                            <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="black" />
                        </svg></Link>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-4">
                        <Panel
                            question="¿Por qué es importante tener una identidad visual para mi marca?"
                            answer='Una identidad visual sólida ayuda a tu empresa a ser reconocible y memorable. Define la personalidad de tu marca y crea una conexión emocional con tus clientes, diferenciándote de la competencia.'
                            size="small"
                            opend={activePanel === 'panel1'}
                            onToggle={() => handleToggle('panel1')} />
                        <Panel
                            question="¿Cuánto tiempo lleva crear un sitio web desde cero?"
                            answer='El tiempo puede variar según la complejidad del proyecto. Un sitio web simple podría construirse en unas pocas semanas, mientras que uno más complejo puede tomar varios meses.'
                            size="small"
                            opend={activePanel === 'panel2'}
                            onToggle={() => handleToggle('panel2')} />
                        <Panel
                            question="¿Por qué es importante tener una pagina web hoy en día?"
                            answer='Un sitio web es crucial porque actúa como la presencia en línea principal de tu empresa. Permite a los clientes potenciales encontrar información sobre tus servicios o productos las 24 horas del día, los 7 días de la semana, lo que aumenta la credibilidad y facilita el acceso a tu empresa.'
                            size="medium"
                            opend={activePanel === 'panel3'}
                            onToggle={() => handleToggle('panel3')} />
                        <Panel
                            question="¿En qué redes sociales debería promocionar mi empresa?"
                            answer='Las redes sociales más efectivas pueden variar según tu industria y público objetivo. Generalmente, plataformas como Facebook, Instagram, Twitter, LinkedIn y YouTube son populares. Es esencial comprender dónde se encuentra tu audiencia para elegir las redes sociales adecuadas.'
                            size="medium"
                            opend={activePanel === 'panel4'}
                            onToggle={() => handleToggle('panel4')} />
                    </div>
                </div>
            </div>
        </section>
    )
}