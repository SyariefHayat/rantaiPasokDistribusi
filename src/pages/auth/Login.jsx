import React from 'react';
import LoginForm from '@/components/modules/auth/LoginForm';

const Login = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-100">
            <a href="/" className="absolute left-6 sm:left-10 top-6 sm:top-10 text-xl sm:text-2xl font-bold text-gray-800 hover:text-green-600 transition-colors duration-200 hidden sm:block">
                Sistem Jagung Untuk Kita
            </a>
            <div className="w-full max-w-md">
                <LoginForm />
            </div>
        </section>
    )
}

export default Login