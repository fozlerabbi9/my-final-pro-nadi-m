import React from 'react';
import Carosel from './Carosel';
import Header from '../../Shared/Header'
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import BrandName from './BrandName';
import FreeShipping from './FreeShipping';
import OurService from './OurService';

const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <FreeShipping></FreeShipping>
            <Products></Products>
            <BrandName></BrandName>
            <Reviews></Reviews>
            <OurService></OurService>
        </div>
    );
};

export default Home;