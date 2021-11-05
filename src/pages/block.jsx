import { useEffect } from 'react';
import { useParams } from 'react-router';

import Breadcrumbs from '../components/shared/Breadcrumbs/Breadcrumbs';

import useCurrentLocation from '../hooks/useCurrentLocation';
import { useBlockState } from '../context/blockContext';

import BlockInfo from '../components/shared/BlockInfo';
import BlockTitle from '../components/shared/BlockTitle';
import Baker from '../components/shared/Baker';

import useAddUnit from '../hooks/useAddUnit';

const HEADERS = [
  { name: 'Hash', key: 'hash' },
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
  const { title } = useCurrentLocation();

  const { id } = useParams();

  const { block, handleBlock } = useBlockState();

  useEffect(() => handleBlock(id), []);

  return (
    <main className="wrapper">
      <Breadcrumbs />
      <BlockTitle content={title} className="wrapper__title" />
      <BlockInfo headers={HEADERS} block={block} />
    </main>
  );
};

export default Block;
