import React, { useEffect } from 'react'
import search from "../../Gallery/search.png"
import vaccine from "../../Gallery/vaccine.png"
import phone from "../../Gallery/phone.png"
import healthInfo from "../../Gallery/healthInfo.png"
import healthCare from "../../Gallery/healthCare.png"
import nurse from "../../Gallery/nurse.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Services() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  return (
    <div id='/Services' className='w-full bg-blue-200 h-auto py-28 px-10 text-slate-800'>
      <div data-aos="fade-up" className='max-w-6xl mx-auto'>
        <h1 data-aos="fade-up" className='text-4xl lg:text-5xl font-bold text-center mb-16'> 
           <span className='text-blue-600'>Our Medical</span> Services</h1>



        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div data-aos="fade-up" className='bg-white rounded-se-full rounded-b-full p-6 lg:p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex justify-center items-center gap-2'><h2 className='text-xl font-bold mb-2 text-blue-600'>Find a Specialist</h2> <img src={search} className='w-10' /></div>
            <p className='text-slate-800'>
              Search and choose from thousands of experienced specialists, general practitioners, and trusted hospitals.
            </p>
          </div>

          <div data-aos="fade-up" className='bg-white rounded-se-full rounded-b-full p-6 lg:p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex justify-center items-center gap-2'> <h2 className='text-xl font-bold mb-2 text-blue-600'>Online Pharmacy</h2> <img src={vaccine} className='w-10' /></div>
            <p className='text-slate-800'>
              Conveniently purchase your medications through our mobile app with a simple and reliable delivery system.
            </p>
          </div>

          <div data-aos="fade-up" className='bg-white rounded-se-full rounded-b-full p-6 lg:p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex justify-center items-center gap-2'><h2 className='text-xl font-bold mb-2 text-blue-600'>Doctor Consultation</h2><img src={phone} className='w-10' /></div>
            <p className='text-slate-800'>
              Receive free consultations with our trusted doctors and get personalized recommendations.
            </p>
          </div>

          <div data-aos="fade-up" className='bg-white rounded-se-full rounded-b-full p-6 lg:p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex justify-center items-center gap-2'><h2 className='text-xl font-bold mb-2 text-blue-600'>Health Information</h2><img src={healthInfo} className='w-10' /></div>
            <p className='text-slate-800'>
              Access detailed health information and resources to make informed decisions about your care.
            </p>
          </div>

          <div data-aos="fade-up" className='bg-white rounded-se-full rounded-b-full p-6 lg:p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex justify-center items-center gap-2'><h2 className='text-xl font-bold mb-2 text-blue-600'>Emergency Care</h2><img src={healthCare} className='w-10' /></div>
            <p className='text-slate-800'>
              We offer 24/7 emergency care services for you and your family. Immediate assistance is always available.
            </p>
          </div>

          <div data-aos="fade-up" className='bg-white rounded-se-full rounded-b-full p-6 lg:p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex justify-center items-center gap-2'> <h2 className='text-xl font-bold mb-2 text-blue-600'>Medical History Tracking</h2> <img src={nurse} className='w-10' /></div>
            <p className='text-slate-800'>
              Easily track and save your medical history and health data with our secure system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}