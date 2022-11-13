import logo from './logo.svg';
import './App.css';
import Product from './Product Page/Product.jsx';
import CartPage from './Cart Page/CartPage';
import Footer from "./footer/Footer"
import { Route, Routes } from 'react-router-dom';
import MainHome from './HomePage/MainHome';
import SignupCard from './Login/signupPage';
import Checkout from "./checkout/Checkout.js";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<MainHome />} /> */}
        <Route path="/" element={<MainHome />} />
        
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/login" element={<SignupCard />} />
        <Route path="/checkout" element={<Checkout />} />
{   /*     <Route path="/about" element="about" />
        <Route path="/contacts" element="contacts" />
       
        <Route path="/user" element={<PrivateRoute></PrivateRoute>} />
  <Route path="/users/:user_id" element={<PrivateRoute></PrivateRoute>} /> */}
      </Routes>
    </div>
  );
}

export default App;
