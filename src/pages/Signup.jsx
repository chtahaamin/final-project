import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css'; 

const SignUp = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem('name', name.current.value);
      localStorage.setItem('email', email.current.value);
      localStorage.setItem('password', password.current.value);
      localStorage.setItem('signUp', email.current.value);
      alert('Your account is created successfully');
      navigate('/login', { replace: true });
    } else {
      alert('Please enter your credentials');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="signup-form">
        <div className="signup-form-group">
          <input
            type="text"
            placeholder="Please enter your name"
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
        <button onClick={handleSignUp} className="signup-form-button">Sign Up</button>
        <Link to="/login" className="login-link">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
