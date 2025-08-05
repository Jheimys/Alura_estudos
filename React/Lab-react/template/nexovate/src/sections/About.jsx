import aboutimg from'../assets/about.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {

    useEffect(() => { 
      AOS.init({
        duration: 800,
        delay: 200,
        once: false,
      });
    }, []) 

  return (
    <div id='about' className='w-full h-auto flex flex-col items-center justify-between
    lg:px-[80px] lg:py-[80px] py-[60px] px-[20px] gap-[60px]'>

      <div id='top-box' className='w-full flex lg:flex-row flex-col justify-between items-center gap-[60px]'>

        <div className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-[10px]'>
          <h1 className='text-themegreen uppercase text-sm font-poppins'> Who We Are</h1>
          <h1 className='text-black lg:text-[45px] text-[30px] capitalizeleading-[1.2em] font-poppins'>
            Delivering Excellence in IT Solutions
          </h1>
           <p  className='text-gray-500 text-md font-poppins'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>

        <div className='lg:w-[40%] w-full flex lg:justify-end justify-start items-center'>
          <button className='bg-themegreen hover:bg-black hover:text-white py-4 px-6 text-black text-md font-semibold mt-5 rounded-md'> LEARN MORE </button>
        </div>
      </div>

      <div id='botton-box' className='w-full flex lg:flex-row flex-col justify-between items-center gap-[80px]'>
        <div id='img-box' className='lg:w-[40%] w-full'>
          <img src={aboutimg} alt='' className='w-full bg-cover bg-center' />
        </div>
        <div id='content-box' className='lg:w-[60%] w-full flex flex-col items-start justify-between gap-[60px]'>
          <div className='flex flex-col items-start justify-center gap-3'>
            <h1 className='text-black text-[35px] capitalize leading-[1.2em] font-poppins'>Expertaise</h1>
            <p  className='text-gray-500 text-md font-poppins'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>

           <div className='flex flex-col items-start justify-center gap-3'>
            <h1 className='text-black text-[35px] capitalize leading-[1.2em] font-poppins'>Expertaise</h1>
            <p  className='text-gray-500 text-md font-poppins'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>

           <div className='flex flex-col items-start justify-center gap-3'>
            <h1 className='text-black text-[35px] capitalize leading-[1.2em] font-poppins'>Expertaise</h1>
            <p  className='text-gray-500 text-md font-poppins'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About