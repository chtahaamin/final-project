import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {ValidEmail, ValidPassword,ValidName}  from '../Components/RegeEx'
import './Signup.css'; 

const SignUp = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (name.current.value && email.current.value && password.current.value) {
      if (!ValidName.test(name.current.value)) {
        alert('Please enter a valid name (5-30 alphabetic characters)');
        return;
      }
      
      if (!ValidEmail.test(email.current.value)) {
        alert('Please enter a valid email address');
        return;
      }
  
      if (!ValidPassword.test(password.current.value)) {
        alert('Password must be at least 6 characters long and contain both letters and numbers');
        return;
      }
      localStorage.setItem('name', name.current.value);
      localStorage.setItem('email', email.current.value);
      localStorage.setItem('password', password.current.value);
      localStorage.setItem('signUp', email.current.value);
      alert("you have successfully signed up")
      navigate('/login', { replace: true });
      
    } else {
      alert('Please enter your credentials');
    }
  };

  return (
    <>
    <div className="main-signup">
    <div className="signup-container">

      <h2 className="signupHeading">Sign Up</h2>
      <form onSubmit={handleSignUp}>
      <div className="signup-form">
        <div className="signup-form-group">
          <input
            type="text"
            placeholder="Please enter your username"
            ref={name}
            className="signup-form-input"
          />
        </div>
        <div className="signup-form-group">
          <input
            type="email"
            placeholder="Please enter your email"
            ref={email}
            className="signup-form-input"
          />
        </div>
        <div className="signup-form-group">
          <input
            type="password"
            placeholder="Please enter your password"
            ref={password}
            className="signup-form-input"
          />
        </div>
        <button type="submit" className="signup-form-button">Sign Up</button>
        <Link to="/login" className="login-link">Already have an account? Login</Link>
      </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default SignUp;
