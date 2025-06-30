import React, { useState } from 'react'

import { 
    Bell, 
    Search, 
    ShoppingCart 
} from 'lucide-react'

import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar"
import SearchComp from './SearchComp'
import EachUtils from '@/utils/EachUtils'
import { LIST_NOTIFICATIONS } from '@/constants/listNotifications'
import { LIST_CART } from '@/constants/listCart'

const Navbar = () => {
    
    return (
        <header className="flex items-center justify-between p-4 bg-white">
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-all">
                <h1 className="text-2xl font-bold text-gray-800">Rantai Pasok <span className="text-yellow-500">Distribusi</span></h1>
            </a>

            <SearchComp />

            <div className="flex items-center gap-8 transition-all">
                <a href="/mall" className="text-gray-700 hover:text-gray-400 transition font-medium">Marketplace</a>
                <a href="/bussiness" className="text-gray-700 hover:text-gray-400 transition font-medium">Bisnis</a>
            </div>

            <div className="flex items-center gap-8">
                <div className="relative group inline-block">
                    <Bell size={23} className="cursor-pointer text-gray-700 hover:text-yellow-500 transition" />

                    <div className="absolute right-0 mt-3 w-80 bg-white shadow-2xl rounded-xl p-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-20 border border-gray-200">
                        <div className="pb-2 mb-2 text-center border-b border-gray-200 font-semibold text-gray-800">
                            Notifikasi
                        </div>

                        <div>
                            <EachUtils 
                                of={LIST_NOTIFICATIONS.slice(0, 3)}
                                render={(item, index) => (
                                    <div key={index} className="p-3 hover:bg-gray-100 rounded-md cursor-pointer text-sm transition flex flex-col gap-1">
                                        <p className="font-medium text-gray-800">{item.message}</p>
                                        <span className="text-xs text-gray-500">{item.time}</span>
                                    </div>
                                )}
                            />
                        </div>
                        
                        <div className="pt-2 mt-2 text-center border-t border-gray-200 font-semibold text-gray-800">
                            <a href="/notifikasi" className="text-yellow-500 hover:underline text-sm font-medium">Lihat Semua</a>
                        </div>
                    </div>
                </div>

                <div className="relative group inline-block">
                    <ShoppingCart size={23} className="cursor-pointer text-gray-700 hover:text-yellow-500 transition" />

                    <div className="absolute right-0 mt-3 w-80 bg-white shadow-lg rounded-lg p-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-20 border">
                        <div className="pb-2 mb-2 text-center border-b border-gray-200 font-semibold text-gray-800">
                            Keranjang Anda
                        </div>

                        <EachUtils 
                            of={LIST_CART}
                            render={(item, index) => (
                                <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer text-sm">
                                    <div className="flex items-center gap-2">
                                        <img src={item.image} alt={item.name} className="h-10 w-10 rounded object-cover" />
                                        <div>
                                            <p className="font-medium text-gray-800">{item.name}</p>
                                            <p className="text-xs text-gray-500">{item.quantity} x Rp{item.price.toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />

                        <div className="pt-2 mt-2 text-center border-t border-gray-200 font-semibold text-gray-800">
                            <a href="/notifikasi" className="text-yellow-500 hover:underline text-sm font-medium">Lihat Semua</a>
                        </div>
                    </div>
                </div>

                <div className="relative group flex items-center space-x-2 cursor-pointer">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg p-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-20 border">
                        
                        <div className="p-2 hover:bg-gray-100 rounded cursor-pointer text-sm">Profil Saya</div>
                        <div className="p-2 hover:bg-gray-100 rounded cursor-pointer text-sm">Pengaturan</div>
                        <div className="p-2 hover:bg-gray-100 rounded cursor-pointer text-sm">Keluar</div>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar