import { createContext, useContext, useState, useMemo } from 'react';
import propTypes from 'prop-types';
import { getBlock } from '../api';
import { useNetworkState } from './networkContext';
import useTransformDate from '../hooks/useTransformDate';

const BlockStateContext = createContext([]);
const useBlockState = () => {
  const context = useContext(BlockStateContext);

  if (!context) {
    throw new Error('BlockStateContext must be used within a BlockProvider');
  }

  return context;
};

const transformBlockData = (block) => {
  const {
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
  } = block.block;

  const newDate = new Date(timestamp * 1000);
  const date = useTransformDate(newDate);

  return {
    hash: hash || '-----',
    timestamp: date || '-----',
    baker: bakerName || '-----',
    fees: `${fees / 1000000} ꜩ` || '-----',
    priority: priority.toString() || '-----',
    volume: `${volume / 1000000} ꜩ` || '-----',
    blockTime: `${blockTime} sec` || '-----',
    fitness: fitness || '-----',
    gas: (consumedGas / 1000000).toLocaleString() || '-----',
    protocol: `${protocol.slice(0, 8)} ... ${protocol.slice(-5)}`,
    cycle: metaCycle.toString() || '-----',
    cyclePosition: `${metaCyclePosition} out of 4096`,
  };
};

const BlockProvider = ({ children }) => {
  const [block, setBlock] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const network = useNetworkState();

  const handleBlock = (id) => {
    setIsLoading(true);
    getBlock(network, id)
      .then((response) => transformBlockData(response.data))
      .then((res) => setBlock(res))
      .then(() => setIsLoading(false));
  };

  const blockValue = useMemo(
    () => ({
      block,
      handleBlock,
      isLoading,
    }),
    [block, handleBlock, isLoading],
  );

  return (
    <BlockStateContext.Provider value={blockValue}>
      {children}
    </BlockStateContext.Provider>
  );
};

BlockProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export { useBlockState, BlockProvider };
