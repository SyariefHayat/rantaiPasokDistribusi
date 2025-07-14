import React from 'react'

import DefaultLayout from '@/components/layouts/DefaultLayout'
import NavBar from '@/pages/landing/NavBar'
import HeroSection from '@/pages/landing/HeroSection'
import AboutUs from '@/pages/landing/AboutUs'
import BussinessSection from '@/pages/landing/BussinessSection'
import MarketplaceSection from '@/pages/landing/MarketplaceSection'
import CTASection from '@/pages/landing/CTASection'
import FooterSection from '@/pages/landing/FooterSection'
import FeaturesSection from './FeaturesSection'
import PricingSection from './PricingSection'

const Home = () => {
    return (
        <DefaultLayout>
            <NavBar />
            <HeroSection />
            <FeaturesSection />
            <PricingSection />
            {/* <AboutUs /> */}
            {/* <BussinessSection /> */}
            {/* <MarketplaceSection /> */}
            <CTASection />
            <FooterSection />
        </DefaultLayout>
    )
}

export default Home