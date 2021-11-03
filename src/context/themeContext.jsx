import { createContext, useContext, useState, useMemo } from 'react';
import propTypes from 'prop-types';

const ThemeStateContext = createContext();
const useThemeState = () => {
  const context = useContext(ThemeStateContext);

  if (!context) {
    throw new Error('ThemeStateContext must be used within a ThemeProvider');
  }

  return context;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const stateValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  );

  return (
    <ThemeStateContext.Provider value={stateValue}>
      <div className={`theme-${theme}`}>{children}</div>
    </ThemeStateContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export { useThemeState, ThemeProvider };
