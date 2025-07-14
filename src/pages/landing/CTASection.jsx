import React from 'react';

const CTASection = () => {
    return (
        <div className="bg-gradient-to-r from-green-600 to-green-700 py-20">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Main CTA Content */}
                    <div className="mb-8">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Siap Memulai Distribusi Jagung yang Lebih Efisien?
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Bergabunglah dengan ribuan petani dan distributor yang telah merasakan kemudahan SIJUKI dalam mengelola distribusi jagung secara transparan dan efisien.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Mulai Gratis Sekarang
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300">
                            Pelajari Lebih Lanjut
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">1000+</div>
                            <div className="text-green-100">Petani Terdaftar</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">500+</div>
                            <div className="text-green-100">Distributor Aktif</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                            <div className="text-green-100">Uptime Sistem</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-repeat" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>
        </div>
    );
};

export default CTASection;