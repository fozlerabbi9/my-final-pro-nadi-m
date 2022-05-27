import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, refetch }) => {
    const { _id } = product
    return (
        <div className='flex justify-center'>

            <div className="card orderCard perItem w-96 bg-base-100 shadow-xl" style={{ height: '100%' }} data-aos="fade-up">
                <figure className="px-10 pt-10">
                    <img src={product.img} alt="Shoes" className="rounded-xl" style={{width:"220px"}} />
                </figure>

                <div className="card-body">
                    <h2 className="card-title" style={{fontSize:"18px"}}>
                    Name: {product.name}
                       {product.available === 0 ? <div className="badge badge-secondary">Stock Out</div> : <div className="badge badge-primary">Available</div> }
                    </h2>
                    <p style={{textAlign:"start"}}> <span className='font-bold'>Details:</span> Name:{product.description}</p>
                    <p style={{textAlign:"start"}}> <span className='font-bold'>Price: $</span> Price: ${product.price}</p>
                    <p style={{textAlign:"start"}}> <span className='font-bold'>Minimum Order:</span> Minimum Order: {product.Minimumorder} Pcs</p>
                    {product.available === 0 ? <span className='text-red-600 font-bold'>Stock Out</span> : <p>Stock: {product.available} Pcs</p>}
                    <div className="card-actions mt-5">
                        <Link to={product.available === 0 ? "" : `/orderproducts/${_id}`}><button disabled={product.available === 0} className="btn btn-primary">Buy Now</button><td></td></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Product;