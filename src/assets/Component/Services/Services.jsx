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
    <div id='/Services' className='w-full bg-blue-50 h-auto py-20 px-10'>
      <div data-aos="fade-up" className='max-w-6xl mx-auto'>
        <h1 className='text-3xl lg:text-4xl font-bold text-center mb-10'>Our Medical Services</h1>
       


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Service Card 1: Find a Specialist */}
          <div className='bg-white rounded-se-full rounded-b-full p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex justify-center items-center gap-2'><h2 className='text-xl font-bold mb-2 text-blue-500'>Find a Specialist</h2> <img src={search} className='w-10' /></div>
            <p className='text-gray-700'>
              Search and choose from thousands of experienced specialists, general practitioners, and trusted hospitals.
            </p>
          </div>

          {/* Service Card 2: Online Pharmacy */}
          <div className='bg-white rounded-se-full rounded-b-full p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex justify-center items-center gap-2'> <h2 className='text-xl font-bold mb-2 text-blue-500'>Online Pharmacy</h2> <img src={vaccine} className='w-10' /></div>
            <p className='text-gray-700'>
              Conveniently purchase your medications through our mobile app with a simple and reliable delivery system.
            </p>
          </div>

          {/* Service Card 3: Doctor Consultation */}
          <div className='bg-white rounded-se-full rounded-b-full p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex justify-center items-center gap-2'><h2 className='text-xl font-bold mb-2 text-blue-500'>Doctor Consultation</h2><img src={phone} className='w-10' /></div>
            <p className='text-gray-700'>
              Receive free consultations with our trusted doctors and get personalized recommendations.
            </p>
          </div>

          {/* Service Card 4: Health Information */}
          <div className='bg-white rounded-se-full rounded-b-full p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex justify-center items-center gap-2'><h2 className='text-xl font-bold mb-2 text-blue-500'>Health Information</h2><img src={healthInfo} className='w-10' /></div>
            <p className='text-gray-700'>
              Access detailed health information and resources to make informed decisions about your care.
            </p>
          </div>

          {/* Service Card 5: Emergency Care */}
          <div className='bg-white rounded-se-full rounded-b-full p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex justify-center items-center gap-2'><h2 className='text-xl font-bold mb-2 text-blue-500'>Emergency Care</h2><img src={healthCare} className='w-10' /></div>
            <p className='text-gray-700'>
              We offer 24/7 emergency care services for you and your family. Immediate assistance is always available.
            </p>
          </div>

          {/* Service Card 6: Medical History Tracking */}
          <div className='bg-white rounded-se-full rounded-b-full p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex justify-center items-center gap-2'> <h2 className='text-xl font-bold mb-2 text-blue-500'>Medical History Tracking</h2> <img src={nurse} className='w-10' /></div>
            <p className='text-gray-700'>
              Easily track and save your medical history and health data with our secure system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}