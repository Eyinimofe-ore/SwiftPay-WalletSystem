import React from 'react'
import './Features.css'
import sheild from '../../Assets/Images/shield-icon-removebg-preview.png'
import fast from '../../Assets/Images/fast-icon-removebg-preview.png'
import payment from '../../Assets/Images/payment-icon-removebg-preview.png'

function Features() {
  return (
    <div className='feature-body'>
       <h1 className='feature-title'>Why choose us</h1>
        <div className='features-container'>
            <div className="feature-card">
                <div className="imgBox">
                    <img src={sheild} alt="" />
                </div>
                <div className="feature-content">
                    <h2>Secure Transactions</h2>
                    <p>Robust encryption, two-factor authentication, and secure servers to protect user data.</p>
                </div>
            </div>
            <div className="feature-card">
                <div className="imgBox">
                    <img src={fast} alt="" />
                </div>
                <div className="feature-content">
                    <h2>Send Money In Seconds</h2>
                    <p>Instantly transfer funds to friends, family or merchants with judt a few taps.</p>
                </div>
            </div>
            <div className="feature-card">
                <div className="imgBox">
                    <img src={payment} alt="" />
                </div>
                <div className="feature-content">
                    <h2>Easy Fund Management</h2>
                    <p>Simple fund loading, withdrawal, and transfer processes.</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Features
