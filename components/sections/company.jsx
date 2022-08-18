import Image from 'next/image'

export default function Company() {
  return (
    <section className='my-20 md:my-40'>
            <div className="w-full flex justify-around items-center px-0 md:px-[100px]">
              <div className="w-full h-full relative text-center">
                  <img src='/images/company/mayora.png' className='w-[30px] h-[30px] md:w-[90px] md:h-[90px] mx-1 md:mx-auto' />
                </div>
                <div className="w-full h-full relative text-center">
                  <img src='/images/company/sumco.png' className='w-[38px] h-[23px] md:w-[117px] md:h-[47px] mx-1 md:mx-auto' />
                </div>
                <div className="w-full h-full relative text-center">
                  <img src='/images/company/japfa.png' className='w-[58px] h-[18px] md:w-[117px] md:h-[37px] mx-1 md:mx-auto' />
                </div>
                <div className="w-full h-full relative text-center">
                  <img src='/images/company/seiwa.jpg' className='w-[58px] h-[18px] md:w-[117px] md:h-[47px] mx-1 md:mx-auto' />
                </div>
                <div className="w-full h-full relative text-center">
                  <img src='/images/company/isuzu.png' className='w-[58px] h-[18px] md:w-[117px] md:h-[27px] mx-1 md:mx-auto' />
                </div>
                <div className="w-full h-full relative text-center">
                  <img src='/images/company/kansai.png' className='w-[58px] h-[18px] md:w-[117px] md:h-[37px] mx-1 md:mx-auto' />
                </div>
                <div className="w-full h-full relative text-center">
                  <img src='/images/company/adhi.png' className='w-[30px] h-[30px] md:w-[90px] md:h-[90px] mx-1 md:mx-auto'/>
                </div>
            </div>
          </section>
  )
}
