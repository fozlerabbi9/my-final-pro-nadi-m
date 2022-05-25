import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MakeAdmin from '../../Shared/MakeAdmin';

const Totalorder = ({ product, index }) => {
    const { _id } = product

    const deleteButton = (id) => {
        const proced = window.confirm("Are You Agree For Delete ?")
        if (proced) {
            const url = `http://localhost:4000/products/${id}`
            fetch(url, {
                method: "DELETE",
                headers: {
                    "authorization": `bearer ${localStorage.getItem("AccessToken")}`
                }
            })
                .then(res => res.json())
                .then(data => {
                })
        }
    }
    const shippingBtn = (id) => {
        const proced = window.confirm("Are You Agree For Shipping Order ?")
        if (proced){
            axios.put(`http://localhost:4000/order?id=${id}`)
            .then(res => {
                
                if(res.status===200){
                }
            })
        }
        
    }
    console.log(product.shipping);
    return (
        <tr>
            <th className='tableNumberr'>{index + 1}</th>
            <td className='talbeName'>{product.productname}</td>
            <td className='tableQty'>{product.totalquentity}</td>
            <td className='talbePrice'>${product.totalprice}</td>
            {product.payment === "paid" ? <Link to={''}><td><button onClick={() => shippingBtn(_id)} disabled={product?.shipping==="confirm"} class="btn btn-sm btn-success text-white">{product?.shipping==="confirm" ? "Shipped":"Pending"}</button></td></Link> : <Link to={''}><td><button class="btn btn-sm btn-info text-white">UnPaid</button></td></Link>}
            <Link to={''}><td><button disabled={product?.shipping==="confirm"} onClick={() => deleteButton(_id)} class="btn btn-sm btn-danger" >Delete</button></td></Link>

        </tr>
    );
};

export default Totalorder;