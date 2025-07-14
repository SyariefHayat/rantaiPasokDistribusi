import React, { useState } from 'react'
import { Funnel, List, MapPin, TrendingUp, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import EachUtils from '@/utils/EachUtils'
import { Checkbox } from "@/components/ui/checkbox"
import Navbar from '@/components/modules/mart/Navbar'
import MartLayout from '@/components/layouts/MartLayout'
import { LIST_LOCATION } from '@/constants/listLocation'
import { LIST_FEATURED_CATEGORY } from '@/constants/listFeaturedCategory'
import { LIST_FOR_YOU } from '@/constants/listForYou'
import { Button } from '@/components/ui/button'

const PopularProducts = () => {
    const navigate = useNavigate();

    const [visibleCount, setVisibleCount] = useState(12);
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('week');
    
    const showMore = () => {
        setVisibleCount((prev) => prev + 12);
    };

    // Sort products by popularity (sold count) in descending order
    const popularProducts = [...LIST_FOR_YOU].sort((a, b) => b.sold - a.sold);

    const timeFrameOptions = [
        { value: 'day', label: 'Hari Ini' },
        { value: 'week', label: 'Minggu Ini' },
        { value: 'month', label: 'Bulan Ini' },
        { value: 'year', label: 'Tahun Ini' }
    ];

    return (
        <MartLayout>
            <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Header with trending theme */}
                <div className="w-full h-[400px] mb-5 rounded-md bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-center text-white">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <TrendingUp className="w-12 h-12" />
                            <h2 className="text-5xl font-bold">Produk Populer</h2>
                        </div>
                        <p className="text-xl opacity-90">Produk terlaris dan paling diminati</p>
                    </div>
                </div>

                <div className="flex gap-8">
                    {/* Sidebar */}
                    <div className="w-64 flex-shrink-0">
                        {/* Time Frame Filter */}
                        <div className="bg-white border border-gray-200 rounded-lg mb-6">
                            <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-gray-600" />
                                    <h3 className="font-medium text-gray-900">Periode</h3>
                                </div>
                            </div>
                            <div className="p-4">
                                <EachUtils 
                                    of={timeFrameOptions}
                                    render={(item, index) => (
                                        <div key={index} className="py-2">
                                            <div 
                                                className={`flex items-center gap-2 cursor-pointer p-2 rounded transition-colors ${
                                                    selectedTimeFrame === item.value 
                                                        ? 'bg-blue-50 text-blue-600' 
                                                        : 'text-gray-700 hover:text-blue-600'
                                                }`}
                                                onClick={() => setSelectedTimeFrame(item.value)}
                                            >
                                                <div className={`w-2 h-2 rounded-full ${
                                                    selectedTimeFrame === item.value ? 'bg-blue-600' : 'bg-gray-300'
                                                }`}></div>
                                                <span className="text-sm">{item.label}</span>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="bg-white border border-gray-200 rounded-lg mb-6">
                            <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                                <div className="flex items-center gap-2">
                                    <List className="w-4 h-4 text-gray-600" />
                                    <h3 className="font-medium text-gray-900">Kategori</h3>
                                </div>
                            </div>
                            <div className="p-4">
                                <EachUtils 
                                    of={LIST_FEATURED_CATEGORY}
                                    render={(item, index) => (
                                        <div key={index} className="py-2">
                                            <p 
                                                className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
                                                onClick={() => navigate(`/mart/category/${item.url}`)}
                                            >
                                                {item.name}
                                            </p>
                                        </div>
                                    )}
                                />
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="bg-white border border-gray-200 rounded-lg">
                            <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                                <div className="flex items-center gap-2">
                                    <Funnel className="w-4 h-4 text-gray-600" />
                                    <h3 className="font-medium text-gray-900">Filter</h3>
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="text-sm font-medium text-gray-900 mb-3">Lokasi</h4>
                                <div className="space-y-2">
                                    <EachUtils 
                                        of={LIST_LOCATION}
                                        render={(item, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <Checkbox className="w-4 h-4" />
                                                <label className="text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition-colors">
                                                    {item.nama}
                                                </label>
                                            </div>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Sort Bar */}
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-orange-500" />
                                <p className="text-sm text-gray-600">
                                    {popularProducts.length} produk populer ditemukan
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-600">Urutkan:</span>
                                <Select defaultValue="popular">
                                    <SelectTrigger className="w-40 h-9">
                                        <SelectValue placeholder="Paling Populer" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="popular">Paling Populer</SelectItem>
                                        <SelectItem value="newest">Terbaru</SelectItem>
                                        <SelectItem value="highest">Harga Tertinggi</SelectItem>
                                        <SelectItem value="lowest">Harga Terendah</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                            <EachUtils
                                of={popularProducts.slice(0, visibleCount)}
                                render={(item, index) => (
                                    <div 
                                        key={index} 
                                        className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer overflow-hidden relative"
                                        onClick={() => navigate(`/mart/store/${item.slugStore}/${item.slugProduct}`)}
                                    >
                                        {/* Popular Badge */}
                                        {index < 3 && (
                                            <div className="absolute top-2 left-2 z-10">
                                                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                                                    <Star className="w-3 h-3 fill-current" />
                                                    <span>#{index + 1}</span>
                                                </div>
                                            </div>
                                        )}
                                        
                                        <div className="aspect-square overflow-hidden">
                                            <img 
                                                src={item.image} 
                                                alt={item.name} 
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                                            />
                                        </div>
                                        
                                        <div className="p-4">
                                            <h3 className="font-medium text-gray-900 text-sm line-clamp-2 mb-2">
                                                {item.name}
                                            </h3>
                                            
                                            <p className="text-xs text-gray-600 mb-1">{item.store}</p>
                                            
                                            <div className="flex items-center text-xs text-gray-500 mb-3">
                                                <MapPin className="w-3 h-3 mr-1" />
                                                <span className="truncate">{item.location}</span>
                                            </div>
                                            
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <span className="text-lg font-semibold text-gray-900">
                                                        Rp {item.price.toLocaleString('id-ID')}
                                                    </span>
                                                    <span className="text-xs text-gray-500 ml-1">{item.unit}</span>
                                                </div>
                                                <span className="text-xs text-white bg-gradient-to-r from-orange-500 to-red-500 px-2 py-1 rounded font-medium">
                                                    {item.sold} terjual
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            />
                        </div>

                        {/* Load More */}
                        {visibleCount < popularProducts.length && (
                            <div className="text-center">
                                <Button
                                    onClick={showMore}
                                    variant="outline"
                                    className="px-8 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer"
                                >
                                    Tampilkan Lebih Banyak
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MartLayout>
    )
}

export default PopularProducts