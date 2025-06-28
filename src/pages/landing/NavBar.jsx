import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import EachUtils from '@/utils/EachUtils';
import { Button } from '@/components/ui/button';
import { LIST_NAVBAR } from '@/constants/listNavbar';
import AccountMobile from '@/components/modules/landing/NavMobile';
import AnimatedContent from '@/components/modules/Animation/AnimatedContent';

const NavBar = () => {
    return (
        <header className="w-full p-6 lg:px-8 absolute z-10 text-white">
            <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={true}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.3}
            >
                <nav className="flex items-center justify-between">
                    <a href="/" className="flex-shrink-0 mt-1">
                        <h1 className="text-lg sm:text-xl lg:text-2xl whitespace-nowrap">
                            <span className="hidden sm:inline">Rantai Pasok Distribusi</span>
                            <span className="sm:hidden">RPD</span>
                        </h1>
                    </a>
                    <AccountMobile />
                    <ul className="hidden lg:flex gap-6 xl:gap-10">
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
                    <Button
                        variant="outline"
                        className="hidden lg:flex bg-transparent border-1 border-white rounded-full cursor-pointer"
                    >
                        <Link to="/contact-us" className="flex items-center gap-2">
                            <span className="whitespace-nowrap">Hubungi Kami</span>
                            <ArrowRight size={16} />
                        </Link>
                    </Button>
                </nav>
            </AnimatedContent>
        </header>
    );
};

export default NavBar;