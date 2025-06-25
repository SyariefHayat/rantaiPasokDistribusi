import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Star } from 'lucide-react';

const HeroSection = () => {
    const [statsCounter, setStatsCounter] = useState({ farmers: 0, transactions: 0, coverage: 0 });

    useEffect(() => {
        const targets = { farmers: 5000, transactions: 25000, coverage: 150 };
        const duration = 2000;
        const steps = 60;
        const stepTime = duration / steps;
        
        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            
            setStatsCounter({
                farmers: Math.floor(targets.farmers * progress),
                transactions: Math.floor(targets.transactions * progress),
                coverage: Math.floor(targets.coverage * progress)
            });
            
            if (currentStep >= steps) {
                clearInterval(timer);
                setStatsCounter(targets);
            }
        }, stepTime);
        
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-20 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Badge className="bg-green-100 text-green-800 border-green-200">
                                🌽 Platform Agribisnis Terpercaya untuk Petani Jagung
                            </Badge>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Wujudkan Kesejahteraan Petani Jagung Indonesia
                                {/* <span className="bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent"> Kesejahteraan Petani </span> */}
                                
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Bergabunglah dengan ribuan petani jagung yang telah merasakan kemudahan jual beli, akses pasar yang luas, dan harga yang adil melalui platform digital kami.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-gradient-to-r bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
                                Mulai Sekarang
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                        
                        <div className="flex items-center space-x-6 pt-4">
                            <div className="flex -space-x-2">
                                {[1,2,3,4,5].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-green-400 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                                        P{i}
                                    </div>
                                    // <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                                    //     P{i}
                                    // </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center space-x-1">
                                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <p className="text-sm text-gray-600">Dipercaya 5000+ petani jagung</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">Dashboard Petani</h3>
                                    <Badge className="bg-green-100 text-green-800">Live</Badge>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <p className="text-2xl font-bold text-green-600">{statsCounter.farmers.toLocaleString()}</p>
                                        <p className="text-sm text-gray-600">Petani Aktif</p>
                                    </div>
                                    <div className="bg-yellow-50 p-4 rounded-lg">
                                        <p className="text-2xl font-bold text-yellow-600">{statsCounter.transactions.toLocaleString()}</p>
                                        <p className="text-sm text-gray-600">Transaksi Jagung</p>
                                    </div>
                                </div>
                                
                                <div className="bg-gradient-to-r from-green-500 to-yellow-500 p-4 rounded-lg text-white">
                                    <p className="text-2xl font-bold">{statsCounter.coverage}+</p>
                                    <p className="text-sm opacity-90">Kabupaten Terjangkau</p>
                                </div>
                                
                                <div className="space-y-3">
                                    {[
                                        { location: 'Lampung → Jakarta', price: 'Rp 4.200/kg', status: 'Terjual' },
                                        { location: 'Jawa Tengah → Surabaya', price: 'Rp 4.100/kg', status: 'Proses' },
                                        { location: 'Jawa Timur → Bali', price: 'Rp 4.300/kg', status: 'Siap Kirim' }
                                    ].map((trade, i) => (
                                        <div key={i} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                            <div>
                                                <span className="text-sm font-medium block">{trade.location}</span>
                                                <span className="text-xs text-green-600 font-semibold">{trade.price}</span>
                                            </div>
                                            <Badge className={`${trade.status === 'Terjual' ? 'bg-green-100 text-green-800' : trade.status === 'Proses' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'} text-xs`}>
                                                {trade.status}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;