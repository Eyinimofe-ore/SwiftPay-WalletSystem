import React from 'react'
import './About.css'
import aboutPic from '../../Assets/Images/about-us-pic-removebg-preview.png'

function About() {
  return (
    <div id='about'>
        
        <div className='about-container'>
            <div className='heading'>
                <h1>About Us</h1>
                


            </div>
            <div className="about-wrapper">
                <div className="about-content">
                    <h2>Making payment as seamless as possible</h2>
                    <p>"Welcome to Swiftpay, your digital wallet for a seamless payment experience. Send, receive, and manage your money with ease and security. 
                        Our e-wallet platform is designed to simplify your financial transactions, making your life easier, one payment at a time."
                    </p>
                    <a href="" className='Abtn'>Join Us</a>
                </div>
                <div className="image">
                    <img src={aboutPic} alt="" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
