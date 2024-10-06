import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './pages/styles/App.css';
import './pages/TicketsPage.js';

function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = Cookies.get('username');
    if (user) {
      setUsername(user);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove('username', { domain: '.natemarcellus.com' });
    Cookies.remove('token', { domain: '.natemarcellus.com' });
    window.location.reload();
  };

  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="tickets">Tickets</a></li>
        </ul>
        {username ? (
          <>
            <span className="welcome-message">Welcome, {username}</span>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <a href="https://www.natemarcellus.com/login" className="login-button">Login</a>
        )}
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
            <p>Information coming soon...</p>
          </div>
          <div className="content-box">
            <h2>Billing</h2>
            <p>Information coming soon...</p>
          </div>
          <div className="content-box">
            <h2>Technical Support</h2>
            <p>Information coming soon...</p>
          </div>
          <div className="content-box">
            <h2>Account Management</h2>
            <p>Information coming soon...</p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>Follow us on social media:</p>
        <div className="social-icons">
          <a href="https://facebook.com/nmarcellus" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://x.com/nateshonor" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/nateshonor" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <p>© 2024 Nates Services. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
