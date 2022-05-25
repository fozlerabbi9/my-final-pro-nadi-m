import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import MakeAdmin from '../../Shared/MakeAdmin';

const Dashboard = () => {
  const[user] = useAuthState(auth)
    const [users,setUsers] = MakeAdmin(user)
    console.log(users);
    return (
        <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col ">

        <h1 className='text-4xl text-primary font-bold'>Welcome To Dashboard</h1>
        <Outlet className="w-full"></Outlet>
        

      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content" style={{width:"220px" ,borderRight:"1px solid #80808045"}}>
          {users?.Role === "admin" && <li><Link to={"/dashboard/addproduct"}>Add Product</Link></li>}
          {users?.Role === "admin" ? <li style={{display:"none"}}><Link to={"/dashboard/myorders"}>My Orders</Link></li> : <li><Link to={"/dashboard/myorders"}>My Orders</Link></li>}
          {users?.Role === "admin" ? <li style={{display:"none"}}><Link to={"/dashboard/deliverystatus"}>Delivery Status</Link></li> : <li><Link to={"/dashboard/deliverystatus"}>Delivery Status</Link></li>}
          {users?.Role === "admin" && <li><Link to={"/dashboard/totalorder"}>Manage All Orders</Link></li>}
          {users?.Role === "admin" && <li><Link to={"/dashboard/products"}>Manage Products</Link></li>}
          
          {users.Role === "admin" && <li><Link to={"/dashboard/users"}>Users</Link></li>}
        </ul>

      </div>
    </div>
    );
};

export default Dashboard;