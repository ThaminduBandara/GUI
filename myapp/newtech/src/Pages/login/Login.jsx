// import React from 'react'
// import './login.css'

// export default function Login() {
//   return (
//     <div className='full-container'>

//       <div className='mid-rectangle'>

//         <div className='left-sq'>

//           <div className='upper'>
//               <p className='name-new'>NEW TECH PVT.LTD</p>
//           </div>

//           <div className='md'>
//           <p className='caption'>Sri Lanka's No 1 Electronic <br/> Products.....</p>
//           </div>

//           <div className='lower'></div>
              
          

//         </div>

//         <div className='right-sq'>

//           <div className='mid-right-login'>

//               <div className='login-name'>
//                   <p className='login-name-1'>Log In</p>
//               </div>


//               <div className='name-email'>

//                   <p className='email-p'>User name or email</p>
//                   <input placeholder=' User name or email' className='type-box-email' type="text" />

//               </div>


//               <div className='password'>
//                   <p className='password-p'>Password</p>
//                   <input className='password-in' placeholder='Password' type="password" />
//               </div>

//               <div className='lg-btns'>

//                     <button className='sign-in-1'>Sign in</button>
//                     <button className='sign-up-1' >Don't have an account? Sign up</button>

//               </div>

//           </div>

//         </div>

//       </div>
      
//     </div>
//   )
// }


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login-1.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    alert(`Logging in with: ${email}`);
  };

  const navigate = useNavigate(); 

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
