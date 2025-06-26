import React from 'react';
import { Link } from 'react-router-dom';

import BlurText from '../Animation/BlurText';
import SplitText from '../Animation/SplitText';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
    return (
        <section className="w-full min-h-screen bg-[url(/20.jpg)] bg-center bg-cover flex items-end p-6 lg:p-8 text-white">
            <div className="h-[60%] w-full flex flex-col justify-between max-w-7xl mx-auto">
                
                <div className="w-full lg:w-3/4">
                    <SplitText
                        text="Menghubungkan petani jagung dengan teknologi cerdas dan solusi pendanaan berkelanjutan untuk masa depan pertanian yang lebih sejahtera."
                        className="text-4xl lg:text-5xl leading-snug lg:leading-[1.3]"
                        delay={150}
                        duration={1}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.2}
                        rootMargin="-100px"
                        textAlign="start"
                    />
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mt-8">
                    <Button variant="outline" className="bg-transparent border-1 border-white rounded-full cursor-pointer">
                        <Link to="/contact-us">Mulai Sekarang</Link>
                    </Button>

                    <div className="w-full md:w-1/3 text-sm text-white/80">
                        <BlurText
                            text="Kami hadir untuk mendukung petani dan agribisnis jagung dengan solusi inovatif, mempercepat akses ke pasar, meningkatkan produktivitas, dan mendorong pertumbuhan yang inklusif dan berkelanjutan."
                            delay={100}
                            animateBy="words"
                            direction="top"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

{/* <Button className="flex items-center gap-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition group">
    Mulai Sekarang
    <span className="transition-all duration-300 rounded-full p-1 bg-black text-white">
        <ArrowRight size={16} />
    </span>
</Button> */}