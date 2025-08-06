import React from 'react'

import NavBar from '../landing/NavBar'
import Footer from '../landing/Footer'
import DefaultLayout from '@/components/layouts/DefaultLayout'

const Cooperation = () => {
    return (
        <DefaultLayout>
            <NavBar/>
            <div className="w-full h-screen">
                Cooperation
            </div>
            <Footer />
        </DefaultLayout>
    )
}

export default Cooperation