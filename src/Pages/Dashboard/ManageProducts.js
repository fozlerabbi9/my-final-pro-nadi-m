import React from 'react';
import { QueryClient, useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ManageAllProduct from './ManageAllProduct';

const ManageProducts = () => {
    const queryClient = new QueryClient()

    const { isLoading, error, data: products, refetch } = useQuery('products', () =>
        fetch('http://localhost:4000/products').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div class="overflow-x-auto w-full">
            <h1 className='text-3xl text-secondary mt-7 font-bold'>Total Stock Products: {products.products.length}</h1>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th className='talbeName'>Description</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            products.products.map((products, index) => <ManageAllProduct key={products._id} products={products} index={index} isLoading={isLoading} refetch={refetch}></ManageAllProduct>)
                        }
                    </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;