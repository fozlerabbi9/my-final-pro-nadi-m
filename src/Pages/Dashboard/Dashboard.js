import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import MakeAdmin from '../../Shared/MakeAdmin';

const Dashboard = () => {
    const [users,setUsers] = MakeAdmin()
    return (
        <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col ">

        <h1 className='text-2xl text-primary font-bold'>Welcome To Dashboard</h1>
        <Outlet className="w-full"></Outlet>
        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li><Link to={"/dashboard"}>Appointment info</Link></li>
          <li><Link to={"/dashboard/reviews"}>Reviews</Link></li>
          
          {users.Role === "admin" && <li><Link to={"/dashboard/users"}>Users</Link></li>}
        </ul>

      </div>
    </div>
    );
};

export default Dashboard;