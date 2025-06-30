import React from 'react'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import Navbar from '@/components/modules/mall/Navbar'
import MallLayout from '@/components/layouts/MallLayout'
import CarouselComp from '@/components/modules/mall/CarouselComp'

const Mall = () => {
    return (
        <MallLayout>
            <Navbar />
            <CarouselComp />

            <div className="w-full h-full">
                <div className="flex items-center justify-between mb-5">
                    <p className="text-xl">Kategori Terpopuler</p>
                    <Button className="rounded-full relative">
                        Lihat Semua
                        <span className="w-7 h-7 rounded-full bg-black absolute top-1/2 right-2 transform -translate-y-1/2 flex items-center justify-center">
                            <ArrowRight size="18" className="text-white" />
                        </span>
                    </Button>
                </div>
                <div className="w-full h-full grid grid-cols-5 gap-5">
                    <div className="w-full h-80 bg-gray-200 rounded-md"></div>
                    <div className="w-full h-80 bg-gray-200 rounded-md"></div>
                    <div className="w-full h-80 bg-gray-200 rounded-md"></div>
                    <div className="w-full h-80 bg-gray-200 rounded-md"></div>
                    <div className="w-full h-80 bg-gray-200 rounded-md"></div>
                </div>
            </div>
            <div className=""></div>
        </MallLayout>
    )
}

export default Mall