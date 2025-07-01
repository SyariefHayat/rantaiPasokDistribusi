import React from 'react'
import FooterSection from '@/pages/landing/FooterSection'

const MartLayout = ({ children }) => {
    return (
        <div className="w-full h-full font-Poppins">
            <div className="p-5">
                {children}
            </div>
            <FooterSection />
        </div>
    )
}

export default MartLayout