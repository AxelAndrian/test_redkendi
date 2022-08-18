import Head from 'next/head'

import Alert from '../components/sections/alert'
import Navbar from '../components/sections/navbar'
import Slider from '../components/sections/slider'
import Feature from '../components/sections/feature'
import Service from '../components/sections/service'
import Partner from '../components/sections/partner'
import Workflow from '../components/sections/workflow'
import Testimonial from '../components/sections/testimonial'
import Company from '../components/sections/company'
import Order from '../components/order'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>KendiXpress</title>
        <meta name="description" content="KendiXpress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ALERT */}
      <Alert />
      {/* ALERT */}

      {/* CONTAINER */}
      <div className='container mx-auto px-4'>
        {/* NAVBAR */}
          <Navbar />
        {/* NAVBAR */}
        {/* SLIDER */}
          <Slider />
        {/* SLIDER */}
        {/* FEATURE */}
          <Feature />
        {/* FEATURE */}
        {/* OUR SERVICE */}
          <Service />
        {/* OUR SERVICE */}
        {/* PARTNER */}
          <Partner />
        {/* PARTNER */}
        {/* HOW WE WORK */}
          {/* <Workflow /> */}
        {/* HOW WE WORK */}
        {/* TESTIMONY */}
          <Testimonial />
        {/* TESTIMONY */}
        {/* COMPANY */}
          <Company />
        {/* COMPANY */}
      </div>
      {/* ORDER NOW */}
        <Order />
      {/* ORDER NOW */}
      {/* FOOTER */}
        <Footer />
      {/* FOOTER */}
      {/* CONTAINER */}
    </div>
  )
}
