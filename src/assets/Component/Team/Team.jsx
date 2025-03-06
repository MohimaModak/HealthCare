import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import doctor1 from "../../Gallery/doctor1.png";
import doctor2 from "../../Gallery/doctor2.png";
import doctor3 from "../../Gallery/doctor3.png";
import doctor4 from "../../Gallery/doctor4.png";

export default function Team() {

    useEffect(() => {
      AOS.init({
        duration: 1500,
        easing: 'ease-out',
        once: true,
      });
    }, []);

  return (
    <section id="team" className="w-full bg-blue-50 py-20 px-10">
      <div data-aos="fade-up" className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert <span className="text-blue-600"> Medical Team</span></h2> 
        <p className="text-lg text-gray-600 mb-8">
          Compassionate Care from Trusted Professionals
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Our team of highly skilled doctors, nurses, and specialists is dedicated to providing you with the best possible care. With years of experience and a commitment to ongoing education, our professionals stay at the forefront of medical advancements. Get to know the faces behind your care and feel confident in the expertise of our team.
        </p>

        {/* Team Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Doctor 1 */}
          <div className="flex flex-col items-center">
            <img src={doctor1} alt="Doctor 1" className="w-64 h-64 rounded-sm object-cover mb-4 shadow-lg"/>
            <h4 className="font-semibold text-xl text-gray-800">Dr. John Doe</h4>
            <p className="text-gray-600">Cardiologist</p>
          </div>

          {/* Doctor 2 */}
          <div className="flex flex-col items-center">
            <img src={doctor3} alt="Doctor 2" className="w-64 h-64 rounded-sm object-cover mb-4 shadow-lg"/>
            <h4 className="font-semibold text-xl text-gray-800">Dr. Jane Smith</h4>
            <p className="text-gray-600">Orthopedic Specialist</p>
          </div>

          {/* Doctor 3 */}
          <div className="flex flex-col items-center">
            <img src={doctor2} alt="Doctor 3" className="w-64 h-64 rounded-sm object-cover mb-4 shadow-lg"/>
            <h4 className="font-semibold text-xl text-gray-800">Dr. Emily Williams</h4>
            <p className="text-gray-600">Pediatrician</p>
          </div>

          {/* Doctor 4 */}
          <div className="flex flex-col items-center">
            <img src={doctor4} alt="Doctor 4" className="w-64 h-64 rounded-sm object-cover mb-4 shadow-lg"/>
            <h4 className="font-semibold text-xl text-gray-800">Dr. Michael Johnson</h4>
            <p className="text-gray-600">Neurologist</p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-8">
          <a
            href="#learn-more"
            className="inline-block bg-blue-500 px-6 py-3 text-white font-medium text-sm sm:text-base lg:text-lg rounded-sm"
          >
            Learn More About Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
