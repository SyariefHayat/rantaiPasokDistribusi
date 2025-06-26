import React from 'react';

import {
    Card,
    CardContent,
} from "@/components/ui/card"

import EachUtils from '@/utils/EachUtils';
import { LIST_FEATURES } from '@/constants/listFeatures';

const FeatureSection = () => {
    return (
        <section className="w-full min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 bg-gray-50 py-12">
            <div className="mx-auto text-center max-w-2xl mb-10">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Solusi Lengkap untuk Bisnis Jagung Anda
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Dari penanaman hingga distribusi, kami menyediakan ekosistem digital yang mendukung kesuksesan petani jagung
                </p>
            </div>

            <div className="flex gap-6 overflow-hidden pb-4">
                <EachUtils 
                    of={LIST_FEATURES}
                    render={(item, index) => (
                        <Card key={index} className="min-w-[300px] max-w-[350px] h-[450px] flex-shrink-0">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </CardContent>
                        </Card>
                    )}
                />
            </div>
        </section>
    );
};

export default FeatureSection;