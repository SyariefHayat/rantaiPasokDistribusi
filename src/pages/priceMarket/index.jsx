import React from 'react'

import NavBar from '../landing/NavBar'
import Footer from '../landing/Footer'
import DefaultLayout from '@/components/layouts/DefaultLayout'

const PriceMarket = () => {
    return (
        <DefaultLayout>
            <NavBar/>
            <div className="w-full h-screen">
                <p>PriceMarket</p>
            </div>
            <Footer/>
        </DefaultLayout>
    )
}

export default PriceMarket