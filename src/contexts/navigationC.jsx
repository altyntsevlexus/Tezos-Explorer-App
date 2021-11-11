import { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const NavigationStateContext = createContext([]);
NavigationStateContext.displayName = 'Blocks Context';
const useNavigationState = () => {
  const context = useContext(NavigationStateContext);

  if (!context) {
    throw new Error('useBlocksState must be used within a BlocksProvider');
  }

  return context;
};

const NavigationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationValue = useMemo(
    () => ({
      isOpen,
      setIsOpen,
    }),
    [isOpen, setIsOpen],
  );

  return (
    <NavigationStateContext.Provider value={navigationValue}>
      {children}
    </NavigationStateContext.Provider>
  );
};

NavigationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useNavigationState, NavigationProvider };
