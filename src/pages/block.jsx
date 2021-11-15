import { useEffect } from 'react';
import { useParams } from 'react-router';

import Breadcrumbs from '../components/shared/Breadcrumbs/Breadcrumbs';

import useAddUnit from '../utils/addUnit';
import { useBlockState } from '../contexts/blockContext';

import BlockInfo from '../components/shared/BlockInfo';
import BlockTitle from '../components/shared/BlockTitle';
import Baker from '../components/shared/Baker';
import DataWithCopy from '../components/shared/DataWithCopy';
import ErrorMessage from '../components/shared/ErrorMessage';

const HEADERS = [
  {
    name: 'Hash',
    key: 'hash',
    render: (block) => <DataWithCopy value={block.hash} />,
  },
  { name: 'Created at', key: 'timestamp' },
  {
    name: 'Baker',
    key: 'baker',
    render: (block) => <Baker value={block.baker} />,
  },
  {
    name: "Baker's fee",
    key: 'fees',
    render: (block) => useAddUnit(block.fees, 'ꜩ'),
  },
  { name: "Baker's priority", key: 'priority' },
  {
    name: 'Transactions volume',
    key: 'volume',
    render: (block) => useAddUnit(block.volume, 'ꜩ'),
  },
  {
    name: 'Block time',
    key: 'blockTime',
    render: (block) => useAddUnit(block.blockTime, 'sec'),
  },
  { name: 'Block fitness', key: 'fitness' },
  { name: 'Gas used', key: 'gas' },
  {
    name: 'Protocol version',
    key: 'protocol',
    render: (block) =>
      block.protocol &&
      `${block.protocol.slice(0, 8)}...${block.protocol.slice(-5)}`,
  },
  { name: 'Cycle', key: 'cycle' },
  {
    name: 'Cycle position',
    key: 'cyclePosition',
    render: (block) => useAddUnit(block.cyclePosition, 'out of 4096'),
  },
];

const Block = () => {
  const { id } = useParams();

  const { block, handleBlock, isError } = useBlockState();

  useEffect(() => handleBlock(id), [id]);

  return (
    <>
      <Breadcrumbs />
      <BlockTitle className="wrapper__title" />
      {isError ? (
        <ErrorMessage retry={() => handleBlock(id)} />
      ) : (
        <BlockInfo headers={HEADERS} block={block} />
      )}
    </>
  );
};

export default Block;
