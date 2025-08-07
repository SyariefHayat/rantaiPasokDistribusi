import Login from "@/pages/auth/Login"
import ProfileSetup from "@/pages/auth/ProfileSetup"
import Otp from "@/pages/auth/Otp"
import Success from "@/pages/auth/Success"
import VerifyOtp from "@/pages/auth/VerifyOtp"
import Community from "@/pages/community"
import Cooperation from "@/pages/cooperation"
import Seller from "@/pages/dashboard/Seller"
import Home from "@/pages/landing/Home"
import Cart from "@/pages/mart/Cart"
import Category from "@/pages/mart/Category"
import CreateStore from "@/pages/mart/CreateStore"
import ForYouRecom from "@/pages/mart/ForYouRecommendation"
import Mart from "@/pages/mart/Mart"
import Message from "@/pages/mart/Message"
import Notification from "@/pages/mart/Notification"
import PopularProducts from "@/pages/mart/PopularProduct"
import Product from "@/pages/mart/Product"
import Profile from "@/pages/mart/Profile"
import StoreDetail from "@/pages/mart/Store"
import StoreRecommendations from "@/pages/mart/StoreRecommendation"
import News from "@/pages/news"
import PriceMarket from "@/pages/priceMarket"
import SignUp from "@/pages/auth/SignUp"
import FarmerSignup from "@/pages/auth/FarmerSignup"
import DistributorSignup from "@/pages/auth/DistributorSignup"

const routes = [
    { path: "/", element: <Home /> },
    { path: "/price-market", element: <PriceMarket /> },
    { path: "/community", element: <Community /> },
    { path: "/cooperation", element: <Cooperation /> },
    { path: "/marketplace", element: <Mart /> },
    { path: "/news", element: <News /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/signup/farmer", element: <FarmerSignup /> },
    { path: "/signup/distributor", element: <DistributorSignup /> },
    { path: "/signup/otp", element: <Otp /> },
    { path: "/signup/verify-otp", element: <VerifyOtp /> },
    { path: "/signup/profile-setup", element: <ProfileSetup /> },
    { path: "/signup/success", element: <Success /> },
    { path: "/mart", element: <Mart /> }, 
    { path: "/mart/category", element: <Category /> },
    { path: "/mart/popular", element: <PopularProducts /> },
    { path: "/mart/category/:category", element: <Category /> },
    { path: "/mart/store", element: <StoreRecommendations /> },
    { path: "/mart/store/:toko", element: <StoreDetail /> },
    { path: "/mart/store/:toko/:produk", element: <Product /> },
    { path: "/mart/for-you", element: <ForYouRecom /> },
    { path: "/message", element: <Message /> },
    { path: "/notification", element: <Notification /> },
    { path: "/cart", element: <Cart /> },
    { path: "/profile", element: <Profile /> },
    { path: "/create/store", element: <CreateStore /> },
    { path: "/seller", element: <Seller /> },
]

export default routes