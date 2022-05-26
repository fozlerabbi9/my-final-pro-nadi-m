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
        fetch(`https://cryptic-waters-16109.herokuapp.com/dashboard/payment/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {

        return <Loading></Loading>
    }
    console.log(product)
    return (
        <div>
            <div className="hero min-h-screen" style={{background:"whitesmoke"}} >
                <div className="hero-content" style={{ flexDirection: "column" }}>

                    <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-down">
                        <div className="card-body">
                            <h2 className="card-title text-primary">{`Product Name:  ${product.result.productname}`}</h2>
                            <p style={{textAlign:"start"}}>{`Total Quentity - ${product.result.totalquentity} pcs`}</p>
                            <p style={{textAlign:"start"}}>{`Total Price - $${product.result.totalprice}`}</p>
                        </div>
                    </div>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up">
                            <div className="card-body">
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