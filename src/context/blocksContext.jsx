import { createContext, useContext, useState } from 'react';
import propTypes from 'prop-types';
import getBlocks from '../api';
import { useNetworkState } from './networkContext.jsx';

const BlocksStateContext = createContext([]);
const useBlocksState = () => useContext(BlocksStateContext);

const transformDate = (date) => {
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = date.getDate();
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};

const transformBlocksData = (blocks) =>
  blocks.map((block) => {
    const newDate = new Date(block.timestamp * 1000);
    const date = transformDate(newDate);

    return {
      level: block.level.toString() || '-----',
      baker: block.bakerName || '-----',
      timestamp: date || '-----',
      priority: block.priority.toString() || '-----',
      numOfOperations: block.number_of_operations.toString() || '-----',
      volume: (block.volume / 1000000).toString() || '-----',
      fees: (block.fees / 1000000).toString() || '-----',
      endorsements: block.endorsements.toString() || '-----',
    };
  });

const BlocksProvider = ({ children }) => {
  const [blocks, setBlocks] = useState([]);

  const network = useNetworkState();

  const handleBlocks = (offset, limit) => {
    getBlocks(network, offset, limit)
      .then((response) => transformBlocksData(response.data))
      .then((res) => setBlocks(res));
  };

  const data = { blocks, handleBlocks };

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
