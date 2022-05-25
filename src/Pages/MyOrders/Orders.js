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
                method: "DELETE",
                headers: {
                    "authorization": `bearer ${localStorage.getItem("AccessToken")}`
                }
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
    return (
        <>
        <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={product.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">{product.productname}</div>
              <div class="text-sm opacity-50 talbeName">Bangladesh</div>
            </div>
          </div>
        </td>
        <td className='talbeName'>
        {product.totalquentity}
          <br/>
        </td>
        <td>Price: ${product.totalprice}</td>
        <th className='uBtn'>
        {product.payment === "paid" ? <Link to={''}><td><button disabled readOnly class="btn btn-sm btn-success">Paid</button></td></Link> : <Link to={`/dashboard/payment/${_id}`}><td><button class="btn btn-sm btn-warning">Pay</button></td></Link>}
            <span className='talbeName'>
            {product.payment === "paid"?<Link to={''}><td><button disabled readOnly onClick={() => deleteButton(_id)} class="btn btn-sm btn-warning" >Cancel</button></td></Link>:<Link to={''}><td><button onClick={() => deleteButton(_id)} class="btn btn-sm bg-red-600" >Cancel</button></td></Link>}
            </span>
        </th>
      </tr>
        </>

    );
};

export default Orders;