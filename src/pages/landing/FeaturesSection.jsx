import React from 'react';
import EachUtils from '@/utils/EachUtils';

const FeaturesSection = () => {
    const features = [
        {
            icon: (
                <img src="/production.png" /> 
            ),
            title: "Manajemen Produksi",
            description: "Pantau fasilitas dan stok jagung dengan sistem terintegrasi"
        },
        {
            icon: (
                <img src="/price.png" /> 
            ),
            title: "Pemantauan Harga",
            description: "Lihat harga jagung sektor swasta terkini dan akurat"
        },
        {
            icon: (
                <img src="/logistik.png" />
            ),
            title: "Logistik Terintegrasi",
            description: "Alur pengiriman jagung dengan solusi terintegrasi"
        },
        {
            icon: (
                <img src="/logistik.png" />
            ),
            title: "Analisis Data",
            description: "Dapatkan wawasan dari data produksi, harga, dan distribusi untuk pengambilan keputusan yang lebih tepat"
        }
    ];

    return (
        <section id="features" className="min-h-screen bg-white">
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Fitur
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <EachUtils 
                        of={features}
                        render={(item, index) => (
                            <div key={index} className="group">
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                                    <div className="mb-6 flex justify-center">
                                        <div className="w-28 h-28 p-2 rounded-2xl flex items-center justify-center duration-300">
                                            {item.icon}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-12 h-1 bg-green-600 rounded-full mx-auto"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;