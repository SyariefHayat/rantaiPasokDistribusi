import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
    return (
        <section className="min-h-screen bg-gray-50 flex items-center">
            <div className="w-full h-screen p-4 sm:p-6 flex flex-col bg-[url(/background.png)] bg-cover bg-center text-white relative overflow-hidden">
                <h1 className="font-Avallon text-5xl md:text-8xl font-bold leading-tight tracking-[0.1em] sm:tracking-[0.2em] pl-7 pt-10">
                Selamat Datang
                </h1>

                <div className="w-full h-full pl-7 flex flex-col-reverse lg:flex-row lg:items-center">
                    <div className="w-full lg:w-1/2 space-y-2 mb-8 lg:mb-0  text-start lg:text-left">
                        <p className="text-xl md:text-4xl font-Bright font-semibold tracking-[0.1em]">
                        Putus Rantai Pasok,
                        </p>
                        <p className="text-lg md:text-xl">Satukan Petani dan Pasar</p>
                        <p className="text-lg md:text-xl">
                        Petani Makmur Bersama SIJUKI HUB
                        </p>
                        <Button className="bg-green-500 mt-3">Gabung Sekarang</Button>
                    </div>

                    <div className="relative flex justify-center lg:justify-end w-full lg:w-1/2">
                        <div className="w-[200px] sm:w-[300px] lg:w-[400px] h-32 sm:h-40 lg:h-52 bg-white rounded-full blur-3xl absolute left-1/2 transform -translate-x-1/2 lg:right-32 -top-44 md:-top-72 lg:top-0 lg:transform-none z-10"></div>

                        <img
                        src="/mockup.png"
                        alt="mockup sijuki"
                        className="w-[400px] md:w-[550px] lg:w-[450px] absolute z-10 max-w-full h-auto lg:mb-20 -top-[400px] md:-top-[650px] lg:-top-[270px] lg:right-28"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;