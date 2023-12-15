'use client'
import React, { Suspense } from 'react';

import Panel from "./panel";

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Portada() {
    const cubeImage = 'https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FfaqCube.jpg?alt=media&token=5245b082-17c4-42d3-b41e-dd1b424f710b';

    return (
        <section className="flex flex-col gap-10 px-[16px] md:px-[40px]">
            <h2 className="font-primary text-[60px] md:text-[96px] md:leading-[80px]">Preguntas Frecuentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="h-[550px] rounded-[40px] overflow-hidden" style={{ backgroundImage: `url(${cubeImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <Suspense fallback={<div className='h-[800px] w-full rounded-[20px] text-white flex justify-center items-center text-[24px]'>Loading...</div>}>
                        <Spline scene="https://prod.spline.design/xaLPaPgJvFyBJ447/scene.splinecode" />
                    </Suspense>
                </div>
                <div>
                    <div className="flex flex-col gap-4">
                        <Panel
                            question="¿Por qué es importante tener una identidad visual para mi marca?"
                            answer='Una identidad visual sólida ayuda a tu empresa a ser reconocible y memorable. Define la personalidad de tu marca y crea una conexión emocional con tus clientes, diferenciándote de la competencia.'
                            size="small"
                            opend={true} />
                        <Panel
                            question="¿Cuánto tiempo lleva crear un sitio web desde cero?"
                            answer='El tiempo puede variar según la complejidad del proyecto. Un sitio web simple podría construirse en unas pocas semanas, mientras que uno más complejo puede tomar varios meses.'
                            size="small" />
                        <Panel
                            question="¿Por qué es importante tener una pagina web hoy en día?"
                            answer='Un sitio web es crucial porque actúa como la presencia en línea principal de tu empresa. Permite a los clientes potenciales encontrar información sobre tus servicios o productos las 24 horas del día, los 7 días de la semana, lo que aumenta la credibilidad y facilita el acceso a tu empresa.'
                            size="medium" />
                        <Panel
                            question="¿En qué redes sociales debería promocionar mi empresa?"
                            answer='Las redes sociales más efectivas pueden variar según tu industria y público objetivo. Generalmente, plataformas como Facebook, Instagram, Twitter, LinkedIn y YouTube son populares. Es esencial comprender dónde se encuentra tu audiencia para elegir las redes sociales adecuadas.'
                            size="medium" />
                    </div>
                </div>
            </div>
        </section>
    )
}