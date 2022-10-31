import './App.css';
import { Routes, Route} from 'react-router-dom';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import Favourite from './Pages/Favourite'
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Product from './Pages/Product';
import Sale from './Pages/Sale';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route exact path='/' element={<Landing/>} />
        </Routes>

        <Routes>
          <Route exact path = 'profile' element= {<Profile />}/>
        </Routes>

        <Routes>
          <Route exact path = 'login' element= {<Login />}/>
        </Routes>

        <Routes>
          <Route exact path = 'register' element= {<Register />}/>
        </Routes>

        <Routes>
          <Route exact path = 'about' element= {<About />}/>
        </Routes>

        <Routes>
          <Route exact path = 'contact' element= {<Contact />}/>
        </Routes>

        <Routes>
          <Route exact path = 'favourite' element= {<Favourite />}/>
        </Routes>

        <Routes>
          <Route exact path = 'cart' element= {<Cart />}/>
        </Routes>

        <Routes>
          <Route exact path = 'product' element = {<Product />}/>
        </Routes>

        <Routes>
          <Route exact path = 'sale' element = {<Sale />}/>
        </Routes>
    </div>
  );
}

export default App;
