import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import TicketsPage from './pages/TicketsPage';
import TicketDetailPage from './pages/components/tickets/TicketDetails';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tickets" element={<TicketsPage />} />
      <Route path="/ticket/:ticketId" element={<TicketDetailPage />} />
    </Routes>
  </Router>
);

reportWebVitals();
