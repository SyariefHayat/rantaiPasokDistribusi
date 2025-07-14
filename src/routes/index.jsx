import Login from "@/pages/auth/Login"
import ProfileSetup from "@/pages/auth/ProfileSetup"
import SignUp from "@/pages/auth/SignUp"
import Success from "@/pages/auth/Success"
import VerifyOtp from "@/pages/auth/VerifyOtp"
import Seller from "@/pages/dashboard/Seller"
import Home from "@/pages/landing/Home"
import Cart from "@/pages/mart/Cart"
import Category from "@/pages/mart/Category"
import CreateStore from "@/pages/mart/CreateStore"
import Mart from "@/pages/mart/Mart"
import Message from "@/pages/mart/Message"
import Notification from "@/pages/mart/Notification"
import PopularProducts from "@/pages/mart/PopularProduct"
import Product from "@/pages/mart/Product"
import Profile from "@/pages/mart/Profile"

const routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/signup/verify-otp", element: <VerifyOtp /> },
    { path: "/signup/profile-setup", element: <ProfileSetup /> },
    { path: "/signup/success", element: <Success /> },
    { path: "/mart", element: <Mart /> }, 
    { path: "/mart/category", element: <Category /> },
    { path: "/mart/category/:category", element: <Category /> },
    { path: "/mart/popular", element: <PopularProducts /> },
    { path: "/mart/store/:toko", element: <Mart /> },
    { path: "/mart/store/:toko/:produk", element: <Product /> },
    { path: "/message", element: <Message /> },
    { path: "/notification", element: <Notification /> },
    { path: "/cart", element: <Cart /> },
    { path: "/profile", element: <Profile /> },
    { path: "/create/store", element: <CreateStore /> },
    { path: "/seller", element: <Seller /> },
]

export default routes