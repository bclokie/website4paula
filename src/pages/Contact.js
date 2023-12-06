// Contact.js
import React, {useEffect} from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import gsap from 'gsap';

const Contact = () => {
  useEffect(() => {
    // Dynamically insert the Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
    document.head.appendChild(link);

    // Dynamically insert the Leaflet script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup to remove the Leaflet CSS when the component is unmounted
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    // Initialize the map only if the map container is present
    const mapContainer = document.getElementById('map');
    if (mapContainer && !mapContainer._leaflet_id) {
      const map = L.map(mapContainer).setView([43.660070, -79.395769], 16); // Coordinates for 600 University Avenue, Toronto

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);

      // Add a marker for the specified location
      L.marker([43.660070, -79.395769]).addTo(map)
        .bindPopup('Sinai Health, Toronto')
        .openPopup();
    }
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
          <p>paulavoorheis@gmail.com</p>
        </a>

        <a href="mailto:paula.voorheis@mail.utoronto.ca" className="contact-section">
          <div className="icon-wrapper">
            <FaEnvelope className="icon" />
          </div>
          <p>paula.voorheis@mail.utoronto.ca</p>
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
        <h2>Send Me an E-Mail!</h2>
        <form>
          <div className="name-email-container">
            <input type="text" id="name" name="name" placeholder="Your Name" required />
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>

          <input type="text" id="subject" name="subject" placeholder="Subject" required />
          <textarea id="message" name="message" rows="4" placeholder="Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    <div id="map" className="leaflet-map"></div>
  </div>
  );
};

export default Contact;
