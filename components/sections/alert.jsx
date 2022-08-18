import { AiOutlineInfoCircle } from 'react-icons/ai'

export default function Alert() {
 return (
  <div className='w-full p-4 bg-red-100'>
    <p className='font-medium hidden md:flex'>
      <strong className='text-red-700'>Minimal Order mulai dari</strong>
      &nbsp; Menu Andalan Catering: 10 Porsi &nbsp; &bull; &nbsp; Menu Harian Catering: 1 Paket &nbsp; &bull; &nbsp; Menu Restoran: Rp.1.000.000 <sub><AiOutlineInfoCircle className='text-red-700 w-4 h-4 ml-1' /></sub>
    </p>
    <div className='block md:hidden'>
      <p><strong className='text-red-700'>Minimal Order mulai dari</strong></p>
      <p><strong>Menu Andalan Catering:</strong>&nbsp;10 Porsi</p>
      <p><strong>Menu Harian Catering:</strong>&nbsp;1 Paket</p>
      <p className='flex'><strong>Menu Restoran:</strong>&nbsp;Rp.1.000.000 <sub><AiOutlineInfoCircle className='text-red-700 w-4 h-4 ml-1' /></sub></p>
    </div>
  </div>
 ) 
}