import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading';


const Orders = ({product,index,refetch,isLoading}) => {
    const{_id} = product
    console.log(product);
    if(isLoading){
        
        return <Loading></Loading>
    }
   
    
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{product.productname}</td>
        <td>{product.totalprice}</td>
    {product.payment === "paid" ? <Link to={''}><td><button  class="btn btn-sm btn-success">Paid</button></td></Link> :<Link to={`/dashboard/payment/${_id}`}><td><button class="btn btn-sm btn-warning">Pay</button></td></Link>}
        
    </tr>
    );
};

export default Orders;