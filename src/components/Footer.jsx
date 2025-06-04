import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Social Icons */}
        <div className="flex space-x-6 text-white text-xl">
          <a href="#"><FaFacebookF className="hover:text-gray-400" /></a>
          <a href="#"><FaInstagram className="hover:text-gray-400" /></a>
          <a href="#"><FaTwitter className="hover:text-gray-400" /></a>
          <a href="#"><FaGoogle className="hover:text-gray-400" /></a>
          <a href="#"><FaYoutube className="hover:text-gray-400" /></a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-gray-400 text-xs">Home</a>
          <a href="#" className="hover:text-gray-400">News</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Contact Us</a>
          <a href="#" className="hover:text-gray-400">Our Team</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400 text-center">
          Copyright ©2022. Designed by <span className="text-white font-semibold">Caroline</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
