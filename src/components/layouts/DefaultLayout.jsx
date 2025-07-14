import React from 'react'

const DefaultLayout = ({children}) => {
    return (
        <div className="font-Poppins px-4 sm:px-6 lg:px-8 bg-gray-50">
            {children}
        </div>
    )
}

export default DefaultLayout