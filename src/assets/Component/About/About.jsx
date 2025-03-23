import React, { useEffect } from 'react'
import about from "../../Gallery/About.png"
import lungs from "../../Gallery/lungs.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function About() {

    useEffect(() => {
      AOS.init({
        duration: 1500,
        easing: 'ease-out',
        once: true,
      });
    }, []);

  return (
    <div className='bg-blue-50 h-full relative text-slate-800' id='/About'>

      <div data-aos="fade-up" className='py-28 px-10'>
        <div className='lg:flex justify-evenly items-center lg:gap-10'>
          <div className=''>
            <div className='flex items-center text-center lg:text-left'>
              <h1 data-aos="fade-up" className='text-3xl lg:text-4xl font-bold text-center lg:text-left'>Committed to Excellence in 
                <div className='flex justify-center items-center '> <span className="text-blue-500 border-b-2 rounded-t-md border-blue-600 text-3xl">
                Healthcare
              </span>
              <div className=''><img src={lungs} className='w-10 text-blue-600' /></div>
              </div>
              </h1>
             
            </div>
            <div data-aos="fade-up" className='flex justify-center items-center hidden lg:block'>
              <p className='text-xl my-5 font-medium'>At <strong className='text-blue-500'>Vadra Hospital</strong>, we provide top-quality, patient-centered <br /> care with expert doctors, nurses, and specialists. <br /> We focus on holistic healing, ensuring accessible, <br />affordable, and effective healthcare for all.</p>
            </div>
            <div data-aos="fade-up" className='flex justify-center items-center text-center block lg:hidden'>
              <p className='text-base my-5 font-medium'>At <strong className='text-blue-500'>Vadra Hospital</strong>, we provide top-quality, patient-centered care with expert doctors, nurses, and specialists. We focus on holistic healing, ensuring accessible, affordable, and effective healthcare for all.</p>
            </div>
            <div data-aos="fade-up" className='text-center lg:text-left mb-10 lg:mb-0'>
            <a href="/">  <button className='bg-blue-500 px-6 py-3 text-white font-medium  text-sm sm:text-base lg:text-lg rounded'>Learn More About Us
              </button></a>
            </div>
          </div>
          <div data-aos="fade-up" className='bg-gradient-to-t from-blue-600 to-blue-300  rounded-se-full 
          rounded-b-full'>
            <img src={about} className='w-[550px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

