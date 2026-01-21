// import React from 'react';
// import './signUp.css';

// export default function SignUp() {
//   return (
//     <div className="signup-container">
//       <div className="signup-rectangle">
//         <div className="signup-left">
//           <div className="signup-header">
//             <p className="signup-title">NEW TECH PVT.LTD</p>
//           </div>

//           <div className="signup-subheading">
//             <p className="signup-caption">Sri Lanka's No 1 Electronic <br /> Products.....</p>
//           </div>

//           <div className="signup-footer"></div>
//         </div>

//         <div className="signup-right">
//           <div className="signup-form">
//             <div className="signup-heading">
//               <p className="signup-heading-text">Sign Up</p>
//             </div>

//             <div className="signup-input">
//               <p className="signup-input-label">Full Name</p>
//               <input placeholder="Full Name" className="signup-input-field" type="text" />
//             </div>

//             <div className="signup-input">
//               <p className="signup-input-label">Email</p>
//               <input placeholder="Email" className="signup-input-field" type="email" />
//             </div>

//             <div className="signup-input">
//               <p className="signup-input-label">Password</p>
//               <input className="signup-password-field" placeholder="Password" type="password" />
//             </div>

//             <div className="signup-input">
//               <p className="signup-input-label">Confirm Password</p>
//               <input className="signup-password-field" placeholder="Confirm Password" type="password" />
//             </div>

//             <div className="signup-actions">
//               <button className="signup-button">Sign Up</button>
//               <button className="signup-login-button">Already have an account? Log in</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './signup-1.css';

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!fullName.trim()) {
      alert('Please enter your full name');
      return;
    }
    
    if (!email.trim()) {
      alert('Please enter your email');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    if (!password) {
      alert('Please enter a password');
      return;
    }
    
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
    
    if (!confirmPassword) {
      alert('Please confirm your password');
      return;
    }
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    // TODO: Add actual API call to register user
    alert('Sign Up Successful! Redirecting to login...');
    
    // Navigate to login page after successful signup
    setTimeout(() => {
      navigate('/Login');
    }, 1000);
  }; 

  const handleLoginRedirect = () => {
    navigate('/Login');
  };

  return (
    <div className="signup-container">
      <div className="signup-rectangle">
        <div className="signup-left">
          <div className="signup-header">
            <p className="signup-title">NEW TECH PVT.LTD</p>
          </div>

          <div className="signup-subheading">
            <p className="signup-caption">Sri Lanka's No 1 Electronic <br /> Products.....</p>
          </div>

          <div className="signup-footer"></div>
        </div>

        <div className="signup-right">
          <div className="signup-form">
            <div className="signup-heading">
              <p className="signup-heading-text">Sign Up</p>
            </div>

            <form className="signup-r-sq" onSubmit={handleSubmit}>
              <div className="signup-input">
                <p className="signup-input-label">Full Name</p>
                <input
                  placeholder="Full Name"
                  className="signup-input-field"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="signup-input">
                <p className="signup-input-label">Email</p>
                <input
                  placeholder="Email"
                  className="signup-input-field"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="signup-input">
                <p className="signup-input-label">Password</p>
                <input
                  className="signup-password-field"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="signup-input">
                <p className="signup-input-label">Confirm Password</p>
                <input
                  className="signup-password-field"
                  placeholder="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="signup-actions">


                <button className="signup-button" type="submit">Sign Up</button>

               {/* <Link to="/Login" ></Link> */}
               
               
                <button
                  className="signup-login-button"
                  type="button"
                  onClick={handleLoginRedirect}
                >
                  Already have an account? Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
