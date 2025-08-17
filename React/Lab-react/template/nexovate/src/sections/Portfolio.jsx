import { projects } from '../export'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import { useEffect } from 'react'

import backgroundimage from '../assets/hero_bg.jpg'

const Portfolio = () => {

   useEffect(() => { 
        AOS.init({
          duration: 800,
          delay: 200,
          once: false,
        });
      }, []) 
  

  return (
    <div id='projects' className='w-full h-auto flex flex-col items-center justify-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[20px] bg-cover bg-center' style={{ backgroundImage: `url(${backgroundimage})` }}> 
      
      <h1 data-aos='zoom-in' data-aos-delay='50' className='text-themegreen'> 
        OUR PORTFOLIO 
      </h1>

       <h1 data-aos='zoom-in' data-aos-delay='100' className='text-white lg:text-[45px] text-[30px] font-poppins capitalize leading-[1.2em] lg:w-[50%] w-full text-center'> 
        Explore our portfolio and ahowcase our best works
      </h1>

      <p data-aos="zoom-in" data-aos-delay="150" className='text-gray-300 text-md font-poppins lg:w-[60%] w-full text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <div className='grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10 mt-8'>
       {projects.map((project, index) => (
        <div key={index} className='w-full flex flex-col justify-center items-start'> 
          
          <img src={project.img} className='w-full bg-cover bg-center' />

          <div className='w-full bg-gray-600 p-8 flex flex-col justify-center items-start gap-4'> 
            <h1 className='text-white lg:text-[25px] text-[22px] capitalize leading-[1.2em] font-poppins text-left'>
              {project.title}
            </h1>

            <p className='text-gray-300 text-sm font-poppins text-left'>
              {project.para}
            </p>

            <button className='text-themegreen hover:text-white text-sm font-semibold uppercase mt-5'>
              View More
            </button>

          </div>

        </div>
       ))}
      </div>

    </div>
  )
}

export default Portfolio