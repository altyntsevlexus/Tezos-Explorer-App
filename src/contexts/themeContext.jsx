import { createContext, useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react/cjs/react.development';

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

  useEffect(
    () => storage.getItem('theme') && setTheme(storage.getItem('theme')),
    [],
  );

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
