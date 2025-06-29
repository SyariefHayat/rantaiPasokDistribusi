import DefaultLayout from '@/components/layouts/DefaultLayout'
import Navbar from '@/components/modules/mall/Navbar'
import React from 'react'

const Mall = () => {
    return (
        <DefaultLayout>
            <Navbar />
            <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center"></div>
            <div className="flex mt-5">
                <div>
                    <div className="w-15 h-15 flex items-center justify-center bg-gray-300">
                        <div className="w-10 h-10 bg-gray-500"></div>
                    </div>
                    <p>Pinjaman</p>
                </div>
                <div>
                    <div className="w-15 h-15 flex items-center justify-center bg-gray-300">
                        <div className="w-10 h-10 bg-gray-500"></div>
                    </div>
                    <p>Pelatihan</p>
                </div>
                <div>
                    <div className="w-15 h-15 flex items-center justify-center bg-gray-300">
                        <div className="w-10 h-10 bg-gray-500"></div>
                    </div>
                    <p>Mart</p>
                </div>
                <div>
                    <div className="w-15 h-15 flex items-center justify-center bg-gray-300">
                        <div className="w-10 h-10 bg-gray-500"></div>
                    </div>
                    <p>Sosial</p>
                </div>
                <div>
                    <div className="w-15 h-15 flex items-center justify-center bg-gray-300">
                        <div className="w-10 h-10 bg-gray-500"></div>
                    </div>
                    <p>Forum</p>
                </div>
                <div>
                    <div className="w-15 h-15 flex items-center justify-center bg-gray-300">
                        <div className="w-10 h-10 bg-gray-500"></div>
                    </div>
                    <p>Logistik</p>
                </div>
                <div>
                    <div className="w-15 h-15 flex items-center justify-center bg-gray-300">
                        <div className="w-10 h-10 bg-gray-500"></div>
                    </div>
                    <p>Info Pangan</p>
                </div>
                <div>
                    <div className="w-15 h-15 flex items-center justify-center bg-gray-300">
                        <div className="w-10 h-10 bg-gray-500"></div>
                    </div>
                    <p>Ekspor</p>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Mall