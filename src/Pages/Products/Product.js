import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product,refetch }) => {
    const {_id} = product
    return (
        <div>

            <div class="card w-96 bg-base-100 shadow-xl" style={{height:'100%'}}>
                <figure class="px-10 pt-10">
                    <img src={product.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Minimum Order: {product.minimum} Pcs</p>
                    {product.available === 0 ? <span className='text-red-600 font-bold'>Stock Out</span> :<p>Stock: {product.available} Pcs</p>}
                    <div class="card-actions">   
                        <Link to={`/orderproducts/${_id}`}><button disabled={product.available === 0} class="btn btn-primary">Buy Now</button><td></td></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;