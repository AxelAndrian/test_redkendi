import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'

export default function Slider() {
  return (
    <section className='my-6 md:my-20'>
      
      <div className='w-full relative flex md:block flex-col md:flex-row'>
        <Carousel showStatus={false} showArrows={false} className='slider order-2'>
          <div className='cursor-pointer'>
            <Image src='/images/banner/banner_website_01.jpg' width={3600} height={1440} alt='Banner 01' />
          </div>
          <div className='cursor-pointer'>
            <Image src='/images/banner/banner_website_02.jpg' width={3600} height={1440} alt='Banner 02' />
          </div>
        </Carousel>
        {/* SLIDER INPUT */}
        <div className='relative md:absolute w-full md:w-8/12 bottom-auto md:-bottom-4 right-auto md:right-[240px] order-1 mb-4 md:mb-0'>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only">Search</label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none">
              <svg className="w-6 md:w-8 h-6 md:h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <input type="text" id="default-search" className="block shadow p-3 md:p-6 pl-12 md:pl-16 pr-14 md:pr-20 w-full text-lg text-black bg-white rounded-full border border-white focus:outline-none" placeholder="Mau dikirim kemana?" />
            <button type="submit" className="text-white absolute right-[5px] md:right-[10px] bottom-[5px] md:bottom-[10px] bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-4 md:px-5 py-4 md:py-5">
            <svg aria-hidden="true" className="w-3 md:w-5 h-3 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </div>
        </div>
        {/* SLIDER INPUT */}
      </div>
    </section>
  )
}