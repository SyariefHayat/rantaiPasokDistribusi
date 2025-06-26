import React from 'react';

import { 
    Truck, 
    BarChart3, 
    Shield, 
    Users, 
    Zap, 
    Globe, 
    DollarSign
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

const FeatureSection = () => {
    const features = [
        {
            icon: <DollarSign className="w-8 h-8" />,
            title: "Harga Jagung Terbaik",
            description: "Dapatkan harga jagung yang adil dan transparan dengan sistem lelang digital dan akses langsung ke pembeli besar"
        },
        {
            icon: <Truck className="w-8 h-8" />,
            title: "Distribusi Terintegrasi",
            description: "Layanan logistik door-to-door khusus jagung dengan jaminan kualitas dan ketepatan waktu pengiriman"
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Analisis Pasar Jagung",
            description: "Monitor harga jagung real-time, prediksi tren pasar, dan rekomendasi waktu terbaik untuk menjual"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Jaminan Pembayaran",
            description: "Sistem pembayaran aman dengan escrow dan asuransi untuk melindungi setiap transaksi jagung Anda"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Komunitas Petani",
            description: "Bergabung dengan forum diskusi, sharing tips budidaya jagung, dan networking dengan sesama petani"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Teknologi Smart Farming",
            description: "Akses ke tools monitoring cuaca, prediksi panen, dan konsultasi ahli pertanian jagung"
        }
    ];

    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Solusi Lengkap untuk Bisnis Jagung Anda
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Dari penanaman hingga distribusi, kami menyediakan ekosistem digital yang mendukung kesuksesan petani jagung
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
                            <CardContent className="p-8">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center text-white">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;