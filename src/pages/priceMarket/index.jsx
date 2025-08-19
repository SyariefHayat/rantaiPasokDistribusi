import React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import NavBar from '../landing/NavBar'
import Footer from '../landing/Footer'
import DefaultLayout from '@/components/layouts/DefaultLayout'

const marketPrices = [
    {
        id: "CRN001",
        variety: "Jagung Kuning",
        location: "Jakarta",
        price: "Rp 4.200",
        pricePerKg: 4200,
        change: "+2.5%",
        trend: "up",
        quality: "Grade A",
        unit: "kg",
        lastUpdated: "2 jam lalu",
    },
    {
        id: "CRN002",
        variety: "Jagung Putih",
        location: "Surabaya",
        price: "Rp 4.050",
        pricePerKg: 4050,
        change: "-1.2%",
        trend: "down",
        quality: "Grade A",
        unit: "kg",
        lastUpdated: "1 jam lalu",
    },
    {
        id: "CRN003",
        variety: "Jagung Manis",
        location: "Bandung",
        price: "Rp 5.500",
        pricePerKg: 5500,
        change: "+0.8%",
        trend: "up",
        quality: "Premium",
        unit: "kg",
        lastUpdated: "30 menit lalu",
    },
    {
        id: "CRN004",
        variety: "Jagung Pakan",
        location: "Medan",
        price: "Rp 3.800",
        pricePerKg: 3800,
        change: "0.0%",
        trend: "stable",
        quality: "Standar",
        unit: "kg",
        lastUpdated: "45 menit lalu",
    },
    {
        id: "CRN005",
        variety: "Jagung Kuning",
        location: "Semarang",
        price: "Rp 4.150",
        pricePerKg: 4150,
        change: "+1.5%",
        trend: "up",
        quality: "Grade A",
        unit: "kg",
        lastUpdated: "1 jam lalu",
    },
    {
        id: "CRN006",
        variety: "Jagung Putih",
        location: "Yogyakarta",
        price: "Rp 4.100",
        pricePerKg: 4100,
        change: "-0.5%",
        trend: "down",
        quality: "Grade B",
        unit: "kg",
        lastUpdated: "3 jam lalu",
    },
]

const PriceMarket = () => {
    return (
        <DefaultLayout>
            <NavBar />
            <div className="w-full min-h-screen p-10 bg-gray-50">
                <h1 className="text-2xl font-semibold mb-6">Harga Pasar Jagung</h1>
                <Table>
                    <TableCaption>Update terbaru harga jagung di berbagai kota.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[120px]">ID</TableHead>
                            <TableHead>Varietas</TableHead>
                            <TableHead>Lokasi</TableHead>
                            <TableHead>Kualitas</TableHead>
                            <TableHead>Perubahan</TableHead>
                            <TableHead>Harga</TableHead>
                            <TableHead className="text-right">Terakhir Update</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {marketPrices.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.id}</TableCell>
                                <TableCell>{item.variety}</TableCell>
                                <TableCell>{item.location}</TableCell>
                                <TableCell>{item.quality}</TableCell>
                                <TableCell
                                    className={`${
                                        item.trend === "up"
                                        ? "text-green-600"
                                        : item.trend === "down"
                                        ? "text-red-600"
                                        : "text-gray-600"
                                    }`}
                                >
                                    {item.change}
                                </TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell className="text-right">{item.lastUpdated}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={6} className="font-semibold">
                                Rata-rata Harga
                            </TableCell>
                            <TableCell className="text-right">
                                Rp{" "}
                                {Math.round(
                                marketPrices.reduce((acc, cur) => acc + cur.pricePerKg, 0) /
                                    marketPrices.length
                                ).toLocaleString("id-ID")}
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
            <Footer />
        </DefaultLayout>
    )
}

export default PriceMarket