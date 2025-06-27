import React from 'react';

import {
    Card,
    CardContent,
} from "@/components/ui/card"

import EachUtils from '@/utils/EachUtils';
import { LIST_FEATURES } from '@/constants/listFeatures';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const FeatureSection = () => {
    return (
        <section className="w-full min-h-screen flex flex-col gap-10 px-4 sm:px-6 lg:px-8 bg-gray-50 py-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
                <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
                        Solusi Lengkap untuk Bisnis Jagung Anda
                    </h2>
                </div>
                <div className="flex-1 lg:max-w-lg">
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                        Dari penanaman hingga distribusi, kami menyediakan ekosistem digital yang mendukung kesuksesan petani jagung
                    </p>
                </div>
            </div>

            <div className="block lg:hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <EachUtils 
                        of={LIST_FEATURES}
                        render={(item, index) => (
                            <Card 
                                key={index} 
                                className="relative h-[300px] md:h-[350px] overflow-hidden group cursor-pointer"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <CardContent className="p-6 h-full flex flex-col justify-end text-white relative z-10">
                                    <h3 className="text-xl md:text-2xl font-semibold mb-3 drop-shadow-lg">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm md:text-base leading-relaxed drop-shadow-md opacity-90">
                                        {item.description}
                                    </p>
                                </CardContent>
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </Card>
                        )}
                    />
                </div>
            </div>

            <ScrollArea className="w-full h-full hidden lg:block">
                <div className="flex gap-6 pb-4 min-w-max">
                    <EachUtils 
                        of={LIST_FEATURES}
                        render={(item, index) => (
                            <Card 
                                key={index} 
                                className="min-w-[300px] max-w-[350px] h-[450px] flex-shrink-0 items-center justify-end bg-cover bg-center text-white"
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <CardContent className="p-5">
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p>{item.description}</p>
                                </CardContent>
                            </Card>
                        )}
                    />
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </section>
    );
};

export default FeatureSection;