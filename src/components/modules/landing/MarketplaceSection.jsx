import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge, MapPin } from "lucide-react";

const MarketplaceSection = () => {
    const products = [
        {
            name: 'Jagung Pipil Kering Premium',
            location: 'Lampung',
            price: 'Rp 4.200/kg',
            stock: '50 ton',
            quality: 'Grade A',
            image: '🌽'
        },
        {
            name: 'Jagung Manis Segar',
            location: 'Jawa Tengah',
            price: 'Rp 8.500/kg',
            stock: '10 ton',
            quality: 'Super Sweet',
            image: '🌽'
        },
        {
            name: 'Jagung Pakan Ternak',
            location: 'Jawa Timur',
            price: 'Rp 3.800/kg',
            stock: '100 ton',
            quality: 'Feed Grade',
            image: '🌽'
        }
    ];

    return (
        <section id="marketplace" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Marketplace Jagung Terpercaya
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Jual dan beli jagung berkualitas dengan harga transparan dari petani terpercaya di seluruh Indonesia
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {products.map((product, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="text-center mb-4">
                                    <div className="text-6xl mb-4">{product.image}</div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                                    <div className="flex items-center justify-center text-sm text-gray-500 mb-2">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        {product.location}
                                    </div>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Harga:</span>
                                        <span className="font-semibold text-green-600">{product.price}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Stok:</span>
                                        <span className="font-medium">{product.stock}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Kualitas:</span>
                                        <Badge className="bg-green-100 text-green-800 text-xs">{product.quality}</Badge>
                                    </div>
                                </div>
                                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                                    Pesan Sekarang
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                
                <div className="text-center">
                    <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
                        Lihat Semua Produk Jagung
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default MarketplaceSection