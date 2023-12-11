'use client'
import Spline from '@splinetool/react-spline';

export default function AboutUs() {
    return (
        <section className="h-screen px-[16px] md:px-[40px] flex flex-col gap-7 md:gap-14 justify-start items-center py-[16px] md:py-[40px]">
            <div className="h-[500px] w-full rounded-[40px] overflow-hidden">
                <Spline scene="https://prod.spline.design/hDb-ZfPyU0kaAXNR/scene.splinecode" />
            </div>
        </section>
    )
}