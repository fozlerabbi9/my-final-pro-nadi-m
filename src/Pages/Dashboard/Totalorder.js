import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import MakeAdmin from '../../Shared/MakeAdmin';

const Totalorder = ({product,index}) => {
    const [users,setUsers] = MakeAdmin()
    const { _id } = product
    console.log(product);
   
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
        }
    }

    return (
        <tr>
        <th>{index + 1}</th>
        <td>{product.productname}</td>
        <td>{product.totalquentity}</td>
        <td>${product.totalprice}</td>
        {product.payment === "paid" ? <Link to={''}><td><button  class="btn btn-sm btn-success text-white">Pending</button></td></Link>:<Link to={''}><td><button  class="btn btn-sm btn-info text-white">UnPaid</button></td></Link>}
        {users.Role === "admin" && <Link to={''}><td><button onClick={() => deleteButton(_id)} class="btn btn-sm btn-danger" >Delete</button></td></Link>}
    </tr>
    );
};

export default Totalorder;