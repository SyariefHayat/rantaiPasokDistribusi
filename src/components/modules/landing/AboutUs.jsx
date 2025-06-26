import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

const AboutUs = () => {
    return (
        <section className="w-full h-screen gap-3 p-6 lg:p-8">
            <div className="w-full h-full flex flex-col justify-between gap-3">
                <div className="w-1/2">
                    <h2 className="text-xl text-gray-400 mb-5">Tentang Kami</h2>
                    <p className="text-3xl leading-snug lg:leading-[1.3]">Kami percaya teknologi adalah kunci masa depan pertanian. Misi kami adalah mempercepat akses pasar, pendanaan, dan solusi pintar untuk petani jagung dan pelaku agribisnis, guna meningkatkan hasil, efisiensi, dan pertumbuhan berkelanjutan.</p>
                </div>
                <div className='w-[40%] self-end'>
                    <p className=" leading-snug lg:leading-[1.3] mb-5">Di Rantai Pasok Distribusi, kami berkomitmen untuk mentransformasi dunia pertanian melalui pemanfaatan teknologi canggih dan wawasan berbasis data. Kami hadir untuk membantu petani dan pelaku agribisnis mengambil keputusan yang lebih cerdas, mengoptimalkan sumber daya, dan menerapkan praktik berkelanjutan demi kesuksesan jangka panjang.</p>
                    <p className="flex items-center gap-3 text-gray-400 ">
                        Lihat Lebih Detail
                        <ArrowRight size={18}/>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs