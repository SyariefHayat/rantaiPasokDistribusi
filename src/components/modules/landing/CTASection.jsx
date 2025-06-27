import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Phone } from 'lucide-react';

const CTASection = () => {
    const handleGetStarted = () => {
        // Handle navigation or action here
        console.log('Navigate to get started');
    };

    return (
        <section className="w-full h-fit flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-gray-50 py-24 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/13.jpg" 
                    alt="Petani Jagung"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
            </div>

            <div className="relative z-10 w-full text-white flex gap-5">
                <div className="w-1/2">
                    <h2 className="text-4xl mb-10 font-bold leading-tight">
                        Siap Bergabung dengan Komunitas Petani Jagung Sukses?
                    </h2>
                    <Button 
                        variant="outline" 
                        className="bg-white text-black rounded-full cursor-pointer group hover:bg-transparent hover:text-white hover:border-white transition-all duration-300"
                        onClick={handleGetStarted}
                    >
                        <div className="flex items-center justify-between gap-2">
                            <span className="font-medium">Mulai Sekarang</span>
                            <span className="p-1 bg-black rounded-full group-hover:bg-white transition-all duration-300">
                                <ArrowRight size={16} className="text-white group-hover:text-black transition-colors duration-300" />
                            </span>
                        </div>
                    </Button>
                </div>
                <div className="w-1/2 self-end">
                    <p className="text-lg leading-relaxed opacity-90">
                        Mulai journey kesuksesan bisnis jagung Anda hari ini. Bergabunglah dengan ribuan petani yang telah merasakan manfaat platform kami. Gratis tanpa biaya tersembunyi.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTASection;