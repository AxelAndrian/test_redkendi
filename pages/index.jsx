import Head from 'next/head'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import { TbTruckDelivery } from 'react-icons/tb'
import { GiReceiveMoney } from 'react-icons/gi'
import { MdOutlineReceiptLong, MdOutlineFastfood } from 'react-icons/md'
import { FaQuoteLeft } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export default function Home() {
  return (
    <div>
      <Head>
        <title>KendiXpress</title>
        <meta name="description" content="KendiXpress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ALERT */}
      <div className='w-full p-4 bg-red-100'>
        <p className='font-medium flex'>
          <strong className='text-red-700'>Minimal Order mulai dari</strong>
          &nbsp; Menu Andalan &nbsp; &bull; &nbsp; Menu Harian Catering 1 Paket &nbsp; &bull; &nbsp; Menu Restoran: Rp.1.000.000 <sub><AiOutlineInfoCircle className='text-red-700 w-4 h-4 ml-1' /></sub>
        </p>
      </div>
      {/* ALERT */}

      {/* CONTAINER */}
      <div className='container mx-auto px-4'>
        {/* NAVBAR */}
          <div className='w-full p-5 bg-white flex justify-center items-center'>
            <div className='mx-auto flex w-full justify-center items-center font-medium'>
              <Image src='/images/kendixpress.svg' width={258} height={50} alt='Logo' />
                <a href="#" className='ml-auto mx-4'>Layanan Kami</a>
                <a href="#" className='mx-4'>Mitra Kami</a>
                <a href="#" className='mx-4'>Cara Kerja</a>
                <a href="#" className='mx-4'>Kata Mereka</a>
                <button className='ml-4 px-3 py-2 rounded-full bg-white border-2 border-red-700 text-red-700 w-32 hover:bg-red-700 hover:text-white'>Daftar</button>
                <button className='ml-4 px-3 py-2 rounded-full bg-red-700 border-2 border-red-700 text-white w-32 hover:bg-red-800 hover:border-red-800'>Masuk</button>
            </div>
          </div>
        {/* NAVBAR */}
        {/* SLIDER */}
          <section className='my-20'>
            <div className='w-full relative'>
              <Carousel showStatus={false} showArrows={false}>
                <div className='cursor-pointer'>
                  <Image src='/images/banner/banner_website_01.jpg' width={3600} height={1440} alt='Banner 01' />
                </div>
                <div className='cursor-pointer'>
                  <Image src='/images/banner/banner_website_02.jpg' width={3600} height={1440} alt='Banner 02' />
                </div>
              </Carousel>
              {/* SLIDER INPUT */}
              <div className='absolute w-8/12 -bottom-4 right-[240px]'>
                <label for="default-search" className="mb-2 text-sm font-medium text-white sr-only">Search</label>
                <div class="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none">
                        <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <input type="text" id="default-search" className="block shadow p-6 pl-16 pr-20 w-full text-lg text-black bg-white rounded-full border border-white focus:outline-none" placeholder="Mau dikirim kemana?" />
                    <button type="submit" className="text-white absolute right-[10px] bottom-[10px] bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-5">
                      <svg aria-hidden="true" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </div>
              </div>
              {/* SLIDER INPUT */}
            </div>
          </section>
        {/* SLIDER */}
        {/* FEATURE */}
          <section className='my-8'>
            <div className='w-full flex justify-center items-center'>
              <div className='w-1/3 flex justify-center items-center'>
                <div className='w-1/4'>
                  <TbTruckDelivery className='w-24 h-24 text-red-700' />
                </div>
                <div className='w-3/4 pl-8 pr-5'>
                  <h5 className='text-red-700 text-base font-semibold'>Gratis Ongkir</h5>
                  <p className='text-black text-sm font-medium pt-1'>Minimal order terpenuhi <br /> di setiap mitra</p>
                </div>
              </div>
              <div className='w-1/3 flex justify-center items-center'>
                <div className="w-1/4">
                  <GiReceiveMoney className='w-24 h-24 text-red-700' />
                </div>
                <div className='w-3/4 pl-8 pr-5'>
                  <h5 className='text-red-700 text-base font-semibold'>Bayar CBD atau TOP</h5>
                  <p className='text-black text-sm font-medium pt-1'>TOP, pemesanan atas <br /> nama perusahaan</p>
                </div>
              </div>
              <div className='w-1/3 flex justify-center items-center'>
                <div className="w-1/4">
                  <MdOutlineReceiptLong className='w-24 h-24 text-red-700' />
                </div>
                <div className='w-3/4 pl-8 pr-5'>
                  <h5 className='text-red-700 text-base font-semibold'>Harga Terjangkau</h5>
                  <p className='text-black text-sm font-medium pt-1'>Harga menu mulai dari <br /> Rp.18.000</p>
                </div>
              </div>
              <div className='w-1/3 flex justify-center items-center'>
                <div className="w-1/4">
                  <MdOutlineFastfood className='w-24 h-24 text-red-700' />
                </div>
                <div className='w-3/4 pl-8 pr-5'>
                  <h5 className='text-red-700 text-base font-semibold'>Variasi Menu</h5>
                  <p className='text-black text-sm font-medium pt-1'>Terdapat menu catering <br /> dan resto favorit</p>
                </div>
              </div>
            </div>
          </section>
        {/* FEATURE */}
        {/* OUR SERVICE */}
          <section className='my-36'>
            <div className="w-full">
              <h3 className='text-black text-center text-2xl mb-3'>Layanan Kami</h3>
              <h1 className='text-red-700 font-mikkel text-center text-6xl font-semibold'>Untuk Setiap Momen</h1>
            </div>
            <div className='w-full mt-16 mb-6'>
              <div className='w-full flex justify-center items-center'>
                <div className='mr-5'>
                  <Image src='/images/service/service_1.png' width={315} height={446} alt='Service One' />
                </div>
                <div className=''>
                  <Image src='/images/service/service_2.png' width={315} height={446} alt='Service Two' />
                </div>
                <div className='ml-5'>
                  <Image src='/images/service/service_3.png' width={315} height={446} alt='Service Three' />
                </div>
              </div>
              <div className='w-full flex justify-center items-center mt-10'>
                <div className='mr-5'>
                  <Image src='/images/service/service_4.png' width={315} height={446} alt='Service Four' />
                </div>
                <div className=''>
                  <Image src='/images/service/service_5.png' width={315} height={446} alt='Service Five' />
                </div>
                <div className='ml-5'>
                  <Image src='/images/service/service_6.png' width={315} height={446} alt='Service Six' />
                </div>
              </div>
            </div>
            <div className="w-full">
              <p className='font-medium flex justify-center'>
                <strong className='text-red-700'>Minimal Order mulai dari</strong>
                &nbsp; Menu Andalan &nbsp; &bull; &nbsp; Menu Harian Catering 1 Paket &nbsp; &bull; &nbsp; Menu Restoran: Rp.1.000.000 <sub><AiOutlineInfoCircle className='text-red-700 w-4 h-4 ml-1' /></sub>
              </p>
              <div className='text-center mt-6'>
                <button className='px-7 py-2 rounded-full bg-red-700 border-2 border-red-700 text-white w-auto hover:bg-red-800 hover:border-red-800 text-center'>Pesan Makan Sekarang!</button>
              </div>
            </div>
          </section>
        {/* OUR SERVICE */}
        {/* PARTNER */}
          <section className='my-20'>
            <div className="w-full">
              <h3 className='text-black text-center text-2xl mb-3'>Catering dan Restoran Terbaik</h3>
              <h1 className='text-red-700 font-mikkel text-center text-6xl font-semibold'>Tersedia untuk Momenmu</h1>
            </div>
            <div className='w-full mt-16 mb-6'>
              <div className='w-full flex flex-wrap justify-around my-24'>
                <div className="">
                  <Image src='/images/partner/yoshinoya.jpg' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/hokben.png' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/chatime.png' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/marugame.png' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/imperial.png' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/gokana.png' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/starbucks.png' width={120} height={120} />
                </div>
              </div>
              <div className='w-full flex flex-wrap justify-around my-24'>
                <div className="">
                  <Image src='/images/partner/solaria.png' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/kopken.png' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/sushitei.png' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/mujigae.png' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/burger king.png' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/dominos.png' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/baksoboedjangan.jpg' width={120} height={120} />
                </div>
              </div>
              <div className='w-full flex flex-wrap justify-around my-24'>
                <div className="">
                  <Image src='/images/partner/waroengsteak.png' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/bakmigm.png' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/puyo.png' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/kfc.png' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/dunkin.png' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/theharvest.jpg' width={120} height={120} />
                </div>
                <div className="">
                  <Image src='/images/partner/pepperlunch.png' width={120} height={120} />
                </div>
              </div>
              <div className="w-full mt-3">
                <h3 className='text-orange-400 text-center text-base'>Masih banyak catering dan restoran yang bisa Kamu pesan di kendiXpress</h3>
              </div>
            </div>
          </section>
        {/* PARTNER */}
        {/* HOW WE WORK */}
          <section className="my-36">
            <div className="w-full">
              <h3 className='text-black text-center text-2xl mb-3'>Cara Kerja Kami</h3>
              <h1 className='text-red-700 font-mikkel text-center text-6xl font-semibold'>Untukmu yang Terbaik</h1>
            </div>
            <div className="w-full flex my-24">
              <div className="w-3/12">
                <div className='flex justify-center items-center flex-col'>
                  <svg className="w-32 h-32 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <h5 className='text-lg font-bold text-center mt-12'>Set Lokasi</h5>
                  <p className='text-center mt-6'>Tentukan alamat <br /> pengirimanmu</p>
                </div>
              </div>
              <div className="w-3/12">
                <div className='flex justify-center items-center flex-col'>
                  <MdOutlineFastfood className='w-32 h-32 text-red-700' />
                  <h5 className='text-lg font-bold text-center mt-12'>Pilih Menu</h5>
                  <p className='text-center mt-6'>Pilih menu dari <br /> catering atau restoran</p>
                </div>
              </div>
              <div className="w-3/12">
                <div className='flex justify-center items-center flex-col'>
                  <GiReceiveMoney className='w-32 h-32 text-red-700' />
                  <h5 className='text-lg font-bold text-center mt-12'>Pembayaran</h5>
                  <p className='text-center mt-6'>Pilih metode pembayaran <br /> yang kamu inginkan</p>
                </div>
              </div>
              <div className="w-3/12">
                <div className='flex justify-center items-center flex-col'>
                  <TbTruckDelivery className='w-32 h-32 text-red-700' />
                  <h5 className='text-lg font-bold text-center mt-12'>Pengiriman</h5>
                  <p className='text-center mt-6'>Tanggal dan waktu tiba <br /> dapat disesuaikan</p>
                </div>
              </div>
            </div>
          </section>
        {/* HOW WE WORK */}
        {/* TESTIMONY */}
          <section className="my-36">
            <div className="w-full">
              <h3 className='text-black text-2xl mb-3'>Tentang Kami</h3>
              <h1 className='text-red-700 font-mikkel text-6xl font-semibold'>Kata Mereka Yang Tercinta</h1>
            </div>
            <div className="w-full flex py-20">
              <div className="w-1/12">
                <FaQuoteLeft className='text-black w-24 h-24' />
              </div>
              <div className="w-2/12 flex justify-center mt-10">
                <div>
                  <Image src='/images/person.png' width={155} height={153} alt='Person' />
                </div>
              </div>
              <div className="w-9/12 mt-10">
                <p className='text-xl'>
                  Kami sangat terbantu oleh katering kendiXpress terutama di masa <br />
                  wabah COVID ini. Respon semua teman-teman bagus, katanya <br />
                  makanannya enak! <br />
                  Pokoknya recommend banget deh!
                </p>
                <p className='text-xl mt-6'>Makasih & Sukses terus ya buat kendiXpress..</p>
                <p className='text-xl mt-6 font-bold'>Hasanah Wirdasari</p>
                <p className='text-lg mt-2'>Staf Admin PT Mayora Indonesia</p>
              </div>
            </div>
          </section>
        {/* TESTIMONY */}
        {/* COMPANY */}
          <section className='my-40'>
            <div className="w-full flex justify-around items-center">
              <div className="w-full h-full relative">
                  <Image src='/images/company/mayora.png' width={90} height={90} />
                </div>
                <div className="w-full h-full relative">
                  <Image src='/images/company/sumco.png' width={117} height={47} />
                </div>
                <div className="w-full h-full relative">
                  <Image src='/images/company/japfa.png' width={117} height={37} />
                </div>
                <div className="w-full h-full relative">
                  <Image src='/images/company/seiwa.jpg' width={117} height={47} />
                </div>
                <div className="w-full h-full relative">
                  <Image src='/images/company/isuzu.png' width={117} height={27} />
                </div>
                <div className="w-full h-full relative">
                  <Image src='/images/company/kansai.png' width={117} height={37} />
                </div>
                <div className="w-full h-full relative">
                  <Image src='/images/company/adhi.png' width={90} height={90} />
                </div>
            </div>
          </section>
        {/* COMPANY */}
      </div>
      {/* ORDER NOW */}
      <section className='bg-red-700'>
        <div className="container mx-auto px-4">
          <div className='py-20 flex'>
            <h2 className='text-white text-3xl'>Percayakan pada Kami<span className='font-mikkel font-semibold ml-3 text-4xl'>Kebutuhan Makan setiap Eventmu</span></h2>
            <div className='ml-auto'>
              <button className='px-14 py-2 rounded-full bg-white border-2 border-white text-red-700 font-bold w-auto'>Pesan Sekarang</button>
            </div>
          </div>
        </div>
      </section>
      {/* ORDER NOW */}
      {/* FOOTER */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
            <div className="w-full flex py-20">
              <div className="w-6/12">
                <Image src='/images/kendixpress.svg' width={258} height={50} alt='Logo' />
                <div className='mt-6'>
                  <p className='text-sm font-medium'>&#169;	2020 PT. Redkendi Andalan Mitra. All Rights Reserved.</p>
                </div>
              </div>
              <div className='w-6/12'>
                <div className='flex justify-around'>
                  <a href="#" className='text-gray-400 hover:text-gray-500 text-sm mx-3'>Tentang kendiXpress</a>
                  <a href="#" className='text-gray-400 hover:text-gray-500 text-sm mx-3'>Syarat dan Ketentuan</a>
                  <a href="#" className='text-gray-400 hover:text-gray-500 text-sm mx-3'>Kebijakan Privasi</a>
                  <a href="#" className='text-gray-400 hover:text-gray-500 text-sm mx-3'>FAQ</a>
                  <a href="#" className='text-gray-400 hover:text-gray-500 text-sm mx-3'>Kostumisasi pesanan</a>
                </div>
                <div className='mt-10 mx-3'>
                  <p className='text-sm font-medium text-right flex justify-end items-center'>Hubungi kami jika memerlukan informasi 
                    &nbsp;<span className='text-red-700'>0812 8594 9895</span>
                    <a href="#" className='ml-3'>
                      <Image src='/images/ig-circle-outline-red.svg' width={24} height={24} />
                    </a>
                    <a href="#" className='ml-3'>
                      <Image src='/images/yt-circle-outline-red.svg' width={24} height={24} />
                    </a>
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>
      {/* FOOTER */}
      {/* CONTAINER */}
    </div>
  )
}
