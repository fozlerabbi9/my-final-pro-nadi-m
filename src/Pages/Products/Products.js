import React, { useEffect, useState } from 'react';
import Product from './Product';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Loading from "../../Shared/Loading.js"
const queryClient = new QueryClient()

const Products = () => {
    const [allProducts,setAllProducts] = useState('')

    const { isLoading, error, data: products,refetch } = useQuery('products', () =>
        fetch('https://cryptic-waters-16109.herokuapp.com/products',{
            method:"GET",
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    
    // const forSixProducts = products.products.slice(-6)
    const handleAllProducts=()=>{
        setAllProducts("all products")
    }
    
    return (
        <>
            <h1 className='text-center text-4xl text-primary font-bold my-10 bg-gray-200 py-6' style={{letterSpacing:'3px'}}> Products</h1>
            <div className="grid lg:grid-cols-3 gap-4">
                {
                  allProducts ? products.products.map(product => <Product key={product.id} refetch={refetch} product={product}></Product>) : products.products.slice(-6).map(product => <Product key={product.id} refetch={refetch} product={product}></Product>)
                }
            </div>
            {allProducts ? <button style={{display:"none"}} onClick={handleAllProducts} className="btn btn-wide">See All Products</button> : <button onClick={handleAllProducts} className="btn btn-primary mt-14">See All Products</button>}
        </>
    );
};

export default Products;