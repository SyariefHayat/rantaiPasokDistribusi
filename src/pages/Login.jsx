import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { 
    Loader2, 
    Package, 
    Truck, 
    Shield 
} from "lucide-react"

import { 
    Alert, 
    AlertDescription 
} from "@/components/ui/alert"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const navigate = useNavigate();

    const mockUsers = {
        'admin@supply.com': { password: 'admin123', role: 'admin', name: 'Administrator' },
        'supplier@supply.com': { password: 'supplier123', role: 'supplier', name: 'PT Supplier ABC' },
        'distributor@supply.com': { password: 'distributor123', role: 'distributor', name: 'CV Distributor XYZ' }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            
            const userData = mockUsers[email]
            if (userData && userData.password === password) {
                if (userData.role === "admin") {
                    navigate("/admin");
                } else if (userData.role === "supplier") {
                    navigate("/supplier")
                } else if (userData.role === "distributor") {
                    navigate("/distributor")
                }
            } else {
                setError('Email atau password salah')
            }
        } catch (err) {
            setError('Terjadi kesalahan saat login')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen w-full items-center justify-center p-6 bg-gray-50">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-6">
                    <div className="text-center">
                        <p className="text-gray-600">Sistem Rantai Pasok Distribusi</p>
                    </div>
                    
                    <Card>
                        <CardHeader>
                            <CardTitle>Login ke Akun Anda</CardTitle>
                            <CardDescription>
                                Masukkan email dan password untuk mengakses sistem
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-4">
                                {error && (
                                    <Alert variant="destructive">
                                        <AlertDescription>{error}</AlertDescription>
                                    </Alert>
                                )}
                                
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="user@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={loading}
                                    />
                                </div>
                                
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input 
                                        id="password" 
                                        type="password" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        disabled={loading}
                                    />
                                </div>
                                
                                <Button onClick={handleLogin} className="w-full" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Memproses...
                                        </>
                                    ) : (
                                        'Login'
                                    )}
                                </Button>
                            </div>
                            
                            <div className="mt-6 border-t pt-4">
                                <p className="text-sm font-medium mb-2">Demo Accounts:</p>
                                <div className="text-xs space-y-1 text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Shield className="h-3 w-3 text-red-600" />
                                        <span>Admin: admin@supply.com / admin123</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Package className="h-3 w-3 text-blue-600" />
                                        <span>Supplier: supplier@supply.com / supplier123</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Truck className="h-3 w-3 text-green-600" />
                                        <span>Distributor: distributor@supply.com / distributor123</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Login