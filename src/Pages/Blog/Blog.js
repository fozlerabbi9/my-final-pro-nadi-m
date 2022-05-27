import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl text-primary my-10 font-bold'>Question And Answer</h1>
            <div className="ques1 lg:flex" style={{ justifyContent: "space-evenly" }} data-aos="zoom-in">
                <div className="card w-96 bg-base-100 shadow-xl mt-10 cardForMobile" style={{ width: "38rem" }}>
                    <div className="card-body" style={{ textAlign: "start" }}>
                        <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                        <p>Enable Gzip Compression on Web Server</p>
                        <p>Consider Server-side Rendering</p>
                        <p>Analyzing and Optimizing Your Webpack Bundle Bloat</p>
                        <p>Virtualize Long Lists</p>
                        <p>Using Web Workers for CPU Extensive Tasks</p>
                        <p>Using a CDN</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mt-10 cardForMobile" style={{ width: "38rem" }} data-aos="zoom-in">
                    <div className="card-body" style={{ textAlign: "start" }}>
                        <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                        <p>There are four main types of state you need to properly manage in your React apps:</p>
                        <p>1. Local state</p>
                        <p>2. Global state</p>
                        <p>3. Server state</p>
                        <p>4. URL state</p>
                    </div>
                </div>


            </div>
            <div className="ques1 lg:flex" style={{ justifyContent: "space-evenly" }}>
                <div className="card w-96 bg-base-100 shadow-xl mt-10 cardForMobile" style={{ width: "38rem" }} data-aos="zoom-in">
                    <div className="card-body" style={{ textAlign: "start" }} >
                        <h2 className="card-title">How does prototypical inheritance work?</h2>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mt-10 cardForMobile" style={{ width: "38rem" }} data-aos="zoom-in">
                    <div className="card-body" style={{ textAlign: "start" }}>
                        <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                        <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
                    </div>
                </div>


            </div >
            <div className="ques1 flex mt-10" style={{ justifyContent: "space-evenly" }}>
            <div className="card w-96 bg-base-100 shadow-xl mt-10 cardForMobile" style={{ width: "38rem" }} data-aos="zoom-in">
                <div className="card-body" style={{ textAlign: "start" }}>
                    <h2 className="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>
                        Like I have:
                        products name = hammer,gammer,tester
                        if I need just hammer name product, then,
                        const result = products.find(product=>product.name===
                        "hammer").
                        hammer product is result

                    </p>
                </div>
            </div>
            </div>


        </div>
    );
};

export default Blog;