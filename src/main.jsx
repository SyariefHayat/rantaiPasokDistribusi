import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { 
    createBrowserRouter, 
    RouterProvider 
} from 'react-router-dom'

import './index.css'
import Login from './pages/Login'
import Landing from './pages/Landing'
import AdminDashboard from './pages/AdminDashboard'
import SupplierDashboard from './pages/SupplierDashboard'
import DistributorDashboard from './pages/DistributorDashboard'
import FarmerDashboard from './pages/FarmerDashboard'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
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
