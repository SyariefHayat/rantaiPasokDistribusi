import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { 
    createBrowserRouter, 
    RouterProvider 
} from 'react-router-dom'

import './index.css'
import Home from './pages/landing/Home'
import Login from './pages/auth/Login'
import AdminDashboard from './pages/AdminDashboard'
import FarmerDashboard from './pages/FarmerDashboard'
import SupplierDashboard from './pages/SupplierDashboard'
import DistributorDashboard from './pages/DistributorDashboard'
import SignUp from './pages/auth/SignUp'
import VerifyOtp from './pages/auth/VerifyOtp'
import ProfileSetup from './pages/auth/ProfileSetup'
import Mall from './pages/landing/Mall'

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
        path: "/mall",
        element: <Mall />
    },
    {
        path: "/admin",
        element: <AdminDashboard />
    },
    {
        path: "/supplier",
        element: <SupplierDashboard />
    },
    {
        path: "/distributor",
        element: <DistributorDashboard />
    },
    {
        path: "/farmer",
        element: <FarmerDashboard />
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
