import React from 'react'
import './Footer.css'
import { FaRegEnvelope } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

function Footer() {
  return (
    <div>
         <div className='foot'>
            <footer>
                <div className='row'>
                    <div className='col'>
                        <h1><span><RiMenu3Fill className='iconic2'/>SWIFT</span>PAY</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur 
                       </p>
                    </div>
                    <div className='col'>
                        <h3>Office <div className="underline"><span></span></div></h3>
                        <p>Bucknor</p>
                        <p>Off Funshoguni</p>
                        <p>Ejigbo,Lagos State</p>
                        <p className='email-id'>Swiftpay@gmail.com</p>
                        <h4>08012345643</h4>
                    </div>
                    <div className='col' id='col2'>
                        <h3 className='link'>Links <div className="underline"><span></span></div></h3>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>services</a></li>
                            <li><a href='#'>About Us</a></li>
                            <li><a href='#'>Features</a></li>
                            <li><a href='#'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h3>Newsletter <div className="underline"><span></span></div></h3>
                        <form id='form-footer' > 
                            <FaRegEnvelope className='far' />
                            <input type="email" placeholder='Enter your Email id'required />
                            <button type='submit'><FaArrowRight className='arrow' /></button>
                        </form>
                        <div className="social-icons">
                            <FaInstagram className='icon'/>
                            < FaTwitter className='icon'/>
                            <FaFacebookF className='icon'/>
                            <FaWhatsapp className='icon'/>
                        </div>
                    </div>
                </div>
                <hr/>
                <p className='copyright'> Swiftpay @ 2024 - All Rights Reserved</p>
            </footer>

        </div>
      
    </div>
  )
}

export default Footer
