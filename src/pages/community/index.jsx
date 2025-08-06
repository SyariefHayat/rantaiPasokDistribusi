import React from 'react'

import NavBar from '../landing/NavBar'
import Footer from '../landing/Footer'
import DefaultLayout from '@/components/layouts/DefaultLayout'

const Community = () => {
    return (
        <DefaultLayout>
            <NavBar />
            <div className="w-full h-screen">
                Community
            </div>
            <Footer />
        </DefaultLayout>
    )
}

export default Community