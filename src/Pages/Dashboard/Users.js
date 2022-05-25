import React,{useState,useEffect} from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from "../../Shared/Loading"
import User from './User';
import auth from '../../firebase.init';

const Users = () => {
    const queryClient = new QueryClient()
    const [user] = useAuthState(auth)
    console.log(user);

    const { isLoading, error, data:users,refetch } = useQuery('admin', () =>
     fetch(`http://localhost:4000/users/?email=${user?.email}`,{
         method:"GET", 
         headers: {
            "authorization": `bearer ${localStorage.getItem("AccessToken")}`
        },

     })
     .then(res =>res.json())
     
     )
     refetch()
     
    
   if(isLoading){
       return <Loading></Loading>
   }
    console.log(users);
    return (
        <div class="overflow-x-auto w-full">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>User Email</th>
                        <th>Admin</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users?.result?.map((user,index)=> <User key={user._id} user={user} index={index} isLoading={isLoading} refetch={refetch}></User>)
                }
                 </tbody>
            </table>
        </div>
    );
};

export default Users;