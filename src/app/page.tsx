import type { Metadata } from 'next'
import Banner from '@/components/home/banner'
import BannerScroll from '@/components/home/bannerScroll'
import CardSampleProjectSection from '@/components/home/card-sample-project-section/cardSampleProjectSection'
import Experience from '@/components/home/experience'
import LetsPlay from '@/components/home/letsPlay'
import Portada from '@/components/home/portada'
import Services from '@/components/home/services'
import Testimonials from '@/components/home/testimonials'
import Galaxy from '@/components/home/galaxy'
import Customers from '@/components/home/Customers'
import Faqs from './faq/faqs'
import Contact from '@/components/home/contact';

export default function Home() {
  return (
    <>
      <Portada />
      <CardSampleProjectSection />
      <Testimonials />
      <Customers />
      <BannerScroll />
      <Services />
      <Experience />
      <LetsPlay />
      <Banner />
      <Galaxy />
      <Faqs />
      <Contact />
    </>
  )
}
