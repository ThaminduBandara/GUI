import React, { useRef } from "react";
import ProductList from './components/ProductLists';
import ProductForm from './components/ProductForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
     
      

      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/singleProduct" element={<SingleProduct />} />
          <Route path="/ProductForm" element={<ProductForm/>} />
          <Route path="/ProductLists" element={<ProductList/>} />

        </Routes>
     
     
     
     
      <div  ref={bottomRef} className='footer-last'>
        <Footerr/>
      </div>
    </div>
    
    </Router>
    
  );
}

export default App;
