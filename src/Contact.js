// Contact.js
import React from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-links">
        <a href="mailto:paulavoorheis@gmail.com" className="contact-section">
          <div className="icon-wrapper">
            <FaEnvelope className="icon" />
          </div>
          <p>paulavoorheis@gmail.com</p>
        </a>

        <a href="https://www.linkedin.com/in/paula-voorheis-phd-14415b11a/" target="_blank" rel="noopener noreferrer" className="contact-section">
          <div className="icon-wrapper">
            <FaLinkedin className="icon" />
          </div>
          <p>LinkedIn</p>
        </a>

        <a href="https://twitter.com/paula_voorheis/" target="_blank" rel="noopener noreferrer" className="contact-section">
          <div className="icon-wrapper">
            <FaTwitter className="icon" />
          </div>
          <p>Twitter</p>
        </a>

        <a href="https://scholar.google.ca/citations?hl=en&user=X5tw-kEAAAAJ&view_op=list_works&gmla=AJ1KiT1Wnnb5ARgiGLnOWFW1hoyDwPLSMEx-70qeAXjjVL0l4KyrzsxuqFp1r-MxtbkASbS-a6tcQ5DBCHJEz4Jw" target="_blank" rel="noopener noreferrer" className="contact-section">
          <div className="icon-wrapper">
            <i className="ai ai-google-scholar icon" />
          </div>
          <p>Google Scholar</p>
        </a>
      </div>

      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <div className="name-email-container">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
