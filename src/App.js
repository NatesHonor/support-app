import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TicketSystem from './components/TicketSystem';
import ForumSystem from './components/ForumSystem';
import { ThemeProvider } from './theme';
import './styles/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Header />
        <main>
          <TicketSystem />
          <ForumSystem />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
