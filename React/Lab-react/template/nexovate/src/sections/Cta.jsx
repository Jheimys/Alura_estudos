import AOS from 'aos'
import 'aos/dist/aos.css' 
import backgroundimage from '../assets/hero_bg.jpg'
import { useEffect } from 'react'

const Cta = () => {

   useEffect(() => { 
            AOS.init({
              duration: 800,
              delay: 200,
              once: false,
            });
      }, []) 
  
  return (
     <div id='contact' className='w-full h-auto flex flex-col justify-center items-center
        lg:px-[80px] px-[20px] lg:py-[80px] py-[40px] gap-[20px] bg-cover bg-center' style={{ backgroundImage: `url(${backgroundimage})` }}
        >
          <h1 data-aos='zoom-in' data-aos-delay='50' className='text-themegreen uppercase text-sm font-poppins'> 
            Ready to take your business to the next level?
          </h1>

          <h1 data-aos='zoom-in' data-aos-delay='100' className='text-white lg:text-[45px] text-[30px] font-poppins capitalize leading-[1.2em] lg:w-[50%] w-full text-center'>
           Connect and Create Something Amazing Together
          </h1>

          <p data-aos="zoom-in" data-aos-delay="150" className='text-gray-300 text-md font-poppins lg:w-[60%] w-full text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <div data-aos='slide-up' data-aos-delay='200' id='two button' className='flex lg:flex-row flex-col justify-center items-center lg:gap-5 gap-1 mt-5'>
          <button className='bg-themegreen hover:bg-white hover:text-black py-4 px-6 text-black text-md rounded-md font-semibold font-poppins uppercase mt-5'>
            Contact Us
          </button>

          <button className='bg-white hover:bg-themegreen hover:text-black py-4 px-6 text-black text-md rounded-md font-semibold font-poppins uppercase mt-5'>
            REACH US
          </button>
        </div>

    </div>
    
  )
}

export default Cta