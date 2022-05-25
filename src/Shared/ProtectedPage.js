import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const ProtectedPage = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
  console.log(user);
  if (loading) {
    return <Loading></Loading>
  }
  if (!user) {

    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  // if (!user?.emailVerified) {
  //   return <div className='text-center mt-5' style={{fontSize:"30px"}}>Please Verify Your Mail...</div>
  // }

  return children
};

export default ProtectedPage;