import React from 'react'

import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar"
import { Bell, Search, ShoppingCart } from 'lucide-react'
import { Input } from '@/components/ui/input'

const Navbar = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
            <div>
                <h1 className="text-2xl">Rantai Pasok Distribusi</h1>
            </div>
            <div className="relative w-1/2">
                <Input 
                    className="w-full h-11 rounded-full bg-gray-100 border-none placeholder:text-base"
                    placeholder="Enter the name of the brand or product..." 
                />
                <span className="w-7 h-7 rounded-full bg-black absolute top-1/2 right-2 transform -translate-y-1/2 flex items-center justify-center">
                    <Search size="18" className="text-white" />
                </span>
            </div>
            <div className="flex items-center space-x-4">
                <a href="">Bisnis</a>
                <a href="">Marketplace</a>
            </div>
            <div className="flex items-center space-x-4">
                <Bell />
                <ShoppingCart />
                <div className="flex items-center space-x-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>

        </header>
    )
}

export default Navbar