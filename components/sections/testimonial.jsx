import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'

export default function Testimonial() {
  return (
    <section className="my-12 md:my-36 px-0 md:px-[150px]">
            <div className="w-full">
              <h3 className='text-black text-center md:text-left text-xl md:text-2xl mb-3'>Tentang Kami</h3>
              <h1 className='text-red-700 font-mikkel text-center md:text-left text-4xl md:text-6xl font-semibold'>Kata Mereka Yang Tercinta</h1>
            </div>
            <div className="w-full flex flex-wrap py-0 md:py-20">
              <div className="w-full md:w-1/12 mt-10 md:mt-0">
                <FaQuoteLeft className='text-black w-16 h-16 md:w-24 md:h-24 mx-auto md:mx-0' />
              </div>
              <div className="w-full md:w-2/12 hidden md:flex justify-center mt-10">
                <div>
                  <Image src='/images/person.png' width={155} height={153} alt='Person' />
                </div>
              </div>
              <div className="w-full md:w-9/12 mt-10">
                <div className='text-xl text-center md:text-left'>
                  Kami sangat terbantu oleh katering kendiXpress terutama di masa <br />
                  wabah COVID ini. Respon semua teman-teman bagus, katanya <br />
                  makanannya enak! <br />
                  Pokoknya recommend banget deh!
                </div>
                <div className="w-full md:w-2/12 flex md:hidden justify-center mt-10">
                  <div>
                    <Image src='/images/person.png' width={155} height={153} alt='Person' />
                  </div>
                </div>
                <p className='text-xl mt-6 text-center md:text-left'>Makasih & Sukses terus ya buat kendiXpress..</p>
                <p className='text-xl mt-6 font-bold text-center md:text-left'>Hasanah Wirdasari</p>
                <p className='text-lg mt-2 text-center md:text-left'>Staf Admin PT Mayora Indonesia</p>
              </div>
            </div>
          </section>
  )
}
