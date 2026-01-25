import React, { useRef, useState } from "react";
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





function App() {
  const bottomRef = useRef(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (

<Router>
    <div className="App">

<div className='top-container'>
    <NvgBar  bottomRef={bottomRef} isAuthenticated={isAuthenticated} onLogout={handleLogout}/>
  </div>
     
      <div className='routes-container'>
      <Routes>
          <Route path="/" element={
            isAuthenticated ? <Navigate to="/home" replace /> : <Navigate to="/Login" replace />
          } />
          <Route path="/Login" element={
            isAuthenticated ? <Navigate to="/home" replace /> : <Login onLoginSuccess={handleLoginSuccess}/>
          } />
          <Route path="/SignUp" element={<SignUp/>} />
          {/* Protected routes */}
          <Route path="/home" element={
            isAuthenticated ? <Home/> : <Navigate to="/Login" replace />
          } />
          <Route path="/singleProduct" element={
            isAuthenticated ? <SingleProduct/> : <Navigate to="/Login" replace />
          } />
          <Route path="/ProductForm" element={
            isAuthenticated ? <ProductForm/> : <Navigate to="/Login" replace />
          } />
          <Route path="/ProductLists" element={
            isAuthenticated ? <ProductList/> : <Navigate to="/Login" replace />
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
