import React from 'react';

const FeaturesSection = () => {
    const features = [
        {
            icon: (
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: "Manajemen Produksi",
            description: "Pantau fasilitas dan stok jagung dengan sistem terintegrasi"
        },
        {
            icon: (
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: "Pemantauan Harga",
            description: "Lihat harga jagung sektor swasta terkini dan akurat"
        },
        {
            icon: (
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            title: "Logistik Terintegrasi",
            description: "Alur pengiriman jagung dengan solusi terintegrasi"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Features Content */}
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Features
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="group">
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                                {/* Icon Container */}
                                <div className="mb-6 flex justify-center">
                                    <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                                        {feature.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Hover Effect Indicator */}
                                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-12 h-1 bg-green-600 rounded-full mx-auto"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;