import React from 'react'

const AboutUs = () => {
    const stats = [
        { id: 1, name: 'Petani Jagung Terdaftar', value: '5,000+' },
        { id: 2, name: 'Ton Jagung Terdistribusi', value: '25,000+' },
        { id: 3, name: 'Kabupaten Terjangkau', value: '150+' },
        { id: 4, name: 'Tingkat Kepuasan Petani', value: '98%' },
    ]

    return (
        <section className="w-full h-screen flex flex-col mt-10 p-6 lg:p-8">
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
                <div className="w-[60%] my-auto">
                    <p className="text-2xl leading-snug lg:leading-[1.3]">Di Rantai Pasok Distribusi, kami berkomitmen untuk mentransformasi dunia pertanian melalui pemanfaatan teknologi canggih dan wawasan berbasis data. Kami hadir untuk membantu petani dan pelaku agribisnis mengambil keputusan yang lebih cerdas, mengoptimalkan sumber daya, dan menerapkan praktik berkelanjutan demi kesuksesan jangka panjang.</p>
                </div>
                <div className='w-[40%] self-end'>
                    <p className=" leading-snug lg:leading-[1.3] mb-5">Kami percaya teknologi adalah kunci masa depan pertanian. Misi kami adalah mempercepat akses pasar, pendanaan, dan solusi pintar untuk petani jagung dan pelaku agribisnis, guna meningkatkan hasil, efisiensi, dan pertumbuhan berkelanjutan.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs