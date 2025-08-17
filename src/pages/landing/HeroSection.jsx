import React from "react";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-gray-50">
            <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center" />

            <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20 flex flex-col lg:flex-row items-center gap-10 text-white">
                
                <div className="w-full lg:w-1/2 space-y-6">
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                        Selamat Datang
                    </h1>
                    <p className="text-xl lg:text-2xl font-semibold text-green-300">
                        Putus Rantai Pasok
                    </p>
                    <p className="text-lg lg:text-xl">
                        Satukan Petani dan Pasar
                    </p>
                    <p className="text-base lg:text-lg text-gray-200">
                        Petani Makmur Bersama{" "}
                        <span className="font-semibold text-green-400">SIJUKI HUB</span>
                    </p>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src="/mockup.png"
                        alt="mockup sijuki"
                        className="w-full max-w-md drop-shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;