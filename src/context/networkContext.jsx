import propTypes from 'prop-types';
import { createContext, useContext } from 'react';

const NetworkStateContext = createContext('');

const useNetworkState = () => useContext(NetworkStateContext);

const NetworkProvider = ({ children }) => (
  <NetworkStateContext.Provider value="mainnet">
    {children}
  </NetworkStateContext.Provider>
);

NetworkProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export { useNetworkState, NetworkProvider };
