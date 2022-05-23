import React from 'react';
import { Link } from 'react-router-dom';

const Items = () => {
    return (
        <>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/appoinment"}>Appoinment</Link></li>
            <li><Link to={"/reviews"}>Reviews</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/login"}>login</Link></li>
        </>
    );
};

export default Items;