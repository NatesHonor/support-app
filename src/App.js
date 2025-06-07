import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './pages/styles/App.css';
import './pages/TicketsPage.js';

function App() {
  const [username, setUsername] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searchIndex, setSearchIndex] = useState([]);

  useEffect(() => {
    const user = Cookies.get('username');
    if (user) {
      setUsername(user);
    }
  }, []);

  useEffect(() => {
    fetch('/docs/searchIndex.json')
      .then(res => res.json())
      .then(data => setSearchIndex(data));
  }, []);

useEffect(() => {
  if (searchQuery.trim() === '') {
    setSuggestions([]);
    return;
  }

  const query = searchQuery.toLowerCase();

  const scoredSuggestions = searchIndex
    .map(entry => {
      let bestMatch = '';
      let highestScore = 0;

      for (const sentence of entry.sentences) {
        const sentenceLower = sentence.toLowerCase();

        if (sentenceLower.includes(query)) {
          const wordsInQuery = query.split(/\s+/);
          const matchScore = wordsInQuery.reduce((score, word) => {
            return score + (sentenceLower.includes(word) ? 1 : 0);
          }, 0);

          if (matchScore > highestScore) {
            highestScore = matchScore;
            bestMatch = sentence;
          }
        }
      }

      return highestScore > 0
        ? {
            title: entry.title,
            url: entry.url,
            match: bestMatch,
            score: highestScore
          }
        : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);

  setSuggestions(scoredSuggestions);
  }, [searchQuery, searchIndex]);

  const highlight = (text, query) => {
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, i) => 
    part.toLowerCase() === query.toLowerCase()
      ? <mark key={i}>{part}</mark>
      : part
    );
  };

  const handleLogout = () => {
    Cookies.remove('username', { domain: '.natemarcellus.com' });
    Cookies.remove('token', { domain: '.natemarcellus.com' });
    window.location.reload();
  };

  const openApplicationsDoc = () => {
    window.location.href = '/docs/applications.html';
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
          <a href="https://www.natemarcellus.com/login?redirect=support.natemarcellus.com" className="login-button">Login</a>
        )}
      </nav>
      <header className="App-header">
        <h1>Nates Services Support</h1>
        <p>We're here to help</p>
        <div className="search-container">
  <input
    type="text"
    placeholder="Search..."
    className="search-bar"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  {suggestions.length > 0 && (
  <ul className="suggestions-list">
  {suggestions.map((s, i) => (
    <li key={i} onClick={() => window.location.href = s.url}>
      <strong>{s.title.replace('.html', '')}</strong><br />
      <span>{highlight(s.match, searchQuery)}</span>
    </li>
  ))}
</ul>

  )}
</div>

      </header>
      <main>
        <div className="content">
          <div className="content-box" onClick={openApplicationsDoc} style={{ cursor: 'pointer' }}>
            <h2>Applications</h2>
            <p>Missionchief Bot</p>
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
        <p>© 2025 Nates Services. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
