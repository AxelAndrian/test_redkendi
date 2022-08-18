import { MdOutlineReceiptLong, MdOutlineFastfood } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import { GiReceiveMoney } from 'react-icons/gi'

export default function Feature() {
  return (
    <section className='my-0 md:my-8'>
      <div className='w-full flex justify-center items-center flex-wrap md:flex-nowrap'>
        <div className='w-1/2 md:1/3 flex flex-col md:flex-row justify-center items-center my-6 md:my-0'>
          <div className='w-full md:w-1/4'>
            <TbTruckDelivery className='w-16 md:w-24 h-16 md:h-24 text-red-700 m-auto md:m-0' />
          </div>
          <div className='w-full md:w-3/4 pl-0 md:pl-8 pr-0 md:pr-5'>
            <h5 className='text-red-700 text-base font-semibold text-center md:text-left'>Gratis Ongkir</h5>
            <p className='text-black text-sm font-medium pt-1 text-center md:text-left'>Minimal order terpenuhi <br /> di setiap mitra</p>
          </div>
        </div>
        <div className='w-1/2 md:1/3 flex flex-col md:flex-row justify-center items-center my-6 md:my-0'>
          <div className="w-full md:w-1/4">
            <GiReceiveMoney className='w-16 md:w-24 h-16 md:h-24 text-red-700 m-auto md:m-0' />
          </div>
          <div className='w-full md:w-3/4 pl-0 md:pl-8 pr-0 md:pr-5'>
            <h5 className='text-red-700 text-base font-semibold text-center md:text-left'>Bayar CBD atau TOP</h5>
            <p className='text-black text-sm font-medium pt-1 text-center md:text-left'>TOP, pemesanan atas <br /> nama perusahaan</p>
          </div>
        </div>
        <div className='w-1/2 md:1/3 flex flex-col md:flex-row justify-center items-center my-6 md:my-0'>
          <div className="w-full md:w-1/4">
            <MdOutlineReceiptLong className='w-16 md:w-24 h-16 md:h-24 text-red-700 m-auto md:m-0' />
          </div>
          <div className='w-full md:w-3/4 pl-0 md:pl-8 pr-0 md:pr-5'>
            <h5 className='text-red-700 text-base font-semibold text-center md:text-left'>Harga Terjangkau</h5>
            <p className='text-black text-sm font-medium pt-1 text-center md:text-left'>Harga menu mulai dari <br /> Rp.18.000</p>
          </div>
        </div>
        <div className='w-1/2 md:1/3 flex flex-col md:flex-row justify-center items-center my-6 md:my-0'>
          <div className="w-full md:w-1/4">
            <MdOutlineFastfood className='w-16 md:w-24 h-16 md:h-24 text-red-700 m-auto md:m-0' />
          </div>
          <div className='w-full md:w-3/4 pl-0 md:pl-8 pr-0 md:pr-5'>
            <h5 className='text-red-700 text-base font-semibold text-center md:text-left'>Variasi Menu</h5>
            <p className='text-black text-sm font-medium pt-1 text-center md:text-left'>Terdapat menu catering <br /> dan resto favorit</p>
          </div>
        </div>
      </div>
    </section>
  )
}