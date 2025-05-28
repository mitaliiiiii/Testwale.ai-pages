
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 md:px-20 flex justify-between items-center shadow">
      <div className="text-2xl font-bold text-[#15609E] tracking-wide">TESTWALE.AI</div>

      <div className="bg-[#F0DDFF] rounded-full px-8 py-2 flex gap-10 text-base font-medium text-gray-800">
        <Link to="/" className="hover:text-[#15609E] transition">Home</Link>
        <Link to="/dashboard" className="hover:text-[#15609E] transition">DashBoard</Link>
        <Link to="/about" className="hover:text-[#15609E] transition">About Us</Link>
      </div>

      <div className="flex gap-3">
        <button className="bg-[#001E32] text-white px-5 py-2 rounded-full text-sm hover:opacity-90">Login</button>
        <button className="bg-[#001E32] text-white px-5 py-2 rounded-full text-sm hover:opacity-90">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
