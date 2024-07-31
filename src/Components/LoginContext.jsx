import React, { createContext, useState, useEffect } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(() => {
    
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
  
    localStorage.setItem('isLoggedIn', loggedIn);
  }, [loggedIn]);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  return (
    <LoginContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
