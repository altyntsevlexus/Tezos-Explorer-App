import { useEffect } from 'react';
import { useParams } from 'react-router';

import Title from '../../components/shared/Title';
import Breadcrumbs from '../../components/shared/Breadcrumbs';

import useCurrentLocation from '../../hooks/useCurrentLocation';
import { useBlockState } from '../../context/blockContext';

const Block = () => {
  const { title, breadcrumbs } = useCurrentLocation();

  const { id } = useParams();

  // eslint-disable-next-line no-unused-vars
  const { block, handleBlock } = useBlockState();

  useEffect(() => handleBlock(id), []);

  return (
    <>
      <Title value={`< Block: ${title} >`} />
      <Breadcrumbs value={breadcrumbs} />
    </>
  );
};

export default Block;
