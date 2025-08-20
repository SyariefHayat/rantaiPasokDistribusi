import React from "react";

import NavBar from "../landing/NavBar";
import Footer from "../landing/Footer";
import DefaultLayout from "@/components/layouts/DefaultLayout";

const AboutUs = () => {
    const features = [
        {
            title: "Manajemen Produksi",
            desc: "Pantau fasilitas, proses tanam, dan stok jagung dengan sistem terintegrasi yang membantu petani mengelola produksi dari hulu ke hilir."
        },
        {
            title: "Pemantauan Harga",
            desc: "Akses informasi harga jagung terkini dari berbagai sektor dengan data akurat untuk keputusan yang tepat."
        },
        {
            title: "Logistik Terintegrasi",
            desc: "Solusi pengiriman terintegrasi yang memastikan jagung sampai ke tujuan dalam kondisi terbaik."
        },
        {
            title: "Analisis Data",
            desc: "Analisis mendalam untuk mendukung keputusan strategis dengan teknologi analitik terdepan."
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

    return (
        <DefaultLayout>
            <NavBar />

            <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-32">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-6xl font-light text-gray-900 mb-8 tracking-tight">
                        Tentang <span className="font-medium text-emerald-600">SIJUKI</span>
                    </h1>
                    <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
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
                        <h2 className="text-4xl font-light text-gray-900 mb-6">Layanan Utama</h2>
                        <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 font-light leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
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

            <section className="py-24 bg-gray-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-light text-white mb-6">
                        Bergabunglah dengan SIJUKI
                    </h2>
                    <p className="text-xl text-gray-300 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                        Mari bersama-sama membangun ekosistem jagung Indonesia yang lebih baik, 
                        transparan, dan berkelanjutan.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
                            Daftar Sebagai Petani
                        </button>
                        <button className="border border-white/30 hover:border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-medium transition-all duration-300">
                            Menjadi Partner
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </DefaultLayout>
    );
};

export default AboutUs;