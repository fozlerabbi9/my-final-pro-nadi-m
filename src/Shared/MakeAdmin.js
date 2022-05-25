import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../src/firebase.init';
import Loading from './Loading';

const MakeAdmin = (user) => {
    const [users,setUsers] = useState([])
    // const [user] = useAuthState(auth)
    const [userLoading,setUserLoading] = useState(true)
    if(userLoading){
         <Loading></Loading>
    }
    useEffect(()=>{
        fetch(`http://localhost:4000/user/?email=${user?.email}`,{
            method:"GET",
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setUsers(data)
            setUserLoading(false)
        })
    },[user])
    console.log(user?.email);
    return [users,setUsers,userLoading]
};

export default MakeAdmin;