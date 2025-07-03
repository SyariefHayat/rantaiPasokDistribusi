import { z } from 'zod';
import React, { useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import DefaultLayout from '@/components/layouts/DefaultLayout';

const storeSchema = z.object({
    storeName: z.string().min(3, 'Nama toko minimal 3 karakter'),
    description: z.string().optional(),
    phoneNumber: z.string().min(10, 'Nomor telepon tidak valid'),
});

const CreateStore = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(storeSchema),
    });

    const onSubmit = (data) => {
        console.log('Data Terkirim:', data);
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('File dipilih:', file);
        }
    };

    return (
        <DefaultLayout>
            <div className="w-full min-h-screen bg-yellow-100 p-5">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <Button variant="link" className="cursor-pointer" onClick={() => navigate("/mart")}>
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Kembali
                    </Button>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full h-full flex justify-between gap-5 bg-white p-10 rounded-md mt-4">
                            <div className="w-full h-full">
                                <p className="mb-2 font-medium text-sm text-gray-600">Profil Toko</p>
                                <div className="w-full flex items-center justify-between gap-5">
                                    <div>
                                        <div className="w-16 h-16 rounded-full bg-gray-200" />
                                    </div>
                                    <div className="w-[82%] h-20 flex flex-col gap-3">
                                        <p className="text-xs text-gray-500">
                                            Ukuran optimal 300 x 300 px, maksimum 10MB. Format: JPG, JPEG, PNG.
                                        </p>
                                        <Button variant="outline" type="button" className="w-fit cursor-pointer" onClick={handleButtonClick}>
                                            Upload Gambar
                                        </Button>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInputRef}
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>

                                <div className="grid w-full items-center gap-2 my-5">
                                    <Label htmlFor="storeName" className="font-medium text-sm text-gray-600">Nama Toko</Label>
                                    <Input
                                        id="storeName"
                                        placeholder="Masukkan nama toko"
                                        className="py-5"
                                    />
                                    {errors.storeName && (
                                        <p className="text-red-500 text-xs">{errors.storeName.message}</p>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-2 my-5">
                                    <Label htmlFor="storeUrl" className="font-medium text-sm text-gray-600">Link URL Toko</Label>
                                    <Input
                                        id="storeUrl"
                                        value="http://localhost:5173/store/"
                                        className="bg-gray-200 py-5"
                                        disabled
                                    />
                                </div>

                                <div className="grid w-full h-full items-center gap-3 my-5">
                                    <Label htmlFor="description" className="font-medium text-sm text-gray-600">Deskripsi</Label>
                                    <Textarea
                                        id="description"
                                        placeholder="Masukkan deskripsi toko"
                                        className="resize-none p-3 h-[85px]"
                                        {...register('description')}
                                    />
                                </div>
                            </div>

                            <div className="w-full h-full">
                                <p className="mb-2 font-medium text-sm text-gray-600">Background Toko</p>
                                <div className="w-full h-32 flex items-center justify-center gap-5 bg-gray-200 rounded-md">
                                    <Button 
                                        type="button" 
                                        variant="outline" 
                                        className="cursor-pointer" 
                                        onClick={handleButtonClick}
                                    >
                                        Pilih Gambar
                                    </Button>
                                </div>

                                <div className="grid w-full items-center gap-3 my-5">
                                    <Label htmlFor="phoneNumber" className="font-medium text-sm text-gray-600">Nomor Telepon</Label>
                                    <Input
                                        id="phoneNumber"
                                        placeholder="Masukkan nomor telepon"
                                        className="py-5"
                                        {...register('phoneNumber')}
                                    />
                                    {errors.phoneNumber && (
                                        <p className="text-red-500 text-xs">{errors.phoneNumber.message}</p>
                                    )}
                                </div>

                                <p className="mb-2 font-medium text-sm text-gray-600">Lokasi</p>
                                <div className="w-full h-32 bg-gray-200 rounded-md flex items-center justify-center">
                                    <Button type="button" variant="outline" className="cursor-pointer">Pilih Lokasi</Button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-24 bg-white mt-5 p-5 rounded-md flex items-center gap-5">
                            <Button 
                                variant="outline" 
                                type="button" 
                                className="cursor-pointer" 
                                onClick={() => navigate("/mart")}
                            >
                                Batalkan
                            </Button>
                            <Button 
                                type="submit" 
                                className="bg-yellow-500 hover:bg-yellow-600 text-black cursor-pointer" 
                                onClick={() => navigate("/seller")}
                            >
                                Buat Toko Sekarang
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default CreateStore;