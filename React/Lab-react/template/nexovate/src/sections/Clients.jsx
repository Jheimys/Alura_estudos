import { useEffect } from 'react'
import backgroundimage from'../assets/hero_bg.jpg'
import logo1 from'../assets/logo1.png'
import logo2 from'../assets/logo2.png'
import logo3 from'../assets/logo3.png'
import logo4 from'../assets/logo4.png'
import logo5 from'../assets/logo5.png'
import logo6 from'../assets/logo6.png'
import logo7 from'../assets/logo7.png'
import logo8 from'../assets/logo8.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Clients = () => {
   useEffect(() => { 
      AOS.init({
        duration: 800,
        delay: 200,
        once: false,
      });
    }, []) 

  return (
    <div id='clients' className='w-full h-auto flex flex-col items-center justify-center lg:px-[80px] py-[60px] gap-[60px] bg-cover bg-center' style={{ backgroundImage: `url(${backgroundimage})` }}>
      
      <div data-aos="zoom-in" data-aos-delay='50' className='bg-white rounded-full px-10 py-3 font-semibold flex lg:flex-row  flex-col justify-center items-center w-full lg:gap-2 gap1'>
        Trusted by <span className='text-themegreen'>Businesses Worldwide</span> for Reliable IT Solutions
      </div>

      <div className='w-full grid  lg:grid-cols-4 grid-col-2'>  
        <div data-aos="slide-up" data-aos-delay='100' className='border-[0.5px] border-white lg:p-20 p-10 flex justify-center items-center'>
          <img src={logo1} alt='Client Logo 1' className='w-[150px]' />
        </div>

          <div data-aos="slide-up" data-aos-delay='100' className='border-[0.5px] border-white lg:p-20 p-10 flex justify-center items-center'>
            <img src={logo2} alt='Client Logo 1' className='w-[150px]' />
          </div>

          <div data-aos="slide-up" data-aos-delay='100' className='border-[0.5px] border-white lg:p-20 p-10 flex justify-center items-center'>
            <img src={logo3} alt='Client Logo 1' className='w-[150px]' />
          </div>

          <div data-aos="slide-up" data-aos-delay='100' className='border-[0.5px] border-white lg:p-20 p-10 flex justify-center items-center'>
            <img src={logo4} alt='Client Logo 1' className='w-[150px]' />
          </div>

          <div data-aos="slide-up" data-aos-delay='100' className='border-[0.5px] border-white lg:p-20 p-10 flex justify-center items-center'>
            <img src={logo5} alt='Client Logo 1' className='w-[150px]' />
          </div>


          <div data-aos="slide-up" data-aos-delay='100' className='border-[0.5px] border-white lg:p-20 p-10 flex justify-center items-center'>
            <img src={logo6} alt='Client Logo 1' className='w-[150px]' />
          </div>

          <div data-aos="slide-up" data-aos-delay='100' className='border-[0.5px] border-white lg:p-20 p-10 flex justify-center items-center'>
            <img src={logo7} alt='Client Logo 1' className='w-[150px]' />
          </div>

          <div data-aos="slide-up" data-aos-delay='100' className='border-[0.5px] border-white lg:p-20 p-10 flex justify-center items-center'>
            <img src={logo8} alt='Client Logo 1' className='w-[150px]' />
          </div>
      </div>

    </div>
  )
}

export default Clients