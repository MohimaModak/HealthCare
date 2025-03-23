import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import OnlineDoctor from "../../Gallery/OnlineDoctor.png";
import phoneImg from "../../Gallery/whatsapp.png";
import mailImg from "../../Gallery/mail.png";
import home from "../../Gallery/home.png";

export default function Contact() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  return (
    <section id="/Contact" className="w-full bg-blue-50 py-28 px-10 text-slate-800">
      <div data-aos="fade-up">
        <div className="text-center"><h2 className="text-3xl lg:text-5xl font-bold">Get in Touch Today</h2>
          <p data-aos="fade-up" className="text-lg text-gray-600 my-5">
            Have questions or ready to schedule an appointment? We’re here to help!
          </p></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-center text-center md:text-left">

            <img data-aos="fade-up" src={OnlineDoctor} alt="Online Doctor" className="w-96 lg:w-[500px] h-auto" />


            <div className=" md:flex justify-center items-center gap-10 mt-5">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <img src={phoneImg} alt="Phone" className="w-5 h-5" />
                <p className="font-medium text-gray-800"> 45824865733</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <img src={mailImg} alt="Mail" className="w-5 h-5" />
                <p className="font-medium text-gray-800"> vadra@gmail.com</p>
              </div>

            </div>

          </div>

          <div className="bg-white p-8 shadow-lg rounded-lg">

            <form data-aos="fade-up" className="grid gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 px-6 py-3 text-white font-medium 
                text-sm sm:text-base lg:text-lg rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
