import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import EachUtils from '@/utils/EachUtils'
import { Button } from '@/components/ui/button'
import { LIST_FEATURED_CATEGORY } from '@/constants/listFeaturedCategory'

const FeaturedCategory = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full">
            <div className="flex items-center justify-between mb-5">
                <p className="text-xl font-semibold text-gray-800">Kategori Unggulan</p>
                
                <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-yellow-600 hover:bg-yellow-100 cursor-pointer">
                    <Link to="/mart/category" className="flex items-center space-x-1">
                        <span>Lihat Semua</span>
                        <ArrowRight size={16} />
                    </Link>
                </Button>
            </div>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <EachUtils
                    of={LIST_FEATURED_CATEGORY}
                    render={(item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg flex flex-col cursor-pointer transition"
                            onClick={() => navigate(`/mart/category/${item.url}`)}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-40 object-cover rounded-md mb-3"
                            />

                            <div className="flex flex-col justify-between flex-grow text-center">
                                <p className="font-semibold text-gray-800 text-sm truncate">
                                    {item.name}
                                </p>
                                <span className="text-xs text-gray-500 mt-1">
                                    {item.totalItem} produk tersedia
                                </span>
                            </div>
                        </div>
                    )}
                />
            </div>
        </div>
    )
}

export default FeaturedCategory