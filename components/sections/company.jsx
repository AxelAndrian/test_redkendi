import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Company() {
  const [companys, setCompanys] = useState([]);

  const fetchCompanys = async () => {
    const result = await axios.get(process.env.NEXT_BASE_API_URL + '/api/v1/company');
    setCompanys(result.data.data);
  }

  const parseClassCompany = (index) => {
    let tmpClass = ''
    if (index == 0 || index == 6) {
      tmpClass = 'w-[30px] md:w-[90px] mx-0 md:mx-auto';
    }
    if (index == 1) {
      tmpClass = 'w-[38px] md:w-[117px] mx-0 md:mx-auto'
    }
    if (index == 2 || index == 5) {
      tmpClass = 'w-[58px] md:w-[117px] mx-0 md:mx-auto'
    }
    if (index == 3) {
      tmpClass = 'w-[58px] md:w-[117px] mx-0 md:mx-auto'
    }
    if (index == 4) {
      tmpClass = 'w-[58px] md:w-[117px] mx-0 md:mx-auto'
    }
    return tmpClass;
  }

  useEffect(() => {
    fetchCompanys();
  }, [])

  return (
    <section className='my-10 md:my-40'>
      <div className="w-full flex justify-around items-center px-0 md:px-[100px]">
        {
          companys.map((company, index) => (
            <div className="w-auto h-auto relative text-center" key={index}>
              <img src={company} className={parseClassCompany(index)} />
            </div>
          ))
        }
      </div>
    </section>
  )
}
