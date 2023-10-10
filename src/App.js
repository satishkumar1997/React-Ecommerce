import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Module/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Product from './Components/Module/Home/Product';
import cart from './Components/Module/Home/cart';
import { useCart } from './Components/CartContext';
import Products from './Components/Products';
import CategoryProduct from './Components/CategoryProduct';
function App() {
  return (
  
 <div>
       <Header/>
       <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Products/:id' Component={Product}/>
        <Route path='/Products' Component={Products}/>
        <Route path='/cart' Component={cart}/>
        <Route path='/categories/:name' Component={CategoryProduct}/>
        <Route path='/UseCart' Component={useCart}/>
        </Routes>
       <Footer/>    
    </div>
   )
  }


export default App;
