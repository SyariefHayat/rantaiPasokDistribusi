import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import EachUtils from '@/utils/EachUtils';

const MarketplaceSection = () => {
    const products = [
        {
            name: 'Jagung Pipil Kering Premium',
            location: 'Lampung',
            price: 'Rp 4.200/kg',
            stock: '50 ton',
            quality: 'Grade A',
            image: '/7.jpg',
            description: 'Jagung pipil kering berkualitas premium dengan kadar air optimal untuk penyimpanan jangka panjang'
        },
        {
            name: 'Jagung Manis Segar',
            location: 'Jawa Tengah',
            price: 'Rp 8.500/kg',
            stock: '10 ton',
            quality: 'Super Sweet',
            image: '/7.jpg',
            description: 'Jagung manis segar langsung dari kebun dengan rasa manis alami dan tekstur renyah'
        },
        {
            name: 'Jagung Pakan Ternak',
            location: 'Jawa Timur',
            price: 'Rp 3.800/kg',
            stock: '100 ton',
            quality: 'Feed Grade',
            image: '/7.jpg',
            description: 'Jagung khusus pakan ternak dengan nutrisi tinggi dan harga ekonomis untuk kebutuhan peternakan'
        },
        {
            name: 'Jagung Organik',
            location: 'Yogyakarta',
            price: 'Rp 6.500/kg',
            stock: '25 ton',
            quality: 'Organic',
            image: '/7.jpg',
            description: 'Jagung organik tanpa pestisida, dibudidayakan secara alami untuk kesehatan keluarga'
        },
        {
            name: 'Jagung Hibrida Unggul',
            location: 'Jawa Barat',
            price: 'Rp 5.200/kg',
            stock: '75 ton',
            quality: 'Hybrid Premium',
            image: '/7.jpg',
            description: 'Jagung hibrida dengan produktivitas tinggi dan tahan terhadap hama penyakit'
        }
    ];

    return (
        <section id="marketplace" className="w-full min-h-screen flex flex-col gap-10 px-4 sm:px-6 lg:px-8 bg-gray-50 py-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
                <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight leading-snug lg:leading-[1.3] text-gray-900">
                        Marketplace Jagung Terpercaya
                    </h2>
                </div>
                <div className="flex-1 lg:max-w-lg">
                    <p className="text-sm leading-relaxed lg:leading-[1.5] text-gray-600">
                        Jual dan beli jagung berkualitas dengan harga transparan dari petani terpercaya di seluruh Indonesia
                    </p>
                </div>
            </div>

            <div className="block lg:hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <EachUtils 
                        of={products}
                        render={(product, index) => (
                            <Card 
                                key={index} 
                                className="relative h-[300px] md:h-[350px] overflow-hidden group cursor-pointer"
                            >
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-0"></div>
                                <CardContent className="p-6 h-full flex flex-col justify-end text-white relative z-10">
                                    <div className="flex items-center text-xs mb-2 opacity-90">
                                        <MapPin className="w-3 h-3 mr-1" />
                                        {product.location}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-semibold mb-2 drop-shadow-lg">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm md:text-base leading-relaxed drop-shadow-md opacity-90 mb-3">
                                        {product.description}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-green-400 drop-shadow-lg">{product.price}</span>
                                        <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                                            {product.quality}
                                        </span>
                                    </div>
                                </CardContent>
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 hidden md:block"></div>
                            </Card>
                        )}
                    />
                </div>
            </div>

            <ScrollArea className="w-full h-full hidden lg:block">
                <div className="flex gap-6 pb-4 min-w-max">
                    <EachUtils 
                        of={products}
                        render={(product, index) => (
                            <Card 
                                key={index} 
                                className="relative min-w-[300px] max-w-[350px] h-[450px] flex-shrink-0 text-white overflow-hidden"
                            >
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-0"></div>
                                <CardContent className="relative p-5 h-full flex flex-col justify-end z-10">
                                    <div className="flex items-center text-xs mb-2 opacity-90">
                                        <MapPin className="w-3 h-3 mr-1" />
                                        {product.location}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 drop-shadow-lg">{product.name}</h3>
                                    <p className="text-sm leading-relaxed mb-4 opacity-90 drop-shadow-md">
                                        {product.description}
                                    </p>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-300">Harga:</span>
                                            <span className="font-bold text-green-400 drop-shadow-lg">{product.price}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-300">Stok:</span>
                                            <span className="text-sm font-medium">{product.stock}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-300">Kualitas:</span>
                                            <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                                                {product.quality}
                                            </span>
                                        </div>
                                    </div>
                                    <Button 
                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium transition-all duration-200 hover:shadow-lg cursor-pointer"
                                        size="sm"
                                    >
                                        Pesan Sekarang
                                    </Button>
                                </CardContent>
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </Card>
                        )}
                    />
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>

            {/* Call to Action */}
            <div className="text-center">
                <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 px-8 py-3 font-medium cursor-pointer"
                >
                    Lihat Semua Produk Jagung
                </Button>
            </div>
        </section>
    );
};

export default MarketplaceSection;