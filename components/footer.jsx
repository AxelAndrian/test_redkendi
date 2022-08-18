import Image from 'next/image'

export default function Footer() {
  return (
    <section className="bg-white">
        <div className="container mx-auto px-4">
            <div className="w-full flex flex-wrap py-10 md:py-20">
              <div className="w-full md:w-6/12 order-2 md:order-1 mt-6 md:mt-0">
                <img src='/images/kendixpress.svg' className='w-[200px] md:w-[258px] md:h-[50px]' alt='Logo' />
                <div className='mt-6'>
                  <p className='text-sm font-medium pr-28 md:pr-0'>&#169;	2020 PT. Redkendi Andalan Mitra. All Rights Reserved.</p>
                </div>
              </div>
              <div className='w-full md:w-6/12 order-1 md:order-2'>
                <div className='flex flex-col md:flex-row md:justify-around'>
                  <a href="#" className='text-gray-400 hover:text-gray-500 text-sm my-1.5 md:my-0 md:mx-3'>Tentang kendiXpress</a>
                  <a href="#" className='text-gray-400 hover:text-gray-500 text-sm my-1.5 md:my-0 md:mx-3'>Syarat dan Ketentuan</a>
                  <a href="#" className='text-gray-400 hover:text-gray-500 text-sm my-1.5 md:my-0 md:mx-3'>Kebijakan Privasi</a>
                  <a href="#" className='text-gray-400 hover:text-gray-500 text-sm my-1.5 md:my-0 md:mx-3'>FAQ</a>
                  <a href="#" className='text-gray-400 hover:text-gray-500 text-sm my-1.5 md:my-0 md:mx-3'>Kostumisasi pesanan</a>
                </div>
                <div className='mt-10 md:mx-3'>
                  <p className='text-sm font-medium text-left md:text-right flex flex-col md:flex-row md:justify-end md:items-center'>Hubungi kami jika memerlukan informasi 
                    &nbsp;<span className='text-red-700 mt-2 md:mt-0'>0812 8594 9895</span>
                    <div className='my-2 md:my-0'>
                      <a href="#" className='md:ml-3'>
                        <Image src='/images/ig-circle-outline-red.svg' width={24} height={24} />
                      </a>
                      <a href="#" className='ml-3'>
                        <Image src='/images/yt-circle-outline-red.svg' width={24} height={24} />
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>
  )
}
