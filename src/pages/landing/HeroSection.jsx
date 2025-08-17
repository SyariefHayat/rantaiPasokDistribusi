import React from 'react';

const HeroSection = () => {
    return (
        <section className="min-h-screen bg-gray-50 flex items-center">
            <div className="w-full h-screen bg-[url(/beranda.png)] bg-cover object-center"></div>
            {/* <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 sm:-mt-16">
                    
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Pemutus Rantai<br />
                            Distribusi Jagung
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                            Kelola distribusi jagung secara efisien dan transparan.
                        </p>
                        
                        <div>
                            <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg">
                                Mulai Sekarang
                            </button>
                        </div>
                    </div>

                    <div className="">
                        <img 
                            src="/maskot.png" 
                            alt="Maskot Jagung" 
                            className="w-full max-w-md mx-auto lg:mx-0 object-contain"
                        />
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default HeroSection;