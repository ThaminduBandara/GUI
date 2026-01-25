import React, { useRef } from "react";
import ProductList from './components/ProductLists';
import ProductForm from './components/ProductForm';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import NvgBar from './components/naveBar/NvgBar';
import Footerr from './components/footer/Footerr'
import Home from './Pages/home/Home';
import Login from './Pages/login/Login';
import SignUp from './Pages/signUp/SignUp';
import SingleProduct from "./Pages/singleProduct/SingleProduct";
// import SingleProduct from "./Pages/singleProduct/SingleProduct";




function App() {

  const bottomRef = useRef(null);
  return (

<Router>
    <div className="App">

<div className='top-container'>
    <NvgBar  bottomRef={bottomRef}/>
  </div>
     
      <div className='routes-container'>
      <Routes>
          <Route path="/" element={<Navigate to="/Login" replace />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          {/* Protected routes */}
          <Route path="/home" element={
            localStorage.getItem('isAuthenticated') === 'true' ? <Home/> : <Navigate to="/Login" replace />
          } />
          <Route path="/singleProduct" element={
            localStorage.getItem('isAuthenticated') === 'true' ? <SingleProduct/> : <Navigate to="/Login" replace />
          } />
          <Route path="/ProductForm" element={
            localStorage.getItem('isAuthenticated') === 'true' ? <ProductForm/> : <Navigate to="/Login" replace />
          } />
          <Route path="/ProductLists" element={
            localStorage.getItem('isAuthenticated') === 'true' ? <ProductList/> : <Navigate to="/Login" replace />
          } />

        </Routes>
      </div>
     
     
     
      <div  ref={bottomRef} className='footer-last'>
        <Footerr/>
      </div>
    </div>
    
    </Router>
    
  );
}

export default App;
