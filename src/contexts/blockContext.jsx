import { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { getBlock } from '../api';
import { useNetworkState } from './networkContext';
import useTransformDate from '../utils/transformDate';
import useDummy from '../utils/isDummy';

const BlockStateContext = createContext([]);
BlockStateContext.displayName = 'Block Context';
const useBlockState = () => {
  const context = useContext(BlockStateContext);

  if (!context) {
    throw new Error('BlockStateContext must be used within a BlockProvider');
  }

  return context;
};

const transformBlockData = (block) => {
  const {
    block: {
      hash,
      timestamp,
      bakerName,
      fees,
      priority,
      volume,
      blockTime,
      fitness,
      consumedGas,
      protocol,
      metaCycle,
      metaCyclePosition,
    },
  } = block;

  const newDate = new Date(timestamp * 1000);
  const date = useTransformDate(newDate);

  return {
    hash: useDummy(hash),
    timestamp: useDummy(date),
    baker: useDummy(bakerName),
    fees: useDummy(fees / 1000000),
    priority: useDummy(priority).toString(),
    volume: useDummy(volume / 1000000).toString(),
    blockTime: useDummy(blockTime).toString(),
    fitness: useDummy(fitness).toString(),
    gas: useDummy(consumedGas / 1000000).toLocaleString(),
    protocol: useDummy(protocol),
    cycle: useDummy(metaCycle).toString(),
    cyclePosition: useDummy(metaCyclePosition).toString(),
  };
};

const BlockProvider = ({ children }) => {
  const [block, setBlock] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const network = useNetworkState();

  // eslint-disable-next-line consistent-return
  const handleBlock = async (id) => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await getBlock(network, id);
      const transform = transformBlockData(response.data);
      return setBlock(transform);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const blockValue = useMemo(
    () => ({
      block,
      handleBlock,
      isLoading,
      isError,
    }),
    [block, handleBlock, isLoading, isError],
  );

  return (
    <BlockStateContext.Provider value={blockValue}>
      {children}
    </BlockStateContext.Provider>
  );
};

BlockProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useBlockState, BlockProvider };
