import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div id='contact'>
        <div className='contact-container'>
            <h1>Connect With Us</h1>
            <p>We would love to respond to your queries. <br/>Feel free to get in touch with us.</p>
            <div className='contact-box'>
            <div className='contact-left'>
                <h3>Send your request</h3>
                <form>
                    <div className="input-row">
                        <div className="input-group">
                            <label id='mylabel'>Name</label>
                            <input type="text" placeholder='John Amendo' />
                        </div>
                    
                    
                        <div className="input-group">
                            <label>Phone</label>
                            <input type="text" placeholder='08088888888' />
                        </div>
                    </div>
                    <div className="input-row">
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" placeholder='@Gmail.com' />
                        </div>
                
                        <div className="input-group">
                            <label>Subject</label>
                            <input type="text" placeholder='Enquiry' />
                        </div>
                    </div>
                    <label>Message</label>
                    <textarea rows={5} placeholder='Your Message' id='texta'></textarea>
                    <button type='submit' id='cbtn'>SEND</button>
                </form>

            </div>
            <div className='contact-right'>
                <h3>Reach us</h3>
                <table>
                    <tr>
                        <td>Email</td>
                        <td>ContactUs@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>080000000000</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>1, Wale Ariwola street,<br/>
                        off funshoguni,bucknor,
                        Lagos.</td>
                    </tr>
                </table>
                
            </div>
           </div>
        </div>
        
      
    </div>
  )
}

export default Contact
