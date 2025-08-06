import React from 'react'

import Navbar from '../modules/mart/Navbar'
import FooterSection from '@/pages/landing/Footer'

const MartLayout = ({ children }) => {
    return (
        <div className="w-full h-full font-Poppins">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-6">
                {children}
            </div>
            <FooterSection />
        </div>
    )
}

export default MartLayout