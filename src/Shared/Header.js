import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from "../firebase.init";
import logo from "../Pages/Images/logo.png"
import MakeAdmin from './MakeAdmin';
const Navbar = () => {

    const [user] = useAuthState(auth);
    const [users] = MakeAdmin(user)
    const [currentUser, setCurrentUser] = useState({})
    const profile = (user?.email)?.slice(0, 1).toUpperCase()
    axios.get(`http://localhost:4000/user?email=${user?.email}`)
        .then(res => {
            setCurrentUser(res.data);
        })

    function userProfile() {
        if (!user) {
            return <div className='profile' style={{ display: "none" }}>
                <h3 className='profileNam '>{profile}</h3>
            </div>
        }
        if (!user?.displayName) {
            return <div className='profile' title={user?.email}>
                <h3 className='profileName text-white font-bold'>{profile}</h3>
            </div>
        }
        if(currentUser?.img){
            return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "38px", cursor: "pointer" }} title={user?.displayName}>
                <img style={{ borderRadius: "50%" }} src={currentUser?.img} alt="" />
            </div>
        }
        if (user?.photoURL) {
            return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "38px", cursor: "pointer" }} title={user?.displayName}>
                <img style={{ borderRadius: "50%" }} src={user?.photoURL} alt="" />
            </div>
        }

    }
    const logout = () => {
        signOut(auth);
        localStorage.removeItem("AccessToken")
    };
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/porfolio">My Portfolio</Link></li>
        {user && <li><Link to="/dashboard">Dashboard</Link></li>}
        {users.Role==="admin" ? <li style={{display:"none"}}><Link to="/myorders">My Orders</Link></li> : !user ?  <li style={{display:"none"}}><Link to="/myorders">My Orders</Link></li> : <li><Link to="/myorders">My Orders</Link></li> }
        {users.Role==="admin" ? <li style={{display:"none"}}><Link to="/addreview">Add A Review</Link></li> : !user ? <li style={{display:"none"}}><Link to="/addreview">Add A Review</Link></li> : <li><Link to="/addreview">Add A Review</Link></li>}
        {user && <li><Link to="/addedit">My Profile</Link></li>}
        <li className="nav-item">
            {user ? <Link onClick={logout} to={"/login"}>Sign Out</Link> : <Link to={"/login"}>Login</Link>}
        </li>
        <li className="nav-item">
            {user ? <Link style={{ display: "none" }} to={"/signup"}>Sign Up</Link> : <Link style={{ display: "block" }} to={"/signup"}>Sign Up</Link>}
        </li>
        {userProfile()}

    </>
    return (
        <div className="navbar bg-base-100" style={{position:"sticky",top:'0', zIndex:"3"}}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to={'/'}><a className="btn btn-ghost normal-case text-xl">Mo Store</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label  tabIndex="1" for="my-drawer-2" className=" drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;