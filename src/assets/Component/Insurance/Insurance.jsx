import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import InsuranceImg from "../../Gallery/Insurance.png";

export default function Insurance() {

    useEffect(() => {
      AOS.init({
        duration: 1500,
        easing: 'ease-out',
        once: true,
      });
    }, []);

  return (

    <section id="/Insurance" className="w-full bg-blue-50  text-slate-800">
      <div data-aos="fade-up" className="max-w-7xl mx-auto flex flex-col bg-blue-100 rounded-xl py-28 px-10 shadow-md  lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left ">
          <h2 className="text-3xl lg:text-5xl font-bold ">
            Affordable Care for <span className="text-blue-600">Everyone</span>
          </h2>
          <p className="text-lg my-5 font-bold">
            We Accept Most Insurance Plans and Offer Flexible Payment Options
          </p>
          <p data-aos="fade-up" className=" mt-4">
            At <strong className="text-blue-500">Vadra Hospital</strong>, we believe that
            quality healthcare should be accessible to all. We accept most major
            insurance plans and offer transparent pricing for self-pay patients.
            Our team is here to help you navigate your insurance coverage and
            explore flexible payment options to ensure you receive the care you
            need without financial stress.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-start gap-4">
            <button data-aos="fade-up" className="bg-blue-500 px-6 py-3 text-white font-medium text-sm
             sm:text-base lg:text-lg rounded">
              Verify Your Insurance
            </button>
            <button data-aos="fade-up" className="px-6 py-3 bg-blue-50 border border-blue-500
              text-blue-700 font-semibold shadow-xl
             rounded-lg hover:shadow-xl transition duration-300">
              View Payment Options
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div data-aos="fade-up" className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={InsuranceImg}
            alt="Insurance Coverage"
            className="w-full max-w-md mx-auto lg:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
