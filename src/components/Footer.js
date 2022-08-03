import React from 'react'
import {Form} from 'react-bootstrap'
import '../style1.css'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

function Footer() {
  return (
    <>
    <div><footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-sm-6">
                <div className="footer-info">
                    <div className="section-title">
                        <h2>Headquarter</h2>
                    </div>
                    <address>
                        <p>house number 81c fateh ancleve, near FDDI Near Zirakpur, Banur, Punjab 140601</p>
                    </address>
                    <ul className="social-icon">
                        <li><a href="#">
                            <FaFacebook style={{height:"40px", width:"40px"}}/>
                            {/* <i className="fa-brands fa-facebook-square"></i> */}
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaTwitter style={{height:"40px", width:"40px", marginTop:"10px"}}/>
                            {/* <i className="fa-brands fa-twitter-square"></i> */}
                            </a> 
                    </li>
                    <li>
                        <a href="#">
                            <FaInstagram style={{height:"40px", width:"40px", marginTop:"10px"}}/>
                            {/* <i className="fa-brands fa-instagram-square"></i> */}
                            </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-md-4 col-sm-6">
            <div className="footer-info">
                <div className="section-title">
                    <h2>Contact Info</h2>
                </div>
                <address>
                    <p>Phone: 095011 03341</p>
                    <p>mailto:contact@Company.com
                    </p>
                 </address>
                 <div className="footer_menu">
                     <h2>Quick Links</h2>
                     <ul>
                         <li><a href="">HOME</a></li>
                         <li><a href="">About US</a></li>
                             <li><a href="">Terms & Conditions</a>
                             </li>
                             <li><a href="">Contact Us</a></li>
                         </ul>
                     </div>
                 </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="footer-info newsletter-form">
                        <div className="section-title">
                            <h2>Newsletter Signup</h2>
                        </div>
                        <div className="form-group">
                            {/* <Form action="#" method="get">
                                <input type="email" className="form-control" placeholder="Enter your email" name="email" id="email" required>
                                <input type="submit" className="form-control" name="submit" id="form-submit" value="Send me">
                            </Form> */}
                            <span><sup>*</sup>Please note-we do not spam your email.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
    </>
  )
}

export default Footer