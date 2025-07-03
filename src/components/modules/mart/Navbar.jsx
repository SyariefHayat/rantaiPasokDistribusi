import React from 'react'
import { Store } from 'lucide-react'

import NavCart from './NavCart'
import NavMessage from './NavMessage'
import SearchComp from './SearchComp'
import NavProfile from './NavProfile'
import { Button } from '@/components/ui/button'
import NavNotification from './NavNotification'
import { Separator } from "@/components/ui/separator"

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

                <NavProfile />

                <Button>
                    <Store/>
                    Mulai Jualan
                </Button>
            </div>
        </header>
    )
}

export default Navbar