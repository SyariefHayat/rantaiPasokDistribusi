import React from 'react'
import Navbar from '@/components/modules/mall/Navbar'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const Mall = () => {
    return (
        <DefaultLayout>
            <Navbar />
            <div className="w-full h-full px-5">
                <div className="w-full h-[400px] bg-gray-300 rounded-md"></div>
            </div>
            <div className="w-full h-full p-5">
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
        </DefaultLayout>
    )
}

export default Mall