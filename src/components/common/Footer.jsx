import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h3 className="text-blue-700 font-bold text-xl mb-2">TESTWALE.AI</h3>
          <p className="text-sm text-gray-600 mb-4 whitespace-nowrap">
            AI-powered exam preparation platform for students from Grade 1 to
            12.
          </p>
          <div className="flex gap-4 text-gray-500">
            <FiFacebook className="hover:text-blue-700 cursor-pointer" />
            <FiInstagram className="hover:text-blue-700 cursor-pointer" />
            <FiTwitter className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-sm mb-2">PLATFORM</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-blue-700">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Subjects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Grade Levels
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Link to="/Support">
              <h4 className="font-bold text-sm mb-2"><h4 >Support</h4></h4>
            </Link>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-blue-700">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Link to="/About">
              <h4 className="font-bold text-sm mb-2"><h4 >COMPANY</h4></h4>
            </Link>
            
            <ul className="space-y-1">
              <li>
                
                <a href="#" className="hover:text-blue-700">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Link to="/legal">
              <h4 className="font-bold text-sm mb-2">LEGAL</h4>
            </Link>

            <ul className="space-y-1">
              <li>
                <Link to="/legal#privacy" className="hover:text-blue-700">
                  Privacy Policy
                </Link>
              </li>
              <li>
               <Link to="/legal#terms" className="hover:text-blue-700">
                 Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/legal#cookie" className="hover:text-blue-700">
                 Cookie
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-t border-gray-200" />
        <p className="text-center text-xs text-gray-500">
          © 2024 TESTWALE.AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
