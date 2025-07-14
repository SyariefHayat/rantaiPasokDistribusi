import React from 'react';

const HeroSection = () => {
    return (
        <section className="h-full bg-gray-50">
            <div className="container mx-auto px-6 py-6 sm:py-14">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="flex-1 space-y-8">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Pemutus Rantai<br />
                            Distribusi Jagung
                        </h1>
                        
                        <p className="text-xl text-gray-600 max-w-lg">
                            Kelola distribusi jagung secara efisien dan transparan.
                        </p>
                        
                        <button className="relative px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg cursor-pointer z-10">
                            Mulai Sekarang
                        </button>
                    </div>

                    <div className="flex-1 relative">
                        <div className="relative">
                            <div className="bg-gray-200 rounded-t-2xl p-4 shadow-2xl">
                                <div className="bg-white rounded-lg p-6 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                            </div>
                                            <span className="font-semibold text-gray-800">Dashboard</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-8 h-6 bg-green-600 rounded"></div>
                                            <div className="w-6 h-6 bg-gray-300 rounded"></div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="h-16 bg-gray-100 rounded-lg flex items-center justify-center relative">
                                            <svg className="w-full h-full" viewBox="0 0 200 60">
                                                <path
                                                    d="M20,40 Q60,20 100,30 T180,25"
                                                    fill="none"
                                                    stroke="#059669"
                                                    strokeWidth="2"
                                                />
                                            </svg>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <div className="w-8 h-8 bg-green-600 rounded-full mb-2"></div>
                                                <div className="space-y-1">
                                                    <div className="w-16 h-2 bg-green-200 rounded"></div>
                                                    <div className="w-12 h-2 bg-green-200 rounded"></div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex justify-end mb-2">
                                                    <div className="w-8 h-6 bg-green-600 rounded"></div>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="w-16 h-2 bg-gray-200 rounded"></div>
                                                    <div className="w-12 h-2 bg-gray-200 rounded"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-end space-x-2 h-16">
                                            <div className="w-6 bg-green-200 rounded-t" style={{height: '30%'}}></div>
                                            <div className="w-6 bg-green-400 rounded-t" style={{height: '60%'}}></div>
                                            <div className="w-6 bg-green-600 rounded-t" style={{height: '80%'}}></div>
                                            <div className="w-6 bg-green-400 rounded-t" style={{height: '45%'}}></div>
                                            <div className="w-6 bg-green-500 rounded-t" style={{height: '70%'}}></div>
                                            <div className="w-6 bg-green-600 rounded-t" style={{height: '90%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-gray-300 h-8 rounded-b-2xl"></div>
                            <div className="bg-gray-400 h-4 w-32 mx-auto rounded-b-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;