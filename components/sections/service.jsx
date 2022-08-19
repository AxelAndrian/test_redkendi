import Image from 'next/image'
import axios from 'axios'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useEffect, useState } from 'react';

export default function Service() {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    const result = await axios.get('/api/v1/service');
    setServices(result.data.data);
  }

  useEffect(() => {
    fetchServices();
  }, [])

  return (
    <section className='my-12 md:my-36'>
      <div className="w-full">
        <h3 className='text-black text-center text-xl md:text-2xl mb-3'>Layanan Kami</h3>
        <h1 className='text-red-700 font-mikkel text-center text-4xl md:text-6xl font-semibold'>Untuk Setiap Momen</h1>
      </div>
      <div className='w-full mt-6 md:mt-16 mb-6 overflow-x-scroll md:overflow-auto'>
        <div className='w-[1000px] md:w-full flex flex-nowrap md:flex-wrap px-0 md:px-[240px] justify-center md:justify-around items-center'>
          {
            services.map((service, index) => (
              <div className={`mr-2 ${index == 2 || index == 5 ? 'md:mr-0' : 'md:mr-5'}`} key={index}>
                <Image src={service} width={315} height={446} />
              </div>    
            ))
          }
          {/* <div className='mr-2 md:mr-5'>
            <Image src='/images/service/service_1.png' width={315} height={446} alt='Service One' />
          </div>
          <div className='mr-2 md:mr-0 ml-2 md:ml-0'>
            <Image src='/images/service/service_2.png' width={315} height={446} alt='Service Two' />
          </div>
          <div className='mr-2 md:mr-0 ml-2 md:ml-5'>
            <Image src='/images/service/service_3.png' width={315} height={446} alt='Service Three' />
          </div>
          <div className='mr-2 md:mr-5 ml-2 md:ml-0 mt-0 md:mt-10'>
            <Image src='/images/service/service_4.png' width={315} height={446} alt='Service Four' />
          </div>
          <div className='mr-2 md:mr-0 ml-2 md:ml-0 mt-0 md:mt-10'>
            <Image src='/images/service/service_5.png' width={315} height={446} alt='Service Five' />
          </div>
          <div className='mr-2 md:mr-0 ml-2 md:ml-5 mt-0 md:mt-10'>
            <Image src='/images/service/service_6.png' width={315} height={446} alt='Service Six' />
          </div> */}
        </div>
      </div>
      <div className="w-full">
        <p className='font-medium hidden md:flex justify-center'>
          <strong className='text-red-700'>Minimal Order mulai dari</strong>
          &nbsp; Menu Andalan &nbsp; &bull; &nbsp; Menu Harian Catering 1 Paket &nbsp; &bull; &nbsp; Menu Restoran: Rp.1.000.000 <sub><AiOutlineInfoCircle className='text-red-700 w-4 h-4 ml-1' /></sub>
        </p>
        <div className='block md:hidden text-center'>
          <p><strong className='text-red-700'>Minimal Order mulai dari</strong></p>
          <p><strong>Menu Andalan Catering:</strong>&nbsp;10 Porsi</p>
          <p><strong>Menu Harian Catering:</strong>&nbsp;1 Paket</p>
          <p className='flex justify-center'><strong>Menu Restoran:</strong>&nbsp;Rp.1.000.000 <sub><AiOutlineInfoCircle className='text-red-700 w-4 h-4 ml-1' /></sub></p>
        </div>
        <div className='text-center mt-6'>
          <button className='px-7 py-2 rounded-full bg-red-700 border-2 border-red-700 text-white w-full md:w-auto hover:bg-red-800 hover:border-red-800 text-center'>Pesan Makan Sekarang!</button>
        </div>
      </div>
    </section>
  )
}
