import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    return (
        <section className="min-h-screen bg-gray-50">
            <div className="min-h-screen w-full p-4 sm:p-6 lg:p-8 flex flex-col justify-center bg-[url(/background.png)] bg-cover bg-center bg-no-repeat text-white relative overflow-hidden">
                <div className="flex-shrink-0 pt-6 sm:pt-8 lg:pt-12">
                    <h1 className="font-Avallon text-6xl sm:text-7xl lg:text-9xl font-bold leading-tight tracking-[0.05em] sm:tracking-[0.1em] lg:tracking-[0.2em] px-2 sm:px-4 lg:px-7">
                        Selamat Datang
                    </h1>
                    <img src="/desc-text.png" alt="" className="w-[80%] sm:w-[55%] lg:w-[35%] ml-12 sm:ml-[39.5%] lg:ml-[41.8%] mt-5" />
                </div>

                <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 px-2 sm:px-4 lg:px-7 py-8 lg:py-0">
                    <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6 order-2 lg:order-1 -mt-5 sm:-mt-16 lg:mt-0">
                        <div className="space-y-2 lg:space-y-4 -ml-2 sm:-ml-3">
                            <div className="w-full h-10 sm:h-14 lg:h-[70px] flex items-center justify-start">
                                <img 
                                    src="/hero-text.png" 
                                    alt="Putus Rantai Pasok" 
                                    className="h-full w-auto object-contain max-w-full"
                                />
                            </div>
                        </div>
                        <div className="pt-4">
                            <Button className="bg-green-500 hover:bg-green-600 transition-colors duration-200 px-6 py-6 text-base sm:text-lg font-medium cursor-pointer">
                                Gabung Sekarang
                            </Button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end order-1 lg:order-2 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                        <div className="relative z-10 flex items-center justify-center w-full h-full mt-3 sm:mt-0 lg:-mt-1">
                            <img
                                src="/mockup.png"
                                alt="mockup sijuki"
                                className="h-auto w-full md:w-[550px] lg:w-[650px] drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;