import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

const ThemeStateContext = createContext();
ThemeStateContext.displayName = 'Theme Context';
const useThemeState = () => {
  const context = useContext(ThemeStateContext);

  if (!context) {
    throw new Error('ThemeStateContext must be used within a ThemeProvider');
  }

  return context;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const storage = localStorage;

  const handleSetTheme = (newTheme) => {
    setTheme(newTheme);
    storage.setItem('theme', newTheme);
  };

  useEffect(() => {
    switch (storage.getItem('theme')) {
      case 'light':
        setTheme('light');
        break;
      case 'dark':
        setTheme('dark');
        break;
      default:
        setTheme('light');
        storage.setItem('theme', 'light');
    }
  }, []);

  const stateValue = useMemo(
    () => ({
      theme,
      handleSetTheme,
    }),
    [theme, handleSetTheme],
  );

  return (
    <ThemeStateContext.Provider value={stateValue}>
      <div className={`sticky-footer theme-${theme}`}>{children}</div>
    </ThemeStateContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useThemeState, ThemeProvider };
