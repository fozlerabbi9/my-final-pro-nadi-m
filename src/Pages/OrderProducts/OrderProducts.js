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
    const [minimumOrder,setMinimumOrder] = useState("")
    const [validateError,setValidateError] = useState()
    const [user] = useAuthState(auth)
    const [inputQuentity, setInputQuentity] = useState(0)
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams()
    const [currentUser, setCurrentUser] = useState({})
    axios.get(`http://localhost:4000/user?email=${user?.email}`)
        .then(res => {
            setCurrentUser(res.data);
        })
    const { isLoading, error, data: product, refetch } = useQuery('service', () =>
        fetch(`http://localhost:4000/payment/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {

        return <Loading></Loading>
    }

    const onSubmit = data => {
        if( !currentUser.name || !currentUser.address || !currentUser.phone){
            return setValidateError("At First Please Update Your Profile Using My Profile Option")
        }
        if(inputQuentity<20){
            console.log(inputQuentity);
            setMinimumOrder("Minimum Order 20 pcs !!")
            return toast.error("Minimum Order 20 pcs !!")
        }
        else{
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
                        totalquentity : inputQuentity,
                        totalprice: + price
                    }
                    axios.post("http://localhost:4000/orders", fulldetails)
                        .then(res => {
                            console.log(res);
                            toast.success("Product Booking Confirmed, Please go to my order page and pay now !!")
                            reset()
                            setPrice((+ product.result.minimum) * (+ product.result.price))
                        })
                    }
                refetch()
            })
        }
            
        
    }
    

    const priceUpdate = (event) => {
        console.log( + event.target.value)
        const price = + product.result.price;
        const inputQuentity = + event.target.value;
        setPrice(price * inputQuentity)
        setInputQuentity(inputQuentity)
    }
    

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <div class="card bg-base-100 shadow-xl orderCard" style={{ height: '100%',width:"36rem" }}>
                    <figure class="px-10 pt-10" data-aos="zoom-in">
                        <img src={product?.result?.img} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{product.name}</h2>
                        <p>{product?.result?.description}</p>
                        <p>Price: ${product?.result?.price}</p>
                        <p>Minimum Order: {product?.result?.Minimumorder} Pcs</p>
                        {product?.result?.available<=0? <p className='text-red-600 font-bold'>Stock Out</p> : <p>Stock: {product?.result?.available} Pcs</p>}
                    </div>
                </div>
                <div class="hero bg-base-200" data-aos="zoom-out">
                    <div class="hero-content orderCard" style={{width:"570px"}}>
                   
                        <div class="card shadow-2xl bg-base-100" style={{ width: "100%" }}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="card-body">
                             <h1 className='text-red-600 font-bold '>{validateError}</h1>
                                
                                    <div class="form-control">
                                        <label class="label">
                                            <span  class="label-text">Your Name</span>

                                        </label>
                                        <input {...register("name")} type="text" value={currentUser?.name} disabled readOnly placeholder="Your Name" class="input input-bordered" />
                                        
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
                                        <input {...register("address")} type="text" value={currentUser?.address} disabled readOnly placeholder="Address" class="input input-bordered" />
                                        

                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Phone Number</span>

                                        </label>
                                        {<input {...register("phone")} type="number" value={currentUser?.phone} disabled readOnly placeholder="description" class="input input-bordered" />}
                                        

                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Order Quentity</span>

                                        </label>
                                        <input onChange={(event) => priceUpdate(event)} type="number" placeholder="Minimum Order 20 pcs" class="input input-bordered"/>

                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Total Price $</span>

                                        </label>
                                        <input {...register("Price")} type="number" value={price} readOnly disabled class="input input-bordered" />

                                    </div>
                                    {<div  class="form-control mt-6">
                                        <button disabled={inputQuentity<20} type='submit' class="btn btn-primary bg-blue-500" >Place Order</button>
                                    </div>}
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