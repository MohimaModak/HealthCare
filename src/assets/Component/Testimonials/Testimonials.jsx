import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from "../../Gallery/client1.jpeg"
import image2 from "../../Gallery/client2.webp"

export default function Testimonials() {

    useEffect(() => {
      AOS.init({
        duration: 1500,
        easing: 'ease-out',
        once: true,
      });
    }, []);

  return (
    <section id="/Testimonials" className="w-full bg-blue-50 py-28 px-10">
      <div data-aos="fade-up" className="max-w-7xl mx-auto text-center">
       
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
          What Our <span className='text-blue-500'>Patients Say</span> 
        </h2>

      
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
          <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-lg text-left">
            <img src={image1} className='w-10 h-10 rounded-full' />
            <p className="text-gray-700 italic my-4">
              "The care I received at <strong className="text-blue-500">Vadra Hospital</strong> was exceptional. 
              The staff was compassionate, and the doctors took the time to explain everything clearly."
            </p>
            <p className="font-semibold text-blue-500">– [Drabin Paul]</p>
          </div>

        
          <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-lg text-left">
          <img src={image2} className='w-10 h-10 rounded-full' />
            <p className="text-gray-700 italic my-4">
              "From diagnosis to treatment, the entire process was seamless. 
              I highly recommend this facility! The doctors took the time to explain everything clearly."
            </p>
            <p className="font-semibold text-blue-500">– [Porag Modak]</p>
          </div>

          <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-lg text-left">
            <img src={image1} className='w-10 h-10 rounded-full' />
            <p className="text-gray-700 italic my-4">
              "The care I received at <strong className="text-blue-500">Vadra Hospital</strong> was exceptional. 
              The staff was compassionate, and the doctors took the time to explain everything clearly."
            </p>
            <p className="font-semibold text-blue-500">– [Shatarupa Paul]</p>
          </div>

        </div>
      </div>
    </section>
  );
}
