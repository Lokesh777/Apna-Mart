
import './App.css';
import Product from './Product Page/Product.jsx';
import CartPage from './Cart Page/CartPage';
import { Route, Routes } from 'react-router-dom';
import MainHome from './HomePage/MainHome';
import SignupCard from './Components/Login/signupPage';
import Checkout from "./Components/checkout/Checkout";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainHome />} />        
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/login" element={<SignupCard />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
    </div>
  );
}

export default App;
