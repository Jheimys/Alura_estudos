import { useEffect } from 'react'
import heroimg from '../assets/hero.png'
import backgroundimage from '../assets/hero_bg.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Hero = () => {

  useEffect(() => { 
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, [])  

  return (
    <div id='hero' className='w-full min-h-auto flex lg:flex-row flex-col justify-between items-center
    lg:px-[80px] px-[20px] lg:pt-[150px] pt-[120px] lg:pb-[80px] pb-[60px] lg:gap-[60px] gap-[40px]
    bg-cover bg-center' style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className='lg:w-1/2 w-full flex  flex-col gap-[20px] items-start justify-center'>

        <h1 data-aos="zoom-in" data-aos-delay="50" className='text-themegreen uppercase text-sm font-poppins'>Seamless IT Services</h1>

        <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white lg:text-[70px] text-[40px] capitalize font-poppins leading-[1.2em]'>
          Transforming Ideas Into Digital Success
        </h1>

        <p data-aos="zoom-in" data-aos-delay="170" className='text-gray-300 text-md font-poppins'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <button data-aos="slide-up" data-aos-delay="200" className='bg-themegreen hover:bg-white hover:text-black py-4 px-6 text-black text-md
        font-semibold mt-5 rounded-md'>
          EXPLORE SOLUTIONS
        </button>

      </div>

      <div className='lg:w-1/2 w-full justify-center items-center'>
        <div data-aos="zoom-in" data-aos-delay="230" className='lg:w-[80%] w-full flex justify-center items-center px-5 pt-5 bg-themegreen bg-opacity-30
        z-10 rounded-mg' >
          <div className='opacity-100'>
            <img src={heroimg} alt='' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero


