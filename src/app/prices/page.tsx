import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL('https://360next.vercel.app/'),
    title: 'Precios |360 Virtual Solutions',
    description: 'Descubre nuestros planes y precios. Elige un plan que mejor se adapte a tus necesidades',
    robots: 'index, follow',
    openGraph: {
      url: 'https://www.facebook.com/360VSolutions/',
      title: '360 Virtual Solutions | Huancayo',
      description: 'Somos una Agencia de Marketing & Desarrollo de Software, especializados brindar soluciones tecnológicas.',
    }
  }


  
// pages/pricing.tsx

import Head from 'next/head';

const Pricing: React.FC = () => {
  return (
    <>
      <Head>
        <title>Precios - Tu Sitio Web</title>
        <meta name="description" content="Descubre nuestros planes y precios para la creación de sitios web. Elige el plan que mejor se adapte a tus necesidades." />
      </Head>
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="flex flex-row justify-center gap-x-10">
          <div className="contenedor_general">
            <div className="contenedor_basico">
              <div className="price1">Basic</div>
              <div className="price2">$99</div>
              <div className="content_precios">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div className="contenedor_avanzado">
              <div className="price1">Advanced</div>
              <div className="price2">$199</div>
              <div className="content_precios">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div className="contenedor_premium">
              <div className="price1">Premium</div>
              <div className="price2">$299</div>
              <div className="content_precios">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-center items-center bg-purple-300 rounded-lg">
          <div className="contenedor_header">
            <div className="precios">
              <span className="price1">99</span><span className="price2">$</span>
            </div>
            <div className="description">
              Descubre nuestros planes y precios para la creación de sitios web. Elige el plan que mejor se adapte a tus necesidades.
              <img src="/tu-imagen.jpg" className="w-20" alt="Descripción" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
