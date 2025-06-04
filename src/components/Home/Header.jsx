import React from "react";

const HomeFirstView = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Hola, soy <span className="text-indigo-600">[Tu Nombre]</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Ayudo a empresas y emprendedores a transformar ideas en productos digitales funcionales y escalables que resuelven problemas reales y generan valor tangible.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#portfolio"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition"
            >
              Ver portafolio
            </a>
            <a
              href="#contact"
              className="text-indigo-600 border border-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition"
            >
              Contáctame
            </a>
          </div>
        </div>

        {/* Optional image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/assets/avatar.png" // Replace with your image
            alt="Avatar"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeFirstView;
