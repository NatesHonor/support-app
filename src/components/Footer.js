import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
      <div>
        <p>© 2024 NatesServices Support Site</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a> | <a href="/contact-us">Contact Us</a>
        </p>
      </div>
      <div>
        <a href="https://www.facebook.com/NatesHonor" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} style={{ margin: '0 10px' }} />
        </a>
        <a href="https://www.twitter.com/NatesHonor" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} style={{ margin: '0 10px' }} />
        </a>
        <a href="https://www.instagram.com/NatesHonor" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} style={{ margin: '0 10px' }} />
        </a>
        <a href="https://www.linkedin.com/in/NatesHonor" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} style={{ margin: '0 10px' }} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
