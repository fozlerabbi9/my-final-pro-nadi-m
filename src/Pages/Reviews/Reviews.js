import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { isLoading, error, data: reviews } = useQuery('reviews', () =>
        fetch('http://localhost:4000/reviews').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
        <h1 className='text-5xl my-10 text-center animate__animated wow animate__fadeInDown reviewsText'>Check What Customers Are Saying About Us</h1>
        <div className=" grid lg:grid-cols-3 gap-y-8 gap-x-1 my-20 reviews" >
           {
              (reviews.reviews && reviews.reviews.map(review => <Review review={review} key={review.id}></Review>))
           }
        </div>
        </>
    );
};

export default Reviews;