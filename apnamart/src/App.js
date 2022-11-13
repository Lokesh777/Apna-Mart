import logo from './logo.svg';
import './App.css';
import Product from './Product Page/Product.jsx';
import CartPage from './Cart Page/CartPage';

import { Route, Routes } from 'react-router-dom';
import MainHome from './HomePage/MainHome';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainHome />} />
        
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<CartPage/>} />
{   /*     <Route path="/about" element="about" />
        <Route path="/contacts" element="contacts" />
        <Route path="/login" element="login" />
        <Route path="/user" element={<PrivateRoute></PrivateRoute>} />
  <Route path="/users/:user_id" element={<PrivateRoute></PrivateRoute>} /> */}
      </Routes>
    </div>
  );
}

export default App;
