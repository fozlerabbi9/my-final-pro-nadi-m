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
    const [updateDone, setUpdateDone] = useState("")
    const [currentUser, setCurrentUser] = useState({})
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // const { isLoading, error, data: currentUser ,refetch } = useQuery('user', () =>
    //     fetch(`http://localhost:4000/user?email=${user?.email}`)
    //     .then(res =>res.json())
    //     )
    //     refetch()
    axios.get(`http://localhost:4000/user?email=${user?.email}`)
        .then(res => {
            setCurrentUser(res.data);
        })

    if (loading) {
        return <Loading></Loading>
    }



    const onSubmit = data => {
        console.log(data);
        const { name, email, address, phone } = data
        const image = data.image[0]
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
                            axios.put(`http://localhost:4000/users/${user?.email}`, userDetails)
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
                axios.put(`http://localhost:4000/users/${user?.email}`, userDetails)
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
                        axios.put(`http://localhost:4000/users/${user?.email}`, userDetails)
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
    const handleProfileEdit = () => {
        setEdit("Ready for Edit")

    }


    return (
        <>


            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={currentUser?.img} />
                    <div>
                        <div className='flex h-screen justify-center items-center'>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Your Full Name</span>
                                            </label>
                                            {!edit ? <input
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
                                                disabled
                                                readOnly
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("address", {
                                                    required: {
                                                        value: true,
                                                        message: 'Name is Required'
                                                    }
                                                })}
                                            /> : updateDone ? <input
                                                type="text"
                                                placeholder="Your Address"
                                                disabled
                                                readOnly
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("address", {
                                                    required: {
                                                        value: true,
                                                        message: 'Name is Required'
                                                    }
                                                })}
                                            /> : <input
                                                type="text"
                                                placeholder="Your Address"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("address", {
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
                                                <span className="label-text">Phone</span>
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="Your Name"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("phone", {
                                                    required: {
                                                        value: true,
                                                        message: 'Name is Required'
                                                    }
                                                })}
                                            />
                                            <label className="label">
                                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                            </label>
                                        </div>
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text">Upload Your Image</span>
                                            </label>
                                            <input {...register("image")} type="file" placeholder="Upload file" class="input input-bordered" />
                                            {/* <label className="label">
                                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                            </label> */}

                                        </div>
                                        {!edit ? <input disabled readOnly className='btn w-full max-w-xs text-primary' type="submit" value="Update Profile" /> : updateDone ? <input disabled readOnly className='btn w-full max-w-xs text-primary' type="submit" value="Update Profile" /> : <input className='btn w-full max-w-xs text-primary' type="submit" value="Update Profile" />}
                                    </form>
                                    <button onClick={handleProfileEdit} className='btn btn-primary'> edit</button>
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