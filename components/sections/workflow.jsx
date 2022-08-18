import { TbTruckDelivery } from 'react-icons/tb'
import { GiReceiveMoney } from 'react-icons/gi'
import { MdOutlineReceiptLong, MdOutlineFastfood } from 'react-icons/md'

export default function Workflow() {
  return (
    <section className="my-36">
            <div className="w-full">
              <h3 className='text-black text-center text-2xl mb-3'>Cara Kerja Kami</h3>
              <h1 className='text-red-700 font-mikkel text-center text-6xl font-semibold'>Untukmu yang Terbaik</h1>
            </div>
            <div className="w-full flex my-24">
              <div className="w-3/12">
                <div className='flex justify-center items-center flex-col'>
                  <svg className="w-32 h-32 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
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
  )
}
