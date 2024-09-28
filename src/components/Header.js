import React, { useContext } from 'react';
import { ThemeContext } from '../theme';

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header>
      <h1>Support Site</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </header>
  );
}

export default Header;
