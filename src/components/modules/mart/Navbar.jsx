import React from 'react'
import { MapPin, Store } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
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
        <header className="flex flex-col mb-5 sticky top-0 z-50 bg-white shadow-sm">
            <div className="flex items-center justify-between px-8 py-3 border-b">
                <Link to="/mart" className="flex items-center space-x-2 hover:opacity-80 transition-all">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Sistem Jagung <span className="text-yellow-500">Untuk Kita</span>
                    </h1>
                </Link>

                <SearchComp />

                <div className="flex items-center h-8 gap-5">
                    <NavMessage />
                    <NavNotification />
                    <NavCart />
                    <Separator orientation="vertical" />
                    <NavProfile />

                    <Button 
                        className="bg-yellow-500 hover:bg-yellow-400 text-white flex items-center gap-2" 
                        onClick={() => navigate("/create/store")}
                    >
                        <Store size={18} />
                        Mulai Jualan
                    </Button>
                </div>
            </div>

            <div className="flex items-center justify-between px-8 py-2">
                <NavigationMenu viewport={false}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to="/">Beranda</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Produk Jagung</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link to="#products" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                <div className="text-sm font-medium leading-none">Semua Produk</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Jelajahi semua produk jagung yang tersedia
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link to="#products/konsumsi" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                <div className="text-sm font-medium leading-none">Jagung Konsumsi</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Jagung berkualitas tinggi untuk konsumsi sehari-hari
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link to="#products/pakan" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                <div className="text-sm font-medium leading-none">Jagung Pakan</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Jagung khusus untuk pakan ternak berkualitas
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link to="#products/pipilan" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                <div className="text-sm font-medium leading-none">Jagung Pipilan Kering</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Jagung pipilan kering dengan kadar air optimal
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Petani & Produsen</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link to="#farmers" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                <div className="text-sm font-medium leading-none">Direktori Petani</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Temukan petani dan produsen terpercaya di seluruh Indonesia
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link to="#farmers/profile" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                <div className="text-sm font-medium leading-none">Profil Petani</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Informasi lengkap tentang latar belakang dan sertifikasi petani
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link to="#become-farmer" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                <div className="text-sm font-medium leading-none">Bergabung Sebagai Petani</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Daftarkan diri Anda sebagai petani mitra kami
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Pendanaan</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link to="#funding/active" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                <div className="text-sm font-medium leading-none">Proyek Pendanaan Aktif</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Lihat dan dukung proyek-proyek pertanian yang sedang berjalan
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link to="#funding/impact" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                <div className="text-sm font-medium leading-none">Laporan Dampak</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Transparansi dampak positif dari program pendanaan kami
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link to="#funding/apply" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                <div className="text-sm font-medium leading-none">Ajukan Pendanaan</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Ajukan proposal pendanaan untuk proyek pertanian Anda
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to="#articles">Artikel & Edukasi</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to="#contact">Hubungi Kami</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center justify-center gap-2">
                    <MapPin size="20" className="text-gray-500" />
                    <p className="text-sm font-medium hover:underline hover:text-blue-600 cursor-pointer">
                        Gresik, Jawa Timur, Indonesia
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Navbar