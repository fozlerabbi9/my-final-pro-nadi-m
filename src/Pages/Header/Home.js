import React from 'react';
import Carosel from './Carosel';
import Header from '../../Shared/Header'
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import BrandName from './BrandName';
import FreeShipping from './FreeShipping';

const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <Products></Products>
            <BrandName></BrandName>
            <Reviews></Reviews>
            <FreeShipping></FreeShipping>
        </div>
    );
};

export default Home;