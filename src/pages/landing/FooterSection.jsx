import React from 'react'

import { 
    Facebook, 
    Instagram, 
    Mail, 
    Phone, 
    Twitter, 
} from 'lucide-react'

const FooterSection = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-xl font-bold">Rantai Pasok Distribusi</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Platform agribisnis terdepan yang menghubungkan petani jagung dengan pasar yang lebih luas dan menguntungkan.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                            <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold mb-4">Marketplace</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Jagung Pipil</a></li>
                            <li><a href="#" className="hover:text-white">Jagung Manis</a></li>
                            <li><a href="#" className="hover:text-white">Jagung Pakan</a></li>
                            <li><a href="#" className="hover:text-white">Produk Olahan</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold mb-4">Layanan</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Jual Beli Jagung</a></li>
                            <li><a href="#" className="hover:text-white">Logistik</a></li>
                            <li><a href="#" className="hover:text-white">Pembiayaan</a></li>
                            <li><a href="#" className="hover:text-white">Konsultasi Ahli</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold mb-4">Kontak</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center">
                                <Phone className="w-4 h-4 mr-2" />
                                +62 800-1234-5678
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-4 h-4 mr-2" />
                                info@rantaipasok.id
                            </li>
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Komunitas</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">&copy; 2025 Rantai Pasok Distribusi. Seluruh hak cipta dilindungi.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white">Kebijakan Privasi</a>
                        <a href="#" className="text-gray-400 hover:text-white">Syarat & Ketentuan</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection