import React from 'react';
import logo from "../Images/logo.png"
const Footer = () => {
    return (
        <div className='totalFooter'>
            <footer class="footer p-10 bg-base-200 text-base-content">
                <div>

                    <img src={logo} width="30" height="30" style={{ width: "65%", marginRight: "10px" }} class="d-inline-block align-top" alt="" />
                    
                </div>
                <div>
                    <span class="footer-title">CONTACT INFO</span>
                    <a class="link link-hover">201 Basundhara, Suite 721, Dhaka</a>
                    <a class="link link-hover">Dhaka, Bangladesh</a>
                    <a class="link link-hover">nadimmahmudytd@gmail.com</a>
                    <a class="link link-hover">+8801742819935</a>
                </div>
                <div>
                    <span class="footer-title">USEFUL RESOURCE</span>
                    <div className="resource">
                    <div className="rightSide">
                    <h3>USEFUL RESOURCES</h3>
                    <div className="resource">
                        <h4> <small className='news'>NewsLeter</small></h4>
                        <h4> <small className='aboutus'>About Us</small></h4>
                        <h4> <small className='terms'>Terms</small></h4>
                    </div>
                </div>
                    </div>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <hr className='mt-5' />
            <small className='text-center copyRight'>&copy; 2022 All Right Reserved Mo Store</small>
        </div>
    );
};

export default Footer;