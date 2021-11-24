import PropTypes from 'prop-types';

import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const NetworkStateContext = createContext('');
NetworkStateContext.displayName = 'Network Context';

const useNetworkState = () => {
  const context = useContext(NetworkStateContext);

  if (!context) {
    throw new Error('useNetworkState must be used within a NetworkProvider');
  }

  return context;
};

const NetworkProvider = ({ children }) => {
  const [network, setNetwork] = useState('mainnet');

  const storage = sessionStorage;

  const handleSetNetwork = (newNetwork) => {
    setNetwork(newNetwork);
    storage.setItem('network', newNetwork);
  };

  useEffect(() => {
    switch (storage.getItem('network')) {
      case 'mainnet':
        setNetwork('mainnet');
        break;
      case 'another':
        setNetwork('another');
        break;
      default:
        setNetwork('mainnet');
        storage.setItem('network', 'mainnet');
    }
  }, []);

  const stateValue = useMemo(
    () => ({
      network,
      handleSetNetwork,
    }),
    [network, handleSetNetwork],
  );

  return (
    <NetworkStateContext.Provider value={stateValue}>
      {children}
    </NetworkStateContext.Provider>
  );
};

NetworkProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useNetworkState, NetworkProvider };
