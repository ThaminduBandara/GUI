import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login-1.css';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    
    if (!email || !password) {
      alert('Please enter both username and password');
      return;
    }

    const isValid = email === 'thamindu' && password === 'thamindu123';

    if (isValid) {
      if (onLoginSuccess) {
        onLoginSuccess();
      }
      navigate('/home');
    } else {
      alert('Invalid credentials. Try username: thamindu, password: thamindu123');
    }
  }; 

  const handleSignUp = () => {
    navigate('/SignUp');
  };

  return (
    <div className='full-container'>
      <div className='mid-rectangle'>
        <div className='left-sq'>
          <div className='upper'>
            <p className='name-new'>NEW TECH PVT.LTD</p>
          </div>
          <div className='md'>
            <p className='caption'>Sri Lanka's No 1 Electronic <br/> Products.....</p>
          </div>
          <div className='lower'></div>
        </div>

        <div className='right-sq'>
          <div className='mid-right-login'>
            <div className='login-name'>
              <p className='login-name-1'>Log In</p>
            </div>
            <div className='name-email'>
              <p className='email-p'>User name or email</p>
              <input 
                placeholder='User name or email' 
                className='type-box-email' 
                type='text' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='password'>
              <p className='password-p'>Password</p>
              <input 
                className='password-in' 
                placeholder='Password' 
                type='password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='lg-btns'>

              
                      <button className='sign-up-1' onClick={handleSignUp}>Don't have an account? Sign up</button>
             

              <button className='sign-in-1' onClick={handleSignIn}>Sign in</button>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
