import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

import { Button } from '@/components/ui/button';
import SplitText from '@/components/modules/Animation/SplitText';
import AnimatedContent from '@/components/modules/Animation/AnimatedContent';

const HeroSection = () => {
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    return (
        <section className="relative w-full min-h-screen bg-[url(/23.jpg)] bg-center bg-cover flex items-end p-4 sm:p-6 lg:p-8 text-white">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="h-[65%] sm:h-[60%] lg:h-[60%] w-full flex flex-col justify-between max-w-7xl mx-auto relative z-10 pb-4 sm:pb-0">
                <div className="w-full lg:w-4/5 xl:w-3/4 mb-5 sm:mb-0">
                    <SplitText
                        text="Menghubungkan petani jagung dengan teknologi cerdas dan solusi pendanaan berkelanjutan untuk masa depan pertanian yang lebih sejahtera."
                        className="text-3xl sm:text-4xl lg:text-5xl leading-snug lg:leading-[1.3]"
                        delay={150}
                        duration={0.6}
                        ease="power3.out"
                        splitType={isDesktop ? "lines" : "words"}
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="left"
                    />
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 lg:mt-8">
                    <AnimatedContent
                        distance={250}
                        direction="horizontal"
                        reverse={true}
                        duration={1.2}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0.3}
                    >
                        <Button variant="outline" className="bg-white text-black rounded-full cursor-pointer group hover:bg-transparent hover:text-white">
                            <Link to="/get-started" className="flex items-center justify-between gap-2">
                                <span>Mulai Sekarang</span>
                                <span className="p-1 bg-black rounded-full group-hover:bg-white transition-all">
                                    <ArrowRight size={16} className="text-white group-hover:text-black" />
                                </span>
                            </Link>
                        </Button>
                    </AnimatedContent>

                    <div className="w-full md:w-1/3 text-sm text-white/80">
                        <SplitText
                            text="Kami hadir untuk mendukung petani dan agribisnis jagung dengan solusi inovatif, mempercepat akses ke pasar, meningkatkan produktivitas, dan mendorong pertumbuhan yang inklusif dan berkelanjutan."
                            className=""
                            delay={isDesktop ? 150 : 100}
                            duration={0.6}
                            ease="power3.out"
                            splitType={isDesktop ? "lines" : "words"}
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign={isDesktop ? "end" : "left"}
                        />
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;