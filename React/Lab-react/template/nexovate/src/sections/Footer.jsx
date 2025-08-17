import { FaPhoneVolume } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="w-full bg-black h-auto flex flex-col items-start justify-center lg:px-[80px] px-[20px] lg:py-[50px] py-[30px] gap-[60px]">

      <nav className="w-full h-auto flex lg:flex-row flex-col items-start justify-center gap-[60px]">

          <div className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-[25px]">

              <h1 className="text-themegreen font-bold text-left lg:text-4xl text-3xl uppercase">
                Nexovate <span className="text-white">.</span> <span className="text-themegreen"></span>
              </h1>

              <p className="text-gray-300 text-md font-poppins">
                Fell free to call us in working hours Mon to Fri 9am to 6pm. Our support team will be happy to help you.
              </p>

              <ul className="flex justify-center items-center gap-2 text-white">
                <li className="flex justify-center items-center gap-2">
                  {<FaPhoneVolume className="text-themegreen size-5"/> } +1 (123) 456-7890
                </li>
              </ul>

              <ul className="flex justify-center items-center gap-2 text-white flex-wrap">
                <li className="flex justify-center items-center gap-2">
                  {<FaFacebook className="text-white size-4 hover:text-themegreen cursor-pointer"/> } 
                </li>
                <li className="flex justify-center items-center gap-2">
                  {<FaTwitter className="text-white size-4 hover:text-themegreen cursor-pointer"/> }
                </li>
                <li className="flex justify-center items-center gap-2">
                  {<FaInstagram className="text-white size-4 hover:text-themegreen cursor-pointer"/> }
                </li>
                <li className="flex justify-center items-center gap-2">
                  {<FaLinkedin className="text-white size-4 hover:text-themegreen cursor-pointer"/> }
                </li>
              </ul>
              
          </div>

          <div className="lg:w-[15%] w-full flex flex-col justify-center items-start gap-6">

              <h1 className="text-white text-[23px] capitalize leading-[1.2em] font-poppins">Company</h1>

              <ul className="flex flex-col justify-center items-start gap-2">
                <li className="text-gray-300 hover:text-themegreen cursor-pointer text-md">Home</li>
              </ul>

              <ul className="flex flex-col justify-center items-start gap-2">
                <li className="text-gray-300 hover:text-themegreen cursor-pointer text-md">About Us</li>
              </ul>

              <ul className="flex flex-col justify-center items-start gap-2">
                <li className="text-gray-300 hover:text-themegreen cursor-pointer text-md">Pricing</li>
              </ul>

              <ul className="flex flex-col justify-center items-start gap-2">
                <li className="text-gray-300 hover:text-themegreen cursor-pointer text-md">Blog</li>
              </ul>
              
              <ul className="flex flex-col justify-center items-start gap-2">
                <li className="text-gray-300 hover:text-themegreen cursor-pointer text-md">Help</li>
              </ul>

          </div>

          
          <div className="lg:w-[15%] w-full flex flex-col justify-center items-start gap-6">

              <h1 className="text-white text-[23px] capitalize leading-[1.2em] font-poppins">Services</h1>

              <ul className="flex flex-col justify-center items-start gap-2">
                <li className="text-gray-300 hover:text-themegreen cursor-pointer text-md">Cloud Solutions</li>
              </ul>

              <ul className="flex flex-col justify-center items-start gap-2">
                <li className="text-gray-300 hover:text-themegreen cursor-pointer text-md">Cyber Security</li>
              </ul>

              <ul className="flex flex-col justify-center items-start gap-2">
                <li className="text-gray-300 hover:text-themegreen cursor-pointer text-md">Pricing</li>
              </ul>

              <ul className="flex flex-col justify-center items-start gap-2">
                <li className="text-gray-300 hover:text-themegreen cursor-pointer text-md">Blog</li>
              </ul>
              
              <ul className="flex flex-col justify-center items-start gap-2">
                <li className="text-gray-300 hover:text-themegreen cursor-pointer text-md">Help</li>
              </ul>

          </div>

          <div className="lg:w-[30%] w-full flex flex-col justify-center items-start gap-5">

              <h1 className="text-white text-[23px] capitalize leading-[1.2em] font-poppins">
                Subscribe to our Newsletter
              </h1>
              
              <div className="flex flex-col justify-center items-start w-full">
                <input type="text" placeholder="Enter your email address" className="w-full p-4 bg-transparent border-2 border-gray-800 rounded-md"/>
                <button className="w-full bg-themegreen hover:bg-white  hover:text-black  py-4 px-6 text-black text-md font-semibold mt-5 rounded-md"> Subscribe </button>
              </div>

          </div>

      </nav>

      <nav className="w-full h-auto flex lg:flex-row flex-col items-center justify-between border-t-2 border-gray-700 pt-6 gap-[10px]">
        
        <p className="text-gray-300 text-sm font-poppins text-center">
          Copyright © 2025 Nexovate. All rights reserved.
        </p>

        <ul className="text-gray-300 flex justify-center items-end gap-6">
          <li className="text-gray-300 text-sm font-poppins text-center cursor-pointer hover:text-themegreen">Privacy Policy</li>
          <li className="text-gray-300 text-sm font-poppins text-center cursor-pointer hover:text-themegreen">Terms of Service</li>
          <li className="text-gray-300 text-sm font-poppins text-center cursor-pointer hover:text-themegreen">Sitemap</li>
        </ul>

      </nav>
      
    </footer>
  )
}

export default Footer