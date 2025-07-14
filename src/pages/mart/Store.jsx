import React, { useState } from 'react'

import { 
    Star, 
    MapPin, 
    Package, 
    Shield, 
    Heart, 
    MessageCircle,
    Store,
    Phone,
    Mail,
    Clock,
    Users,
    Award,
    TrendingUp,
    Filter,
    Search,
    Grid,
    List,
    ChevronDown,
    Share2,
    Flag,
    MoreHorizontal,
    Check
} from 'lucide-react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar"

import { Button } from "@/components/ui/button"

const StoreDetail = () => {
    const [viewMode, setViewMode] = useState('grid')
    const [sortBy, setSortBy] = useState('terbaru')
    const [activeTab, setActiveTab] = useState('semua')
    const [isFollowing, setIsFollowing] = useState(false)
    
    const products = [
        {
            id: 1,
            name: 'Jagung Pipil Kering Grade A',
            price: 100000,
            originalPrice: 120000,
            discount: 17,
            image: '/product.jpg',
            sold: 250,
            rating: 4.8,
            location: 'Malang'
        },
        {
            id: 2,
            name: 'Benih Jagung Hibrida Pioneer',
            price: 85000,
            originalPrice: 100000,
            discount: 15,
            image: '/product.jpg',
            sold: 180,
            rating: 4.7,
            location: 'Malang'
        },
        {
            id: 3,
            name: 'Pupuk Organik Cair Jagung',
            price: 45000,
            originalPrice: null,
            discount: null,
            image: '/product.jpg',
            sold: 120,
            rating: 4.6,
            location: 'Malang'
        },
        {
            id: 4,
            name: 'Pestisida Organik Anti Hama',
            price: 75000,
            originalPrice: 90000,
            discount: 17,
            image: '/product.jpg',
            sold: 95,
            rating: 4.5,
            location: 'Malang'
        },
        {
            id: 5,
            name: 'Alat Pemipil Jagung Manual',
            price: 250000,
            originalPrice: null,
            discount: null,
            image: '/product.jpg',
            sold: 45,
            rating: 4.9,
            location: 'Malang'
        },
        {
            id: 6,
            name: 'Jagung Manis Segar',
            price: 15000,
            originalPrice: 18000,
            discount: 17,
            image: '/product.jpg',
            sold: 320,
            rating: 4.8,
            location: 'Malang'
        }
    ]

    const categories = [
        { id: 'semua', name: 'Semua', count: 90 },
        { id: 'benih', name: 'Benih', count: 25 },
        { id: 'pupuk', name: 'Pupuk', count: 18 },
        { id: 'pestisida', name: 'Pestisida', count: 15 },
        { id: 'alat', name: 'Alat', count: 12 },
        { id: 'hasil', name: 'Hasil Panen', count: 20 }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 py-8">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="text-gray-500 hover:text-gray-700 text-sm">
                                    Beranda
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/toko" className="text-gray-500 hover:text-gray-700 text-sm">
                                    Toko
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-gray-900 text-sm">
                                    Toko Jagung Berkah
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* Store Header */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <Avatar className="size-20">
                                    <AvatarImage src="https://github.com/evilrabbit.png" />
                                    <AvatarFallback>TJB</AvatarFallback>
                                </Avatar>
                                <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                            </div>
                            
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h1 className="text-2xl font-bold text-gray-900">Toko Jagung Berkah</h1>
                                    <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                                        Terverifikasi
                                    </span>
                                </div>
                                
                                <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-1">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <span className="ml-1">4.8 (2.4k ulasan)</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                        <span>Online 2 jam lalu</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>Malang, Jawa Timur</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-8 text-sm">
                                    <div>
                                        <span className="font-semibold text-gray-900">90</span>
                                        <span className="text-gray-600 ml-1">Produk</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-900">1.2k</span>
                                        <span className="text-gray-600 ml-1">Pengikut</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-900">3 tahun</span>
                                        <span className="text-gray-600 ml-1">Bergabung</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Button variant="outline" size="sm" className="text-gray-600 border-gray-200">
                                <Share2 className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="text-gray-600 border-gray-200">
                                <MoreHorizontal className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Chat
                        </Button>
                        <Button 
                            variant="outline" 
                            onClick={() => setIsFollowing(!isFollowing)}
                            className={`px-6 ${isFollowing ? 'bg-blue-50 text-blue-700 border-blue-200' : 'text-gray-700 border-gray-200'}`}
                        >
                            <Heart className={`w-4 h-4 mr-2 ${isFollowing ? 'fill-current' : ''}`} />
                            {isFollowing ? 'Mengikuti' : 'Ikuti'}
                        </Button>
                    </div>
                </div>

                {/* Performance Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                        <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3">
                            <TrendingUp className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
                        <div className="text-sm text-gray-600">Tingkat Kepuasan</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                            <MessageCircle className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1"> 1 jam</div>
                        <div className="text-sm text-gray-600">Respon Chat</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                        <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Package className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">1-2 hari</div>
                        <div className="text-sm text-gray-600">Proses Pesanan</div>
                    </div>
                </div>

                {/* Categories & Controls */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-1 overflow-x-auto">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveTab(category.id)}
                                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                        activeTab === category.id
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    {category.name}
                                    <span className="ml-1 text-xs opacity-70">({category.count})</span>
                                </button>
                            ))}
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Cari produk..."
                                    className="pl-10 pr-4 py-2 w-64 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                />
                            </div>
                            <div className="flex items-center border border-gray-200 rounded-lg">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100 text-gray-900' : 'text-gray-500'}`}
                                >
                                    <Grid className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 ${viewMode === 'list' ? 'bg-gray-100 text-gray-900' : 'text-gray-500'}`}
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-semibold text-gray-900">
                            {products.length} Produk
                        </h2>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                        >
                            <option value="terbaru">Terbaru</option>
                            <option value="terlaris">Terlaris</option>
                            <option value="harga-terendah">Harga Terendah</option>
                            <option value="harga-tertinggi">Harga Tertinggi</option>
                            <option value="rating">Rating Tertinggi</option>
                        </select>
                    </div>

                    <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                        {products.map((product) => (
                            <div key={product.id} className={`group cursor-pointer ${viewMode === 'list' ? 'flex gap-4' : ''}`}>
                                <div className={`relative overflow-hidden rounded-xl ${viewMode === 'list' ? 'w-48 h-48' : 'aspect-square'}`}>
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                    />
                                    {product.discount && (
                                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                                            -{product.discount}%
                                        </div>
                                    )}
                                </div>
                                
                                <div className="flex-1 mt-4">
                                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                        {product.name}
                                    </h3>
                                    
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                            ))}
                                        </div>
                                        <span className="text-xs text-gray-500">({product.rating})</span>
                                        <span className="text-xs text-gray-500">• {product.sold} terjual</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-lg font-bold text-gray-900">
                                            Rp {product.price.toLocaleString()}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-sm text-gray-500 line-through">
                                                Rp {product.originalPrice.toLocaleString()}
                                            </span>
                                        )}
                                    </div>
                                    
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <MapPin className="w-3 h-3" />
                                        {product.location}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button variant="outline" className="px-8 py-2 rounded-lg border-gray-200 hover:bg-gray-50">
                            Muat Lebih Banyak
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreDetail