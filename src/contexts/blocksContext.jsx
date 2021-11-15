import { createContext, useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { getBlocks, getHead } from '../api';
import { useNetworkState } from './networkContext';
import useTransformDate from '../utils/transformDate';
import useDummy from '../utils/isDummy';

const BlocksStateContext = createContext([]);
BlocksStateContext.displayName = 'Blocks Context';
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
      level: useDummy(level),
      baker: useDummy(bakerName),
      timestamp: useDummy(date),
      priority: useDummy(priority),
      numOfOperations: useDummy(number_of_operations),
      volume: useDummy(volume / 1000000),
      fees: useDummy(fees / 1000000),
      endorsements: useDummy(endorsements),
    };
  });

const BlocksProvider = ({ children }) => {
  const [blocks, setBlocks] = useState([]);
  const [total, setTotal] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const network = useNetworkState();

  const handleBlocks = async (offset, limit) => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await getBlocks(network, offset, limit);
      const transform = transformBlocksData(response.data);
      const head = await getHead();
      setTotal(head.data.level);
      setBlocks(transform);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const blocksValue = useMemo(
    () => ({
      blocks,
      handleBlocks,
      isLoading,
      isError,
      total,
    }),
    [blocks, handleBlocks, isLoading, isError, total],
  );

  return (
    <BlocksStateContext.Provider value={blocksValue}>
      {children}
    </BlocksStateContext.Provider>
  );
};

BlocksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useBlocksState, BlocksProvider };
