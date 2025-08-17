import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center">
      <div className="w-full min-h-screen px-4 sm:px-6 flex items-center bg-[url(/background.png)] bg-cover bg-center text-white relative overflow-hidden">
        <h1 className="font-Avallon text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold leading-tight tracking-[0.1em] sm:tracking-[0.2em] pl-4 sm:pl-7 pt-16 sm:pt-20 absolute top-0">
          Selamat Datang
        </h1>
        <div className="w-full pl-4 sm:pl-7 flex flex-col lg:flex-row items-center lg:items-center pt-16 sm:pt-0">
          <div className="w-full lg:w-1/2 space-y-1 mb-8 lg:mb-0 text-center lg:text-left">
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
              Putus Rantai Pasok.
            </p>
            <p className="text-base sm:text-lg lg:text-xl">Satukan Petani dan Pasar</p>
            <p className="text-sm sm:text-base lg:text-lg">
              Petani Makmur Bersama SIJUKI HUB
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end w-full lg:w-1/2">
            <div className="w-[200px] sm:w-[300px] lg:w-[400px] h-32 sm:h-40 lg:h-52 bg-white rounded-full blur-3xl absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:right-32 lg:bottom-24 lg:transform-none z-10"></div>

            <img
              src="/mockup.png"
              alt="mockup sijuki"
              className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] relative z-10 max-w-full h-auto lg:mb-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;