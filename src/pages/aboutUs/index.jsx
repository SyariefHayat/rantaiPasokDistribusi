import React, { useState } from "react";

import { 
    ChevronDown, 
    Factory, 
    TrendingUp, 
    Truck, 
    BarChart3, 
    MapPin, 
    Calendar, 
    Package, 
    DollarSign, 
    Eye, 
    Users, 
    Shield, 
    Leaf 
} from 'lucide-react';

import NavBar from "../landing/NavBar";
import Footer from "../landing/Footer";
import DefaultLayout from "@/components/layouts/DefaultLayout";

const AboutUs = () => {
    const [expandedService, setExpandedService] = useState(null);

    const features = [
        {
            id: 1,
            title: "Manajemen Produksi",
            icon: <Factory className="w-8 h-8" />,
            desc: "Pantau fasilitas, proses tanam, dan stok jagung dengan sistem terintegrasi yang membantu petani mengelola produksi dari hulu ke hilir.",
            color: "emerald",
            features: [
                {
                    name: "Monitoring Lahan",
                    icon: <MapPin className="w-5 h-5" />,
                    details: [
                        "Pemetaan digital lahan dengan teknologi GPS",
                        "Monitoring kondisi tanah dan cuaca real-time",
                        "Analisis kesuburan tanah berbasis data",
                        "Rekomendasi pemupukan yang tepat sasaran",
                        "Prediksi waktu tanam optimal berdasarkan musim"
                    ]
                },
                {
                    name: "Jadwal Penanaman",
                    icon: <Calendar className="w-5 h-5" />,
                    details: [
                        "Kalender tanam berbasis analisis cuaca",
                        "Reminder otomatis untuk aktivitas pertanian",
                        "Tracking progress setiap fase pertumbuhan",
                        "Estimasi waktu panen yang akurat",
                        "Optimasi rotasi tanaman untuk produktivitas maksimal"
                    ]
                },
                {
                    name: "Manajemen Stok",
                    icon: <Package className="w-5 h-5" />,
                    details: [
                        "Pencatatan hasil panen secara digital",
                        "Tracking kualitas dan grading jagung",
                        "Manajemen gudang dan penyimpanan",
                        "Sistem peringatan kadaluarsa stok",
                        "Laporan inventori real-time untuk pengambilan keputusan"
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Pemantauan Harga",
            icon: <TrendingUp className="w-8 h-8" />,
            desc: "Akses informasi harga jagung terkini dari berbagai sektor dengan data akurat untuk keputusan yang tepat.",
            color: "blue",
            features: [
                {
                    name: "Harga Real-time",
                    icon: <DollarSign className="w-5 h-5" />,
                    details: [
                        "Update harga jagung setiap jam dari berbagai pasar",
                        "Perbandingan harga antar daerah dan kualitas",
                        "Notifikasi perubahan harga signifikan",
                        "Historical data untuk analisis tren",
                        "Prediksi fluktuasi harga berdasarkan algoritma ML"
                    ]
                },
                {
                    name: "Analisis Pasar",
                    icon: <BarChart3 className="w-5 h-5" />,
                    details: [
                        "Dashboard visualisasi tren harga interaktif",
                        "Analisis seasonal pattern dan faktor eksternal",
                        "Rekomendasi waktu jual optimal",
                        "Perbandingan margin keuntungan per channel",
                        "Report pasar mingguan dan bulanan"
                    ]
                },
                {
                    name: "Market Intelligence",
                    icon: <Eye className="w-5 h-5" />,
                    details: [
                        "Monitoring demand dari industri pakan ternak",
                        "Tracking ekspor-impor jagung nasional",
                        "Analisis kompetitor dan market share",
                        "Early warning system untuk volatilitas harga",
                        "Insight strategis untuk planning jangka panjang"
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Logistik Terintegrasi",
            icon: <Truck className="w-8 h-8" />,
            desc: "Solusi pengiriman terintegrasi yang memastikan jagung sampai ke tujuan dalam kondisi terbaik.",
            color: "orange",
            features: [
                {
                    name: "Fleet Management",
                    icon: <Truck className="w-5 h-5" />,
                    details: [
                        "Tracking kendaraan real-time dengan GPS",
                        "Optimasi rute untuk efisiensi bahan bakar",
                        "Manajemen kapasitas dan scheduling pickup",
                        "Monitoring kondisi kendaraan dan maintenance",
                        "Integration dengan partner logistik terpercaya"
                    ]
                },
                {
                    name: "Quality Assurance",
                    icon: <Shield className="w-5 h-5" />,
                    details: [
                        "Monitoring suhu dan kelembaban selama transport",
                        "Documentation digital untuk traceability",
                        "Quality check points di setiap tahap pengiriman",
                        "Sistem asuransi untuk proteksi kerugian",
                        "Sertifikasi kualitas digital untuk buyer confidence"
                    ]
                },
                {
                    name: "Network Partnership",
                    icon: <Users className="w-5 h-5" />,
                    details: [
                        "Jaringan partner logistik di seluruh Indonesia",
                        "Hub distribution strategis di kota-kota besar",
                        "Last-mile delivery untuk konsumen akhir",
                        "Cross-docking facility untuk efisiensi distribusi",
                        "Integration dengan marketplace dan e-commerce"
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Analisis Data",
            icon: <BarChart3 className="w-8 h-8" />,
            desc: "Analisis mendalam untuk mendukung keputusan strategis dengan teknologi analitik terdepan.",
            color: "purple",
            features: [
                {
                    name: "Business Intelligence",
                    icon: <BarChart3 className="w-5 h-5" />,
                    details: [
                        "Dashboard komprehensif dengan KPI monitoring",
                        "Custom report builder untuk kebutuhan spesifik",
                        "Automated insights dan anomaly detection",
                        "Benchmarking performance dengan industry standard",
                        "Executive summary untuk stakeholder management"
                    ]
                },
                {
                    name: "Predictive Analytics",
                    icon: <TrendingUp className="w-5 h-5" />,
                    details: [
                        "Machine learning untuk prediksi yield panen",
                        "Forecast demand berdasarkan historical pattern",
                        "Risk assessment untuk weather dan market volatility",
                        "Optimization algorithm untuk resource allocation",
                        "Scenario planning untuk strategic decision making"
                    ]
                },
                {
                    name: "Data Integration",
                    icon: <Leaf className="w-5 h-5" />,
                    details: [
                        "Integration dengan data cuaca dan satelit",
                        "API connectivity dengan sistem pemerintah",
                        "Real-time data processing dan storage",
                        "Data quality management dan validation",
                        "Compliance dengan regulasi data protection"
                    ]
                }
            ]
        }
    ];

    const stats = [
        { number: "10,000+", label: "Petani Terdaftar" },
        { number: "500+", label: "Distributor Partner" },
        { number: "50,000", label: "Ton Jagung Terlacak" },
        { number: "25", label: "Provinsi Terjangkau" }
    ];

    const values = [
        { icon: "🌾", title: "Keberlanjutan", desc: "Mendukung praktik pertanian berkelanjutan untuk masa depan." },
        { icon: "🤝", title: "Transparansi", desc: "Memberikan informasi yang jelas dan dapat dipercaya." },
        { icon: "💡", title: "Inovasi", desc: "Menggunakan teknologi untuk solusi yang efektif." },
        { icon: "⚖️", title: "Keadilan", desc: "Menciptakan sistem yang adil bagi seluruh rantai pasok." }
    ];

    const getColorClasses = (color) => {
        const colors = {
            emerald: {
                bg: "bg-emerald-500",
                hover: "hover:bg-emerald-600",
                light: "bg-emerald-50",
                text: "text-emerald-600",
                border: "border-emerald-200"
            },
            blue: {
                bg: "bg-blue-500",
                hover: "hover:bg-blue-600",
                light: "bg-blue-50",
                text: "text-blue-600",
                border: "border-blue-200"
            },
            orange: {
                bg: "bg-orange-500",
                hover: "hover:bg-orange-600",
                light: "bg-orange-50",
                text: "text-orange-600",
                border: "border-orange-200"
            },
            purple: {
                bg: "bg-purple-500",
                hover: "hover:bg-purple-600",
                light: "bg-purple-50",
                text: "text-purple-600",
                border: "border-purple-200"
            }
        };
        return colors[color];
    };

    return (
        <DefaultLayout>
            <NavBar />

            <section className="bg-[url('/background.png')] bg-cover bg-center bg-no-repeat py-32">
                <div className="max-w-4xl mx-auto px-6 text-center text-white">
                    <h1 className="text-6xl font-bold mb-8 tracking-tight">
                        Tentang <span className=" text-yellow-300">SIJUKI</span>
                    </h1>
                    <p className="text-xl font-light leading-relaxed max-w-3xl mx-auto">
                        Sistem Informasi Jagung Untuk Kita — Menghubungkan petani, distributor, dan konsumen
                        dalam ekosistem supply chain yang transparan dan berkelanjutan.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                                Misi Kami
                            </div>
                            <h2 className="text-3xl font-light text-gray-900 leading-tight">
                                Membangun sistem terintegrasi untuk kesejahteraan petani
                            </h2>
                            <p className="text-lg text-gray-600 font-light leading-relaxed">
                                Kami berkomitmen meningkatkan efisiensi distribusi, transparansi harga, 
                                dan kesejahteraan petani jagung Indonesia melalui teknologi informasi yang inovatif.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                                Visi Kami
                            </div>
                            <h2 className="text-3xl font-light text-gray-900 leading-tight">
                                Platform terdepan digitalisasi supply chain jagung
                            </h2>
                            <p className="text-lg text-gray-600 font-light leading-relaxed">
                                Menjadi solusi utama dalam mendukung ketahanan pangan nasional dengan 
                                teknologi informasi yang mudah diakses dan berkelanjutan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-gray-900 mb-6">Cerita Kami</h2>
                        <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
                    </div>
                    
                    <div className="prose prose-lg prose-gray max-w-none">
                        <p className="text-xl font-light text-gray-600 leading-relaxed mb-8 text-center">
                            SIJUKI lahir dari keprihatinan terhadap kompleksitas supply chain jagung di Indonesia 
                            yang seringkali merugikan petani dan konsumen akhir.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-12 mt-12">
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-gray-900">Dimulai dari riset</h3>
                                <p className="text-gray-600 font-light leading-relaxed">
                                    Riset mendalam tentang tantangan petani dalam mengakses pasar yang adil 
                                    dan kebutuhan distributor akan transparansi kualitas produk.
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-gray-900">Terus berkembang</h3>
                                <p className="text-gray-600 font-light leading-relaxed">
                                    Dengan dukungan berbagai stakeholder untuk menciptakan ekosistem 
                                    jagung yang lebih baik bagi Indonesia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-gray-900 mb-6">Layanan Utama SIJUKI</h2>
                        <div className="w-24 h-1 bg-emerald-500 mx-auto mb-4"></div>
                        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                            Platform terintegrasi dengan fitur-fitur canggih untuk mengoptimalkan seluruh rantai pasok jagung Indonesia
                        </p>
                    </div>
                    
                    <div className="space-y-8">
                        {features.map((service) => {
                            const colorClasses = getColorClasses(service.color);
                            const isExpanded = expandedService === service.id;
                            
                            return (
                                <div
                                    id={service.id}
                                    key={service.id}
                                    className={`rounded-2xl border-2 transition-all duration-300 ${
                                        isExpanded ? colorClasses.border : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                >
                                    <div 
                                        className={`p-8 cursor-pointer transition-all duration-300 rounded-2xl ${
                                            isExpanded ? colorClasses.light : 'bg-white hover:bg-gray-50'
                                        }`}
                                        onClick={() => setExpandedService(isExpanded ? null : service.id)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-6">
                                                <div className={`p-4 rounded-xl ${colorClasses.bg} text-white`}>
                                                    {service.icon}
                                                </div>
                                                <div>
                                                    <h3 className={`text-2xl font-semibold mb-2 ${isExpanded ? colorClasses.text : 'text-gray-900'}`}>
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-gray-600 font-light leading-relaxed max-w-2xl">
                                                        {service.desc}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={`p-2 rounded-full transition-transform duration-300 ${
                                                isExpanded ? 'rotate-180' : ''
                                            }`}>
                                                <ChevronDown className={`w-6 h-6 ${isExpanded ? colorClasses.text : 'text-gray-400'}`} />
                                            </div>
                                        </div>
                                    </div>

                                    {isExpanded && (
                                        <div className="px-8 pb-8">
                                            <div className="grid md:grid-cols-3 gap-8 mt-8">
                                                {service.features.map((feature, index) => (
                                                    <div key={index} className="space-y-4">
                                                        <div className="flex items-center space-x-3">
                                                            <div className={`p-2 rounded-lg ${colorClasses.light}`}>
                                                                <div className={colorClasses.text}>
                                                                    {feature.icon}
                                                                </div>
                                                            </div>
                                                            <h4 className="text-lg font-semibold text-gray-900">
                                                                {feature.name}
                                                            </h4>
                                                        </div>
                                                        <ul className="space-y-2">
                                                            {feature.details.map((detail, detailIndex) => (
                                                                <li key={detailIndex} className="flex items-start space-x-3">
                                                                    <div className={`w-2 h-2 rounded-full ${colorClasses.bg} mt-2 flex-shrink-0`}></div>
                                                                    <span className="text-gray-600 font-light leading-relaxed">
                                                                        {detail}
                                                                    </span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Tertarik dengan Layanan SIJUKI?
                            </h3>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                Bergabunglah dengan ribuan petani dan distributor yang telah merasakan manfaat platform terintegrasi kami
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
                                    Mulai Gratis Sekarang
                                </button>
                                <button className="border-2 border-emerald-200 text-emerald-600 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-xl font-medium transition-all duration-300">
                                    Hubungi Tim Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-r from-emerald-500 to-teal-600">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-white mb-6">Dampak SIJUKI</h2>
                        <div className="w-24 h-1 bg-white/30 mx-auto"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="text-5xl font-light text-white mb-3 group-hover:scale-110 transition-transform">
                                    {stat.number}
                                </div>
                                <div className="text-emerald-100 font-light text-lg">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-gray-900 mb-6">Nilai-Nilai Kami</h2>
                        <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center group p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 font-light leading-relaxed">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </DefaultLayout>
    );
};

export default AboutUs;