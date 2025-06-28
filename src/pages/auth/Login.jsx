import React from 'react';
import LoginForm from '@/components/modules/auth/LoginForm';

export default function Page() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gray-100">
            <a href="" className="absolute left-15 sm:left-10 top-10 text-2xl font-bold">
                Rantai Pasok Distribusi
            </a>
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </div>
    )
}