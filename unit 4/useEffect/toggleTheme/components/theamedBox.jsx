import React, { useState, useEffect } from 'react';

// ThemedBox component
function ThemedBox({ theme, children }) {
  const styles = {
    light: {
      background: '#f5f5f5',
      color: '#222',
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '28px 20px',
      margin: '14px 0',
    },
    dark: {
      background: '#1c1c28',
      color: '#f6f6f6',
      border: '1px solid #444',
      borderRadius: '10px',
      padding: '28px 20px',
      margin: '14px 0',
    }
  };
  return <div style={styles[theme]}>{children}</div>;
}

// ThemeApp component with theme toggle and persistence
function ThemeApp() {
  // Initial theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Save theme on change
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle function
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  // App container background for clarity
  const appStyles = {
    minHeight: '100vh',
    background: theme === 'light' ? '#fff' : '#181824',
    transition: 'background 0.3s',
    padding: '32px'
  };

  return (
    <div style={appStyles}>
      <button
        onClick={toggleTheme}
        style={{
          marginBottom: '22px',
          padding: '10px 24px',
          borderRadius: '6px',
          background: theme === 'light' ? '#333' : '#f6f6f6',
          color: theme === 'light' ? '#fff' : '#222',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <ThemedBox theme={theme}>Theme Example Box #1</ThemedBox>
      <ThemedBox theme={theme}>Theme Example Box #2</ThemedBox>
      <ThemedBox theme={theme}>Theme Example Box #3</ThemedBox>
    </div>
  );
}

export default ThemeApp;
