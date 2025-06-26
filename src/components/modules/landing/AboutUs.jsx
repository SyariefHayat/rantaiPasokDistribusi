import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

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

            <div className="w-full">
                <p className="text-base/7 font-semibold text-indigo-600">Deploy faster</p>
                <h2 className="text-3xl leading-snug lg:leading-[1.3] mb-5">Di Rantai Pasok Distribusi, kami berkomitmen untuk mentransformasi dunia pertanian melalui pemanfaatan teknologi canggih dan wawasan berbasis data. Kami hadir untuk membantu petani dan pelaku agribisnis mengambil keputusan yang lebih cerdas, mengoptimalkan sumber daya, dan menerapkan praktik berkelanjutan demi kesuksesan jangka panjang.</h2>
            </div>
        </section>
    )
}

export default AboutUs