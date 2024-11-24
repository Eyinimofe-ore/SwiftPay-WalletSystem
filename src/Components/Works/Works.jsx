import React from 'react'
import map from '../../Assets/Images/register-removebg-preview.png'
import Booking from '../../Assets/Images/verify-removebg-preview.png'
import card from '../../Assets/Images/pin-removebg-preview.png'
import car from '../../Assets/Images/complete-removebg-preview.png'
import './Works.css'

function Works() {
  return (
    <div>
                <div className='works'>
            <h1 >How it works</h1>
            <div className='wrapper'>
            <div class="card">
                <div class="bg">
                <div className='box'>
                    <img src={map} alt="rando" />
                    <h2>Sign-Up</h2>
                    <p>
                        Enter your Email to receive a verification token
                    </p>
                </div>
                </div>
                <div class="blob"></div>
            </div>
            <div class="card">
                <div class="bg">
                <div className='box'>
                    <img src={Booking} alt="rando" id='verify' />
                    <h2>Verify Your Details</h2>
                    <p>
                        Verify your Details and complete your sign-up
                    </p>
                </div>
                </div>
                <div class="blob"></div>
            </div>
            <div class="card">
                <div class="bg">
                <div className='box'>
                    <img src={card} alt="rando" />
                    <h2>Create a Wallet Pin</h2>
                    <p>
                        Create your wallet pin for your transactions
                    </p>
                </div>
                </div>
                <div class="blob"></div>
            </div>
            <div class="card">
                <div class="bg">
                <div className='box'>
                    <img src={car} alt="rando" />
                    <h2>Start Transacting</h2>
                    <p> 
                    Send and Receive Money and track your funds
                    </p>
                </div>
                </div>
                <div class="blob"></div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Works
