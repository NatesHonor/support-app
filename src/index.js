import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import TicketsPage from './pages/TicketsPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tickets" element={<TicketsPage />} />
    </Routes>
  </Router>
);

reportWebVitals();
