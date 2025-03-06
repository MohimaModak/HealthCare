import React from "react";
import facebook from "../../Gallery/facebook.png";
import twitter from "../../Gallery/twitter.png";
import youtube from "../../Gallery/youtube.png";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Stay Connected Section */}
        <h3 className="text-3xl font-bold mb-4">Stay Connected with Us</h3>
        <p className="text-lg mb-6">
          © {new Date().getFullYear()} Vadra Hospital. All Rights Reserved.
        </p>
        
        {/* Links */}
        <div className="mb-6">
          <a href="/privacy-policy" className="text-white mx-4">Privacy Policy</a>
          <a href="/terms-of-service" className="text-white mx-4">Terms of Service</a>
          <a href="/sitemap" className="text-white mx-4">Sitemap</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="w-8 h-8 transition-transform transform hover:scale-110"/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" className="w-8 h-8 transition-transform transform hover:scale-110"/>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" className="w-8 h-8 transition-transform transform hover:scale-110"/>
          </a>
        </div>
      </div>
    </footer>
  );
}
