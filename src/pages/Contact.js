import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';
import gsap from 'gsap';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Contact = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [showMarker, setShowMarker] = useState(false);
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/mkndoaoj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle the response, show success message or handle errors
      console.log(response);

      // If the submission was successful, you can redirect or show a success message
      if (response.ok) {
        alert('Form submitted successfully!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    const icons = document.querySelectorAll('.icon-wrapper');

    gsap.set(icons, { scale: 1 }); // Set initial scale

    icons.forEach((icon) => {
      const hoverOverlay = document.createElement('div');
      hoverOverlay.className = 'hover-overlay';
      icon.appendChild(hoverOverlay);

      icon.addEventListener('mouseenter', () => {
        gsap.to(hoverOverlay, { duration: 0.3, width: '100%', height: '100%', opacity: 1 });
        gsap.to(icon, { scale: 1.2, duration: 0.3 });
      });

      icon.addEventListener('mouseleave', () => {
        gsap.to(hoverOverlay, { duration: 0.3, width: 0, height: 0, opacity: 0 });
        gsap.to(icon, { scale: 1, duration: 0.3 });
      });

      icon.addEventListener('mousemove', (e) => {
        gsap.set(hoverOverlay, { width: e.offsetX, height: e.offsetY });
      });
    });
  }, []);

  const handleMapLoad = () => {
    setIsMapLoaded(true);
    setTimeout(() => {
      setShowMarker(true);
      setShowInfoWindow(true);
    }, 1); // Without this setTimeout delay the marker doesn't show up
  };

  const linkStyles = {
    color: 'blue',
    textDecoration: 'none',
  };

  return (
    <div className="contact-page">
    <div className="contact-header">
      <h1>Contact</h1>
      <div className="header-line"></div>
    </div>
    <div className="contact-container">
      <div className="contact-links">
        <a href="mailto:paulavoorheis@gmail.com" className="contact-section">
          <div className="icon-wrapper">
            <FaEnvelope className="icon" />
          </div>
          <p>Personal Email</p>
        </a>

        <a href="mailto:paula.voorheis@mail.utoronto.ca" className="contact-section">
          <div className="icon-wrapper">
            <FaEnvelope className="icon" />
          </div>
          <p>Work Email</p>
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
        <h2>Send Me a Message 🙂</h2>
        <form onSubmit={handleFormSubmit}>
            <div className="name-email-container">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
            />
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
      </div>
    </div>
    <h2 className= "find-me">Where to Find Me 📍</h2>
      <div className="google-maps-container">
      <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        center={{ lat: 43.65591, lng: -79.38924 }}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        onLoad={handleMapLoad}
        disableDefaultUI={true}
       >
        {isMapLoaded && showMarker && (
        <>
          <Marker
            position={{ lat: 43.65591, lng: -79.38924 }} 
            onClick={() => setShowInfoWindow(!showInfoWindow)}
          />
          {showInfoWindow && (
            <InfoWindow
              position={{ lat: 43.65591, lng: -79.38924 }}
              onCloseClick={() => setShowInfoWindow(false)}
            >
              <div style={{ maxWidth: '200px' }}>
                <p><strong>Sinai Health Foundation</strong> <br/> <br/>
                 1001-522 University Ave. <br/> <br/>
                  <a href="https://www.google.com/maps?ll=43.655978,-79.389878&z=18&t=m&hl=en-CA&gl=US&mapclient=apiv3&cid=15232092314054749765" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyles}
                    onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                  >
                    View on Google Maps
                  </a>
                  <br/>
                  <br/>
                  <a href="https://maps.apple.com/?ll=43.655995,-79.389346&q=Dropped%20Pin&t=m" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyles}
                    onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                  >
                    View on Apple Maps
                  </a>
                </p>
              </div>
            </InfoWindow>
          )}
        </>
      )}
    </GoogleMap>
      </LoadScript>
    </div>
  </div>
  );
}

export default Contact;