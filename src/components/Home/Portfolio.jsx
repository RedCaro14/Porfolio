import React from "react";

const PortfolioSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Proyectos destacados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Descubre algunos de mis trabajos más significativos en diseño y desarrollo web</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Project 1 */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative overflow-hidden">
              <img 
                src="/images/portfolio-image.png" 
                alt="Cartilla PCMU" 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Cartilla PCMU</h3>
              <p className="text-gray-600 mb-4">Diseño editorial realizado para <span className="text-pink-500 font-medium">MinCulturas</span></p>
              <button className="w-full bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300 font-medium">
                Ver proyecto
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative overflow-hidden">
              <img 
                src="/images/portfolio-image.png" 
                alt="PetSanar" 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">PetSanar</h3>
              <p className="text-gray-600 mb-4">Desarrollo web realizado para <span className="text-pink-500 font-medium">#Numéricas</span></p>
              <button className="w-full bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300 font-medium">
                Ver proyecto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
