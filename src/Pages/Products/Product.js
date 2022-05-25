import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, refetch }) => {
    const { _id } = product
    return (
        <div className='flex justify-center'>

            <div class="card perItem w-96 bg-base-100 shadow-xl" style={{ height: '100%' }}>
                <figure class="px-10 pt-10">
                    <img src={product.img} alt="Shoes" class="rounded-xl" style={{width:"220px"}} />
                </figure>

                <div class="card-body">
                    <h2 class="card-title">
                    Name: {product.name}
                       {product.available === 0 ? <div class="badge badge-secondary">Stock Out</div> : <div class="badge badge-primary">Available</div> }
                    </h2>
                    <p style={{textAlign:"start"}}> <span className='font-bold'>Name:</span> Name:{product.description}</p>
                    <p style={{textAlign:"start"}}> <span className='font-bold'>Price: $</span> Price: ${product.price}</p>
                    <p style={{textAlign:"start"}}> <span className='font-bold'>Minimum Order:</span> Minimum Order: {product.Minimumorder} Pcs</p>
                    {product.available === 0 ? <span className='text-red-600 font-bold'>Stock Out</span> : <p>Stock: {product.available} Pcs</p>}
                    <div class="card-actions mt-5">
                        <Link to={product.available === 0 ? "" : `/orderproducts/${_id}`}><button disabled={product.available === 0} class="btn btn-primary">Buy Now</button><td></td></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Product;