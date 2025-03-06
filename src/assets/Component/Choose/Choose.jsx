import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Choose() {

    useEffect(() => {
      AOS.init({
        duration: 1500,
        easing: 'ease-out',
        once: true,
      });
    }, []);

  return (
    <section className="bg-blue-50 py-20 px-10 text-black">
      <div data-aos="fade-up" className="max-w-6xl mx-auto lg:flex justify-center items-center">
        {/* Left Section - Heading, Subheading & Button */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Why Choose <strong>Vadra Hospital</strong>?
          </h2>
          <p className="text-lg my-5 font-bold">
            Your Trusted Partner in Health and Wellness
          </p>
          <button className=" bg-blue-500 px-6 py-3 text-white font-medium text-sm sm:text-base lg:text-lg rounded-sm">
            Meet Our Team
          </button>
        </div>

        {/* Right Section - Features */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 space-y-8">
          <p data-aos="fade-up" className="bg-white p-2 text-center shadow rounded-se-full rounded-b-full">
            <strong className="text-blue-500">✓ Expert Team:</strong> Our highly skilled professionals are
            leaders in their fields.
          </p>
          <p data-aos="fade-up" className="bg-white p-2 text-center shadow rounded-se-full rounded-b-full">
            <strong className="text-blue-500">✓ Cutting-Edge Technology:</strong> We use the latest medical
            advancements.
          </p>
          <p data-aos="fade-up" className="bg-white p-2 text-center shadow rounded-se-full rounded-b-full">
            <strong className="text-blue-500">✓ Patient-Centered Care:</strong> Your comfort and well-being
            are our top priorities.
          </p>
          <p data-aos="fade-up" className="bg-white p-2 text-center shadow rounded-se-full rounded-b-full">
            <strong className="text-blue-500">✓ Convenient Scheduling:</strong> Easy online booking and
            flexible appointment times.
          </p>
          <p data-aos="fade-up" className="bg-white p-2 text-center shadow rounded-se-full rounded-b-full">
            <strong className="text-blue-500">✓ Affordable Options:</strong> Transparent pricing and
            insurance acceptance.
          </p>
        </div>
      </div>
    </section>
  );
}
