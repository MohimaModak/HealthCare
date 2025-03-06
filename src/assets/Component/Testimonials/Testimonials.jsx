import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Testimonials() {

    useEffect(() => {
      AOS.init({
        duration: 1500,
        easing: 'ease-out',
        once: true,
      });
    }, []);

  return (
    <section id="/Testimonials" className="w-full bg-blue-50 py-20 px-10">
      <div data-aos="fade-up" className="max-w-6xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-3xl font-bold text-gray-900">
          What Our Patients Say
        </h2>

        {/* Testimonials Container */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-lg text-left">
            <p className="text-gray-700 italic">
              "The care I received at <strong className="text-blue-500">Vadra Hospital</strong> was exceptional. 
              The staff was compassionate, and the doctors took the time to explain everything clearly."
            </p>
            <p className="mt-4 font-semibold text-blue-500">– [Drabin Paul]</p>
          </div>

          {/* Testimonial 2 */}
          <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-lg text-left">
            <p className="text-gray-700 italic">
              "From diagnosis to treatment, the entire process was seamless. 
              I highly recommend this facility!"
            </p>
            <p className="mt-4 font-semibold text-blue-500">– [Porag Modak]</p>
          </div>
        </div>
      </div>
    </section>
  );
}
