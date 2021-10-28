import propTypes from 'prop-types';
import { createContext, useContext } from 'react';

const NetworkStateContext = createContext('');

const useNetworkState = () => {
  const context = useContext(NetworkStateContext);

  if (!context) {
    throw new Error('useNetworkState must be used within a NetworkProvider');
  }

  return context;
};

const NetworkProvider = ({ children }) => (
  <NetworkStateContext.Provider value="mainnet">
    {children}
  </NetworkStateContext.Provider>
);

NetworkProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export { useNetworkState, NetworkProvider };
