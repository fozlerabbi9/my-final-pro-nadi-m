import React from 'react';
import logo1 from "../Images/logo-1.png";
import logo2 from "../Images/logo-2.png";
import logo3 from "../Images/logo-3.png";
import logo4 from "../Images/logo-4.png";
import logo5 from "../Images/logo-5.png";

const BrandName = () => {
    return (
        <div className='brand' data-aos="fade-up">
                <div className="image1">
                    <img className='brandimg' src={logo1} alt="" />
                </div>
                <div className="image2">
                    <img className='brandimg' src={logo2} alt="" />
                </div>
                <div className="image3">
                    <img className='brandimg' src={logo3} alt="" />
                </div>
                <div className="image4">
                    <img className='brandimg' src={logo4} alt="" />
                </div>
                <div className="image5">
                    <img className='brandimg' src={logo5} alt="" />
                </div>
            </div>
    );
};

export default BrandName;