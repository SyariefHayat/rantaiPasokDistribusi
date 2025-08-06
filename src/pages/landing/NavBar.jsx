import React, { useState } from 'react';

import EachUtils from '@/utils/EachUtils';
import { LIST_NAVBAR } from '@/constants/listNavbar';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="w-full px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
            <nav className="flex items-center justify-between max-w-7xl mx-auto">
                <a href="/" className="flex flex-col items-center justify-center group text-center">
                    <div className="flex items-center space-x-2">
                        <div className="relative">
                            <img 
                                src="/logo.png" 
                                alt="logo si juki" 
                                className="mb-2 size-10 transition-transform" 
                            />
                        </div>
                        <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            SIJUKI
                        </span>
                    </div>
                </a>

                <ul className="hidden md:flex items-center space-x-8">
                    <EachUtils 
                        of={LIST_NAVBAR}
                        render={(item, index) => (
                            <li 
                                key={index}
                                className="relative"
                            >
                                <a
                                    href={item.url}
                                    className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium relative group flex items-center"
                                >
                                    {item.title}
                                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full" />
                                </a>
                            </li>
                        )}
                    />
                </ul>

                <div className="hidden md:flex items-center space-x-4">
                    <a 
                        href="/login" 
                        className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
                    >
                        Login
                    </a>
                    <a 
                        href="/signup" 
                        className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 font-medium shadow-lg transform"
                    >
                        Signup
                    </a>
                </div>

                <button 
                    className="md:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-green-600 transition-colors rounded-lg hover:bg-gray-100"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                        />
                    </svg>
                </button>
            </nav>

            {isMobileMenuOpen && (
                <div className="md:hidden mt-4 pb-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
                    <ul className="flex flex-col space-y-2 mt-4">
                        <EachUtils 
                            of={navigationItems}
                            render={(item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.url}
                                        className="block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 font-medium py-3 px-4 rounded-lg"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.title}
                                    </a>
                                    
                                    {item.hasDropdown && (
                                        <div className="ml-4 mt-2 space-y-1">
                                            <EachUtils 
                                                of={item.submenu}
                                                render={(subItem, subIndex) => (
                                                    <a
                                                        key={subIndex}
                                                        href={subItem.url}
                                                        className="flex items-center text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 py-2 px-3 rounded-lg text-sm"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        <span className="text-base mr-2">{subItem.icon}</span>
                                                        {subItem.title}
                                                    </a>
                                                )}
                                            />
                                        </div>
                                    )}
                                </li>
                            )}
                        />
                        
                        <li className="pt-4 border-t border-gray-200 mt-4">
                            <a
                                href="/login"
                                className="block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 font-medium py-3 px-4 rounded-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Login
                            </a>
                        </li>
                        <li>
                            <a
                                href="/signup"
                                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 font-medium shadow-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Signup
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default NavBar;