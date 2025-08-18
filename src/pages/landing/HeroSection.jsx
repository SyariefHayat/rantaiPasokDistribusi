import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
    return (
        <section className="min-h-screen bg-gray-50">
            <div className="min-h-screen w-full p-4 sm:p-6 lg:p-8 flex flex-col bg-[url(/background.png)] bg-cover bg-center bg-no-repeat text-white relative overflow-hidden">
                <div className="flex-shrink-0 pt-6 sm:pt-8 lg:pt-12">
                    <h1 className="font-Avallon text-4xl sm:text-8xl font-bold leading-tight tracking-[0.05em] sm:tracking-[0.1em] lg:tracking-[0.2em] px-2 sm:px-4 lg:px-7">
                        Selamat Datang
                    </h1>
                </div>

                <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 px-2 sm:px-4 lg:px-7 py-8 lg:py-0">
                    <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6 order-2 lg:order-1">
                        <div className="space-y-2 lg:space-y-4">
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-Bright font-semibold tracking-[0.05em] sm:tracking-[0.1em] leading-tight">
                                Putus Rantai Pasok,
                            </p>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                                Satukan Petani dan Pasar
                            </p>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                                Petani Makmur Bersama SIJUKI HUB
                            </p>
                        </div>
                        <div className="pt-4">
                            <Button className="bg-green-500 hover:bg-green-600 transition-colors duration-200 px-6 py-3 text-base sm:text-lg font-medium">
                                Gabung Sekarang
                            </Button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end order-1 lg:order-2 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                        <div className="absolute w-48 h-24 sm:w-64 sm:h-32 md:w-80 md:h-40 lg:w-96 lg:h-48 bg-white rounded-full blur-3xl opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:top-1/3 lg:left-1/4"></div>

                        <div className="relative z-10 flex items-center justify-center w-full h-full">
                            <img
                                src="/mockup.png"
                                alt="mockup sijuki"
                                className="w-64 h-auto sm:w-96 lg:w-[420px] xl:w-[480px]max-w-full object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;