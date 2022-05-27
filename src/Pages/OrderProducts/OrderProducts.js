import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState({})
    axios.get(`https://cryptic-waters-16109.herokuapp.com/user?email=${user?.email}`)
        .then(res => {
            setCurrentUser(res.data);
        })
    const { isLoading, error, data: product, refetch } = useQuery('service', () =>
        fetch(`https://cryptic-waters-16109.herokuapp.com/payment/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {

        return <Loading></Loading>
    }


    const redirect=()=>{
        return navigate("/dashboard/myorders")
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
        const url = `https://cryptic-waters-16109.herokuapp.com/deliverproduct/${id}`
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
                    axios.post("https://cryptic-waters-16109.herokuapp.com/orders", fulldetails)
                        .then(res => {
                            console.log(res);
                            toast.success("Product Booking Confirmed, Please pay now !!")
                            reset()
                            redirect()
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
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card bg-base-100 shadow-xl orderCard" style={{ height: '100%',width:"36rem" }}>
                    <figure className="px-10 pt-10" data-aos="zoom-in">
                        <img src={product?.result?.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{product.name}</h2>
                        <p>{product?.result?.description}</p>
                        <p>Price: ${product?.result?.price}</p>
                        <p>Minimum Order: {product?.result?.Minimumorder} Pcs</p>
                        {product?.result?.available<=0? <p className='text-red-600 font-bold'>Stock Out</p> : <p>Stock: {product?.result?.available} Pcs</p>}
                    </div>
                </div>
                <div className="hero bg-base-200" data-aos="zoom-out">
                    <div className="hero-content orderCard" style={{width:"570px"}}>
                   
                        <div className="card shadow-2xl bg-base-100" style={{ width: "100%" }}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="card-body">
                             <h1 className='text-red-600 font-bold '>{validateError}</h1>
                                
                                    <div className="form-control">
                                        <label className="label">
                                            <span  className="label-text">Your Name</span>

                                        </label>
                                        <input {...register("name")} type="text" value={currentUser?.name} disabled readOnly placeholder="Your Name" className="input input-bordered" />
                                        
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Mail</span>

                                        </label>
                                        <input {...register("email")} type="text" value={user?.email} readOnly disabled className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>

                                        </label>
                                        <input {...register("address")} type="text" value={currentUser?.address} disabled readOnly placeholder="Address" className="input input-bordered" />
                                        

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone Number</span>

                                        </label>
                                        {<input {...register("phone")} type="number" value={currentUser?.phone} disabled readOnly placeholder="description" className="input input-bordered" />}
                                        

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Order Quentity</span>

                                        </label>
                                        <input onChange={(event) => priceUpdate(event)} type="number" placeholder="Minimum Order 20 pcs" className="input input-bordered"/>

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Total Price $</span>

                                        </label>
                                        <input {...register("Price")} type="number" value={price} readOnly disabled className="input input-bordered" />

                                    </div>
                                    {<div  className="form-control mt-6">
                                        <button disabled={inputQuentity<20} type='submit' className="btn btn-primary bg-blue-500" >Place Order</button>
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