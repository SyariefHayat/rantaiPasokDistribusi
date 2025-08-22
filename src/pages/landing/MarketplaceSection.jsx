import { MapPin } from "lucide-react";

import EachUtils from '@/utils/EachUtils';
import { Button } from "@/components/ui/button";
import { LIST_PRODUCT } from "@/constants/listProduct";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const MarketplaceSection = () => {
    return (
        <section id="marketplace" className="w-full min-h-screen flex flex-col gap-10 px-4 sm:px-6 lg:px-8 bg-gray-50 my-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">
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
                        of={LIST_PRODUCT}
                        render={(item, index) => (
                        <Card 
                            key={index} 
                            className="relative h-[300px] md:h-[350px] overflow-hidden cursor-pointer"
                        >
                            <img 
                                src={item.image[1]} 
                                alt={item.name}
                                loading="lazy"
                                className="hidden sm:block absolute inset-0 w-full h-full object-cover"
                            />

                            <img 
                                src={item.image[2]} 
                                alt={item.name}
                                loading="lazy"
                                className="sm:hidden absolute inset-0 w-full h-full object-cover"
                            />
                            
                            <CardContent 
                                className={`
                                    p-6 h-full flex flex-col justify-end text-white relative z-10
                                    ${index % 2 === 1 ? "items-start text-left" : "items-end text-right"}
                                `}
                            >
                                <div className="flex items-center text-xs mb-2 opacity-90">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    {item.location}
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-2 drop-shadow-lg">
                                    {item.name}
                                </h3>
                                <p className="sm:w-[60%] text-sm md:text-base leading-relaxed drop-shadow-md opacity-90 mb-3">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                        )}
                    />
                </div>
            </div>

            <ScrollArea className="w-full h-full hidden lg:block">
                <div className="flex gap-6 pb-4 min-w-max">
                    <EachUtils 
                        of={LIST_PRODUCT}
                        render={(item, index) => (
                            <Card 
                                key={index} 
                                className="relative min-w-[300px] max-w-[350px] h-[450px] flex-shrink-0 text-white overflow-hidden"
                            >
                                <img 
                                    src={item.image[0]} 
                                    alt={item.name}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover bg-green-600"
                                />
                                <CardContent className="relative p-5 h-full flex flex-col justify-end z-10">
                                    <div className="flex items-center text-xs mb-2 opacity-90">
                                        <MapPin className="w-3 h-3 mr-1" />
                                        {item.location}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 drop-shadow-lg text-shadow-sm text-shadow-black">{item.name}</h3>
                                    <p className="text-sm leading-relaxed mb-4 opacity-90 drop-shadow-md">
                                        {item.description}
                                    </p>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm">Harga:</span>
                                            <span className="font-bold drop-shadow-2xs text-shadow-sm text-shadow-black">{item.price}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm">Stok:</span>
                                            <span className="text-sm font-medium">{item.stock}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm">Kualitas:</span>
                                            <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                                                {item.quality}
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
                            </Card>
                        )}
                    />
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>

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