import React from 'react';
import { useParams } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Loading from "../../Shared/Loading"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51IiFx5LZmY1QWSSK4WkfW2HJNBc2mkp6ySRdluIHi6yi0oHEOuH9d4qPXzR1LPc0TWJIFe9ZuvS5dDt599pXdr2H00JcvQi46i');
const Payment = () => {
    const { id } = useParams()
    const { isLoading, error, data: product } = useQuery('service', () =>
        fetch(`http://localhost:4000/dashboard/payment/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {

        return <Loading></Loading>
    }
    console.log(product)
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content" style={{ flexDirection: "column" }}>

                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">{`Your service ${product.result.productname}`}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm product={product}></CheckoutForm>
                                </Elements>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;