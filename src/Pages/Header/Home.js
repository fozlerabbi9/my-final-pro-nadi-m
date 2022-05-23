import React from 'react';
import Carosel from './Carosel';
import Header from '../../Shared/Header'
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;