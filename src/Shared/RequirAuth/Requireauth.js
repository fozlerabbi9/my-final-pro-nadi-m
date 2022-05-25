import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import MakeAdmin from '../MakeAdmin';

const Requireauth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [users,setUsers,userLoading] = MakeAdmin(user)
  let location = useLocation();
  console.log(user);
  if (loading || userLoading) {
    return <Loading></Loading>
  }
  if (!user || !users.Role==="admin" || !users.Role) {

    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  // if (!user?.emailVerified) {
  //   return <div className='text-center mt-5' style={{fontSize:"30px"}}>Please Verify Your Mail...</div>
  // }

  return children
};

export default Requireauth;