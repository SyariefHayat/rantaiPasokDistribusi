import EachUtils from '@/utils/EachUtils';
import React, { useState } from 'react';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigationItems = [
        { title: 'Beranda', url: '/' },
        { title: 'Fitur', url: '#features' },
        { title: 'Marketplace', url: '#marketplace' }
    ];

    return (
        <header className="w-full px-6 py-4">
            <nav className="flex items-center justify-between">
                <a href="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 flex items-center justify-center">
                        <img src="/logo.png" alt="logo si juki" />
                    </div>
                    <span className="text-3xl font-bold text-green-600">SIJUKI</span>
                </a>

                <ul className="hidden md:flex items-center space-x-8">
                    <EachUtils 
                        of={navigationItems}
                        render={(item, index) => (
                            <li key={index}>
                                <a
                                    href={item.url}
                                    className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium relative group"
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
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200 font-medium"
                    >
                        Signup
                    </a>
                </div>

                <button 
                    className="md:hidden flex items-center justify-center w-8 h-8 text-gray-700 hover:text-green-600 transition-colors"
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
                <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
                    <ul className="flex flex-col space-y-3 mt-4">
                        <EachUtils 
                            of={navigationItems}
                            render={(item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.url}
                                        className="block text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium py-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            )}
                        />
                        
                        <li className="pt-2 border-t border-gray-100">
                            <a
                                href="/login"
                                className="block text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Login
                            </a>
                        </li>
                        <li>
                            <a
                                href="/signup"
                                className="block w-full text-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200 font-medium"
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