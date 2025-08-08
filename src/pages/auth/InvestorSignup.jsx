import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { 
    ChevronDownIcon, 
    MapPin, 
    DollarSign, 
    TrendingUp, 
    User 
} from "lucide-react"

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
import { Textarea } from '@/components/ui/textarea'
import Navbar from '@/components/modules/auth/Navbar'
import DefaultLayout from '@/components/layouts/DefaultLayout'

const InvestorSignup = () => {
    const [formData, setFormData] = useState({
        namaLengkap: '',
        username: '',
        noTelepon: '',
        jenisKelamin: '',
        tanggalLahir: '',
        kodePos: '',
        provinsi: '',
        kota: '',
        kecamatan: '',
        kelurahan: '',
        alamatLengkap: '',
        jenisInvestor: '',
        rangeInvestasi: '',
        sektorMinat: '',
        pengalamanInvestasi: '',
        risikoToleransi: '',
        targetReturn: ''
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
            console.log('Data investor:', formData)
            navigate("/signup/success")
        } catch (error) {
            console.error("Error:", error)
        } finally {
            setIsLoading(false)
        }
    }

    const isFormValid = () => {
        const requiredFields = [
            'namaLengkap', 'username', 'noTelepon', 'jenisKelamin', 
            'kodePos', 'provinsi', 'kota', 'kecamatan', 'kelurahan', 'alamatLengkap',
            'jenisInvestor', 'rangeInvestasi', 'sektorMinat', 'pengalamanInvestasi', 'risikoToleransi', 'targetReturn'
        ];
        
        const allFieldsFilled = requiredFields.every(field => {
            const value = formData[field];
            return value && value.toString().trim() !== '';
        });

        const isDateSelected = selectedDate !== undefined && selectedDate !== null;
        
        return allFieldsFilled && isDateSelected;
    }

    return (
        <DefaultLayout>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10 bg-amber-50">
                <div className="w-full max-w-2xl">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                Daftar Sebagai Investor
                            </h1>
                            <p className="text-gray-600 text-sm">
                                Bergabung untuk berinvestasi di sektor pertanian dan agribisnis
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <User className="w-5 h-5 mr-2 text-amber-600" />
                                        Data Pribadi
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="md:col-span-2">
                                            <Label htmlFor="namaLengkap" className="text-sm font-medium text-gray-700 mb-1 block">
                                                Nama Lengkap
                                            </Label>
                                            <Input
                                                id="namaLengkap"
                                                name="namaLengkap"
                                                type="text"
                                                value={formData.namaLengkap}
                                                onChange={handleChange}
                                                placeholder="Masukkan nama lengkap sesuai KTP"
                                                className="w-full focus:border-amber-500"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="username" className="text-sm font-medium text-gray-700 mb-1 block">
                                                Username
                                            </Label>
                                            <Input
                                                id="username"
                                                name="username"
                                                type="text"
                                                value={formData.username}
                                                onChange={handleChange}
                                                placeholder="investor123"
                                                className="focus:border-amber-500"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="noTelepon" className="text-sm font-medium text-gray-700 mb-1 block">
                                                Nomor Telepon
                                            </Label>
                                            <Input
                                                id="noTelepon"
                                                name="noTelepon"
                                                type="tel"
                                                value={formData.noTelepon}
                                                onChange={handleChange}
                                                placeholder="081234567890"
                                                className="focus:border-amber-500"
                                            />
                                        </div>

                                        <div>
                                            <Label className="text-sm font-medium text-gray-700 mb-1 block">
                                                Jenis Kelamin
                                            </Label>
                                            <Select onValueChange={(value) => handleSelectChange('jenisKelamin', value)}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih jenis kelamin" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="laki-laki">Laki-laki</SelectItem>
                                                    <SelectItem value="perempuan">Perempuan</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-medium text-gray-700 mb-1 block">Tanggal Lahir</Label>
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
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                                        Alamat
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="col-span-2">
                                            <Label htmlFor="kodePos" className="text-sm font-medium text-gray-700 mb-1 block">
                                                Kode Pos
                                            </Label>
                                            <Input
                                                id="kodePos"
                                                name="kodePos"
                                                type="text"
                                                value={formData.kodePos}
                                                onChange={handleChange}
                                                placeholder="6000"
                                                className="focus:border-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="provinsi" className="text-sm font-medium text-gray-700 mb-1 block">
                                                Provinsi
                                            </Label>
                                            <Input
                                                id="provinsi"
                                                name="provinsi"
                                                type="text"
                                                value={formData.provinsi}
                                                onChange={handleChange}
                                                placeholder="Jawa Timur"
                                                className="focus:border-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="kota" className="text-sm font-medium text-gray-700 mb-1 block">
                                                Kota
                                            </Label>
                                            <Input
                                                id="kota"
                                                name="kota"
                                                type="text"
                                                value={formData.kota}
                                                onChange={handleChange}
                                                placeholder="Malang"
                                                className="focus:border-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="kecamatan" className="text-sm font-medium text-gray-700 mb-1 block">
                                                Kecamatan
                                            </Label>
                                            <Input
                                                id="kecamatan"
                                                name="kecamatan"
                                                type="text"
                                                value={formData.kecamatan}
                                                onChange={handleChange}
                                                placeholder="Klojen"
                                                className="focus:border-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="kelurahan" className="text-sm font-medium text-gray-700 mb-1 block">
                                                Kelurahan
                                            </Label>
                                            <Input
                                                id="kelurahan"
                                                name="kelurahan"
                                                type="text"
                                                value={formData.kelurahan}
                                                onChange={handleChange}
                                                placeholder="Kauman"
                                                className="focus:border-blue-500"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <Label htmlFor="alamatLengkap" className="text-sm font-medium text-gray-700 mb-1 block">
                                                Alamat Lengkap
                                            </Label>
                                            <Textarea
                                                id="alamatLengkap"
                                                name="alamatLengkap"
                                                value={formData.alamatLengkap}
                                                onChange={handleChange}
                                                placeholder="Jl. Sudirman No. 123, Jakarta Selatan"
                                                rows={3}
                                                className="focus:border-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                                        Profil Investasi
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label className="text-sm font-medium text-gray-700 mb-1 block">
                                                Jenis Investor
                                            </Label>
                                            <Select onValueChange={(value) => handleSelectChange('jenisInvestor', value)}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih jenis investor" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="individu">Investor Individu</SelectItem>
                                                    <SelectItem value="institusional">Investor Institusional</SelectItem>
                                                    <SelectItem value="korporat">Investor Korporat</SelectItem>
                                                    <SelectItem value="keluarga">Family Office</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-medium text-gray-700 mb-1 block">
                                                Range Investasi (Rp)
                                            </Label>
                                            <Select onValueChange={(value) => handleSelectChange('rangeInvestasi', value)}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih range investasi" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="10-50jt">10 - 50 Juta</SelectItem>
                                                    <SelectItem value="50-100jt">50 - 100 Juta</SelectItem>
                                                    <SelectItem value="100-500jt">100 - 500 Juta</SelectItem>
                                                    <SelectItem value="500jt-1m">500 Juta - 1 Miliar</SelectItem>
                                                    <SelectItem value="1m+">Di atas 1 Miliar</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-medium text-gray-700 mb-1 block">
                                                Sektor Minat
                                            </Label>
                                            <Select onValueChange={(value) => handleSelectChange('sektorMinat', value)}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih sektor minat" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="produksi-pertanian">Produksi Pertanian</SelectItem>
                                                    <SelectItem value="teknologi-agritech">Teknologi AgriTech</SelectItem>
                                                    <SelectItem value="supply-chain">Supply Chain & Logistik</SelectItem>
                                                    <SelectItem value="food-processing">Food Processing</SelectItem>
                                                    <SelectItem value="sustainable-farming">Sustainable Farming</SelectItem>
                                                    <SelectItem value="semua">Semua Sektor</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-medium text-gray-700 mb-1 block">
                                                Pengalaman Investasi
                                            </Label>
                                            <Select onValueChange={(value) => handleSelectChange('pengalamanInvestasi', value)}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih pengalaman" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="pemula">Pemula (0-2 tahun)</SelectItem>
                                                    <SelectItem value="menengah">Menengah (2-5 tahun)</SelectItem>
                                                    <SelectItem value="berpengalaman">Berpengalaman (5-10 tahun)</SelectItem>
                                                    <SelectItem value="expert">Expert (10+ tahun)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-medium text-gray-700 mb-1 block">
                                                Toleransi Risiko
                                            </Label>
                                            <Select onValueChange={(value) => handleSelectChange('risikoToleransi', value)}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih toleransi risiko" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="konservatif">Konservatif</SelectItem>
                                                    <SelectItem value="moderat">Moderat</SelectItem>
                                                    <SelectItem value="agresif">Agresif</SelectItem>
                                                    <SelectItem value="sangat-agresif">Sangat Agresif</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <Label htmlFor="targetReturn" className="text-sm font-medium text-gray-700 mb-1 block">
                                                Target Return Tahunan (%)
                                            </Label>
                                            <Input
                                                id="targetReturn"
                                                name="targetReturn"
                                                type="number"
                                                step="0.1"
                                                min="1"
                                                value={formData.targetReturn}
                                                onChange={handleChange}
                                                placeholder="15"
                                                className="focus:border-green-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={!isFormValid() || isLoading}
                                className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:hover:scale-100 shadow-lg hover:shadow-xl disabled:shadow-none flex items-center justify-center"
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
                                    'Daftar Sebagai Investor'
                                )}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-xs text-gray-500">
                                Dengan mendaftar, Anda menyetujui 
                                <a href="/terms" className="text-amber-600 hover:text-amber-700 ml-1">
                                    Syarat & Ketentuan
                                </a> dan 
                                <a href="/investment-risk" className="text-amber-600 hover:text-amber-700 ml-1">
                                    Risiko Investasi
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default InvestorSignup