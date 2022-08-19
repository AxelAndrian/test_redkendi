import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='w-full p-0 md:p-5 py-5 bg-white flex justify-center items-center'>
      <div className='mx-auto flex w-full justify-start md:justify-center items-center font-medium'>
        <div className='w-auto h-auto relative'>
          <img src='/images/kendixpress.svg' className='w-44 md:w-60' alt='Logo' />
        </div>
        <a href="#" className='ml-auto mx-4 hidden md:block'>Layanan Kami</a>
        <a href="#" className='mx-4 hidden md:block'>Mitra Kami</a>
        <a href="#" className='mx-4 hidden md:block'>Cara Kerja</a>
        <a href="#" className='mx-4 hidden md:block'>Kata Mereka</a>
        <button className='ml-4 px-3 py-2 rounded-full bg-white border-2 border-red-700 text-red-700 w-32 hover:bg-red-700 hover:text-white hidden md:block'>Daftar</button>
        <button className='ml-auto md:ml-4 px-2 md:px-3 py-2 rounded-full bg-red-700 border-2 border-red-700 text-white w-32 hover:bg-red-800 hover:border-red-800'>Masuk</button>
      </div>
    </div>
  )
}