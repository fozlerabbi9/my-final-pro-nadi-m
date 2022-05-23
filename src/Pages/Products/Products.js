import React, { useEffect, useState } from 'react';
import Product from './Product';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Loading from "../../Shared/Loading.js"
const queryClient = new QueryClient()

const Products = () => {

    const { isLoading, error, data: products,refetch } = useQuery('products', () =>
        fetch('http://localhost:4000/products',{
            method:"GET",
            headers:{
                authorization:`Bearer ${localStorage.getItem("AccessToken")}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    
    return (
        <>
            <h1 className='text-center text-2xl font-bold my-10'>Products</h1>
            <div class="grid grid-cols-3 gap-4">
                {
                    products?.products?.map(product => <Product key={product.id} refetch={refetch} product={product}></Product>)
                }
            </div>
        </>
    );
};

export default Products;