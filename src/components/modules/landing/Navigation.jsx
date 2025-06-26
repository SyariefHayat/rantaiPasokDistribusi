import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import EachUtils from '@/utils/EachUtils'
import { Button } from '@/components/ui/button'
import { LIST_NAVBAR } from '@/constants/listNavbar'

const Navigation = () => {
    return (
        <header className="w-full p-6 lg:px-8 absolute z-10 text-white">
            <nav className="flex items-center justify-between">
                <a href="/">
                    <h1>Rantai Pasok Distribusi</h1>
                </a>
                <ul className="flex gap-10">
                    <EachUtils 
                        of={LIST_NAVBAR}
                        render={(item, index) => (
                            <li key={index}>
                                <a href={item.url} className="relative cursor-pointer group inline-block overflow-hidden">
                                    {item.title}
                                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        )}
                    />
                </ul>
                <Button variant="outline" className="bg-transparent border-1 border-white rounded-full cursor-pointer">
                    <Link to="/contact-us">Hubungi Kami</Link>
                    <ArrowRight/>
                </Button>
            </nav>
        </header>
    )
}

export default Navigation