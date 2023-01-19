import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Favourite from "./Pages/Favourite";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import NavBar from "./Components/Layout/NavBar/NavBar";
import Register from "./Pages/Register";
import Product from "./Pages/Product";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/Layout/Footer/Footer";
import Order from "./Pages/Order";
import Wishlist from "./Pages/Wishlist";
import Checkout from "./Pages/Checkout";
import ProductScreen from "./Pages/ProductScreen";
import ForgetPassword from "./Pages/ForgetPassword";
import ProtectedRoute from "./Components/Molecules/ProtectedRoute";
import Account from "./Pages/Account";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />

        <Route exact path="my-account" element={<ProtectedRoute><Account /></ProtectedRoute>} />

        <Route exact path="login" element={<Login />} />

        <Route exact path="forget-password" element={<ForgetPassword />} />

        <Route exact path="register" element={<Register />} />

        <Route exact path="about-us" element={<About />} />

        <Route exact path="contact-us" element={<Contact />} />

        <Route exact path="my-favourite" element={<ProtectedRoute><Favourite /></ProtectedRoute>} />

        <Route exact path="cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />

        <Route exact path="shop-now/:keyword" element={<Product />} />

        <Route exact path="shop-now" element={<Product />} />

        <Route exact path="shop-now/shop/:id" element={<ProductScreen />} />

        <Route exact path="my-dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        <Route exact path="my-order" element={<ProtectedRoute><Order /></ProtectedRoute>} />

        <Route exact path="my-wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />

        
        <Route exact path="checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
