import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Home from './pages/Home';
import ErrorPage from './Components/ErrorComponent';
import { LoginProvider } from './Components/LoginContext';
import { EmailProvider } from './Components/EmailContetx';

const App = () => {
  return (
    <LoginProvider>
      <EmailProvider>
        <Router>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </EmailProvider>
    </LoginProvider>
  );
};

export default App;
