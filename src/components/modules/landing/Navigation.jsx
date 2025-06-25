import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Package, Menu, X, Wheat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-yellow-600 rounded-lg flex items-center justify-center">
                            <Wheat className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
                            Rantai Pasok Distribusi
                        </span>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Layanan</a>
                        <a href="#marketplace" className="text-gray-600 hover:text-green-600 transition-colors">Marketplace</a>
                        <a href="#stats" className="text-gray-600 hover:text-green-600 transition-colors">Komunitas</a>
                        <Button variant="outline" className="cursor-pointer" onClick={() => navigate("/login")}>Masuk</Button>
                        <Button className="bg-green-600 hover:bg-green-700">Daftar Sekarang</Button>
                    </div>
                    
                    <button 
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
                
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <div className="flex flex-col space-y-4">
                            <a href="#features" className="text-gray-600 hover:text-green-600">Layanan</a>
                            <a href="#marketplace" className="text-gray-600 hover:text-green-600">Marketplace</a>
                            <a href="#stats" className="text-gray-600 hover:text-green-600">Komunitas</a>
                            <Button variant="outline" onClick={() => navigate("/login")} className="w-full">Masuk</Button>
                            <Button className="w-full bg-green-600 hover:bg-green-700">Daftar Sekarang</Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;