import './App.css';
import Login from './login';
import Registration from './registration';
import Payment from './payment';
import Page13 from './page13';
import Page14 from './page14';
import Product from './product';
import Home from './home';
import Chatbot from './chatbot';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/page13" element={<Page13 />} />
        <Route path="/page14" element={<Page14 />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
