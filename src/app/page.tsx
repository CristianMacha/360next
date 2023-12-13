// import '../app/lib/firebase-client.config';
import Banner from '@/components/home/banner'
import OurProjects from '@/components/home/OurProjects'
import BannerScroll from '@/components/home/bannerScroll'
import CardSampleProjectSection from '@/components/home/card-sample-project-section/cardSampleProjectSection'
import Experience from '@/components/home/experience'
import Hand from '@/components/home/hand'
import LetsPlay from '@/components/home/letsPlay'
import Portada from '@/components/home/portada'
import Services from '@/components/home/services'
import Testimonials from '@/components/home/testimonials'
import SampleProject from '@/components/home/sampleProject'
import Galaxy from '@/components/home/galaxy'
import Reviews from '@/components/home/Reviews'
import OurValues from '@/components/home/OurValues'
import Customers from '@/components/home/Customers'

export default function Home() {
  return (
    <>
      <Portada />
      {/* <Hand /> */}
      {/* <OurProjects /> */}
      <CardSampleProjectSection />
      <Testimonials />
      <Customers />
      {/* <Reviews /> */}
      <BannerScroll />
      <Services />
      <Experience />
      <LetsPlay />
      <Banner />
      <Galaxy />
      {/* <OurValues /> */}
      {/* <SampleProject /> */}
    </>
  )
}
