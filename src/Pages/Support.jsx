import React, { useState } from 'react';
import './support.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineSend } from 'react-icons/ai';
import Layout from '../Layout/Layout';

function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Layout>
      <div className="support-page">
        <div className="support-header">
          <h2>Contact Us</h2>
          <p>We're here to help. Reach out to us with any questions or concerns.</p>
        </div>

        <div className="support-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p><FaPhoneAlt /> +234 066 444 88</p>
            <p><FaEnvelope /> SwiftpaySupport@gmail.com.com</p>
            <p><FaMapMarkerAlt /> 1, Wale Ariwo-Ola ,Off funshoguni,Bucknor.</p>
          </div>

          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Send Message <AiOutlineSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Support;
