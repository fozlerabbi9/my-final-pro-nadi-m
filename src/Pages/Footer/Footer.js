import React from 'react';
import logo from "../Images/logo.png"
const Footer = () => {
    return (
        <div className='totalFooter'>
            <div className='footer container'>
                <div className="leftSide">
                    <div className="footerTitle d-flex mb-3">
                    <img src={logo} width="30" height="30" style={{width:"15%", marginRight:"10px"}} class="d-inline-block align-top" alt="" />
                    <h3>Walton House</h3>
                    </div>
                    <small>Walton is a Bangladeshi conglomerate based in Gazipur, Bangladesh. It comprises numerous subsidiaries and affiliated businesses, most of them united under the Walton brand.</small>
                    <div className="icon mt-4">
                        <div className="icons">
                        <a target={"_blank"} href='https://www.facebook.com/nadimmahmudbd7/'> 
                         <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a target={"_blank"} href='https://www.linkedin.com/in/nadim-mahmud-49127b164/'> 
                        <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                        <a target={"_blank"} href='https://www.linkedin.com/in/nadim-mahmud-49127b164/'> 
                        <ion-icon name="logo-google"></ion-icon>
                        </a>
                        <a target={"_blank"} href='https://www.linkedin.com/in/nadim-mahmud-49127b164/'> 
                        <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                            
                        </div>
                    </div>
                </div>
                <div className="middleSide">
                    <h4>CONTACT INFO</h4>
                    <ul>
                        <li>201 Basundhara, Suite 721, Dhaka</li>
                        <li>Dhaka, Bangladesh</li>
                        <li>nadimmahmudytd@gmail.com</li>
                        <li>+8801742819935</li>
                    </ul>
                </div>
                <div className="rightSide">
                    <h3>USEFUL RESOURCES</h3>
                    <div className="resource">
                        <h4> <small className='news'>NewsLeter</small></h4>
                        <h4> <small className='aboutus'>About Us</small></h4>
                        <h4> <small className='terms'>Terms</small></h4>
                    </div>
                </div>
            </div>
            <hr className='mt-5' />
            <small className='text-center copyRight'>&copy; 2022 All Right Reserved Walton House</small>
        </div>
    );
};

export default Footer;