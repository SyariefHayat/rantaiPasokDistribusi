import DefaultLayout from '@/components/layouts/DefaultLayout'
import CTASection from '@/components/modules/landing/CtaSection'
import FeatureSection from '@/components/modules/landing/FeatureSection'
import FooterSection from '@/components/modules/landing/FooterSection'
import HeroSection from '@/components/modules/landing/HeroSection'
import MarketplaceSection from '@/components/modules/landing/MarketplaceSection'
import Navigation from '@/components/modules/landing/Navigation'
import PricingSection from '@/components/modules/landing/PricingSection'
import StatsSection from '@/components/modules/landing/StatSection'
import TestimonialSection from '@/components/modules/landing/TestimonialSection'
import React from 'react'

const Landing = () => {
    return (
        <DefaultLayout>
            <Navigation />
            <HeroSection/>
            <StatsSection />
            <FeatureSection />
            <MarketplaceSection />
            <CTASection />
            <FooterSection />
        </DefaultLayout>
    )
}

export default Landing