import React from "react";

import NavBar from "../landing/NavBar";
import Footer from "../landing/Footer";
import DefaultLayout from "@/components/layouts/DefaultLayout";

const AboutUs = () => {
    return (
        <DefaultLayout>
            <NavBar />

            <section className="bg-green-500 text-white py-24">
                <div className="container mx-auto px-6 text-center">
                <h1 className="text-5xl font-bold mb-6">Tentang SIJUKI</h1>
                <p className="text-lg max-w-2xl mx-auto opacity-90">
                    Sistem Informasi Jagung Untuk Kita - Menghubungkan petani, distributor, dan konsumen
                    dalam ekosistem supply chain jagung yang transparan dan berkelanjutan.
                </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
                <div className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                    <h2 className="text-2xl font-semibold text-green-500 mb-4">Misi Kami</h2>
                    <p className="text-gray-700 leading-relaxed">
                    Membangun sistem informasi supply chain jagung yang terintegrasi untuk meningkatkan
                    efisiensi distribusi, transparansi harga, dan kesejahteraan petani jagung Indonesia.
                    </p>
                </div>

                <div className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                    <h2 className="text-2xl font-semibold text-green-500 mb-4">Visi Kami</h2>
                    <p className="text-gray-700 leading-relaxed">
                    Menjadi platform terdepan dalam digitalisasi supply chain jagung di Indonesia,
                    mendukung ketahanan pangan nasional dengan teknologi informasi yang inovatif dan mudah diakses.
                    </p>
                </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-green-500 mb-8">Cerita Kami</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    SIJUKI lahir dari keprihatinan terhadap kompleksitas supply chain jagung di Indonesia
                    yang seringkali merugikan petani dan konsumen akhir. Kami mengembangkan platform yang
                    menghubungkan seluruh ekosistem jagung melalui teknologi digital.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Dimulai dari riset mendalam tentang tantangan petani dalam mengakses pasar yang adil,
                    hingga kebutuhan distributor akan transparansi kualitas dan asal produk.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Hari ini, SIJUKI terus berkembang dengan dukungan berbagai stakeholder untuk menciptakan
                    ekosistem jagung yang lebih baik bagi Indonesia.
                </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-green-500 mb-12">Layanan Utama SIJUKI</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[{
                    title: "Traceability System",
                    desc: "Pelacakan jagung dari hulu hingga hilir untuk memastikan kualitas dan keamanan produk."
                    },{
                    title: "Market Intelligence",
                    desc: "Informasi harga real-time, prediksi pasar, dan analisis tren untuk pengambilan keputusan."
                    },{
                    title: "Network Collaboration",
                    desc: "Menghubungkan petani, distributor, pengolah, dan konsumen dalam satu ekosistem."
                    }].map((f, i) => (
                    <div key={i} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{f.title}</h3>
                        <p className="text-gray-600">{f.desc}</p>
                    </div>
                    ))}
                </div>
                </div>
            </section>

            <section className="py-20 bg-green-500 text-white">
                <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12">Dampak SIJUKI</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {[{
                    number: "10,000+",
                    label: "Petani Terdaftar"
                    },{
                    number: "500+",
                    label: "Distributor Partner"
                    },{
                    number: "50,000",
                    label: "Ton Jagung Terlacak"
                    },{
                    number: "25",
                    label: "Provinsi Terjangkau"
                    }].map((s, i) => (
                    <div key={i} className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
                        <div className="text-3xl font-bold">{s.number}</div>
                        <div className="opacity-90">{s.label}</div>
                    </div>
                    ))}
                </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-green-500 mb-12">Nilai-Nilai Kami</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[{
                    icon: "🌾", title: "Keberlanjutan", desc: "Mendukung praktik pertanian berkelanjutan."
                    },{
                    icon: "🤝", title: "Transparansi", desc: "Memberikan informasi yang jelas dan akurat."
                    },{
                    icon: "💡", title: "Inovasi", desc: "Menggunakan teknologi untuk solusi yang efektif."
                    },{
                    icon: "⚖️", title: "Keadilan", desc: "Menciptakan sistem yang adil bagi seluruh rantai pasok."
                    }].map((v, i) => (
                    <div key={i} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                        <div className="text-4xl mb-4">{v.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{v.title}</h3>
                        <p className="text-gray-600 text-sm">{v.desc}</p>
                    </div>
                    ))}
                </div>
                </div>
            </section>

            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">Bergabunglah dengan SIJUKI</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                    Mari bersama-sama membangun ekosistem jagung Indonesia yang lebih baik, transparan, dan berkelanjutan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-medium transition">
                    Daftar Sebagai Petani
                    </button>
                    <button className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition">
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