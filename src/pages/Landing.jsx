import DefaultLayout from '@/components/layouts/DefaultLayout'
import AboutUs from '@/components/modules/landing/AboutUs'
import BussinessSection from '@/components/modules/landing/BussinessSection'
import CTASection from '@/components/modules/landing/CTASection'
import FeatureSection from '@/components/modules/landing/FeatureSection'
import FooterSection from '@/components/modules/landing/FooterSection'
import HeroSection from '@/components/modules/landing/HeroSection'
import MarketplaceSection from '@/components/modules/landing/MarketplaceSection'
import Navigation from '@/components/modules/landing/Navigation'
import React from 'react'

const Landing = () => {
    return (
        <DefaultLayout>
            <Navigation />
            <HeroSection />
            <AboutUs />
            <FeatureSection />
            <MarketplaceSection />
            <BussinessSection />
            {/* <CTASection /> */}
            {/* <FooterSection /> */}
        </DefaultLayout>
    )
}

export default Landing