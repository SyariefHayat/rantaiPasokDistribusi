import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

import EachUtils from '@/utils/EachUtils';
import { Button } from '@/components/ui/button';
import { LIST_FOR_YOU } from '@/constants/listForYou';

const ForYou = () => {
    const [visibleCount, setVisibleCount] = useState(10);
    const navigate = useNavigate();

    const showMore = () => {
        setVisibleCount((prev) => prev + 10);
    };

    return (
        <div className="w-full h-full">
            <div className="flex items-center justify-between my-5">
                <p className="text-xl font-semibold text-gray-800">Untuk Kamu</p>
                
                <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-green-600 hover:bg-green-100">
                    <Link to="/mart/for-you" className="flex items-center space-x-1">
                        <span>Lihat Semua</span>
                        <ArrowRight size={16} />
                    </Link>
                </Button>
            </div>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <EachUtils
                    of={LIST_FOR_YOU.slice(0, visibleCount)}
                    render={(item, index) => (
                        <div 
                            key={index}
                            onClick={() => navigate(`/mart/store/${item.slugStore}/${item.slugProduct}`)}
                            className="w-full h-full bg-gray-100 rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden flex flex-col"
                        >
                            <img src={item.image} alt={item.name} className="h-2/3 w-full object-cover" />
                            <div className="p-3 flex flex-col justify-between h-1/3">
                                <p className="font-semibold text-sm text-gray-800 line-clamp-2">{item.name}</p>
                                <div className="space-y-1.5">
                                    <p className="text-sm font-semibold text-gray-800 truncate">{item.store}</p>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <MapPin size={11} className="mr-1.5 flex-shrink-0" />
                                        <span className="truncate">{item.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-3 mt-auto border-t border-gray-100">
                                <div className="flex items-baseline space-x-1">
                                    <span className="text-lg font-bold text-green-600">
                                        Rp {item.price.toLocaleString('id-ID')}
                                    </span>
                                    <span className="text-xs text-gray-500 font-medium">{item.unit}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-md">
                                        <span className="font-medium">{item.sold} terjual</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                />
            </div>
            
            {visibleCount < LIST_FOR_YOU.length && (
                <div className="flex justify-center mt-6">
                    <Button 
                        onClick={showMore}
                        className="bg-green-500 hover:bg-green-600 text-white px-6"
                    >
                        Tampilkan Lebih Banyak
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ForYou;