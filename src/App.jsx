import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { useState } from 'react';

function App() {
  // Create style objects
  const darkMode = {
    backgroundColor: 'black',
    color: 'white'
  };

  const lightMode = {
    backgroundColor: 'white',
    color: 'black'
  };

  // Use boolean state for cleaner logic
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentStyle = isDarkMode ? darkMode : lightMode;

  // Toggle function
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Button styles that change based on mode
  const buttonStyle = {
    backgroundColor: isDarkMode ? 'white' : 'black',
    color: isDarkMode ? 'black' : 'white',
    border: `2px solid ${isDarkMode ? 'white' : 'black'}`
  };

  return (
    <>
      <button 
        className="toggle-button" 
        style={buttonStyle}
        onClick={toggleMode}
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <div className="app-container" style={currentStyle}>
        <Header styleMode={currentStyle} />
        <Content styleMode={currentStyle} />
        <Footer styleMode={currentStyle} />
      </div>
    </>
  );
}

export default App;
