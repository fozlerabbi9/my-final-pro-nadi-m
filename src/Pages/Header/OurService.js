import React from 'react';
import trying from "../Images/tryicon.png"

const OurService = () => {
    return (
        <div>
            <section className="services-bg py-16 my-5 text-gray-500">
                <div>
                    <div >
                        <div className='grid grid-cols-2 gap-20' data-aos="fade-up">
                            <div className="col">
                                <h4 style={{textAlign:"start", marginLeft:"80px"}} className="text-2xl font-bold serviceMb text-black">SERVICE & LINKS</h4>
                                <hr />
                                <div className='grid lg:grid-cols-3 serviceText' style={{textAlign:"start", marginLeft:"80px"}}>
                                    <div>
                                        <img style={{display:"inline-block", backgroundColor:"gray"}} width="12px" src={trying} alt="" /> <span >Attendee</span>
                                        <br />
                                        <br />
                                        <img style={{display:"inline-block" ,backgroundColor:"gray"}}width="12px" src={trying} alt="" /> <span >Import Product</span>
                                        <br />
                                        <br />
                                        <img style={{display:"inline-block",backgroundColor:"gray"}}width="12px" src={trying} alt="" /> <span >Exhibitor</span>
                                        <br />
                                        <br />
                                        <img style={{display:"inline-block",backgroundColor:"gray"}}width="12px" src={trying} alt="" /> <span >About Us</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <img style={{display:"inline-block",backgroundColor:"gray"}}width="12px" src={trying} alt="" /> <span >Secure</span>
                                        <br />
                                        <br />
                                        <img style={{display:"inline-block",backgroundColor:"gray"}}width="12px" src={trying} alt="" /> <span >Fast Delivery</span>
                                        <br />
                                        <br />
                                        <img style={{display:"inline-block",backgroundColor:"gray"}}width="12px" src={trying} alt="" /> <span >Order Services</span>
                                        <br />
                                        <br />
                                        <img style={{display:"inline-block",backgroundColor:"gray"}}width="12px" src={trying} alt="" /> <span >FAQs</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <img style={{display:"inline-block",backgroundColor:"gray"}}width="12px" src={trying} alt="" /> <span >Event Calendar</span>
                                        <br />
                                        <br />
                                        <img style={{display:"inline-block",backgroundColor:"gray"}}width="12px" src={trying} alt="" /> <span >Floor Plans</span>
                                        <br />
                                        <br />
                                        <img style={{display:"inline-block",backgroundColor:"gray"}}width="12px" src={trying} alt="" /> <span >Marketing Toolbox</span>
                                        <br />
                                        <br />
                                        <img style={{display:"inline-block",backgroundColor:"gray"}}width="12px" src={trying} alt="" /> <span >Newsroom</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <h4 style={{textAlign:"start", marginLeft:"80px"}} className="text-2xl font-bold serviceText2 text-black">GET IN TOUCH</h4>
                                <hr />

                                <div className='grid lg:grid-cols-2 serviceText2' style={{textAlign:"start", marginLeft:"80px"}}>
                                    <div className="col-lg-6">
                                        <p className='text-2xl text-primary font-bold'>Mo - Store</p>
                                        <p>P.O. Box 691509</p>
                                        <img style={{display:"inline-block",backgroundColor:"gray"}}width="12px" src={trying} alt="" /> <span >Contact US</span>
                                    </div>
                                    <div className="col-lg-6">
                                        <span>phone :</span>  <span>01742819935</span>
                                        <br />
                                        <br />
                                        <span>Toll Free :</span>  <span>(800) 345-9845

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurService;