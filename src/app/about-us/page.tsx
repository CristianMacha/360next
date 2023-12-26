import Portada from './portada';
import DigitalSolution from './digital-solution';
import WhyUs from './why-us';
import OurValues from '@/presentation/layouts/OurValues';
import TextFooter from './text-footer';


export default function AboutUs() {
    return (
        <>
            <Portada />
            <DigitalSolution />
            <WhyUs />
            <OurValues />
            <TextFooter />
        </>
    )
}