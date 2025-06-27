import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

const HeroSection = () => {
    return (
        <section className="w-full min-h-screen bg-[url(/23.jpg)] bg-center bg-cover flex items-end p-4 sm:p-6 lg:p-8 text-white">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="h-[60%] w-full flex flex-col justify-between max-w-7xl mx-auto relative">
                
                <div className="w-full lg:w-4/5 xl:w-3/4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-snug lg:leading-[1.3]">Menghubungkan petani jagung dengan teknologi cerdas dan solusi pendanaan berkelanjutan untuk masa depan pertanian yang lebih sejahtera.</h2>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mt-8">
                    <Button variant="outline" className="bg-white text-black rounded-full cursor-pointer group hover:bg-transparent hover:text-white">
                        <Link to="/get-started" className="flex items-center justify-between gap-2">
                            <span>Mulai Sekarang</span>
                            <span className="p-1 bg-black rounded-full group-hover:bg-white transition-all">
                                <ArrowRight size={16} className="text-white group-hover:text-black" />
                            </span>
                        </Link>
                    </Button>

                    <div className="w-full md:w-1/3 text-sm text-white/80">
                        <p>Kami hadir untuk mendukung petani dan agribisnis jagung dengan solusi inovatif, mempercepat akses ke pasar, meningkatkan produktivitas, dan mendorong pertumbuhan yang inklusif dan berkelanjutan.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;