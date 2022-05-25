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
                        available: available,
                        Minimumorder: 20
                    }
                    axios.post("http://localhost:4000/addproducts",productsDetails)
                    .then(res=>{
                      toast.success("Product Added Successfull")
                      reset()
                    })
                }

            })



        
    }
    return (
        <>
            <div class="hero bg-base-200" style={{height:"100vh"}}>
                <div class="hero-content cardHead" style={{ width: "60%" }}>

                    <div class="card shadow-2xl bg-base-100" style={{ width: "100%" }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="card-body cardBody" style={{width:"500px"}}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Products Name</span>

                                    </label>
                                    <input {...register("name")} type="text" placeholder="Product Name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Price</span>

                                    </label>
                                    <input {...register("price")} type="number" placeholder="Price" class="input input-bordered" />

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Product Details</span>

                                    </label>
                                    <input {...register("description")} type="text" placeholder="Details" class="input input-bordered" />

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Available Qty</span>

                                    </label>
                                    <input {...register("available")} type="number" placeholder="available" class="input input-bordered" />

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Upload Image</span>
                                    </label>
                                    <input {...register("image")} type="file" placeholder="Upload file" class="input input-bordered" />

                                </div>
                                <div class="form-control mt-6">
                                    <button type='submit' class="btn btn-primary text-white bg-blue-500">Add Product</button>
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