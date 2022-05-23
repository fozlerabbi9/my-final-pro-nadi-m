import React from 'react';

const Review = ({review}) => {
    const{name,comment,img,rating} = review
    return (
        <div className='review mx-10 animate__animated wow animate__fadeInUp'>
            <img className='image' src={img} alt="" />
            <div className="details mx-5 my-5 ">
            <h1 className='text-xl text-center mb-5'>{name}</h1>
            <p><i>Rating:</i> {rating} <i>of 5</i> </p>
            <p><small>{comment}</small></p>
            </div>
        </div>
    );
};

export default Review;