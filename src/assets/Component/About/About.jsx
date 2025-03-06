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
    <div className='bg-blue-50 h-full relative' id='/About'>

      <div data-aos="fade-up" className='py-20 px-10'>
        <div className='lg:flex justify-center items-center lg:gap-10'>
          <div className=''>
            <div className='flex items-center text-center lg:text-left'>
              <h1 className='text-3xl font-bold text-center lg:text-left'>Committed to Excellence in 
                <div className='flex justify-center items-center '> <span className="text-blue-500 border-b-2 rounded-t-md border-blue-600 text-3xl">
                Healthcare
              </span>
              <div className=''><img src={lungs} className='w-10 text-blue-600' /></div>
              </div>
              </h1>
             
            </div>
            <div className='flex justify-center items-center hidden lg:block'>
              <p className='text-base my-5 font-medium'>At <strong>Vadra Hospital</strong>, we provide top-quality, patient-centered <br /> care with expert doctors, nurses, and specialists. <br /> We focus on holistic healing, ensuring accessible, <br />affordable, and effective healthcare for all.</p>
            </div>
            <div className='flex justify-center items-center text-center block lg:hidden'>
              <p className='text-base my-5 font-medium'>At our hospital, we provide top-quality, patient-centered care with expert doctors, nurses, and specialists. We focus on holistic healing, ensuring accessible, affordable, and effective healthcare for all.</p>
            </div>
            <div className='text-center lg:text-left mb-5 lg:mb-0'>
              <button className='bg-blue-500 px-6 py-3 text-white font-medium  text-sm sm:text-base lg:text-lg rounded-sm'>Learn More About Us
              </button>
            </div>
          </div>
          <div className='bg-blue-500 rounded-se-full rounded-b-full'>
            <img src={about} className='w-96' />
          </div>
        </div>
      </div>
    </div>
  )
}

