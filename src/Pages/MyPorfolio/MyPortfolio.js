import React from 'react';
import aboutme from "../Images/aboutme.jpg"
const MyPortfolio = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={aboutme} data-aos="zoom-in"/>
                <div data-aos="zoom-out">
                    <h1 className="text-5xl font-bold">About Me</h1>
                    <p style={{textAlign:"start"}}  className="px-6 mt-6 mb-2"><span className='font-bold'>Name:</span> Nadim Mahmud</p>
                    <p style={{textAlign:"start"}} className="px-6 mt-6 mb-2"><span className='font-bold'>Email:</span> nadimmahmudytd@gmail.com</p>
                    <p style={{textAlign:"start"}} className="px-6 mt-6 mb-2"><span className='font-bold'>Education:</span> B.Sc. in Electrical and Electronic Engineering (EEE) Completed</p>
                    <p style={{textAlign:"start"}} className="px-6 mt-6 mb-2 text-2xl font-bold">Skills: </p>
                    <li className='ml-8' style={{textAlign:"start"}} >HTML</li>
                    <li className='ml-8' style={{textAlign:"start"}} >CSS</li>
                    <li className='ml-8' style={{textAlign:"start"}} >Java Script</li>
                    <li className='ml-8' style={{textAlign:"start"}} >React</li>
                    <li className='ml-8' style={{textAlign:"start"}} >Express</li>
                    <li className='ml-8' style={{textAlign:"start"}} >Firebase</li>
                    <li className='ml-8' style={{textAlign:"start"}} >MongoDB</li>
                    <li className='ml-8' style={{textAlign:"start"}} >Node Js</li>
                    <li className='ml-8' style={{textAlign:"start"}} >Heroku</li>
                    <li className='ml-8' style={{textAlign:"start"}} >Bootstrap</li>
                    <li className='ml-8' style={{textAlign:"start"}} >Tailwind CSS</li>
                    <p style={{textAlign:"start"}} className="px-6 mt-6 mb-2 text-2xl font-bold">My Projects Link: </p>
                    <li className='ml-8' style={{textAlign:"start"}}>
                    <a target="_blank" href="https://walton-werehouse.web.app">Walton WareHouse</a>
                    </li>
                    <li className='ml-8' style={{textAlign:"start"}}>
                    <a target="_blank" href="https://mo-store-819d7.web.app">Mo-Store</a>
                    </li>
                    
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;