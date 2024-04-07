
import React, { useState } from 'react';
import styles from './ToggleButton.module.css';

const ToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle(styles.darkMode); // Adiciona ou remove a classe 'darkMode' do body
  };

  return (
    <button className={styles.toggleButton} onClick={toggleMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ToggleButton;
