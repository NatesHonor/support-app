import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#tickets">Tickets</a></li>
        </ul>
        <a href="https://www.natemarcellus.com/login" className="login-button">Login</a>
      </nav>
      <header className="App-header">
        <h1>Nates Services Support</h1>
        <p>We're here to help</p>
        <input type="text" placeholder="Search..." className="search-bar" />
      </header>
      <main>
        <div className="content">
          <div className="content-box">
            <h2>Applications</h2>
            <p>Information about applications...</p>
          </div>
          <div className="content-box">
            <h2>Billing</h2>
            <p>Information about billing...</p>
          </div>
          <div className="content-box">
            <h2>Technical Support</h2>
            <p>Information about technical support...</p>
          </div>
          <div className="content-box">
            <h2>Account Management</h2>
            <p>Information about account management...</p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>Follow us on social media:</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://x.com/nateshonor" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/nateshonor" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <p>© 2024 Nates Services Support. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
