import React from 'react'

import DefaultLayout from '@/components/layouts/DefaultLayout'
import NavBar from '@/pages/landing/NavBar'
import AboutUs from '@/components/modules/landing/AboutUs'
import CTASection from '@/components/modules/landing/CTASection'
import FooterSection from '@/components/modules/landing/FooterSection'
import HeroSection from '@/pages/landing/HeroSection'
import MarketplaceSection from '@/components/modules/landing/MarketplaceSection'
import BussinessSection from '@/components/modules/landing/BussinessSection'

const Home = () => {
    return (
        <DefaultLayout>
            <NavBar />
            <HeroSection />
            <AboutUs />
            <BussinessSection />
            <MarketplaceSection />
            <CTASection />
            <FooterSection />
        </DefaultLayout>
    )
}

export default Home