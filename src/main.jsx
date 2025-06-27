import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { 
    createBrowserRouter, 
    RouterProvider 
} from 'react-router-dom'

import './index.css'
import Home from './pages/landing/Home'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import FarmerDashboard from './pages/FarmerDashboard'
import SupplierDashboard from './pages/SupplierDashboard'
import DistributorDashboard from './pages/DistributorDashboard'

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
