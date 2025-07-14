import React from 'react';

const FooterSection = () => {
    const footerLinks = {
        mulai: [
            { title: 'Beranda', url: '/' },
            { title: 'Fitur', url: '/features' },
            { title: 'Harga', url: '/pricing' },
            { title: 'Kontak', url: '/contact' }
        ],
        kelebihan: [
            { title: 'Manajemen Produksi', url: '/production' },
            { title: 'Pemantauan Harga', url: '/pricing-monitor' },
            { title: 'Logistik Terintegrasi', url: '/logistics' },
            { title: 'Analisis Data', url: '/analytics' }
        ],
        artikel: [
            { title: 'Blog', url: '/blog' },
            { title: 'Panduan', url: '/guide' },
            { title: 'Tutorial', url: '/tutorial' },
            { title: 'FAQ', url: '/faq' }
        ]
    };

    return (
        <footer className="bg-green-700 text-white">
            <div className="container mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center">
                                <img src="/logo.png" alt="logo si juki" />
                                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                            </div>
                            <span className="text-xl font-bold">SIJUKI</span>
                        </div>
                        <p className="text-green-100 mb-6 leading-relaxed">
                            Solusi terdepan untuk manajemen distribusi jagung yang efisien dan transparan di Indonesia.
                        </p>
                        
                        {/* Social Media */}
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Mulai</h4>
                        <ul className="space-y-2">
                            {footerLinks.mulai.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} className="text-green-100 hover:text-white transition-colors">
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Kelebihan</h4>
                        <ul className="space-y-2">
                            {footerLinks.kelebihan.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} className="text-green-100 hover:text-white transition-colors">
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Artikel</h4>
                        <ul className="space-y-2">
                            {footerLinks.artikel.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} className="text-green-100 hover:text-white transition-colors">
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-green-600 pt-8 mb-8">
                    <div className="max-w-md mx-auto text-center">
                        <h4 className="text-lg font-semibold mb-4">Dapatkan Update Terbaru</h4>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Masukkan email Anda"
                                className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <button className="px-6 py-2 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                                Berlangganan
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-green-600 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-green-100 text-sm mb-4 md:mb-0">
                        © 2025 SIJUKI. Semua hak dilindungi.
                    </div>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-green-100 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-green-100 hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="text-green-100 hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;