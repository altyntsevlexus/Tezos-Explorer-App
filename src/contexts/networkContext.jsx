import PropTypes from 'prop-types';

import { createContext, useContext } from 'react';

const NetworkStateContext = createContext('');
NetworkStateContext.displayName = 'Network Context';

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
  children: PropTypes.node.isRequired,
};

export { useNetworkState, NetworkProvider };
