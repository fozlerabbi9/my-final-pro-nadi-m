import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const axios = require('axios').default;

const AddProducts = () => {
    const { register, handleSubmit,reset } = useForm();
   



    const onSubmit = data => {
        const {name,price,description,minimum,available} = data
        const image = data.image[0]
        var formData = new FormData();
        formData.append("image", image)

        axios.post("https://api.imgbb.com/1/upload?key=d7cb843332a0859336d56fe2ea07decf", formData)
            .then(res => {
                if (res.data.success) {
                    const image = res.data.data.display_url
                    const productsDetails = {
                        name: name,
                        price: price,
                        description: description,
                        img: image,
                        available: +available,
                        Minimumorder: 20
                    }
                    axios.post("https://cryptic-waters-16109.herokuapp.com/addproducts",productsDetails)
                    .then(res=>{
                      toast.success("Product Added Successfull")
                      reset()
                    })
                }

            })



        
    }
    return (
        <>
            <div className="hero bg-base-200" style={{height:"100vh"}}  >
                <div className="hero-content cardHead" style={{ width: "60%" }}>

                    <div className="card shadow-2xl bg-base-100" style={{ width: "100%" }} data-aos="zoom-in">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body cardBody" style={{width:"500px"}}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Products Name</span>

                                    </label>
                                    <input {...register("name")} type="text" placeholder="Product Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>

                                    </label>
                                    <input {...register("price")} type="number" placeholder="Price" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Details</span>

                                    </label>
                                    <input {...register("description")} type="text" placeholder="Details" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Qty</span>

                                    </label>
                                    <input {...register("available")} type="number" placeholder="available" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Upload Image</span>
                                    </label>
                                    <input {...register("image")} type="file" placeholder="Upload file" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary text-white bg-blue-500">Add Product</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProducts;