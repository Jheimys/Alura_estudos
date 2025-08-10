import { services } from '../export'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import { useEffect } from 'react'

const Offer = () => {

   useEffect(() => { 
      AOS.init({
        duration: 800,
        delay: 200,
        once: false,
      });
    }, []) 

  return (
    <div id='services' className='w-full h-auto flex flex-col items-center justify-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[20px]'>

      <h1 data-aos='zoom-in' data-aos-delay='50' className='text-themegreen'> 
        OUR SERVICES 
      </h1>

       <h1 data-aos='zoom-in' data-aos-delay='100' className='text-black lg:text-[45px] text-[30px] font-poppins capitalize leading-[1.2em] lg:w-[50%] w-full text-center'> 
        Driving Digital Transformation With Excellence
      </h1>

      <p data-aos="zoom-in" data-aos-delay="150" className='text-gray-500 text-md font-poppins lg:w-[b0%] w-full text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <div className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-6 mt-6'>
        {services.map((service, index) => (
          <div key={index} className='flex flex-col justify-center items-start gap-4 p-10 border-2 border-gray-200 bg-white hover:bg-green-100 rounded-md cursor-pointer'> 
            
            < service.icon className='size-[35px] mb-5' />

            <h1 className='text-black text-[25px] capitalize leading-[1.2em] font-poppins'> 
              {service.title} 
            </h1>

            <p className='text-gray-500 text-sm font-poppins'> {service.para} </p>

            <button className='text-themegreen hover:text-black text-sm font-semibold uppercase mt-10'> 
              Learn More 
            </button>

          </div>
        ) )}
      </div>

    </div>
  )
}

export default Offer