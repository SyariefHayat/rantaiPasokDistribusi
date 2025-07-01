import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import EachUtils from '@/utils/EachUtils'
import { Button } from '@/components/ui/button'
import { LIST_STORE } from '@/constants/listStore'

const StoreRecommend = () => {
    return (
        <div className="w-full h-full">
            
            {/* Header */}
            <div className="flex items-center justify-between my-5">
                <p className="text-xl font-semibold text-gray-800">Rekomendasi Toko</p>
                
                <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-yellow-600 hover:bg-yellow-100">
                    <Link to="/mart" className="flex items-center space-x-1">
                        <span>Lihat Semua</span>
                        <ArrowRight size={16} />
                    </Link>
                </Button>
            </div>

            {/* Grid Toko */}
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <EachUtils 
                    of={LIST_STORE}
                    render={(item, index) => (
                        <div key={index} className="w-full h-80 bg-gray-100 rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden flex flex-col">
        
                            <img src={item.image} alt={item.name} className="h-2/3 w-full object-cover" />
                            
                            <div className="p-3 flex flex-col justify-between h-1/3">
                                <p className="font-semibold text-sm text-gray-800 truncate">{item.name}</p>
                                <span className="text-xs text-gray-500">{item.location}</span>
                            </div>

                        </div>
                    )}
                />
            </div>
            
        </div>
    )
}

export default StoreRecommend