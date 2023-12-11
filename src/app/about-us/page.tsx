'use client'
import Spline from '@splinetool/react-spline';

export default function AboutUs() {
    return (
        <section className="h-screen px-[16px] md:px-[40px] flex flex-col gap-7 md:gap-14 justify-start items-center py-[16px] md:py-[40px]">
            <div className="h-[500px] w-full rounded-[40px] overflow-hidden" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2FScreenshot%202023-12-11%20at%2008.40.50.png?alt=media&token=62d0e1ba-02e0-41d4-be53-f8464b041e8e')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <Spline scene="https://prod.spline.design/hDb-ZfPyU0kaAXNR/scene.splinecode" />
            </div>
        </section>
    )
}