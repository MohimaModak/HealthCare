import React, { useState } from "react";
import menu from "../../Gallery/menu.png";
import { Link } from "react-scroll";
import './Navbar.css';

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
        <div className="hidden md:block px-16 bg-blue-500 border rounded-full w-max mt-3">
          <nav className="navbar flex justify-center items-center">
            <div className="navbar-links lg:flex justify-center items-center">
              <Link to="/" smooth={true} duration={1000} className="text-xl mr-5">
                Home
              </Link>
              <Link to="/About" smooth={true} duration={1000} className="text-xl mr-5">
                About
              </Link>
              <Link to="/Services" smooth={true} duration={1000} className="text-xl mr-5">
                Services
              </Link>
              <Link to="/Insurance" smooth={true} duration={1000} className="text-xl mr-5">
                Insurance
              </Link>
              <Link to="/Testimonials" smooth={true} duration={1000} className="text-xl mr-5">
                Testimonial
              </Link>
              <Link to="/Contact" smooth={true} duration={1000} className="text-xl mr-5">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}