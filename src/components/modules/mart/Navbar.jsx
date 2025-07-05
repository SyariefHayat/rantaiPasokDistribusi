import React from 'react'
import { MapPin, Store } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import NavCart from './NavCart'
import NavMessage from './NavMessage'
import SearchComp from './SearchComp'
import NavProfile from './NavProfile'
import { Button } from '@/components/ui/button'
import NavNotification from './NavNotification'
import { Separator } from "@/components/ui/separator"

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <header className="flex flex-col mb-5 sticky top-0 z-50 bg-white">
            {/* Top Navbar */}
            <div className="flex items-center justify-between px-8 py-3 border-b">
                <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-all">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Rantai Pasok <span className="text-yellow-500">Distribusi</span>
                    </h1>
                </a>

                <SearchComp />

                <div className="flex items-center h-8 gap-5">
                    <NavMessage />
                    <NavNotification />
                    <NavCart />
                    <Separator orientation="vertical" />
                    <NavProfile />

                    <Button className="bg-yellow-500 hover:bg-yellow-400 text-white flex items-center gap-2" onClick={() => navigate("/create/store")}>
                        <Store size={18} />
                        Mulai Jualan
                    </Button>
                </div>
            </div>

            <div className="flex items-center justify-between px-8">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Beranda</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Produk Jagung</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Semua Produk</NavigationMenuLink>
                                <NavigationMenuLink>Jagung Konsumsi</NavigationMenuLink>
                                <NavigationMenuLink>Jagung Pakan</NavigationMenuLink>
                                <NavigationMenuLink>Jagung Pipilan Kering</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Petani & Produsen</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Direktori Petani</NavigationMenuLink>
                                <NavigationMenuLink>Info Latar Belakang Petani</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Pendanaan</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Proyek Pendanaan Aktif</NavigationMenuLink>
                                <NavigationMenuLink>Impact Report</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Artikel & Edukasi</NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Hubungi Kami</NavigationMenuTrigger>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center justify-center gap-2">
                    <MapPin size="20" />
                    <p className="text-sm font-medium hover:underline hover:text-blue-600 cursor-pointer">Gresik, Jawa Timur, Indonesia</p>
                </div>
            </div>
        </header>
    )
}

export default Navbar