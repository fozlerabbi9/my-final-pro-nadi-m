import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import axios from 'axios';


const Orders = ({ product, index, refetch, isLoading }) => {
    const { _id } = product
    console.log(product);
    if (isLoading) {

        return <Loading></Loading>
    }
    const deleteButton = (id) => {
        const proced = window.confirm("Are You Agree For Delete ?")
        if (proced) {
            const url = `http://localhost:4000/products/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                })
                axios.put(`http://localhost:4000/products/${id}`, {
                        headers: {
                            "authorization": `${product?.price}`
                        }
                    })
                        .then(res => {
                            console.log(res);

                        })
        }
    }
    console.log(product);
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product.productname}</td>
            <td>{product.totalquentity}</td>
            <td>${product.totalprice}</td>
            {product.payment === "paid" ? <Link to={''}><td><button disabled readOnly class="btn btn-sm btn-success">Paid</button></td></Link> : <Link to={`/dashboard/payment/${_id}`}><td><button class="btn btn-sm btn-warning">Pay</button></td></Link>}
            {product.payment === "paid"?<Link to={''}><td><button disabled readOnly onClick={() => deleteButton(_id)} class="btn btn-sm btn-warning" >Cancel</button></td></Link>:<Link to={''}><td><button onClick={() => deleteButton(_id)} class="btn btn-sm bg-red-600" >Cancel</button></td></Link>}
        </tr>

    );
};

export default Orders;