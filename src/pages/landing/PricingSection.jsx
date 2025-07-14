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
            buttonText: "Choose Plan",
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
            buttonText: "Choose Plan",
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
            buttonText: "Choose Plan",
            buttonStyle: "bg-green-600 text-white hover:bg-green-700",
            cardStyle: "bg-white border border-gray-200",
            popular: false
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Pricing Content */}
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Pricing
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="relative">
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </div>
                                </div>
                            )}
                            
                            <div className={`${plan.cardStyle} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-green-600' : ''}`}>
                                {/* Plan Header */}
                                <div className="text-center mb-8">
                                    <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                        {plan.name}
                                    </h3>
                                    <div className="flex items-baseline justify-center">
                                        <span className={`text-sm ${plan.popular ? 'text-green-100' : 'text-gray-500'}`}>
                                            Rp
                                        </span>
                                        <span className={`text-5xl font-bold mx-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                            {plan.price}
                                        </span>
                                        <span className={`text-sm ${plan.popular ? 'text-green-100' : 'text-gray-500'}`}>
                                            {plan.period}
                                        </span>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-start space-x-3">
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.popular ? 'bg-green-500' : 'bg-green-100'}`}>
                                                <svg className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className={`text-sm ${plan.popular ? 'text-green-100' : 'text-gray-600'}`}>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.buttonStyle}`}>
                                    {plan.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-4">
                        Semua paket mencakup akses ke platform SIJUKI
                    </p>
                    <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>30 hari trial gratis</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span>Pembayaran aman</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Support 24/7</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;