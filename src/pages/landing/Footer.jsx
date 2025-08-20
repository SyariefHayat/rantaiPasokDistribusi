import React from 'react';

const Footer = () => {
    const footerLinks = {
        mulai: [
            { title: 'Beranda', url: '/' },
            { title: 'Fitur', url: '/features' },
            { title: 'Harga', url: '/pricing' },
            { title: 'Kontak', url: '/contact' }
        ],
        artikel: [
            { title: 'Blog', url: '/blog' },
            { title: 'Panduan', url: '/guide' },
            { title: 'Tutorial', url: '/tutorial' },
            { title: 'FAQ', url: '/faq' }
        ]
    };

    return (
        <footer className="bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <img src="/logo3.png" alt="SIJUKI Logo" />
                        </div>
                        <p className="text-green-100 mb-8 leading-relaxed max-w-md">
                            Solusi terdepan untuk manajemen distribusi jagung yang efisien dan transparan di Indonesia. 
                            Bergabunglah dengan revolusi digital pertanian.
                        </p>
                        
                        <div className="flex space-x-4">
                            <a href="#" className="group w-12 h-12 bg-green-600/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" className="group w-12 h-12 bg-green-600/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a href="#" className="group w-12 h-12 bg-green-600/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a href="#" className="group w-12 h-12 bg-green-600/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-white flex items-center">
                                <div className="w-1 h-6 bg-yellow-400 rounded-full mr-3"></div>
                                Mulai
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.mulai.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.url} className="text-green-100 hover:text-yellow-400 transition-all duration-300 flex items-center group">
                                            <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 rounded-full mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-white flex items-center">
                                <div className="w-1 h-6 bg-yellow-400 rounded-full mr-3"></div>
                                Artikel
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.artikel.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.url} className="text-green-100 hover:text-yellow-400 transition-all duration-300 flex items-center group">
                                            <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 rounded-full mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-green-600/50 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-green-200 text-sm flex items-center">
                            © 2025 SIJUKI. Semua hak dilindungi. Made with in Indonesia
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-green-200 hover:text-yellow-400 transition-colors duration-300 relative group">
                                Privacy Policy
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a href="#" className="text-green-200 hover:text-yellow-400 transition-colors duration-300 relative group">
                                Terms of Service
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a href="#" className="text-green-200 hover:text-yellow-400 transition-colors duration-300 relative group">
                                Sitemap
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;