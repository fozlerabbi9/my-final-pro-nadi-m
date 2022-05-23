import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const axios = require('axios').default;

const AddProducts = () => {
    const { register, handleSubmit,reset } = useForm();



    const onSubmit = data => {
        const image = data.image[0]
        var formData = new FormData();
        formData.append("image", image)

        axios.post("https://api.imgbb.com/1/upload?key=d7cb843332a0859336d56fe2ea07decf", formData)
            .then(res => {
                if (res.data.success) {
                    const image = res.data.data.display_url
                    const reviewDetails = {
                        name: data.name,
                        comment: data.comment,
                        rating: data.rating,
                        img:image
                    }
                    axios.post("http://localhost:4000/reviews",reviewDetails)
                    .then(res=>{
                      toast.success("Added Successfull")
                      reset()
                    })
                }

            })



        
    }
    return (
        <>
            <div class="hero bg-base-200">
                <div class="hero-content" style={{ width: "40%" }}>

                    <div class="card shadow-2xl bg-base-100" style={{ width: "100%" }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Your Name</span>

                                    </label>
                                    <input {...register("name")} type="text" placeholder="Product Name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Comment</span>

                                    </label>
                                    <input {...register("comment")} type="text" placeholder="Comment" class="input input-bordered" />

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Rating</span>

                                    </label>
                                    <input {...register("rating")} type="number" placeholder="rating" class="input input-bordered" />

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Upload Your Image</span>
                                    </label>
                                    <input {...register("image")} type="file" placeholder="Upload file" class="input input-bordered" />

                                </div>
                                <div class="form-control mt-6">
                                    <button type='submit' class="btn btn-primary">Add Review</button>
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