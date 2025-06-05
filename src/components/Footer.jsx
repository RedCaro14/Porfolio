import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white to-gray-50 py-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Social Icons */}
          <div className="flex space-x-8">
            <a 
              href="https://github.com/kalugy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#F00E8D] transition-colors duration-300 transform hover:scale-110"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-[#F00E8D] transition-colors duration-300 transform hover:scale-110"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-[#F00E8D] transition-colors duration-300 transform hover:scale-110"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-[#F00E8D] transition-colors duration-300 transform hover:scale-110"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/" className="text-gray-600 hover:text-[#F00E8D] transition-colors duration-300">Inicio</a>
            <a href="/profile" className="text-gray-600 hover:text-[#F00E8D] transition-colors duration-300">Perfil</a>
            <a href="/projects" className="text-gray-600 hover:text-[#F00E8D] transition-colors duration-300">Proyectos</a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Carolina. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
