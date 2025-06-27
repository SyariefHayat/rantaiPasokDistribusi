import React from 'react'

import DefaultLayout from '@/components/layouts/DefaultLayout'
import AboutUs from '@/components/modules/landing/AboutUs'
import CTASection from '@/components/modules/landing/CTASection'
import FooterSection from '@/components/modules/landing/FooterSection'
import HeroSection from '@/components/modules/landing/HeroSection'
import MarketplaceSection from '@/components/modules/landing/MarketplaceSection'
import Navigation from '@/components/modules/landing/Navigation'
import BussinessSection from '@/components/modules/landing/BussinessSection'

const Landing = () => {
    return (
        <DefaultLayout>
            <Navigation />
            <HeroSection />
            <AboutUs />
            <BussinessSection />
            <MarketplaceSection />
            <CTASection />
            <FooterSection />
        </DefaultLayout>
    )
}

export default Landing