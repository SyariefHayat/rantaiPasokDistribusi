import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDownIcon, Truck } from "lucide-react"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import Navbar from '@/components/modules/auth/Navbar'
import DefaultLayout from '@/components/layouts/DefaultLayout'

const DistributorSignup = () => {
    const [formData, setFormData] = useState({
        namaLengkap: '',
        email: '',
        username: '',
        noTelepon: '',
        jenisKelamin: '',
        tanggalLahir: '',
        provinsi: '',
        kabupatenKota: '',
        namaPerusahaan: '',
        jenisDistribusi: '',
        wilayahOperasi: '',
        kapasitasDistribusi: '',
        jenisKendaraan: ''
    })
    
    const [isLoading, setIsLoading] = useState(false)
    const [calendarOpen, setCalendarOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState(undefined)
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleDateSelect = (date) => {
        setSelectedDate(date)
        if (date) {
            setFormData(prev => ({
                ...prev,
                tanggalLahir: date.toISOString().split('T')[0]
            }))
        }
        setCalendarOpen(false)
    }

    const handleSelectChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500))
            console.log('Data distributor:', formData)
            navigate("/signup/success")
        } catch (error) {
            console.error("Error:", error)
        } finally {
            setIsLoading(false)
        }
    }

    const isFormValid = () => {
        return Object.values(formData).every(value => value.trim() !== '')
    }

    return (
        <DefaultLayout>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10 bg-blue-50">
                <div className="w-full max-w-2xl">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                Daftar Sebagai Distributor
                            </h1>
                            <p className="text-gray-600 text-sm">
                                Bergabung sebagai mitra distribusi produk pertanian
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <Label htmlFor="namaLengkap">Nama Lengkap</Label>
                                    <Input
                                        id="namaLengkap"
                                        name="namaLengkap"
                                        value={formData.namaLengkap}
                                        onChange={handleChange}
                                        placeholder="Masukkan nama lengkap"
                                        required
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="distributor@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="username"
                                        required
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="noTelepon">No. Telepon</Label>
                                    <Input
                                        id="noTelepon"
                                        name="noTelepon"
                                        type="tel"
                                        value={formData.noTelepon}
                                        onChange={handleChange}
                                        placeholder="081234567890"
                                        required
                                    />
                                </div>

                                <div>
                                    <Label>Jenis Kelamin</Label>
                                    <Select onValueChange={(value) => handleSelectChange('jenisKelamin', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih gender" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="laki-laki">Laki-laki</SelectItem>
                                            <SelectItem value="perempuan">Perempuan</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label>Tanggal Lahir</Label>
                                    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline" className="w-full justify-between">
                                                {selectedDate ? selectedDate.toLocaleDateString('id-ID') : "Pilih tanggal"}
                                                <ChevronDownIcon className="h-4 w-4" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={selectedDate}
                                                onSelect={handleDateSelect}
                                                fromYear={1950}
                                                toYear={new Date().getFullYear()}
                                                captionLayout="dropdown"
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                <div>
                                    <Label htmlFor="provinsi">Provinsi</Label>
                                    <Input
                                        id="provinsi"
                                        name="provinsi"
                                        value={formData.provinsi}
                                        onChange={handleChange}
                                        placeholder="Jawa Timur"
                                        required
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="kabupatenKota">Kabupaten/Kota</Label>
                                    <Input
                                        id="kabupatenKota"
                                        name="kabupatenKota"
                                        value={formData.kabupatenKota}
                                        onChange={handleChange}
                                        placeholder="Surabaya"
                                        required
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <Label htmlFor="namaPerusahaan">Nama Perusahaan/Usaha</Label>
                                    <Input
                                        id="namaPerusahaan"
                                        name="namaPerusahaan"
                                        value={formData.namaPerusahaan}
                                        onChange={handleChange}
                                        placeholder="CV. Distributor Agro"
                                        required
                                    />
                                </div>

                                <div>
                                    <Label>Jenis Distribusi</Label>
                                    <Select onValueChange={(value) => handleSelectChange('jenisDistribusi', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih jenis distribusi" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="sayuran-segar">Sayuran Segar</SelectItem>
                                            <SelectItem value="buah-buahan">Buah-buahan</SelectItem>
                                            <SelectItem value="beras-padi">Beras & Padi</SelectItem>
                                            <SelectItem value="produk-olahan">Produk Olahan</SelectItem>
                                            <SelectItem value="pupuk-pestisida">Pupuk & Pestisida</SelectItem>
                                            <SelectItem value="alat-pertanian">Alat Pertanian</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="wilayahOperasi">Wilayah Operasi</Label>
                                    <Input
                                        id="wilayahOperasi"
                                        name="wilayahOperasi"
                                        value={formData.wilayahOperasi}
                                        onChange={handleChange}
                                        placeholder="Jawa Timur, Jawa Tengah"
                                        required
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="kapasitasDistribusi">Kapasitas Distribusi (Ton/Bulan)</Label>
                                    <Input
                                        id="kapasitasDistribusi"
                                        name="kapasitasDistribusi"
                                        type="number"
                                        step="0.1"
                                        value={formData.kapasitasDistribusi}
                                        onChange={handleChange}
                                        placeholder="50"
                                        required
                                    />
                                </div>

                                <div>
                                    <Label>Jenis Kendaraan</Label>
                                    <Select onValueChange={(value) => handleSelectChange('jenisKendaraan', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih kendaraan" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="pickup">Pickup</SelectItem>
                                            <SelectItem value="truk-kecil">Truk Kecil 5 Ton</SelectItem>
                                            <SelectItem value="truk-sedang">Truk Sedang 5-10 Ton</SelectItem>
                                            <SelectItem value="truk-besar">Truk Besar 10 Ton</SelectItem>
                                            <SelectItem value="container">Container</SelectItem>
                                            <SelectItem value="truk-box">Truk Box</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={!isFormValid() || isLoading}
                                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Menyimpan...
                                    </>
                                ) : (
                                    'Daftar Sebagai Distributor'
                                )}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-xs text-gray-500">
                                Dengan mendaftar, Anda menyetujui 
                                <a href="/terms" className="text-blue-600 hover:text-blue-700 ml-1">
                                    Syarat & Ketentuan
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default DistributorSignup