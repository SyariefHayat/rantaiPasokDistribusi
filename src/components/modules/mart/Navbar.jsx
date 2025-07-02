import React from 'react'

import { 
    Bell, 
    MessageCircle, 
    ShoppingCart, 
    Store
} from 'lucide-react'

import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar"

import SearchComp from './SearchComp'
import EachUtils from '@/utils/EachUtils'
import { LIST_CART } from '@/constants/listCart'
import { Separator } from "@/components/ui/separator"
import { LIST_NOTIFICATIONS } from '@/constants/listNotifications'
import { Button } from '@/components/ui/button'
import NavMessage from './NavMessage'
import NavNotification from './NavNotification'
import NavCart from './NavCart'

const Navbar = () => {
    
    return (
        <header className="flex items-center justify-between mb-5 bg-white">
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-all">
                <h1 className="text-2xl font-bold text-gray-800">Rantai Pasok <span className="text-yellow-500">Distribusi</span></h1>
            </a>

            <SearchComp />

            <div className="flex items-center h-8 gap-5">
                <NavMessage />
                <NavNotification />
                <NavCart />

                <Separator orientation="vertical" />

                <div className="relative group flex items-center space-x-2 cursor-pointer">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg p-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-20 border">
                        <div className="p-2 hover:bg-gray-100 rounded cursor-pointer text-sm">Profil Saya</div>
                        <div className="p-2 hover:bg-gray-100 rounded cursor-pointer text-sm">Pengaturan</div>
                        <div className="p-2 hover:bg-gray-100 rounded cursor-pointer text-sm">Keluar</div>
                    </div>
                </div>

                <Button>
                    <Store/>
                    Mulai Jualan
                </Button>
            </div>
        </header>
    )
}

export default Navbar