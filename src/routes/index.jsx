import Login from "@/pages/auth/Login"
import ProfileSetup from "@/pages/auth/ProfileSetup"
import SignUp from "@/pages/auth/SignUp"
import Success from "@/pages/auth/Success"
import VerifyOtp from "@/pages/auth/VerifyOtp"
import Home from "@/pages/landing/Home"
import Mart from "@/pages/landing/Mart"

const routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/signup/verify-otp", element: <VerifyOtp /> },
    { path: "/signup/profile-setup", element: <ProfileSetup /> },
    { path: "/signup/success", element: <Success /> },
    { path: "/mart", element: <Mart /> },
]

export default routes