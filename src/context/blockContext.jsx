import { createContext, useContext, useState } from 'react';
import propTypes from 'prop-types';
import { getBlock } from '../api';
import { useNetworkState } from './networkContext';

const BlockStateContext = createContext([]);
const useBlockState = () => useContext(BlockStateContext);

const transformDate = (date) => {
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = date.getDate();
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
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
  const date = transformDate(newDate);

  return {
    hash: hash || '-----',
    timestamp: date || '-----',
    baker: bakerName || '-----',
    fees: (fees / 1000000).toString() || '-----',
    priority: priority.toString() || '-----',
    volume: (volume / 1000000).toString() || '-----',
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

  const data = { block, handleBlock, isLoading };

  return (
    <BlockStateContext.Provider value={data}>
      {children}
    </BlockStateContext.Provider>
  );
};

BlockProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export { useBlockState, BlockProvider };
