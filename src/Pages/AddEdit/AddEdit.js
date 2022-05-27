import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
const axios = require('axios').default;



const AddEdit = () => {
    const [user, loading] = useAuthState(auth)
    const [edit, setEdit] = useState("")
    const [error, setError] = useState("")
    const [updateDone, setUpdateDone] = useState("")
    const [currentUser, setCurrentUser] = useState({})
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    axios.get(`https://cryptic-waters-16109.herokuapp.com/user?email=${user?.email}`)
        .then(res => {
            setCurrentUser(res.data);
        })

    if (loading) {
        return <Loading></Loading>
    }



    const onSubmit = data => {
        const { name, email, address, phone } = data
        let image
        if (data?.image) {
            image = data?.image[0]
        }
        var formData = new FormData();
        formData.append("image", image)
        if (currentUser?.img) {
            if (image) {
                axios.post("https://api.imgbb.com/1/upload?key=d7cb843332a0859336d56fe2ea07decf", formData)
                    .then(res => {
                        if (res.data.success) {
                            const image = res.data.data.display_url
                            console.log(image)
                            const userDetails = {
                                name: name,
                                email: email,
                                address: address,
                                phone: phone,
                                img: image
                            }
                            axios.put(`https://cryptic-waters-16109.herokuapp.com/users/${user?.email}`, userDetails)
                                .then(res => {
                                    if (res) {
                                        setUpdateDone("Update Done")
                                        toast.success("Updated Profile")
                                        reset()
                                    }

                                })
                        }

                    })
            }
            else {
                const userDetails = {
                    name: name,
                    email: email,
                    address: address,
                    phone: phone,
                    img: currentUser?.img
                }
                axios.put(`https://cryptic-waters-16109.herokuapp.com/users/${user?.email}`, userDetails)
                    .then(res => {
                        if (res) {
                            setUpdateDone("Update Done")
                            toast.success("Updated Profile")
                            reset()
                        }

                    })
            }

        }
        else {
            if (!data?.image) {
                setError("Please Add Your Profile Image !!")
            }
            else {
                setError("")
                formData.append("image", image)
                axios.post("https://api.imgbb.com/1/upload?key=d7cb843332a0859336d56fe2ea07decf", formData)
                    .then(res => {
                        if (res.data.success) {
                            const image = res.data.data.display_url
                            console.log(image)
                            const userDetails = {
                                name: name,
                                email: email,
                                address: address,
                                phone: phone,
                                img: image
                            }
                            axios.put(`https://cryptic-waters-16109.herokuapp.com/users/${user?.email}`, userDetails)
                                .then(res => {
                                    if (res) {
                                        setUpdateDone("Update Done")
                                        toast.success("Updated Profile")
                                        reset()
                                    }

                                })
                        }

                    })
            }

        }


    }
    const handleProfileEdit = () => {
        setEdit("Ready for Edit")

    }

    
    return (
        <>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="avatar online">
                        <div className=" rounded-full" style={{width:"300px"}} data-aos="zoom-out">
                            <img src={user.photoURL ? user.photoURL : currentUser?.img} />
                        </div>
                    </div>

                    <div>
                        <div className='flex h-screen justify-center items-center' data-aos="zoom-in" >
                            <div className="card w-96 bg-base-100 shadow-xl orderCard" style={{ width: "764px" }}>
                                <div className="card-body">
                                    <h2 className="text-center text-2xl font-bold">Profile Setting</h2>
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div className="inputForm grid lg:grid-cols-2 gap-x-5">
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text">Your Full Name</span>
                                                </label>
                                                {!edit ? <input
                                                    type="text"
                                                    value={user.displayName ? user.displayName :currentUser?.name}
                                                    placeholder="Your Name"
                                                    disabled
                                                    readOnly
                                                    className="input input-bordered w-full max-w-xs"
                                                    {...register("name", {
                                                        required: {
                                                            value: true,
                                                            message: 'Name is Required'
                                                        }
                                                    })}
                                                /> : updateDone ? <input
                                                    type="text"
                                                    value={currentUser?.name}
                                                    placeholder="Your Name"
                                                    disabled
                                                    readOnly
                                                    className="input input-bordered w-full max-w-xs"
                                                    {...register("name", {
                                                        required: {
                                                            value: true,
                                                            message: 'Name is Required'
                                                        }
                                                    })}
                                                /> : <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    className="input input-bordered w-full max-w-xs"
                                                    {...register("name", {
                                                        required: {
                                                            value: true,
                                                            message: 'Name is Required'
                                                        }
                                                    })}
                                                />}
                                                <label className="label">
                                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                                </label>
                                            </div>

                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="Your Email"

                                                    readOnly
                                                    value={user?.email}
                                                    className="input input-bordered w-full max-w-xs"
                                                    {...register("email", {
                                                        required: {
                                                            value: true,
                                                            message: 'Email is Required'
                                                        },
                                                        pattern: {
                                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                            message: 'Provide a valid Email'
                                                        }
                                                    })}
                                                />
                                                <label className="label">
                                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                                </label>
                                            </div>
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text">Your Address</span>
                                                </label>
                                                {!edit ? <input
                                                    type="text"
                                                    placeholder="Your Address"
                                                    value={currentUser?.address}
                                                    disabled
                                                    readOnly
                                                    className="input input-bordered w-full max-w-xs"
                                                    {...register("address", {
                                                        required: {
                                                            value: true,
                                                            message: 'Address is Required'
                                                        }
                                                    })}
                                                /> : updateDone ? <input
                                                    type="text"
                                                    placeholder="Your Address"
                                                    value={currentUser?.address}
                                                    disabled
                                                    readOnly
                                                    className="input input-bordered w-full max-w-xs"
                                                    {...register("address", {
                                                        required: {
                                                            value: true,
                                                            message: 'Address is Required'
                                                        }
                                                    })}
                                                /> : <input
                                                    type="text"
                                                    placeholder="Your Address"
                                                    className="input input-bordered w-full max-w-xs"
                                                    {...register("address", {
                                                        required: {
                                                            value: true,
                                                            message: 'Address is Required'
                                                        }
                                                    })}
                                                />}
                                                <label className="label">
                                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                                </label>
                                            </div>
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text">Phone</span>
                                                </label>
                                                {!edit ? <input
                                                    type="number"
                                                    placeholder="Your Phone Number"
                                                    value={currentUser?.phone}
                                                    disabled
                                                    readOnly
                                                    className="input input-bordered w-full max-w-xs"
                                                    {...register("phone", {
                                                        required: {
                                                            value: true,
                                                            message: 'Phone Number is Required'
                                                        }
                                                    })}
                                                /> : updateDone ? <input
                                                    type="number"
                                                    placeholder="Your Phone Number"
                                                    value={currentUser?.phone}
                                                    disabled
                                                    readOnly
                                                    className="input input-bordered w-full max-w-xs"
                                                    {...register("phone", {
                                                        required: {
                                                            value: true,
                                                            message: 'Phone Number is Required'
                                                        }
                                                    })}
                                                /> : <input
                                                    type="number"
                                                    placeholder="Your Phone Number"
                                                    className="input input-bordered w-full max-w-xs"
                                                    {...register("phone", {
                                                        required: {
                                                            value: true,
                                                            message: 'Phone Number is Required'
                                                        }
                                                    })}
                                                />}
                                                <label className="label">
                                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                                </label>
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Upload Your Image</span>
                                                </label>
                                                {!edit ? <input disabled
                                                    readOnly {...register("image")} type="file" placeholder="Upload file" className="input input-bordered" /> : updateDone ? <input disabled
                                                        readOnly {...register("image")} type="file" placeholder="Upload file" className="input input-bordered" /> : <input {...register("image")} type="file" placeholder="Upload file" className="input input-bordered" />}

                                            </div>
                                            <h1 className='text-red-600 font-bold my-5'>{error}</h1>
                                        </div>
                                        <div className='my-10 flex editBtn' style={{ justifyContent: "space-between" }}>
                                            {!edit ? <input disabled readOnly className='btn w-full max-w-xs text-primary' type="submit" value="Update Profile" /> : updateDone ? <input disabled readOnly className='btn w-full max-w-xs text-primary' type="submit" value="Update Profile" /> : <input className='btn w-full max-w-xs text-primary btn-primary text-white bg-blue-500' type="submit" value="Update Profile" />}
                                            <button onClick={handleProfileEdit} className='btn btn-primary'> edit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
            </div>
        </>

    );
};


export default AddEdit;