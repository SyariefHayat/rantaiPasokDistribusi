import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-20 bg-[url(/13.jpg)]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                    Siap Bergabung dengan Komunitas Petani Jagung Sukses?
                </h2>
                <p className="text-xl text-green-100 mb-8">
                    Mulai journey kesuksesan bisnis jagung Anda hari ini. Gratis tanpa biaya tersembunyi.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6">
                        Daftar Sebagai Petani
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-green-600 hover:bg-white hover:text-green-600 text-lg px-8 py-6">
                        Hubungi Tim Kami
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;