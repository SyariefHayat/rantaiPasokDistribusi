import React from 'react';
import { Link } from 'react-router-dom';

import BlurText from '../Animation/BlurText';
import SplitText from '../Animation/SplitText';
import { Button } from '@/components/ui/button';
import AnimatedContent from '../Animation/AnimatedContent';

const HeroSection = () => {
    return (
        <section className="w-full min-h-screen bg-[url(/20.jpg)] bg-center bg-cover flex items-end p-6 lg:p-8 text-white">
            <div className="h-[60%] w-full flex flex-col justify-between max-w-7xl mx-auto">
                
                <div className="w-full lg:w-3/4">
                    <SplitText
                        text="Menghubungkan petani jagung dengan teknologi cerdas dan solusi pendanaan berkelanjutan untuk masa depan pertanian yang lebih sejahtera."
                        className="text-4xl lg:text-5xl leading-snug lg:leading-[1.3]"
                        delay={80}
                        duration={1}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="start"
                    />
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mt-8">
                    <AnimatedContent
                        distance={200}
                        direction="horizontal"
                        reverse={true}
                        duration={1.2}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={1.5}
                    >
                        <Button variant="outline" className="bg-transparent border-1 border-white rounded-full cursor-pointer">
                            <Link to="/contact-us">Mulai Sekarang</Link>
                        </Button>
                    </AnimatedContent>

                    <div className="w-full md:w-1/3 text-sm text-white/80">
                        <SplitText
                            text="Kami hadir untuk mendukung petani dan agribisnis jagung dengan solusi inovatif, mempercepat akses ke pasar, meningkatkan produktivitas, dan mendorong pertumbuhan yang inklusif dan berkelanjutan."
                            delay={200}
                            duration={1}
                            ease="power3.out"
                            splitType="lines"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="start"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;