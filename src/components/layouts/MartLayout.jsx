import React from 'react'
import FooterSection from '@/pages/landing/FooterSection'

const MartLayout = ({ children }) => {
    return (
        <div className="w-full h-full font-Poppins">
            <div className="max-w-7xl mx-auto px-4 py-6">
                {children}
            </div>
            <FooterSection />
        </div>
    )
}

export default MartLayout