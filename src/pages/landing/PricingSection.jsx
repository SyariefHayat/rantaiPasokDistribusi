import EachUtils from '@/utils/EachUtils';
import React from 'react';

const PricingSection = () => {
    const pricingPlans = [
        {
            name: "Basic",
            price: "100.000",
            period: "/bulan",
            features: [
                "Bahan bungkusan",
                "Berbagai fitur terbaik"
            ],
            buttonText: "Pilih Rencana",
            buttonStyle: "border-2 border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600",
            cardStyle: "bg-white border border-gray-200",
            popular: false
        },
        {
            name: "Standard",
            price: "200.000",
            period: "/bulan",
            features: [
                "Aksi maksimal paket",
                "Pemisahan paket fasilitas"
            ],
            buttonText: "Pilih Rencana",
            buttonStyle: "bg-white text-green-600 hover:bg-gray-50",
            cardStyle: "bg-green-600 text-white transform scale-105",
            popular: true
        },
        {
            name: "Pro",
            price: "300.000",
            period: "/bulan",
            features: [
                "All fitur best sesuai",
                "Berbagai akon features"
            ],
            buttonText: "Pilih Rencana",
            buttonStyle: "bg-green-600 text-white hover:bg-green-700",
            cardStyle: "bg-white border border-gray-200",
            popular: false
        }
    ];

    return (
        <section id="pricing" className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Harga
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <EachUtils 
                        of={pricingPlans}
                        render={(item, index) => (
                            <div key={index} className="relative">
                                {/* {item.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                            Most Popular
                                        </div>
                                    </div>
                                )} */}
                                
                                <div className={`${item.cardStyle} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${item.popular ? 'ring-2 ring-green-600' : ''}`}>
                                    <div className="text-center mb-8">
                                        <h3 className={`text-2xl font-bold mb-4 ${item.popular ? 'text-white' : 'text-gray-900'}`}>
                                            {item.name}
                                        </h3>
                                        <div className="flex items-baseline justify-center">
                                            <span className={`text-sm ${item.popular ? 'text-green-100' : 'text-gray-500'}`}>
                                                Rp
                                            </span>
                                            <span className={`text-5xl font-bold mx-1 ${item.popular ? 'text-white' : 'text-gray-900'}`}>
                                                {item.price}
                                            </span>
                                            <span className={`text-sm ${item.popular ? 'text-green-100' : 'text-gray-500'}`}>
                                                {item.period}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        {item.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start space-x-3">
                                                <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${item.popular ? 'bg-green-500' : 'bg-green-100'}`}>
                                                    <svg className={`w-3 h-3 ${item.popular ? 'text-white' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className={`text-sm ${item.popular ? 'text-green-100' : 'text-gray-600'}`}>
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${item.buttonStyle}`}>
                                        {item.buttonText}
                                    </button>
                                </div>
                            </div>
                        )}
                    />
                </div>
            </div>
        </section>
    );
};

export default PricingSection;