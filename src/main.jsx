import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { 
    createBrowserRouter, 
    RouterProvider 
} from 'react-router-dom'

import './index.css'
import Home from './pages/landing/Home'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import VerifyOtp from './pages/auth/VerifyOtp'
import ProfileSetup from './pages/auth/ProfileSetup'
import Success from './pages/auth/Success'
import Mart from './pages/landing/Mart'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/signup/verify-otp",
        element: <VerifyOtp />
    },
    {
        path: "/signup/profile-setup",
        element: <ProfileSetup />
    },
    {
        path: "/signup/success",
        element: <Success />
    },
    {
        path: "/mart",
        element: <Mart />
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
