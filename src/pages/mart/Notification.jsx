import React from 'react'

import { 
    Bell, 
    Mail, 
    Settings 
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import Navbar from '@/components/modules/mart/Navbar'
import MartLayout from '@/components/layouts/MartLayout'

const Notification = () => {
    return (
        <MartLayout>
            <Navbar />
            <div className="max-w-7xl mx-auto py-6">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <Bell className="w-6 h-6 text-gray-600" />
                        <h1 className="text-2xl font-bold text-gray-900">Notifikasi</h1>
                    </div>
                    <p className="text-gray-600">Kelola semua notifikasi dan pemberitahuan Anda</p>
                    <div className="h-px bg-gray-200 mt-4"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
                    <div className="lg:col-span-1 bg-white border border-gray-200 rounded-lg">
                        <div className="p-4 border-b border-gray-200">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Cari notifikasi..."
                                    className="w-full pl-4 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="p-6 text-center">
                            <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                            <p className="text-sm text-gray-500">Belum ada notifikasi</p>
                        </div>
                    </div>

                    <div className="lg:col-span-3 bg-white border border-gray-200 rounded-lg flex flex-col">
                        <div className="flex-1 flex items-center justify-center p-8">
                            <div className="text-center max-w-md">
                                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Bell className="w-12 h-12 text-gray-400" />
                                </div>

                                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                    Belum Ada Notifikasi
                                </h2>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Anda belum memiliki notifikasi apapun. 
                                    Notifikasi akan muncul di sini ketika ada aktivitas terbaru di akun Anda.
                                </p>

                                <div className="space-y-3">
                                    <Button 
                                        className="w-full bg-blue-600 hover:bg-blue-700"
                                    >
                                        <Mail className="w-4 h-4 mr-2" />
                                        Jelajahi Produk
                                    </Button>
                                    
                                    <Button 
                                        variant="outline" 
                                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                                    >
                                        <Settings className="w-4 h-4 mr-2" />
                                        Pengaturan Notifikasi
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MartLayout>
    )
}

export default Notification