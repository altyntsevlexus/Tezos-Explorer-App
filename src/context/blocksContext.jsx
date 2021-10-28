import { createContext, useContext, useState } from 'react';
import propTypes from 'prop-types';
import { getBlocks } from '../api';
import { useNetworkState } from './networkContext';
import useTransformDate from '../hooks/useTransformDate';

const BlocksStateContext = createContext([]);
const useBlocksState = () => {
  const context = useContext(BlocksStateContext);

  if (!context) {
    throw new Error('useBlocksState must be used within a BlocksProvider');
  }

  return context;
};

const transformBlocksData = (blocks) =>
  blocks.map((block) => {
    const {
      level,
      bakerName,
      priority,
      number_of_operations,
      volume,
      fees,
      endorsements,
    } = block;

    const newDate = new Date(block.timestamp * 1000);
    const date = useTransformDate(newDate);

    return {
      level: level.toString() || '-----',
      baker: bakerName || '-----',
      timestamp: date || '-----',
      priority: priority.toString() || '-----',
      numOfOperations: number_of_operations.toString() || '-----',
      volume: `${volume / 1000000} ꜩ` || '-----',
      fees: `${fees / 1000000} ꜩ` || '-----',
      endorsements: endorsements.toString() || '-----',
    };
  });

const BlocksProvider = ({ children }) => {
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const network = useNetworkState();

  const handleBlocks = (offset, limit) => {
    setIsError(false);
    setIsLoading(true);
    getBlocks(network, offset, limit)
      .then((response) => transformBlocksData(response.data))
      .then((res) => setBlocks(res))
      .then(() => setIsLoading(false))
      .catch(() => setIsError(true))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const data = { blocks, handleBlocks, isLoading, isError };

  return (
    <BlocksStateContext.Provider value={data}>
      {children}
    </BlocksStateContext.Provider>
  );
};

BlocksProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export { useBlocksState, BlocksProvider };
