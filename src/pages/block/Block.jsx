import { useEffect } from 'react';
import { useParams } from 'react-router';

import Title from '../../components/shared/Title';
import Breadcrumbs from '../../components/shared/Breadcrumbs';

import useCurrentLocation from '../../hooks/useCurrentLocation';
import { useBlockState } from '../../context/blockContext';

import styled from './block.module.scss';
import BlockInfo from '../../components/shared/BlockInfo';

const HEADERS = [
  { name: 'Hash', key: 'hash' },
  { name: 'Created at', key: 'timestamp' },
  { name: 'Baker', key: 'baker' },
  { name: "Baker's fee", key: 'fees' },
  { name: "Baker's priority", key: 'priority' },
  { name: 'Transactions volume', key: 'volume' },
  { name: 'Block time', key: 'blockTime' },
  { name: 'Block fitness', key: 'fitness' },
  { name: 'Gas used', key: 'gas' },
  { name: 'Protocol version', key: 'protocol' },
  { name: 'Cycle', key: 'cycle' },
  { name: 'Cycle position', key: 'cyclePosition' },
];

const Block = () => {
  const { title } = useCurrentLocation();

  const { id } = useParams();

  const { block, handleBlock } = useBlockState();

  useEffect(() => handleBlock(id), []);

  return (
    <div className={`wrapper ${styled.block}`}>
      <Breadcrumbs />
      <Title value={`< Block: ${title} >`} />
      <BlockInfo headers={HEADERS} block={block} />
    </div>
  );
};

export default Block;
