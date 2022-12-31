import './App.css';
import { Routes, Route} from 'react-router-dom';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import Favourite from './Pages/Favourite'
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import NavBar from './Components/Layout/NavBar/NavBar';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Product from './Pages/Product';
import Sale from './Pages/Sales';
import Footer from './Components/Layout/Footer/Footer';
import Order from './Pages/Order';
import Wishlist from './Pages/Wishlist';
import Checkout from './Pages/Checkout';
import ProductScreen from './Pages/ProductScreen';
import ForgetPassword from './Pages/ForgetPassword';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route exact path='/' element={<Landing/>} />
        </Routes>

        <Routes>
          <Route exact path = 'my-profile' element= {<Profile />}/>
        </Routes>

        <Routes>
          <Route exact path = 'login' element= {<Login />}/>
        </Routes>
        
        <Routes>
            <Route exact path='forget-password' element={<ForgetPassword/>}/>
        </Routes>

        <Routes>
          <Route exact path = 'register' element= {<Register />}/>
        </Routes>

        <Routes>
          <Route exact path = 'about-us' element= {<About />}/>
        </Routes>

        <Routes>
          <Route exact path = 'contact-us' element= {<Contact />}/>
        </Routes>

        <Routes>
          <Route exact path = 'my-favourite' element= {<Favourite />}/>
        </Routes>

        <Routes>
          <Route exact path = 'cart' element= {<Cart />}/>
        </Routes>

        <Routes>
          <Route exact path = 'shop' element = {<Product />}/>
        </Routes>
        
        <Routes>
            <Route exact path = 'shop/:id' element={<ProductScreen/>}/>
        </Routes>

        <Routes>
          <Route exact path = 'sales' element = {<Sale />}/>
        </Routes>
        
        <Routes>
            <Route exact path = 'my-order' element={<Order/>}/>
        </Routes>
        
        <Routes>
            <Route exact path = 'my-wishlist' element = {<Wishlist/>}/>
        </Routes>
        
        <Routes>
            <Route exact path = 'checkout' element = {<Checkout/>}/>
        </Routes>
        
        <Footer/>
    </div>
  );
}

export default App;
