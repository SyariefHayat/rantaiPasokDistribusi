import React from 'react';

const HeroSection = () => {
    return (
        <section className="h-full bg-gray-50">
            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    
                    {/* Bagian Kiri: Teks */}
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Pemutus Rantai<br />
                            Distribusi Jagung
                        </h1>
                        
                        <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                            Kelola distribusi jagung secara efisien dan transparan.
                        </p>
                        
                        <div>
                            <button className="relative px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg cursor-pointer z-10">
                                Mulai Sekarang
                            </button>
                        </div>
                    </div>

                    {/* Bagian Kanan: Gambar */}
                    <div className="flex-1 min-h-[200px] sm:h-80 bg-[url('/51.webp')] bg-center bg-cover rounded-xl shadow-lg w-full bg-gray-200">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;