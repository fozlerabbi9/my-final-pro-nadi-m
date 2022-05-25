import React, { useEffect, useState } from 'react';
import Product from './Product';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Loading from "../../Shared/Loading.js"
const queryClient = new QueryClient()

const Products = () => {
    const [allProducts,setAllProducts] = useState('')

    const { isLoading, error, data: products,refetch } = useQuery('products', () =>
        fetch('http://localhost:4000/products').then(res =>
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
            <h1 className='text-center text-2xl font-bold my-10'>Products</h1>
            <div class="grid lg:grid-cols-3 gap-4">
                {
                  allProducts ? products.products.map(product => <Product key={product.id} refetch={refetch} product={product}></Product>) : products.products.slice(-6).map(product => <Product key={product.id} refetch={refetch} product={product}></Product>)
                }
            </div>
            {allProducts ? <button style={{display:"none"}} onClick={handleAllProducts} class="btn btn-wide">See All Products</button> : <button onClick={handleAllProducts} class="btn btn-wide mt-14">See All Products</button>}
        </>
    );
};

export default Products;