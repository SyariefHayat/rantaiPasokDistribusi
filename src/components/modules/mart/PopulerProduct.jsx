import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, ShoppingBag } from 'lucide-react'

import EachUtils from '@/utils/EachUtils'
import { Button } from '@/components/ui/button'
import { LIST_POPULER_PRODUCTS } from '@/constants/listPopulerProducts'

const PopulerProduct = () => {
    const navigate = useNavigate();
    
    return (
        <div className="w-full h-full">
            
            {/* Header */}
            <div className="flex items-center justify-between my-5">
                <p className="text-xl font-semibold text-gray-800">Populer Minggu Ini</p>

                <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-green-600 hover:bg-green-100">
                    <Link to="/mart/popular" className="flex items-center space-x-1">
                        <span>Lihat Semua</span>
                        <ArrowRight size={16} />
                    </Link>
                </Button>
            </div>

            {/* Grid Produk */}
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                
                <EachUtils 
                    of={LIST_POPULER_PRODUCTS}
                    render={(item, index) => (
                        <div 
                            key={index}
                            onClick={() => navigate(`/mart/store/${item.store}/${item.name}`)}
                            className="bg-white rounded-lg shadow hover:shadow-lg p-3 flex flex-col cursor-pointer relative group transition"
                        >
                            {/* Badge jika ada */}
                            {item.badge && (
                                <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded shadow-md">
                                    {item.badge}
                                </span>
                            )}

                            {/* Gambar Produk */}
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-40 object-cover rounded-md mb-2"
                            />

                            <p className="font-semibold text-gray-800 text-sm truncate">{item.name}</p>
                            <span className="text-xs text-gray-500 mb-2">{item.location}</span>

                            <div className="space-y-2 pt-2 mt-auto border-t border-gray-100">
                                <div className="flex items-baseline space-x-1">
                                    <span className="text-lg font-bold text-green-600">
                                        Rp {item.price.toLocaleString('id-ID')}
                                    </span>
                                    <span className="text-xs text-gray-500 font-medium">{item.unit}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-md">
                                        <ShoppingBag size={11} className="mr-1" />
                                        <span className="font-medium">{item.sold} terjual</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                />
            </div>
        </div>
    )
}

export default PopulerProduct