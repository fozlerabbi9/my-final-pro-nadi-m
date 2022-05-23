import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const OrderProducts = () => {
    const [price, setPrice] = useState(0)
    const [user] = useAuthState(auth)
    const [inputQuentity, setInputQuentity] = useState(0)
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams()
    const { isLoading, error, data: product, refetch } = useQuery('service', () =>
        fetch(`http://localhost:4000/payment/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {

        return <Loading></Loading>
    }

    const onSubmit = data => {
        const {name,address,phone} = data
        
        const quentity = {
            qty: product?.result?.available,
            deliverQty: inputQuentity,
        }
        const url = `http://localhost:4000/deliverproduct/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(quentity)
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    toast.error(data.error)
                    reset()
                    setPrice()
                }
                else {
                    const fulldetails = {
                        name:name,
                        email:user?.email,
                        address: address,
                        phone: phone,
                        productname: product.result.name,
                        img: product.result.img,
                        price: product.result.price,
                        totalprice: + price
                    }
                    axios.post("http://localhost:4000/orders", fulldetails)
                        .then(res => {
                            console.log(res);
                            reset()
                            setPrice((+ product.result.minimum) * (+ product.result.price))
                        })
                    }
                refetch()
            })
            

           


    }

    const priceUpdate = (event) => {
        const price = + product.result.price;
        const inputQuentity = + event.target.value;
        setPrice(price * inputQuentity)
        setInputQuentity(inputQuentity)
    }
    console.log(product);

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <div class="card bg-base-100 shadow-xl" style={{ height: '100%',width:"36rem" }}>
                    <figure class="px-10 pt-10">
                        <img src={product.result.img} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{product.name}</h2>
                        <p>{product.result.description}</p>
                        <p>Price: ${product.result.price}</p>
                        <p>Minimum Order: {product.result.minimum} Pcs</p>
                        <p>Stock: {product.result.available} Pcs</p>
                    </div>
                </div>
                <div class="hero bg-base-200">
                    <div class="hero-content" style={{width:"570px"}}>

                        <div class="card shadow-2xl bg-base-100" style={{ width: "100%" }}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="card-body">
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Your Name</span>

                                        </label>
                                        <input {...register("name")} type="text" placeholder="Your Name" class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Your Mail</span>

                                        </label>
                                        <input {...register("email")} type="text" value={user?.email} readOnly disabled class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Address</span>

                                        </label>
                                        <input {...register("address")} type="text" placeholder="Address" class="input input-bordered" />

                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Phone Number</span>

                                        </label>
                                        <input {...register("phone")} type="number" placeholder="description" class="input input-bordered" />

                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Order Quentity</span>

                                        </label>
                                        <input onChange={(event) => priceUpdate(event)} type="number" placeholder="Minimum Order 50 pcs" class="input input-bordered"/>

                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Total Price</span>

                                        </label>
                                        <input {...register("Price")} type="number" value={price} readOnly disabled class="input input-bordered" />

                                    </div>
                                    <div class="form-control mt-6">
                                        <button type='submit' class="btn btn-primary">Place Order</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderProducts;