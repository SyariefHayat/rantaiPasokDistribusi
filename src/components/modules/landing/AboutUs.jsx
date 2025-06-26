import React from 'react'
import { ArrowRight } from 'lucide-react'

const AboutUs = () => {
    const stats = [
        { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
        { id: 2, name: 'Assets under holding', value: '$119 trillion' },
        { id: 3, name: 'New users annually', value: '46,000' },
        { id: 4, name: 'New users annually', value: '46,000' },
    ]

    return (
        <section className="w-full h-screen flex flex-col gap-5 p-6 lg:p-8">
            <dl className="w-full flex justify-between">
                {stats.map((stat) => (
                    <div key={stat.id} className="flex flex-col items-center">
                        <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            {stat.value}
                        </dd>
                    </div>
                ))}
            </dl>

            <div className="w-full h-full flex flex-col justify-between gap-3">
                <div className="w-[80%] my-auto">
                    <p className="text-2xl leading-snug lg:leading-[1.3]">Di Rantai Pasok Distribusi, kami berkomitmen untuk mentransformasi dunia pertanian melalui pemanfaatan teknologi canggih dan wawasan berbasis data. Kami hadir untuk membantu petani dan pelaku agribisnis mengambil keputusan yang lebih cerdas, mengoptimalkan sumber daya, dan menerapkan praktik berkelanjutan demi kesuksesan jangka panjang.</p>
                </div>
                <div className='w-[40%] self-end'>
                    <p className=" leading-snug lg:leading-[1.3] mb-5">Kami percaya teknologi adalah kunci masa depan pertanian. Misi kami adalah mempercepat akses pasar, pendanaan, dan solusi pintar untuk petani jagung dan pelaku agribisnis, guna meningkatkan hasil, efisiensi, dan pertumbuhan berkelanjutan.</p>
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