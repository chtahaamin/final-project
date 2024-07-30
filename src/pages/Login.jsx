import React, {  useContext, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LoginContext } from '../Components/LoginContext';
import { EmailContext } from '../Components/EmailContetx';
import './Login.css'; 

const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const {login} =useContext(LoginContext)
  const {setEmail}= useContext(EmailContext)
    

  const handleLogin = () => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    setEmail(storedEmail)

    if (email.current.value === storedEmail && password.current.value === storedPassword) {
      alert('Login successful');
      navigate('/', { replace: true });
      login()
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <>
    <div className="login-container-main">
    <div className="login-container">
      <h2  className="loginHeading">Login</h2>
        <form onSubmit={handleLogin}>
      <div className="login-form" onSubmit={handleLogin }>
        <div className="login-form-group">
          <input
            type="email"
            placeholder="Please enter your email"
            ref={email}
            className="login-form-input"
          />
        </div>
        <div className="login-form-group">
          <input
            type="password"
            placeholder="Please enter your password"
            ref={password}
            className="login-form-input"
          />
        </div>
        <button type='submit' 
        className="login-form-button">Login</button>
        <Link to="/signup" 
        className="signup-link">Don't have an account? Sign Up</Link>
      </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default Login;
