import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import AddProducts from '../AddProducts/AddProducts';
import Orders from './Orders';


const Myorders = () => {
    const [user, loading] = useAuthState(auth);
    const email = user?.email
console.log(user);
    const { isLoading, error, data: products,refetch } = useQuery('service', () =>
        fetch(`http://localhost:4000/myorders/?email=${email}`,
        {
            method: "GET",
            headers: {
                "authorization": `bearer ${localStorage.getItem("AccessToken")}`
            }
        }
        ).then(res =>
            res.json()
        )
        )
        refetch()
        
    if (isLoading && loading) {

        return <Loading></Loading>
    }
   
    
    return (
        <div>
            <h1>appointment infor:{products?.result?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {products?.result?.length === 0 ? <h1 className='text-4xl text-center font-bold mb-32 mt-20'>Your Haven't Order Any Product</h1> : <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Total Qty</th>
                            <th>Total Price</th>
                            <th style={{width:"230px"}}>Payment</th>
                        </tr>
                    </thead>}
                    <tbody>

                        {
                           !products?.result?.map ? <Loading></Loading> : products?.result?.map((product,index)=><Orders key={product._id} refetch={refetch} isLoading={isLoading} product={product} index={index} ></Orders>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorders;