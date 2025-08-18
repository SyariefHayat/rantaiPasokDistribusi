import React from 'react'
import { Calendar, User, ArrowRight } from 'lucide-react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import NavBar from '../landing/NavBar'
import Footer from '../landing/Footer'
import { Button } from "@/components/ui/button"
import DefaultLayout from '@/components/layouts/DefaultLayout'

const News = () => {
    const newsData = [
        {
            id: 1,
            title: "Teknologi Pertanian Modern Meningkatkan Hasil Panen",
            description: "Implementasi teknologi IoT dan AI dalam pertanian membantu petani meningkatkan produktivitas hingga 40%.",
            author: "Tim SIJUKI",
            date: "15 Agustus 2025",
            image: "/news-1.jpg",
            category: "Teknologi"
        },
        {
            id: 2,
            title: "Program Kemitraan Petani dengan Pasar Modern",
            description: "SIJUKI HUB berhasil menghubungkan 500+ petani dengan jaringan pasar modern di seluruh Indonesia.",
            author: "Redaksi SIJUKI",
            date: "12 Agustus 2025",
            image: "/news-2.jpg",
            category: "Partnership"
        },
        {
            id: 3,
            title: "Pelatihan Digital Marketing untuk Petani Milenial",
            description: "Workshop intensif membekali petani muda dengan keterampilan pemasaran digital untuk menjangkau konsumen yang lebih luas.",
            author: "Tim Edukasi",
            date: "10 Agustus 2025",
            image: "/news-3.jpg",
            category: "Edukasi"
        },
        {
            id: 4,
            title: "Sustainable Farming: Solusi Pertanian Ramah Lingkungan",
            description: "Metode pertanian berkelanjutan terbukti mengurangi dampak lingkungan sambil mempertahankan kualitas hasil panen.",
            author: "Dr. Agus Susanto",
            date: "8 Agustus 2025",
            image: "/news-4.jpg",
            category: "Lingkungan"
        },
        {
            id: 5,
            title: "Akses Permodalan Mudah untuk Petani UMKM",
            description: "Platform SIJUKI HUB memperkenalkan fitur pembiayaan yang memudahkan petani mengakses modal usaha.",
            author: "Tim Keuangan",
            date: "5 Agustus 2025",
            image: "/news-5.jpg",
            category: "Keuangan"
        },
        {
            id: 6,
            title: "Inovasi Packaging Ramah Lingkungan untuk Produk Pertanian",
            description: "Pengembangan kemasan biodegradable mendukung distribusi produk pertanian yang lebih sustainable.",
            author: "Tim Inovasi",
            date: "3 Agustus 2025",
            image: "/news-6.jpg",
            category: "Inovasi"
        }
    ];

    return (
        <DefaultLayout>
            <NavBar />
            
            <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Berita & Artikel
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
                            Dapatkan informasi terkini seputar pertanian, teknologi, dan inovasi di dunia agrikultur
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsData.map((news) => (
                        <Card key={news.id} className="group hover:shadow-lg transition-all duration-300 flex flex-col">
                            <CardHeader className="p-0">
                                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    <span className="text-green-600 font-medium text-sm bg-white px-3 py-1 rounded-full absolute top-3 left-3 z-10">
                                        {news.category}
                                    </span>
                                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                                        <Calendar className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                            </CardHeader>
                            
                            <CardContent className="flex-1 p-6">
                                <CardTitle className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                                    {news.title}
                                </CardTitle>
                                <CardDescription className="text-gray-600 line-clamp-3 mb-4">
                                    {news.description}
                                </CardDescription>
                                
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        <span>{news.author}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{news.date}</span>
                                    </div>
                                </div>
                            </CardContent>
                            
                            <CardFooter className="p-6 pt-0">
                                <Button 
                                    variant="outline" 
                                    className="w-full group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500 transition-all duration-300"
                                >
                                    Baca Selengkapnya
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                        Muat Berita Lainnya
                    </Button>
                </div>
            </div>

            <Footer />
        </DefaultLayout>
    )
}

export default News