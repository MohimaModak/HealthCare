import React, { useState } from "react";
import menu from "../../Gallery/menu.png";
import { Link } from "react-scroll";
import './Navbar.css';
import about from "../../Gallery/lungs.png"


export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full text-white font-medium top-0 z-50">
      {/* Mobile Navbar */}
      <div className="md:hidden sm:block text-sm" onClick={toggleButton}>
        <span className="cursor-pointer p-5"><img src={menu} className="w-10" alt="menu" /></span>
      </div>
      <div className={`mobile-menu ${toggle ? "open" : ""}`}>
        <div className="navbar-links">
          <Link to="/" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Home
          </Link>
          <Link to="/About" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            About
          </Link>
          <Link to="/Services" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Services
          </Link>
          <Link to="/Insurance" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Insurance
          </Link>
          <Link to="/Testimonials" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Testimonial
          </Link>
          <Link to="/Contact" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Contact
          </Link>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="flex justify-center items-center">
        <div className="hidden md:block bg-sky-50 text-blue-500 w-full">
          <nav className="navbar flex justify-between items-center gap-2">

            <div className=" flex items-center">
              <h1 className="text-2xl lg:text-4xl font-bold">HealthCare</h1>
            </div>

            <div className="navbar-links lg:flex justify-evenly items-center">
              <Link to="/" smooth={true} duration={1000} className="text-xl mr-5 font-semibold">
                Home
              </Link>
              <Link to="/About" smooth={true} duration={1000} className="text-xl mr-5 font-semibold">
                About
              </Link>
              <Link to="/Services" smooth={true} duration={1000} className="text-xl mr-5 font-semibold">
                Services
              </Link>
              <Link to="/Insurance" smooth={true} duration={1000} className="text-xl mr-5 font-semibold">
                Insurance
              </Link>
              <Link to="/Testimonials" smooth={true} duration={1000} className="text-xl mr-5 font-semibold">
                Testimonial
              </Link>
              <Link to="/Contact" smooth={true} duration={1000} className="text-xl font-semibold">
                Contact
              </Link>

            </div>

            <div className="text-lg lg:text-xl bg-blue-500 px-2.5 lg:px-4 py-1.5 rounded-full text-white">
              <button>Sign Up</button>
            </div>

          </nav>
        </div>
      </div>
    </div>
  );
}