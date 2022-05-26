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
            const url = `https://cryptic-waters-16109.herokuapp.com/products/${id}`
            fetch(url, {
                method: "DELETE",
                headers: {
                    "authorization": `bearer ${localStorage.getItem("AccessToken")}`
                }
            })
                .then(res => res.json())
                .then(data => {
                })
                axios.put(`https://cryptic-waters-16109.herokuapp.com/products/${id}`, {
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
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={product.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{product.productname}</div>
              <div className="text-sm opacity-50 talbeName">Bangladesh</div>
            </div>
          </div>
        </td>
        <td className='talbeName'>
        {product.totalquentity}
          <br/>
        </td>
        <td>Price: ${product.totalprice}</td>
        <th className='uBtn'>
        {product.payment === "paid" ? <Link to={''}><td><button disabled readOnly className="btn btn-sm btn-success">Paid</button></td></Link> : <Link to={`/dashboard/payment/${_id}`}><td><button className="btn btn-sm btn-warning">Pay</button></td></Link>}
            <span className='talbeName'>
            {product.payment === "paid"?<Link to={''}><td><button disabled readOnly onClick={() => deleteButton(_id)} className="btn btn-sm btn-warning" >Cancel</button></td></Link>:<Link to={''}><td><button onClick={() => deleteButton(_id)} className="btn btn-sm bg-red-600" >Cancel</button></td></Link>}
            </span>
        </th>
      </tr>
        </>

    );
};

export default Orders;