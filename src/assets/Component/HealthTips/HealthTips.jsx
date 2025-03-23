import React from "react";

export default function HealthTips() {
  return (
    <section id="health-tips" className="w-full bg-blue-200 py-28 px-10 text-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 data-aos="fade-up" className="text-3xl lg:text-5xl font-bold">
          Stay Informed with Our <span className="text-blue-600">Health Tips</span> 
        </h2>
        <p data-aos="fade-up" className="text-lg text-slate-700 mt-2">
          Explore our latest articles and tips to stay healthy and informed.
        </p>

        {/* Blog List Container */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Article 1 */}
          <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
            <h3 className="text-lg font-semibold">
              5 Ways to Boost Your Immune System Naturally
            </h3>
            <p className="text-gray-700 mt-2 text-sm">
              Learn simple and natural ways to strengthen your immune system
              through diet and lifestyle.
            </p>
          </div>

          {/* Article 2 */}
          <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
            <h3 className="text-lg font-semibold">
              Understanding the Signs of Heart Disease
            </h3>
            <p className="text-gray-700 mt-2 text-sm">
              Early detection of heart disease can save lives. Recognize the key symptoms today.
            </p>
          </div>

          {/* Article 3 */}
          <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
            <h3 className="text-lg font-semibold">
              The Importance of Regular Health Check-Ups
            </h3>
            <p className="text-gray-700 mt-2 text-sm">
              Preventive healthcare is essential. Discover why regular check-ups are vital for a healthier life.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div data-aos="fade-up" className="mt-8">
          <button className="bg-blue-500 px-6 py-3 text-white font-medium text-sm sm:text-base lg:text-lg rounded">
            Read More Health Tips
          </button>
        </div>
      </div>
    </section>
  );
}
