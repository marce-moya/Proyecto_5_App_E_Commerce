import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from './../../context/User/UserContext';

export default function PublicRoute({ component: Component, ...rest }) {
  const userCtx = useContext(UserContext);
  const { authStatus, verifyingToken } = userCtx;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await verifyingToken();
      } catch (error) {
        console.error('Error verifying token:', error);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [verifyingToken]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Route 
      {...rest} 
      render={(props) => (
        authStatus ? <Component {...props} /> : <Redirect to="/login" />
      )} 
    />
  );
}
