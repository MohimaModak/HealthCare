import React, { useEffect } from 'react'
import Services from '../Services/Services'
import Insurance from '../Insurance/Insurance'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Hero from "../../Gallery/Hero.png"
import stethoscope from "../../Gallery/stethoscope.png"
import Choose from '../Choose/Choose'
import HealthTips from '../HealthTips/HealthTips'
import Team from '../Team/Team'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  return (
    <div>
      <div id='/' className=''>
        <div className='w-full  bg-gradient-to-t from-blue-300 to-white h-full p-10 text-black'>

          <div data-aos="fade-up" className='flex justify-center items-center p-10 rounded-br-full'>
            <div className='lg:flex justify-center items-center '>
              <div className=''>
                <div className='flex justify-center items-center'>
                  <div className='hidden lg:block'><img src={stethoscope} className='w-20' /></div>
                  <h1 className='text-4xl font-bold hidden lg:block'>our Health, Our Priority – Trusted <br /><span className="text-blue-500 border-b-2 rounded-t-md border-sky-600">
                    Medical Care
                  </span>  You Can Rely On</h1></div>
                <h1 className='text-2xl font-bold block lg:hidden'>Your Health, Our Priority Trusted <span className="text-blue-500 border-b-2 rounded-t-md border-sky-600">
                  Medical Care
                </span> You Can Rely On</h1>
                <p className='my-5 text-base font-medium hidden lg:block'>Compassionate, Expert Care for Every Stage of <br /> Life. Book Your Appointment Today!</p>
                <p className='my-5 text-xs font-medium block lg:hidden'>Compassionate, Expert Care for Every Stage of Life. Book Your Appointment Today!</p>
                <div className='text-left'>
                  <button className='bg-blue-500 px-6 py-3 text-white font-medium text-sm sm:text-base lg:text-lg rounded-sm'>Book an Appointment Now
                  </button>
                </div>
              </div>
              <div className='flex justify-center items-center '>
                <img src={Hero} className='w-[550px]' />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div>
        <About></About>
        <Services></Services>
        <Choose></Choose>
        <Insurance></Insurance>
        <Testimonials></Testimonials>
        <Team></Team>
        <HealthTips></HealthTips>
        <Contact></Contact>
      </div>

    </div>
  )
}



