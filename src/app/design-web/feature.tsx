'use client'
import React from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

import Card from "@/presentation/components/Card";

export default function Feature() {
    const phoneUrl = "https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FdesignWebPhone.png?alt=media&token=4b89e043-df2e-4b97-aa8b-a23735359223";
    return (
        <section className="h-auto md:h-[150vh] px-[16px] md:px-[40px] relative py-[96px] flex justify-center bg-scroll bg-bottom md:bg-center" style={{backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FCINTA%20DISEN%CC%83O%20WEB.png?alt=media&token=60c94a14-a540-4819-92b6-b1eb3b43e008)`}}>
            <div className="absolute w-full h-full hidden md:block bg-no-repeat">
                <Spline scene='https://prod.spline.design/5E4eyIy9xR6edXVY/scene.splinecode' />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="static md:absolute w-[350px] top-[150px] left-[175px]">
                    <Card
                        image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Felipses.png?alt=media&token=0e049f3d-377e-4af7-8425-58ff353aba9d"
                        description="Nuestros diseños web están cuidadosamente creados para ofrecer una experiencia responsiva excepcional, adaptándose perfectamente a cualquier dispositivo y garantizando la máxima accesibilidad para tus usuarios."
                        title="Responsivo" />
                </div>
                <div className="static md:absolute w-[350px] top-[150px] right-[175px]">
                    <Card
                        image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Felipses.png?alt=media&token=0e049f3d-377e-4af7-8425-58ff353aba9d"
                        description="Nuestros diseños web integran elementos 3D y efectos visuales inmersivos para crear experiencias web cautivadoras y memorables que destacan la identidad de la marca."
                        title="Diseño Inmersivo y Experiencias 3D" />
                </div>
                <div className="static md:absolute w-[350px] bottom-[150px] left-[175px]">
                    <Card
                        image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Felipses.png?alt=media&token=0e049f3d-377e-4af7-8425-58ff353aba9d"
                        description="En nuestros diseños web, resaltamos la importancia de la funcionalidad para tejer una experiencia del usuario excepcional."
                        title="Funcional" />
                </div>
                <div className="static md:absolute w-[350px] bottom-[150px] right-[175px]">
                    <Card
                        image="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Felipses.png?alt=media&token=0e049f3d-377e-4af7-8425-58ff353aba9d"
                        description="Con un enfoque centrado en la interactividad, nuestros productos ofrecen una experiencia única que cautiva a los usuarios y fomenta un mayor compromiso con tu marca."
                        title="Interactivo" />
                </div>
            </div>
        </section>
    )
}