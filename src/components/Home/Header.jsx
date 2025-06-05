import React from "react";

const HomeFirstView = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-20 px-6 md:px-12 lg:px-24 flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Hola, soy <span className="text-[#F00E8D]">Carolina</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Ayudo a empresas y emprendedores a transformar ideas en productos digitales funcionales y escalables que resuelven problemas reales y generan valor tangible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#portfolio"
              className="bg-[#F00E8D] text-white px-8 py-3 rounded-full font-medium hover:bg-[#F00E8D]/90 transition-all duration-300 transform hover:scale-105"
            >
              Ver portafolio
            </a>
            <a
              href="#contact"
              className="text-[#F00E8D] border-2 border-[#F00E8D] px-8 py-3 rounded-full font-medium hover:bg-[#F00E8D]/10 transition-all duration-300 transform hover:scale-105"
            >
              Contáctame
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#F00E8D]/10 rounded-full blur-2xl transform -rotate-6"></div>
            <img
              src="/assets/avatar.png"
              alt="Avatar"
              className="w-72 h-72 object-cover rounded-full shadow-lg relative z-10 transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFirstView;
