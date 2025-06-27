import React from 'react';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

const CTASection = () => {
    return (
        <section className="w-full h-fit flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-gray-50 py-12 sm:py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="/13.jpg" 
                    alt="Petani Jagung"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
            </div>

            <div className="relative z-10 w-full text-white flex flex-col lg:flex-row gap-5 lg:gap-5">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 lg:mb-10 font-bold leading-tight">
                        Siap Bergabung dengan Komunitas Petani Jagung Sukses?
                    </h2>
                    <Button 
                        variant="outline" 
                        className="bg-white text-black rounded-full cursor-pointer group hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 w-auto"
                    >
                        <div className="flex items-center justify-between gap-2">
                            <span className="font-medium">Mulai Sekarang</span>
                            <span className="p-1 bg-black rounded-full group-hover:bg-white transition-all duration-300">
                                <ArrowRight size={16} className="text-white group-hover:text-black transition-colors duration-300" />
                            </span>
                        </div>
                    </Button>
                </div>
                <div className="w-full lg:w-1/2 lg:self-end">
                    <p className="text-base sm:text-lg leading-relaxed opacity-90">
                        Mulai journey kesuksesan bisnis jagung Anda hari ini. Bergabunglah dengan ribuan petani yang telah merasakan manfaat platform kami. Gratis tanpa biaya tersembunyi.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTASection;