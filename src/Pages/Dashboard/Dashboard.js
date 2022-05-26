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
        <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">

        {users?.Role === "admin" ? <h1 className='text-4xl text-primary font-bold' data-aos="fade-down">Welcome To Admin Pannel</h1> : <h1 className='text-4xl text-primary font-bold' data-aos="fade-down">Welcome To Dashboard</h1>}
        <Outlet className="w-full"></Outlet>
        

      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content" style={{width:"220px" ,borderRight:"1px solid #80808045"}} >
          {users?.Role === "admin" && <li><Link to={"/dashboard/addproduct"}>Add Product</Link></li>}
          {users?.Role === "admin" ? <li style={{display:"none"}}><Link to={"/dashboard/myorders"}>My Orders</Link></li> : <li><Link to={"/dashboard/myorders"}>My Orders</Link></li>}
          {users?.Role === "admin" ? <li style={{display:"none"}}><Link to={"/dashboard/deliverystatus"}>Delivery Status</Link></li> : <li><Link to={"/dashboard/deliverystatus"}>Delivery Status</Link></li>}
          {users?.Role === "admin" && <li><Link to={"/dashboard/totalorder"}>Manage All Orders</Link></li>}
          {users?.Role === "admin" && <li><Link to={"/dashboard/products"}>Manage Products</Link></li>}
          
          {users.Role === "admin" && <li><Link to={"/dashboard/users"}>Users</Link></li>}
          {users && <li><Link to={"/dashboard/addedit"}>My Profile</Link></li>}
        </ul>

      </div>
    </div>
    );
};

export default Dashboard;