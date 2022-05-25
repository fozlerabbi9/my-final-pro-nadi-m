import React from 'react';
import freeshipping from "../Images/freeshiping.jpg";
import support from "../Images/support.png";
import safety from "../Images/secure.png";
import offer from "../Images/offer.jpg";

const FreeShipping = () => {
    return (
        <div className='mt-10 shipping justify-center gap-y-12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1' data-aos="fade-up">
                <div className="image flex lg:justify-center gap-5">
                    <img className='shippingimg' src={freeshipping} alt="" />
                    <div style={{textAlign:"start"}}>
                        <h1 className='font-bold'>Free Shipping</h1>
                        <p className='text-gray-400'>For orders from $50</p>
                    </div>
                </div>
                <div className="image flex lg:justify-center gap-5">
                    <img className='shippingimg' src={support} alt="" />
                    <div style={{textAlign:"start"}}>
                        <h1 className='font-bold'>Support 24/7</h1>
                        <p className='text-gray-400'>Call us anytime</p>
                    </div>
                </div>
                <div className="image flex lg:justify-center gap-5">
                    <img className='shippingimg' src={safety} alt="" />
                    <div style={{textAlign:"start"}}>
                        <h1 className='font-bold' >100% Safety</h1>
                        <p className='text-gray-400'>Only secure payments</p>
                    </div>
                </div>
                <div className="image flex lg:justify-center gap-5">
                    <img className='shippingimg' src={offer} alt="" />
                    <div className='font-bold' style={{textAlign:"start"}}>
                        <h1>Hot Offers</h1>
                        <p className='text-gray-400'>Discounts up to 90%</p>
                    </div>
                </div>
            </div>
    );
};

export default FreeShipping;