import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import stethoscope from "../../Gallery/stethoscope.png"
import pill from "../../Gallery/pill.png"
import lungs from "../../Gallery/lungs.png"

export default function Choose() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  return (
    <section className="bg-blue-50 py-28 px-10 text-slate-800">
      <div data-aos="fade-up" className="max-w-7xl mx-auto lg:flex justify-between items-center">
        <div className="lg:w-3/2 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Why Choose <strong className='text-blue-500'>Vadra Hospital?</strong>
          </h2>
          <p className="text-lg lg:text-xl my-5 font-bold">
            Immediate attention for critical health needs.
          </p>
          <p className="text-base lg:text-xl my-5 font-medium">
            Where Your Health Meets Trusted Expertise – Book Your Appointment Today
          </p>
          <a href="/"><button className=" bg-blue-500 px-6 py-3 text-white font-medium
           text-sm sm:text-base lg:text-lg rounded">
            Meet Our Team
          </button></a>
        </div>
        <div className="grid gap-6 mt-10 lg:mt-0">
          <div data-aos="fade-up" className="flex items-center gap-6 p-6 bg-blue-100 rounded-xl shadow-md">
            <div>
              <div className='flex items-center gap-5 mb-1'>
                <img src={stethoscope} className="w-12 h-12 bg-blue-300 rounded p-3" />
                <h3 className="text-xl font-semibold text-blue-600">Emergency Care</h3>
              </div>
              <div>
                <p className="text-slate-700 font-medium">
                  Providing rapid response and expert care for life-threatening conditions, ensuring immediate treatment when you need it the most.</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="flex items-center gap-6 p-6 bg-blue-100 rounded-xl shadow-md">
            <div>
              <div className='flex items-center gap-5 mb-1'>
                <img src={pill} className="w-12 h-12 bg-blue-300 rounded p-3" />
                <h3 className="text-xl font-semibold text-blue-600">Diagnostic Imaging</h3>
              </div>

              <div>
                <p className="text-slate-700 font-medium">
                  Utilizing advanced imaging technologies, we provide accurate and timely diagnoses to guide your treatment plan and ensure the best possible outcomes.</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="flex items-center gap-6 p-6 bg-blue-100 rounded-xl shadow-md">
            <div>
              <div className='flex items-center gap-5 mb-1'>
                <img src={lungs} className="w-12 h-12 bg-blue-300 rounded p-3" />
                <h3 className="text-xl font-semibold text-blue-600">Surgical Services
                </h3>
              </div>
              <div>
                <p className="text-slate-700 font-medium">
                  Comprehensive surgical solutions for various medical conditions, performed by experienced surgeons using the latest techniques and equipment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
