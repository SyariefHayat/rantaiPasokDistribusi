import { gsap } from "gsap";
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';

import EachUtils from '@/utils/EachUtils';
import { Button } from '@/components/ui/button';
import { LIST_NAVBAR } from '@/constants/listNavbar';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const isAnimatingRef = useRef(false);

    // Handle menu toggle with proper animation
    const toggleMenu = () => {
        if (isAnimatingRef.current) return; // Prevent multiple animations
        
        isAnimatingRef.current = true;
        
        if (!isMenuOpen) {
            // Opening menu
            setIsMenuOpen(true);
            gsap.fromTo(menuRef.current,
                { 
                    y: "-100%", 
                    opacity: 0,
                    display: "block"
                },
                { 
                    y: "0%", 
                    opacity: 1, 
                    duration: 0.5, 
                    ease: "power2.out",
                    onComplete: () => {
                        isAnimatingRef.current = false;
                    }
                }
            );
        } else {
            // Closing menu
            gsap.to(menuRef.current,
                { 
                    y: "-100%", 
                    opacity: 0, 
                    duration: 0.5, 
                    ease: "power2.in",
                    onComplete: () => {
                        setIsMenuOpen(false);
                        isAnimatingRef.current = false;
                    }
                }
            );
        }
    };

    // Handle menu item click
    const handleMenuItemClick = () => {
        if (isMenuOpen) {
            toggleMenu();
        }
    };

    // Close menu when clicking outside (optional)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                const toggleButton = event.target.closest('[aria-label="Toggle menu"]');
                if (!toggleButton) {
                    toggleMenu();
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <header className="w-full p-6 lg:px-8 absolute z-10 text-white">
            <nav className="flex items-center justify-between">
                <a href="/" className="flex-shrink-0 mt-1">
                    <h1 className="text-lg sm:text-xl lg:text-2xl whitespace-nowrap">
                        <span className="hidden sm:inline">Rantai Pasok Distribusi</span>
                        <span className="sm:hidden">RPD</span>
                    </h1>
                </a>

                {/* Desktop Navigation */}
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

                {/* Desktop Contact Button */}
                <Button
                    variant="outline"
                    className="hidden lg:flex bg-transparent border-1 border-white rounded-full cursor-pointer"
                >
                    <Link to="/contact-us" className="flex items-center gap-2">
                        <span className="whitespace-nowrap">Hubungi Kami</span>
                        <ArrowRight size={16} />
                    </Link>
                </Button>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className={`lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors duration-200 z-50 ${
                        isMenuOpen ? 'fixed top-6 right-6' : 'relative'
                    }`}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                ref={menuRef}
                className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-sm z-40 lg:hidden ${!isMenuOpen ? 'hidden' : ''}`}
                style={{ transform: "translateY(-100%)", opacity: 0 }}
            >
                <div className="flex flex-col h-full pt-20 px-6 overflow-y-auto">
                    {/* Mobile Navigation Links */}
                    <ul className="flex-1 space-y-6">
                        <EachUtils
                            of={LIST_NAVBAR}
                            render={(item, index) => (
                                <li key={index}>
                                    <a 
                                        href={item.url} 
                                        onClick={handleMenuItemClick}
                                        className="block text-2xl text-white hover:text-gray-300 transition-colors duration-200 py-2"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            )}
                        />
                    </ul>

                    {/* Mobile Contact Button */}
                    <div className="pb-8">
                        <Button
                            variant="outline"
                            className="w-full bg-transparent border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
                            onClick={handleMenuItemClick}
                        >
                            <Link to="/contact-us" className="flex items-center justify-center gap-2 w-full">
                                <span>Hubungi Kami</span>
                                <ArrowRight size={16} />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navigation;