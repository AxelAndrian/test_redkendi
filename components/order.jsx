export default function Order() {
  return (
    <section className='bg-red-700'>
        <div className="container mx-auto px-4">
          <div className='py-20 hidden md:flex'>
            <h2 className='text-white text-3xl'>Percayakan pada Kami<span className='font-mikkel font-semibold ml-3 text-4xl'>Kebutuhan Makan setiap Eventmu</span></h2>
            <div className='ml-auto'>
              <button className='px-14 py-2 rounded-full bg-white border-2 border-white text-red-700 font-bold w-auto'>Pesan Sekarang</button>
            </div>
          </div>
          <div className="py-10 flex flex-col md:hidden justify-center items-center">
            <h2 className='text-white text-xl mb-3'>Percayakan pada Kami</h2>
            <h2 className='font-mikkel font-semibold text-white text-center text-3xl mb-8'>Kebutuhan Makan <br /> setiap Eventmu</h2>
            <button className='px-16 py-2 rounded-full bg-white border-2 border-white text-red-700 font-bold w-auto'>Pesan Sekarang</button>
          </div>
        </div>
      </section>
  )
}
