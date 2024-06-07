import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authStatus, setAuthStatus] = useState(false);

  const logoutUser = () => {
    setUser(null);
    setAuthStatus(false);
  };

  const verifyingToken = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {

        setAuthStatus(true); 
      } else {
        setAuthStatus(false);
      }
    } catch (error) {
      console.error('Error verifying token:', error);
      setAuthStatus(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, logoutUser, authStatus, verifyingToken }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;