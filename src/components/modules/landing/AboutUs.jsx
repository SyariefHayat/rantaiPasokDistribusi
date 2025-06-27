import React from 'react'

const AboutUs = () => {
    const stats = [
        { id: 1, name: 'Petani Jagung Terdaftar', value: '5,000+' },
        { id: 2, name: 'Ton Jagung Terdistribusi', value: '25,000+' },
        { id: 3, name: 'Kabupaten Terjangkau', value: '150+' },
        { id: 4, name: 'Tingkat Kepuasan Petani', value: '98%' },
    ]

    return (
        <section className="w-full min-h-screen flex flex-col gap-3 lg:gap-10 lg:mt-10 p-6 lg:p-8">
            <dl className="w-full grid grid-cols-2 lg:flex lg:justify-between">
                {stats.map((stat) => (
                    <div key={stat.id} className="flex flex-col items-center text-center">
                        <dt className="text-sm sm:text-base text-gray-600 mb-2">{stat.name}</dt>
                        <dd className="order-first text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-gray-900 mb-2">
                            {stat.value}
                        </dd>
                    </div>
                ))}
            </dl>

            <div className="w-full h-full flex flex-col justify-center gap-8 lg:gap-0">
                <div className="w-full max-w-4xl mx-auto lg:mx-0">
                    <h2 className="text-xl sm:text-2xl lg:text-2xl xl:text-[26px] font-light leading-relaxed lg:leading-[1.4] text-gray-900">
                        Di Rantai Pasok Distribusi, kami berkomitmen untuk mentransformasi dunia pertanian melalui pemanfaatan teknologi canggih dan wawasan berbasis data. Kami hadir untuk membantu petani dan pelaku agribisnis mengambil keputusan yang lebih cerdas, mengoptimalkan sumber daya, dan menerapkan praktik berkelanjutan demi kesuksesan jangka panjang.
                    </h2>
                </div>
                
                <div className='w-full max-w-2xl lg:max-w-lg ml-auto'>
                    <p className="text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-[1.5] text-gray-700">
                        Kami percaya teknologi adalah kunci masa depan pertanian. Misi kami adalah mempercepat akses pasar, pendanaan, dan solusi pintar untuk petani jagung dan pelaku agribisnis, guna meningkatkan hasil, efisiensi, dan pertumbuhan berkelanjutan.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs